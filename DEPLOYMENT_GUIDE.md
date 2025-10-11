# Deployment Guide: Next.js Website to Plesk

## Prerequisites

- Your Next.js website has been built and exported to the `out` directory
- Access to your Plesk control panel
- Domain configured in Plesk (fortknox-security.xyz)

## Step-by-Step Deployment Instructions

### 1. Prepare Your Files

Your website files are ready in the `out` directory. These files need to be uploaded to your Plesk hosting.

### 2. Access Plesk File Manager

1. Log into your Plesk control panel
2. Navigate to "Files" in the left sidebar
3. Click on "File Manager"

### 3. Navigate to Your Domain Directory

1. In the File Manager, navigate to your domain's root directory
2. Look for the `httpdocs` folder (this is where your website files should go)
3. Click on `httpdocs` to open it

### 4. Upload Your Website Files

**Option A: Upload via File Manager**

1. Click the "+" button or "Upload" option
2. Select all files from your local `out` directory
3. Upload them to the `httpdocs` folder

**Option B: Upload via FTP (Recommended for large files)**

1. Use an FTP client (FileZilla, WinSCP, etc.)
2. Connect to your server using your Plesk FTP credentials
3. Navigate to the `httpdocs` directory
4. Upload all contents of the `out` directory

### 5. File Structure

After upload, your `httpdocs` directory should contain:

```
httpdocs/
├── .htaccess
├── index.html
├── favicon.ico
├── logo.png
├── file.svg
├── globe.svg
├── favicon.svg
├── window.svg
├── about/
├── audit-request/
├── blog/
├── careers/
├── contact/
├── cookies/
├── faq/
├── portfolio/
├── privacy/
├── resources/
├── services/
├── terms/
└── _next/
```

### 6. Verify Upload

1. Check that all files are present in the `httpdocs` directory
2. Ensure the `.htaccess` file is uploaded (this handles routing)
3. Verify that the `_next` folder contains all static assets

### 7. Test Your Website

1. Visit your domain: `https://fortknox-security.xyz`
2. Test navigation between pages
3. Check that all images and assets load correctly
4. Test responsive design on mobile devices

### 8. Troubleshooting

**If pages show 404 errors:**

- Ensure the `.htaccess` file is uploaded
- Check that Apache mod_rewrite is enabled
- Verify file permissions (typically 644 for files, 755 for directories)

**If assets don't load:**

- Check that the `_next` directory was uploaded completely
- Verify file paths in the browser's developer tools

**If the site doesn't load at all:**

- Check that `index.html` is in the root of `httpdocs`
- Verify domain DNS settings in Plesk

### 9. Performance Optimization

The `.htaccess` file includes:

- Gzip compression for faster loading
- Browser caching for static assets
- Proper routing for client-side navigation

### 10. SSL Certificate (Recommended)

1. In Plesk, go to "Websites & Domains"
2. Click on your domain
3. Enable SSL/TLS encryption
4. Choose "Let's Encrypt" for a free certificate

## Important Notes

- Your website is now a static site, so server-side features won't work
- All routing is handled client-side
- The site will work without JavaScript, but with limited functionality
- Make sure to update your domain's DNS settings if needed

## Support

If you encounter issues:

1. Check Plesk error logs
2. Verify file permissions
3. Test with a simple HTML file first
4. Contact your hosting provider if needed

Your FortKnox Security website should now be live at `https://fortknox-security.xyz`!
