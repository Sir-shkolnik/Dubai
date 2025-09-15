import { NextRequest, NextResponse } from "next/server";
import { userDataStorage } from "@/lib/userDataStorage";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date") || new Date().toISOString().split('T')[0];

    const sessions = await userDataStorage.getSessionsByDate(date);
    
    // Parse session files to get summaries
    const sessionSummaries = [];
    for (const sessionFile of sessions) {
      try {
        const filePath = path.join(process.cwd(), 'data', 'user-sessions', sessionFile);
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // Extract basic info from the file content
        const sessionId = sessionFile.replace('.txt', '').split('_').slice(1).join('_');
        const timestampMatch = content.match(/Timestamp: (.+)/);
        const ipMatch = content.match(/IP Address: (.+)/);
        const userAgentMatch = content.match(/User Agent: (.+)/);
        const deviceTypeMatch = content.match(/Device Type: (.+)/);
        const browserMatch = content.match(/Browser: (.+)/);
        const osMatch = content.match(/Operating System: (.+)/);
        
        // Count pages, forms, and interactions
        const pagesCount = (content.match(/PAGE VIEWS/g) || []).length;
        const formSubmissionsCount = (content.match(/FORM SUBMISSIONS/g) || []).length;
        const interactionsCount = (content.match(/USER INTERACTIONS/g) || []).length;

        sessionSummaries.push({
          sessionId,
          timestamp: timestampMatch ? timestampMatch[1] : 'Unknown',
          ip: ipMatch ? ipMatch[1] : 'Unknown',
          userAgent: userAgentMatch ? userAgentMatch[1] : 'Unknown',
          pagesCount,
          formSubmissionsCount,
          interactionsCount,
          deviceType: deviceTypeMatch ? deviceTypeMatch[1] : 'Unknown',
          browser: browserMatch ? browserMatch[1] : 'Unknown',
          os: osMatch ? osMatch[1] : 'Unknown'
        });
      } catch (error) {
        console.error(`Error parsing session file ${sessionFile}:`, error);
      }
    }

    return NextResponse.json({ sessions: sessionSummaries });
  } catch (error) {
    console.error("Error fetching sessions:", error);
    return NextResponse.json(
      { error: "Failed to fetch sessions" },
      { status: 500 }
    );
  }
}
