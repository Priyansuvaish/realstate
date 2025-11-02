import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Sanitization function to escape HTML and prevent XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Sanitize and validate input
function sanitizeInput(input: string): string {
  // Remove any HTML tags
  let sanitized = input.replace(/<[^>]*>/g, '');

  // Remove script tags and their content
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Remove dangerous characters but keep spaces and normal text
  sanitized = sanitized.replace(/[<>]/g, '');

  // Only trim leading/trailing whitespace (keep spaces within the text)
  sanitized = sanitized.trim();

  // Limit length to prevent abuse
  sanitized = sanitized.substring(0, 1000);

  return sanitized;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    let { name, email, countryCode, phone, message } = body;
    const { consent } = body;

    // Sanitize all text inputs
    name = sanitizeInput(name || '');
    email = sanitizeInput(email || '');
    phone = sanitizeInput(phone || '');
    message = message ? sanitizeInput(message) : '';
    countryCode = sanitizeInput(countryCode || '+91');

    // Validate required fields
    if (!name || !email || !phone || !consent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Additional validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    if (name.length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters' },
        { status: 400 }
      );
    }

    // Create transporter
    // Note: You'll need to configure these environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASS, // Your email password or app password
      },
    });

    // Email content with escaped HTML to prevent XSS
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Submission - Vaishnavi AT-One Krishna Brindavan`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #1a3a52; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="margin-top: 20px;">
            <h3 style="color: #1a3a52; margin-bottom: 10px;">Contact Details:</h3>

            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background-color: #f9fafb;">
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(email)}</td>
              </tr>
              <tr style="background-color: #f9fafb;">
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(countryCode)} ${escapeHtml(phone)}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Project:</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">Vaishnavi AT-One Krishna Brindavan</td>
              </tr>
              ${message ? `
              <tr style="background-color: #f9fafb;">
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold; vertical-align: top;">Message:</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(message)}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Consent:</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">
                  <span style="color: #10b981;">✓ Agreed to contact via Email, SMS & WhatsApp</span>
                </td>
              </tr>
            </table>
          </div>

          <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-left: 4px solid #0ea5e9; border-radius: 5px;">
            <p style="margin: 0; color: #1e40af;">
              <strong>Note:</strong> This lead was generated from the Vaishnavi AT-One Krishna Brindavan website contact form.
            </p>
          </div>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
            <p>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
