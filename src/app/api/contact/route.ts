import { NextRequest, NextResponse } from "next/server";
import { userDataStorage, UserSession, FormSubmission } from "@/lib/userDataStorage";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, moveDate, fromArea, toArea, message, sessionId } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required" },
        { status: 400 }
      );
    }

    // Basic email validation if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Basic phone validation (UAE format)
    const phoneRegex = /^(\+971|0)?[1-9]\d{8}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      return NextResponse.json(
        { error: "Please provide a valid UAE phone number" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send email via Resend, Mailgun, or similar service
    // 2. Save to database
    // 3. Send notification to WhatsApp Business API
    // 4. Log the lead for follow-up

    // Save user data to file system
    const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";
    const referrer = request.headers.get("referer") || undefined;

    const formSubmission: FormSubmission = {
      formType: 'contact',
      data: {
        name,
        phone,
        email,
        moveDate,
        fromArea,
        toArea,
        message
      },
      timestamp: new Date().toISOString(),
      success: true
    };

    // Create or update user session
    const sessionData: Partial<UserSession> = {
      sessionId: sessionId || userDataStorage.generateSessionId(),
      ip,
      userAgent,
      referrer,
      pages: [],
      formSubmissions: [formSubmission],
      interactions: [],
      deviceInfo: {
        type: 'desktop', // This would be detected from user agent in a real implementation
        browser: 'unknown',
        os: 'unknown'
      }
    };

    await userDataStorage.updateSession(sessionData.sessionId!, sessionData);

    // Log for debugging
    console.log("New contact form submission saved:", {
      sessionId: sessionData.sessionId,
      name,
      phone,
      email,
      timestamp: new Date().toISOString(),
      ip
    });

    // TODO: Replace with actual email service integration
    // Example with Resend:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'noreply@lgm-dubai.com',
      to: ['hello@lgm-dubai.com'],
      subject: `New Moving Quote Request from ${name}`,
      html: `
        <h2>New Moving Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Move Date:</strong> ${moveDate || 'Not specified'}</p>
        <p><strong>From:</strong> ${fromArea || 'Not specified'}</p>
        <p><strong>To:</strong> ${toArea || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message || 'No additional details'}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `
    });
    */

    // TODO: Send WhatsApp notification
    // Example with WhatsApp Business API:
    /*
    const whatsappMessage = `New moving quote request:
Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}
Move Date: ${moveDate || 'Not specified'}
From: ${fromArea || 'Not specified'}
To: ${toArea || 'Not specified'}
Message: ${message || 'No additional details'}`;

    await fetch(`https://graph.facebook.com/v18.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: process.env.ADMIN_PHONE_NUMBER,
        type: 'text',
        text: { body: whatsappMessage }
      })
    });
    */

    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for your request. We'll contact you within 2 hours." 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    
    return NextResponse.json(
      { 
        error: "Something went wrong. Please try again or contact us directly." 
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
