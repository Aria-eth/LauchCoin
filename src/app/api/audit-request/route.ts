import { NextRequest, NextResponse } from 'next/server';
import { sendSupportEmail } from '@/lib/smtpMailer';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        // Validate required fields
        const requiredFields = [
            'projectName',
            'blockchain',
            'language',
            'auditType',
            'urgency',
            'budget',
            'description',
            'contactName',
            'contactEmail'
        ];

        for (const field of requiredFields) {
            if (!data[field]) {
                return NextResponse.json(
                    { error: `Missing required field: ${field}` },
                    { status: 400 }
                );
            }
        }

        // Format the email content
        const emailContent = `
New Audit Request - FortKnox Security

PROJECT DETAILS:
- Project Name: ${data.projectName}
- Contract Address: ${data.contractAddress || 'Not provided'}
- Blockchain: ${data.blockchain}
- Language: ${data.language}
- Description: ${data.description}

AUDIT REQUIREMENTS:
- Audit Type: ${data.auditType}
- Urgency: ${data.urgency}
- Budget Range: ${data.budget}

CONTACT INFORMATION:
- Name: ${data.contactName}
- Email: ${data.contactEmail}
- Telegram: ${data.contactTelegram || 'Not provided'}
- Company: ${data.contactCompany || 'Not provided'}

SUBMISSION DETAILS:
- Submitted: ${new Date().toISOString()}
- IP Address: ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'}

Please respond to this request within 24 hours.
    `.trim();

        // Send email using SMTP
        try {
            await sendSupportEmail({
                subject: `New Audit Request: ${data.projectName}`,
                text: emailContent,
                html: formatEmailHTML(data),
            });
            return NextResponse.json({
                success: true,
                message: 'Audit request submitted successfully!'
            });
        } catch (emailError) {
            console.error('SMTP email sending failed:', emailError);
            return NextResponse.json(
                { error: 'Failed to send email. Please try again or contact us directly.' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Audit request error:', error);
        return NextResponse.json(
            { error: 'Internal server error. Please try again.' },
            { status: 500 }
        );
    }
}

function formatEmailHTML(data: any) {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Audit Request - FortKnox Security</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #9945FF, #7C3AED); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .section { margin-bottom: 20px; }
        .section h3 { color: #9945FF; border-bottom: 2px solid #9945FF; padding-bottom: 5px; }
        .field { margin-bottom: 10px; }
        .field strong { color: #555; }
        .urgent { background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 10px; border-radius: 5px; }
        .footer { background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔒 New Audit Request</h1>
            <p>FortKnox Security has received a new audit request</p>
        </div>

        <div class="section">
            <h3>📋 Project Details</h3>
            <div class="field"><strong>Project Name:</strong> ${data.projectName}</div>
            <div class="field"><strong>Contract Address:</strong> ${data.contractAddress || 'Not provided'}</div>
            <div class="field"><strong>Blockchain:</strong> ${data.blockchain}</div>
            <div class="field"><strong>Language:</strong> ${data.language}</div>
            <div class="field"><strong>Description:</strong> ${data.description}</div>
        </div>

        <div class="section">
            <h3>🔍 Audit Requirements</h3>
            <div class="field"><strong>Audit Type:</strong> ${data.auditType}</div>
            <div class="field"><strong>Urgency:</strong> ${data.urgency}</div>
            <div class="field"><strong>Budget Range:</strong> ${data.budget}</div>
        </div>

        <div class="section">
            <h3>👤 Contact Information</h3>
            <div class="field"><strong>Name:</strong> ${data.contactName}</div>
            <div class="field"><strong>Email:</strong> ${data.contactEmail}</div>
            <div class="field"><strong>Telegram:</strong> ${data.contactTelegram || 'Not provided'}</div>
            <div class="field"><strong>Company:</strong> ${data.contactCompany || 'Not provided'}</div>
        </div>

        ${data.urgency === 'emergency' ? '<div class="urgent"><strong>🚨 URGENT REQUEST:</strong> This is an emergency audit request requiring immediate attention.</div>' : ''}

        <div class="footer">
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            <p>Please respond to this request within 24 hours.</p>
            <p>This email was sent from the FortKnox Security audit request form.</p>
        </div>
    </div>
</body>
</html>
  `.trim();
} 