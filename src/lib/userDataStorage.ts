import fs from 'fs';
import path from 'path';

export interface UserSession {
  sessionId: string;
  timestamp: string;
  ip: string;
  userAgent: string;
  referrer?: string;
  pages: PageView[];
  formSubmissions: FormSubmission[];
  interactions: UserInteraction[];
  deviceInfo: {
    type: 'mobile' | 'tablet' | 'desktop';
    browser: string;
    os: string;
  };
  location?: {
    country?: string;
    city?: string;
    region?: string;
  };
}

export interface PageView {
  url: string;
  title: string;
  timestamp: string;
  timeSpent?: number;
  scrollDepth?: number;
}

export interface FormSubmission {
  formType: 'contact' | 'quote' | 'newsletter';
  data: Record<string, any>;
  timestamp: string;
  success: boolean;
}

export interface UserInteraction {
  type: 'click' | 'scroll' | 'hover' | 'form_start' | 'form_abandon';
  element: string;
  timestamp: string;
  data?: Record<string, any>;
}

class UserDataStorage {
  private dataDir: string;

  constructor() {
    // Create data directory if it doesn't exist
    this.dataDir = path.join(process.cwd(), 'data', 'user-sessions');
    this.ensureDataDirectory();
  }

  private ensureDataDirectory() {
    if (!fs.existsSync(this.dataDir)) {
      fs.mkdirSync(this.dataDir, { recursive: true });
    }
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getFileName(sessionId: string): string {
    const date = new Date().toISOString().split('T')[0];
    return path.join(this.dataDir, `${date}_${sessionId}.txt`);
  }

  private formatSessionData(session: UserSession): string {
    const separator = '='.repeat(80);
    const timestamp = new Date(session.timestamp).toLocaleString();
    
    return `
${separator}
USER SESSION DATA
${separator}
Session ID: ${session.sessionId}
Timestamp: ${timestamp}
IP Address: ${session.ip}
User Agent: ${session.userAgent}
Referrer: ${session.referrer || 'Direct visit'}

DEVICE INFORMATION
${separator}
Device Type: ${session.deviceInfo.type}
Browser: ${session.deviceInfo.browser}
Operating System: ${session.deviceInfo.os}

LOCATION DATA
${separator}
Country: ${session.location?.country || 'Unknown'}
City: ${session.location?.city || 'Unknown'}
Region: ${session.location?.region || 'Unknown'}

PAGE VIEWS
${separator}
${session.pages.map((page, index) => `
${index + 1}. ${page.title}
   URL: ${page.url}
   Time: ${new Date(page.timestamp).toLocaleString()}
   Time Spent: ${page.timeSpent ? `${page.timeSpent}s` : 'N/A'}
   Scroll Depth: ${page.scrollDepth ? `${page.scrollDepth}%` : 'N/A'}
`).join('')}

FORM SUBMISSIONS
${separator}
${session.formSubmissions.map((form, index) => `
${index + 1}. ${form.formType.toUpperCase()} Form
   Submitted: ${new Date(form.timestamp).toLocaleString()}
   Success: ${form.success ? 'Yes' : 'No'}
   Data:
${Object.entries(form.data).map(([key, value]) => `     ${key}: ${value}`).join('\n')}
`).join('')}

USER INTERACTIONS
${separator}
${session.interactions.map((interaction, index) => `
${index + 1}. ${interaction.type.toUpperCase()}
   Element: ${interaction.element}
   Time: ${new Date(interaction.timestamp).toLocaleString()}
   Data: ${interaction.data ? JSON.stringify(interaction.data, null, 2) : 'None'}
`).join('')}

${separator}
END OF SESSION DATA
${separator}
`;
  }

  async saveSession(session: UserSession): Promise<void> {
    try {
      const fileName = this.getFileName(session.sessionId);
      const sessionData = this.formatSessionData(session);
      
      // Append to daily file
      fs.appendFileSync(fileName, sessionData);
      
      // Also save individual session file
      const individualFile = path.join(this.dataDir, `${session.sessionId}.txt`);
      fs.writeFileSync(individualFile, sessionData);
      
      console.log(`User session saved: ${session.sessionId}`);
    } catch (error) {
      console.error('Error saving user session:', error);
    }
  }

  async updateSession(sessionId: string, updates: Partial<UserSession>): Promise<void> {
    try {
      const fileName = this.getFileName(sessionId);
      const individualFile = path.join(this.dataDir, `${sessionId}.txt`);
      
      // Read existing session if it exists
      let existingSession: UserSession | null = null;
      if (fs.existsSync(individualFile)) {
        // This is a simplified approach - in production, you'd want a proper database
        // For now, we'll just append updates
      }
      
      // For now, we'll create a new session with updates
      const updatedSession: UserSession = {
        sessionId,
        timestamp: new Date().toISOString(),
        ip: updates.ip || 'unknown',
        userAgent: updates.userAgent || 'unknown',
        referrer: updates.referrer,
        pages: updates.pages || [],
        formSubmissions: updates.formSubmissions || [],
        interactions: updates.interactions || [],
        deviceInfo: updates.deviceInfo || {
          type: 'desktop',
          browser: 'unknown',
          os: 'unknown'
        },
        location: updates.location
      };
      
      await this.saveSession(updatedSession);
    } catch (error) {
      console.error('Error updating user session:', error);
    }
  }

  async getSessionsByDate(date: string): Promise<string[]> {
    try {
      const files = fs.readdirSync(this.dataDir);
      return files.filter(file => file.startsWith(date));
    } catch (error) {
      console.error('Error reading sessions:', error);
      return [];
    }
  }

  async getAllSessions(): Promise<string[]> {
    try {
      const files = fs.readdirSync(this.dataDir);
      return files.filter(file => file.endsWith('.txt'));
    } catch (error) {
      console.error('Error reading all sessions:', error);
      return [];
    }
  }

  generateSessionId(): string {
    return this.generateSessionId();
  }
}

export const userDataStorage = new UserDataStorage();
