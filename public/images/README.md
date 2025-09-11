# Images Directory

This directory contains all images used in the Lady Betty fashion website.

## Folder Structure

```
public/images/
├── hero/           # Hero section background images
├── collections/    # Collection showcase images
├── products/       # Individual product images
├── about/          # About section and brand story images
├── testimonials/   # Customer testimonial profile images
├── instagram/      # Instagram feed images
└── backgrounds/    # General background and pattern images
```

## Image Guidelines

### Recommended Specifications
- **Hero Images**: 1920x1080px (16:9 ratio), JPG/WebP format
- **Collection Images**: 800x600px (4:3 ratio), JPG/WebP format
- **Product Images**: 600x800px (3:4 ratio), JPG/WebP format
- **Profile Images**: 400x400px (1:1 ratio), JPG/WebP format

### File Naming Convention
- Use descriptive, lowercase names with hyphens
- Include dimensions in filename if needed
- Example: `hero-fashion-background-1920x1080.jpg`

### Optimization
- Compress images for web use
- Use appropriate formats (JPG for photos, PNG for graphics with transparency)
- Consider WebP format for better compression
- Keep file sizes under 500KB for optimal loading

### Alt Text
- Always provide meaningful alt text for accessibility
- Describe the image content and context
- Include relevant fashion/style keywords

## Current Images

The website currently uses placeholder images from Unsplash. Replace these with your actual brand images:

- Hero background: Fashion runway/studio image
- Collections: Your actual collection photos
- Products: Your product catalog images
- About: Brand story and team photos
- Testimonials: Customer profile photos
- Instagram: Your social media content

## Usage in Components

Images are referenced in components using the `/images/` path:

```jsx
// Example usage
<img src="/images/hero/fashion-hero.jpg" alt="Elegant fashion background" />
```

## Adding New Images

1. Place images in the appropriate subdirectory
2. Update component references to use local images
3. Ensure proper alt text and optimization
4. Test loading performance







