# SMTP Setup for Plesk Email (Recommended)

## 1. Create `.env.local` in your project root:

```
SMTP_USER=support@fortknox-security.xyz
SMTP_PASS=your_email_password
```

Replace `your_email_password` with the password you set in Plesk for this mailbox.

## 2. No further setup is needed. The backend will send emails using your Plesk SMTP server.

---

# Email Setup Guide for FortKnox Security

## Overview

The audit request form now sends emails to `support@fortknox-security.xyz` when users submit the form. This guide explains how to configure the email functionality.

## Option 1: EmailJS (Recommended for Static Sites)

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

### Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:**

```
New Audit Request: {{project_name}}
```

**HTML Content:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>New Audit Request - FortKnox Security</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: linear-gradient(135deg, #9945ff, #7c3aed);
        color: white;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
      }
      .section {
        margin-bottom: 20px;
      }
      .section h3 {
        color: #9945ff;
        border-bottom: 2px solid #9945ff;
        padding-bottom: 5px;
      }
      .field {
        margin-bottom: 10px;
      }
      .field strong {
        color: #555;
      }
      .urgent {
        background-color: #fff3cd;
        border: 1px solid #ffeaa7;
        padding: 10px;
        border-radius: 5px;
      }
      .footer {
        background-color: #f8f9fa;
        padding: 15px;
        border-radius: 5px;
        margin-top: 20px;
        font-size: 12px;
        color: #666;
      }
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
        <div class="field"><strong>Project Name:</strong> {{project_name}}</div>
        <div class="field">
          <strong>Contract Address:</strong> {{contract_address}}
        </div>
        <div class="field"><strong>Blockchain:</strong> {{blockchain}}</div>
        <div class="field"><strong>Language:</strong> {{language}}</div>
        <div class="field"><strong>Description:</strong> {{description}}</div>
      </div>

      <div class="section">
        <h3>🔍 Audit Requirements</h3>
        <div class="field"><strong>Audit Type:</strong> {{audit_type}}</div>
        <div class="field"><strong>Urgency:</strong> {{urgency}}</div>
        <div class="field"><strong>Budget Range:</strong> {{budget}}</div>
      </div>

      <div class="section">
        <h3>👤 Contact Information</h3>
        <div class="field"><strong>Name:</strong> {{from_name}}</div>
        <div class="field"><strong>Email:</strong> {{from_email}}</div>
        <div class="field"><strong>Telegram:</strong> {{contact_telegram}}</div>
        <div class="field"><strong>Company:</strong> {{contact_company}}</div>
      </div>

      {% if is_urgent == 'YES - URGENT REQUEST' %}
      <div class="urgent">
        <strong>🚨 URGENT REQUEST:</strong> This is an emergency audit request
        requiring immediate attention.
      </div>
      {% endif %}

      <div class="footer">
        <p><strong>Submitted:</strong> {{submission_date}}</p>
        <p>Please respond to this request within 24 hours.</p>
        <p>
          This email was sent from the FortKnox Security audit request form.
        </p>
      </div>
    </div>
  </body>
</html>
```

4. Save the template and note down your **Template ID**

### Step 4: Get Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### Step 5: Configure Environment Variables

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Option 2: Webhook-based Email Service

### Step 1: Choose a Webhook Service

You can use any of these services:

- **Zapier**: Create a webhook trigger that sends emails
- **Make.com**: Formerly Integromat, similar to Zapier
- **IFTTT**: Simple webhook to email automation
- **Your own server**: Custom email endpoint

### Step 2: Configure Webhook

1. Set up your webhook service
2. Configure it to send emails to `support@fortknox-security.xyz`
3. Get the webhook URL

### Step 3: Add Environment Variable

```env
NEXT_PUBLIC_EMAIL_WEBHOOK_URL=https://your-webhook-url.com/email
```

## Option 3: Hosting Provider Email Service

### Plesk Email Setup

1. In Plesk, go to "Mail"
2. Create an email account: `support@fortknox-security.xyz`
3. Configure email forwarding or use Plesk's email API

### cPanel Email Setup

1. In cPanel, go to "Email Accounts"
2. Create: `support@fortknox-security.xyz`
3. Use cPanel's email API or webhook integration

## Testing the Email Functionality

### Step 1: Build and Deploy

```bash
npm run build
```

### Step 2: Test the Form

1. Go to your website: `https://fortknox-security.xyz/audit-request`
2. Fill out the form with test data
3. Submit the form
4. Check if you receive the email at `support@fortknox-security.xyz`

### Step 3: Check Console for Errors

If emails aren't working, check the browser console for error messages.

## Troubleshooting

### Common Issues:

1. **"EmailJS not configured"**

   - Check that all environment variables are set correctly
   - Make sure the `.env.local` file is in the project root

2. **"Webhook URL not configured"**

   - Set the `NEXT_PUBLIC_EMAIL_WEBHOOK_URL` environment variable
   - Test the webhook URL manually

3. **"Failed to send email"**

   - Check EmailJS dashboard for errors
   - Verify email service configuration
   - Check webhook service logs

4. **Environment variables not working**
   - Restart your development server after adding `.env.local`
   - Make sure variables start with `NEXT_PUBLIC_`

## Security Considerations

1. **EmailJS Public Key**: This is safe to expose in client-side code
2. **Rate Limiting**: Consider adding rate limiting to prevent spam
3. **Validation**: The form already includes client-side validation
4. **Spam Protection**: Consider adding CAPTCHA or other anti-spam measures

## Production Recommendations

1. **Use a reliable email service**: EmailJS, SendGrid, or Mailgun
2. **Set up email monitoring**: Monitor for failed deliveries
3. **Add rate limiting**: Prevent form spam
4. **Backup email method**: Have a fallback email service
5. **Email templates**: Use professional, branded email templates

## Support

If you need help setting up email functionality:

1. Check the browser console for error messages
2. Verify all environment variables are set correctly
3. Test with a simple webhook first (like webhook.site)
4. Contact your hosting provider for email configuration help
