#!/usr/bin/env node

/**
 * PWA Icon Generator
 *
 * This script creates placeholder PWA icons.
 * For production, replace with actual logo using:
 * - https://www.pwabuilder.com/imageGenerator
 * - Or design custom icons in Figma/Photoshop
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');

// Simple placeholder SVG for each size
const createIconSVG = (size, isMaskable = false) => {
  const padding = isMaskable ? size * 0.1 : 0;
  const innerSize = size - (padding * 2);
  const fontSize = size * 0.15;

  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="${size}" height="${size}" fill="#0B7AB5" rx="${size * 0.15}"/>
  
  <!-- Taxi Icon -->
  <g transform="translate(${padding + innerSize * 0.2}, ${padding + innerSize * 0.25})">
    <!-- Car body -->
    <rect x="${innerSize * 0.1}" y="${innerSize * 0.35}" width="${innerSize * 0.8}" height="${innerSize * 0.3}" rx="${innerSize * 0.06}" fill="#FFC107"/>
    <rect x="0" y="${innerSize * 0.5}" width="${innerSize}" height="${innerSize * 0.25}" rx="${innerSize * 0.05}" fill="#FFC107"/>
    
    <!-- Windows -->
    <rect x="${innerSize * 0.2}" y="${innerSize * 0.4}" width="${innerSize * 0.25}" height="${innerSize * 0.18}" rx="${innerSize * 0.03}" fill="#0B7AB5" opacity="0.3"/>
    <rect x="${innerSize * 0.55}" y="${innerSize * 0.4}" width="${innerSize * 0.25}" height="${innerSize * 0.18}" rx="${innerSize * 0.03}" fill="#0B7AB5" opacity="0.3"/>
    
    <!-- Wheels -->
    <circle cx="${innerSize * 0.23}" cy="${innerSize * 0.75}" r="${innerSize * 0.11}" fill="#2C3E50"/>
    <circle cx="${innerSize * 0.23}" cy="${innerSize * 0.75}" r="${innerSize * 0.065}" fill="#34495E"/>
    <circle cx="${innerSize * 0.77}" cy="${innerSize * 0.75}" r="${innerSize * 0.11}" fill="#2C3E50"/>
    <circle cx="${innerSize * 0.77}" cy="${innerSize * 0.75}" r="${innerSize * 0.065}" fill="#34495E"/>
    
    <!-- Taxi sign -->
    <rect x="${innerSize * 0.38}" y="${innerSize * 0.27}" width="${innerSize * 0.24}" height="${innerSize * 0.08}" rx="${innerSize * 0.02}" fill="#FF5722"/>
  </g>
  
  <!-- Text "S" for Slanka -->
  <text x="${size / 2}" y="${size * 0.85}" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="bold" fill="white" text-anchor="middle">S</text>
</svg>`;
};

// Icon configurations
const icons = [
  { name: 'pwa-64x64.png', size: 64, maskable: false },
  { name: 'pwa-192x192.png', size: 192, maskable: false },
  { name: 'pwa-512x512.png', size: 512, maskable: false },
  { name: 'pwa-maskable-192x192.png', size: 192, maskable: true },
  { name: 'pwa-maskable-512x512.png', size: 512, maskable: true },
  { name: 'apple-touch-icon.png', size: 180, maskable: false },
];

console.log('🎨 Generating PWA icons...\n');

icons.forEach(icon => {
  const svgContent = createIconSVG(icon.size, icon.maskable);
  const svgPath = path.join(publicDir, icon.name.replace('.png', '.svg'));

  // Save as SVG (browsers will use these)
  fs.writeFileSync(svgPath, svgContent);
  console.log(`✅ Created: ${icon.name.replace('.png', '.svg')}`);
});

console.log('\n✨ Icon generation complete!');
console.log('\n📝 Note: These are placeholder icons.');
console.log('   For production, create professional icons using:');
console.log('   - https://www.pwabuilder.com/imageGenerator');
console.log('   - Or use your logo with proper sizing');
console.log('\n   See PWA_ICON_GUIDE.md for detailed instructions.\n');

