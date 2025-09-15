import { NextRequest, NextResponse } from "next/server";
import { userDataStorage, UserSession, PageView } from "@/lib/userDataStorage";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      sessionId, 
      url, 
      title, 
      timeSpent, 
      scrollDepth,
      deviceInfo,
      location 
    } = body;

    const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";
    const referrer = request.headers.get("referer") || undefined;

    const pageView: PageView = {
      url,
      title,
      timestamp: new Date().toISOString(),
      timeSpent,
      scrollDepth
    };

    // Try to update existing session or create new one
    const existingSession: Partial<UserSession> = {
      sessionId,
      ip,
      userAgent,
      referrer,
      pages: [pageView],
      formSubmissions: [],
      interactions: [],
      deviceInfo: deviceInfo || {
        type: 'desktop',
        browser: 'unknown',
        os: 'unknown'
      },
      location
    };

    await userDataStorage.updateSession(sessionId, existingSession);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Page view tracking error:", error);
    return NextResponse.json(
      { error: "Failed to track page view" },
      { status: 500 }
    );
  }
}
