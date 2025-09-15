"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface UserTrackerProps {
  children: React.ReactNode;
}

export default function UserTracker({ children }: UserTrackerProps) {
  const [sessionId, setSessionId] = useState<string>("");
  const [startTime, setStartTime] = useState<number>(0);
  const [scrollDepth, setScrollDepth] = useState<number>(0);
  const pathname = usePathname();

  // Generate or retrieve session ID
  useEffect(() => {
    let storedSessionId = localStorage.getItem("userSessionId");
    if (!storedSessionId) {
      storedSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("userSessionId", storedSessionId);
    }
    setSessionId(storedSessionId);
  }, []);

  // Track page views
  useEffect(() => {
    if (!sessionId) return;

    setStartTime(Date.now());
    
    const trackPageView = async () => {
      try {
        await fetch("/api/track/page-view", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId,
            url: window.location.href,
            title: document.title,
            deviceInfo: {
              type: getDeviceType(),
              browser: getBrowser(),
              os: getOS()
            }
          }),
        });
      } catch (error) {
        console.error("Failed to track page view:", error);
      }
    };

    trackPageView();

    // Track time spent on page when leaving
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackPageView(); // Send final page view with time spent
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [pathname, sessionId]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const depth = Math.round((scrollTop / scrollHeight) * 100);
      setScrollDepth(Math.max(scrollDepth, depth));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDepth]);

  // Track interactions
  const trackInteraction = async (type: string, element: string, data?: any) => {
    if (!sessionId) return;

    try {
      await fetch("/api/track/interaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId,
          type,
          element,
          data
        }),
      });
    } catch (error) {
      console.error("Failed to track interaction:", error);
    }
  };

  // Add click tracking to all interactive elements
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const element = target.tagName.toLowerCase();
      const className = target.className || "";
      const id = target.id || "";
      
      trackInteraction("click", `${element}${id ? `#${id}` : ""}${className ? `.${className.split(" ")[0]}` : ""}`);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [sessionId]);

  // Add form tracking
  useEffect(() => {
    const handleFormStart = (event: Event) => {
      const form = event.target as HTMLFormElement;
      trackInteraction("form_start", `form#${form.id || "contact"}`);
    };

    const handleFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      trackInteraction("form_submit", `form#${form.id || "contact"}`);
    };

    document.addEventListener("focusin", (e) => {
      if ((e.target as HTMLElement).tagName === "INPUT" || (e.target as HTMLElement).tagName === "TEXTAREA") {
        handleFormStart(e);
      }
    });

    document.addEventListener("submit", handleFormSubmit);
    
    return () => {
      document.removeEventListener("submit", handleFormSubmit);
    };
  }, [sessionId]);

  return <>{children}</>;
}

// Helper functions
function getDeviceType(): "mobile" | "tablet" | "desktop" {
  const width = window.innerWidth;
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

function getBrowser(): string {
  const userAgent = navigator.userAgent;
  if (userAgent.includes("Chrome")) return "Chrome";
  if (userAgent.includes("Firefox")) return "Firefox";
  if (userAgent.includes("Safari")) return "Safari";
  if (userAgent.includes("Edge")) return "Edge";
  return "Unknown";
}

function getOS(): string {
  const userAgent = navigator.userAgent;
  if (userAgent.includes("Windows")) return "Windows";
  if (userAgent.includes("Mac")) return "macOS";
  if (userAgent.includes("Linux")) return "Linux";
  if (userAgent.includes("Android")) return "Android";
  if (userAgent.includes("iOS")) return "iOS";
  return "Unknown";
}
