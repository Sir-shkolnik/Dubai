"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface SessionSummary {
  sessionId: string;
  timestamp: string;
  ip: string;
  userAgent: string;
  pagesCount: number;
  formSubmissionsCount: number;
  interactionsCount: number;
  deviceType: string;
  browser: string;
  os: string;
}

export default function AdminDashboard() {
  const [sessions, setSessions] = useState<SessionSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    fetchSessions();
  }, [selectedDate]);

  const fetchSessions = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/sessions?date=${selectedDate}`);
      const data = await response.json();
      setSessions(data.sessions || []);
    } catch (error) {
      console.error("Failed to fetch sessions:", error);
    } finally {
      setLoading(false);
    }
  };

  const downloadSessionData = async (sessionId: string) => {
    try {
      const response = await fetch(`/api/admin/session/${sessionId}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${sessionId}.txt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Failed to download session data:", error);
    }
  };

  const downloadAllSessions = async () => {
    try {
      const response = await fetch(`/api/admin/sessions/download?date=${selectedDate}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `user-sessions-${selectedDate}.zip`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Failed to download all sessions:", error);
    }
  };

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">User Data Dashboard</h1>
            <p className="text-gray-600">Monitor user interactions and collect valuable insights</p>
          </div>

          {/* Controls */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Select Date
              </label>
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button onClick={fetchSessions} disabled={loading}>
              {loading ? "Loading..." : "Refresh"}
            </Button>
            <Button onClick={downloadAllSessions} variant="outline">
              Download All Sessions
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{sessions.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Form Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {sessions.reduce((sum, session) => sum + session.formSubmissionsCount, 0)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Page Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {sessions.reduce((sum, session) => sum + session.pagesCount, 0)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Interactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {sessions.reduce((sum, session) => sum + session.interactionsCount, 0)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sessions Table */}
          <Card>
            <CardHeader>
              <CardTitle>User Sessions - {selectedDate}</CardTitle>
              <CardDescription>
                Detailed view of all user sessions for the selected date
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-8">Loading sessions...</div>
              ) : sessions.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No sessions found for {selectedDate}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Session ID</th>
                        <th className="text-left py-2">Time</th>
                        <th className="text-left py-2">IP Address</th>
                        <th className="text-left py-2">Device</th>
                        <th className="text-left py-2">Pages</th>
                        <th className="text-left py-2">Forms</th>
                        <th className="text-left py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sessions.map((session) => (
                        <tr key={session.sessionId} className="border-b hover:bg-gray-50">
                          <td className="py-2 font-mono text-xs">
                            {session.sessionId.substring(0, 20)}...
                          </td>
                          <td className="py-2">
                            {new Date(session.timestamp).toLocaleString()}
                          </td>
                          <td className="py-2 font-mono text-xs">{session.ip}</td>
                          <td className="py-2">
                            <div className="text-xs">
                              <div>{session.deviceType}</div>
                              <div className="text-gray-500">{session.browser} / {session.os}</div>
                            </div>
                          </td>
                          <td className="py-2 text-center">{session.pagesCount}</td>
                          <td className="py-2 text-center">{session.formSubmissionsCount}</td>
                          <td className="py-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => downloadSessionData(session.sessionId)}
                            >
                              Download
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
