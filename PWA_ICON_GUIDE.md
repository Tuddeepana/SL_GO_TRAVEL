# PWA Icon Generation Guide

## Required Icons for PWA

You need to create the following icon files and place them in the `/public` folder:

### Required Sizes:
1. **pwa-64x64.png** - 64x64 pixels
2. **pwa-192x192.png** - 192x192 pixels  
3. **pwa-512x512.png** - 512x512 pixels
4. **pwa-maskable-192x192.png** - 192x192 pixels (with safe zone padding)
5. **pwa-maskable-512x512.png** - 512x512 pixels (with safe zone padding)
6. **apple-touch-icon.png** - 180x180 pixels
7. **favicon.ico** - 32x32 pixels

## How to Create Icons

### Option 1: Use Online Tool (Easiest)
1. Go to https://www.pwabuilder.com/imageGenerator
2. Upload your logo (at least 512x512 px)
3. Download the generated icon pack
4. Copy all files to `/public` folder

### Option 2: Use Figma/Photoshop
1. Create a 512x512 canvas
2. Design your app icon (use your logo)
3. Export in different sizes listed above
4. For maskable icons, keep content in center 80% safe zone

### Option 3: Use favicon.io
1. Go to https://favicon.io/favicon-converter/
2. Upload your logo
3. Download and extract
4. Rename files to match required names

## Icon Design Tips

✅ **Use your existing logo** (currently at `/public/logo_s.png`)
✅ **Background color**: #0B7AB5 (ocean blue - your theme color)
✅ **Logo/text**: White or yellow (#FFC107) for contrast
✅ **Simple design**: Icons are small, keep it clean
✅ **No text**: Just the logo works best

## Current Logo
Your current logo is at `/public/logo_s.png`. You can use this as the base for icon generation.

## Maskable Icons
For maskable icons (Android adaptive icons):
- Keep important content in the center 80% circle
- Background should extend to edges
- These allow the OS to apply different shapes

## Quick Command (if you have ImageMagick)
```bash
# Convert logo to different sizes
magick logo_s.png -resize 64x64 pwa-64x64.png
magick logo_s.png -resize 192x192 pwa-192x192.png
magick logo_s.png -resize 512x512 pwa-512x512.png
magick logo_s.png -resize 180x180 apple-touch-icon.png
```

## Testing
After adding icons:
1. Build the app: `npm run build`
2. Test on phone: Open in Chrome/Safari
3. Check "Add to Home Screen" option appears
4. Install and verify icon looks good

