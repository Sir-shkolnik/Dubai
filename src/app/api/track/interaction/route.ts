import { NextRequest, NextResponse } from "next/server";
import { userDataStorage, UserSession, UserInteraction } from "@/lib/userDataStorage";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      sessionId, 
      type, 
      element, 
      data 
    } = body;

    const interaction: UserInteraction = {
      type,
      element,
      timestamp: new Date().toISOString(),
      data
    };

    // Update existing session with new interaction
    const updates: Partial<UserSession> = {
      sessionId,
      interactions: [interaction]
    };

    await userDataStorage.updateSession(sessionId, updates);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Interaction tracking error:", error);
    return NextResponse.json(
      { error: "Failed to track interaction" },
      { status: 500 }
    );
  }
}
