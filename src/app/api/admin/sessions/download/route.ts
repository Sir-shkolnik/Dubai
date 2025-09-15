import { NextRequest, NextResponse } from "next/server";
import { userDataStorage } from "@/lib/userDataStorage";
import fs from "fs";
import path from "path";
import { createReadStream } from "fs";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date") || new Date().toISOString().split('T')[0];

    const sessions = await userDataStorage.getSessionsByDate(date);
    const dataDir = path.join(process.cwd(), 'data', 'user-sessions');
    
    // Create a simple text file with all sessions for the date
    let allSessionsContent = `USER SESSIONS DATA - ${date}\n`;
    allSessionsContent += '='.repeat(80) + '\n\n';
    
    for (const sessionFile of sessions) {
      try {
        const filePath = path.join(dataDir, sessionFile);
        const content = fs.readFileSync(filePath, 'utf-8');
        allSessionsContent += content + '\n\n';
      } catch (error) {
        console.error(`Error reading session file ${sessionFile}:`, error);
      }
    }

    return new NextResponse(allSessionsContent, {
      headers: {
        'Content-Type': 'text/plain',
        'Content-Disposition': `attachment; filename="user-sessions-${date}.txt"`
      }
    });
  } catch (error) {
    console.error("Error creating download file:", error);
    return NextResponse.json(
      { error: "Failed to create download file" },
      { status: 500 }
    );
  }
}
