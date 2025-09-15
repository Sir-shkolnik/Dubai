import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: { sessionId: string } }
) {
  try {
    const { sessionId } = params;
    const filePath = path.join(process.cwd(), 'data', 'user-sessions', `${sessionId}.txt`);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "Session not found" },
        { status: 404 }
      );
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/plain',
        'Content-Disposition': `attachment; filename="${sessionId}.txt"`
      }
    });
  } catch (error) {
    console.error("Error fetching session data:", error);
    return NextResponse.json(
      { error: "Failed to fetch session data" },
      { status: 500 }
    );
  }
}
