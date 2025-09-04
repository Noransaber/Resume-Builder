# EmailJS Setup Guide for Contact Form

This guide will walk you through setting up EmailJS to send emails from your contact form.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for an account
2. Verify your email address

## Step 2: Create an Email Service

1. Log in to your EmailJS dashboard
2. Click on "Email Services" in the left sidebar
3. Click "Add New Service"
4. Select your email provider (Gmail, Outlook, etc.)
5. Follow the authentication steps for your provider
6. Give your service a name (e.g., "resume-builder-service")
7. Click "Create Service"

## Step 3: Create an Email Template

1. Click on "Email Templates" in the left sidebar
2. Click "Create New Template"
3. Design your email template with the following parameters:
   - `{{user_name}}`: The name from the contact form
   - `{{user_email}}`: The email from the contact form
   - `{{subject}}`: The subject from the contact form
   - `{{message}}`: The message from the contact form
4. Set up the template with a subject line (e.g., "New Contact Form Submission")
5. Save your template

## Step 4: Get Your EmailJS Keys

1. Click on "Account" in the left sidebar
2. Note your "User ID" (this is your public key)
3. Note your Service ID from the "Email Services" page
4. Note your Template ID from the "Email Templates" page

## Step 5: Update Your Contact Form Code

Replace the placeholder values in your contact form with the actual values:

```javascript
// EmailJS configuration
const serviceId = 'YOUR_SERVICE_ID';  // Replace with your actual service ID
const templateId = 'YOUR_TEMPLATE_ID';  // Replace with your actual template ID
const publicKey = 'YOUR_PUBLIC_KEY';  // Replace with your actual public key
```

## Testing Your Implementation

1. Fill out the contact form with test data
2. Submit the form
3. Check your email to ensure you received the test message
4. Check the EmailJS dashboard for delivery status

## Troubleshooting

If emails are not being sent:

1. Verify your service is connected properly
2. Check that template parameters match the form field names
3. Look for errors in the browser console
4. Check the EmailJS dashboard for failed deliveries

## EmailJS Free Tier Limitations

- 200 emails per month
- EmailJS branding in emails
- Limited email templates

For production use with higher volume, consider upgrading to a paid plan.
