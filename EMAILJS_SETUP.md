# EmailJS Setup Guide

This guide will help you set up EmailJS to receive emails from your portfolio contact form.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month)
3. Verify your email address

## Step 2: Add an Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** > **General** in your EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. Copy this key

## Step 5: Update Your Contact Form

Open `components/contact-section.tsx` and replace these placeholders:

```typescript
const serviceId = "YOUR_SERVICE_ID"      // Replace with your Service ID
const templateId = "YOUR_TEMPLATE_ID"    // Replace with your Template ID
const publicKey = "YOUR_PUBLIC_KEY"      // Replace with your Public Key
```

## Step 6: Test Your Form

1. Run your development server: `pnpm dev`
2. Navigate to the contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email inbox for the message

## Security Note

For production, consider moving these credentials to environment variables:
- Create a `.env.local` file
- Add: 
  ```
  NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
  ```
- Update the code to use: `process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID`

## Troubleshooting

- **Email not sending?** Check your EmailJS dashboard for quota limits
- **Error in console?** Verify all IDs are correct
- **No notification?** Make sure the Toaster component is in your layout

## Free Tier Limits

- 200 emails/month (free)
- Upgrade for more capacity if needed

---

Need help? Check [EmailJS Documentation](https://www.emailjs.com/docs/)
