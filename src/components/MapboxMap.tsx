"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

type MapboxMapProps = {
  latitude: number;
  longitude: number;
  zoom?: number;
  className?: string;
  markerLabel?: string;
};

export default function MapboxMap({
  latitude,
  longitude,
  zoom = 14,
  className,
  markerLabel = "Let's Get Moving — Dubai",
}: MapboxMapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      // If token is missing, do not attempt to initialize the map.
      return;
    }

    mapboxgl.accessToken = token;

    if (mapRef.current || !mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [longitude, latitude],
      zoom,
    });

    map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), "top-right");

    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .setPopup(new mapboxgl.Popup({ offset: 24 }).setText(markerLabel))
      .addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [latitude, longitude, zoom, markerLabel]);

  return (
    <div className={className}>
      {/* If no token, show a friendly placeholder */}
      {!process.env.NEXT_PUBLIC_MAPBOX_TOKEN ? (
        <div className="w-full h-full flex items-center justify-center text-sm text-muted-foreground border rounded-lg">
          Map unavailable. Set NEXT_PUBLIC_MAPBOX_TOKEN to enable the map.
        </div>
      ) : (
        <div ref={mapContainerRef} className="w-full h-full rounded-lg overflow-hidden" />
      )}
    </div>
  );
}


