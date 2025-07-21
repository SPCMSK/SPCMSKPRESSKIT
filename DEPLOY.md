# Deploy Instructions

## Netlify Deploy

1. **Automatic Deploy (Recommended)**:
   - Connect your GitHub repository to Netlify
   - Build command: `npm run build`
   - Publish directory: `dist`
   - The `netlify.toml` file is already configured

2. **Manual Deploy**:
   ```bash
   npm run build
   # Upload the 'dist' folder to Netlify
   ```

## Vercel Deploy

1. **Automatic Deploy (Recommended)**:
   - Connect your GitHub repository to Vercel
   - The `vercel.json` file is already configured
   - Build command: `npm run build`
   - Output directory: `dist`

2. **Manual Deploy**:
   ```bash
   npm install -g vercel
   npm run build
   vercel --prod
   ```

## Environment Variables

No environment variables are required for this project as it uses local storage for content management.

## Domain Configuration

After deployment, you can configure a custom domain in your hosting platform's dashboard.

## Features

- **Admin Panel**: Access via the "Admin" button in the footer
- **Credentials**: admin@spcmsk.com / spcmsk2024
- **Content Management**: Edit hero section, bio, gallery, videos, and social links
- **Responsive Design**: Works on all devices
- **Local Storage**: Content is saved locally in the browser

## Hosting Platforms Support

This project is compatible with:
- ✅ Netlify
- ✅ Vercel
- ✅ GitHub Pages
- ✅ Firebase Hosting
- ✅ AWS S3 + CloudFront
- ✅ Any static hosting provider
