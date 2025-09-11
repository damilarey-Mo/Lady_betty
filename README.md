# Lady Betty - Feminine Fashion Landing Page

A beautiful, responsive landing page for a feminine ready-to-wear fashion brand built with modern web technologies.

## ✨ Features

- **Responsive Design**: Mobile-first approach with perfect display on all devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Modern UI/UX**: Clean, elegant design with feminine aesthetic
- **Interactive Components**: Carousels, forms, and hover effects
- **Performance Optimized**: Lazy loading, optimized images, and smooth 60fps animations
- **SEO Ready**: Proper meta tags, semantic HTML, and accessibility features

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Images**: Unsplash placeholder images

## 🎨 Design System

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Color Palette
- **Brand Pink**: #E8B4B8
- **Accent Gold**: #D4A574
- **Deep Charcoal**: #4a463a
- **Soft Cream**: #cbc6bc
- **Light Grey**: #e8e5e0
- **Warm Beige**: #cbc6bc
- **Dark Olive**: #4a463a

## 📱 Sections

1. **Hero Section** - Full viewport height with background image and CTA buttons
2. **Navigation** - Transparent header with mobile hamburger menu
3. **Featured Collections** - Grid layout showcasing fashion collections
4. **About Section** - Brand story with split-screen layout
5. **Best Sellers** - Interactive carousel with auto-play
6. **Testimonials** - Customer reviews with star ratings
7. **Instagram Feed** - Social media grid with hover effects
8. **Newsletter** - Email signup with validation
9. **Contact** - Contact form and information
10. **Footer** - Comprehensive footer with links and social media

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lady-betty
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and design system
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx    # Button component with variants
│   │   ├── Input.tsx     # Form input component
│   │   └── Card.tsx      # Card component with hover effects
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Navigation.tsx # Navigation component
│   │   ├── FeaturedCollections.tsx # Collections grid
│   │   ├── AboutSection.tsx # About section
│   │   ├── BestSellers.tsx # Products carousel
│   │   ├── Testimonials.tsx # Customer reviews
│   │   ├── InstagramFeed.tsx # Social media grid
│   │   ├── Newsletter.tsx # Email signup
│   │   ├── ContactSection.tsx # Contact form
│   │   └── Footer.tsx    # Footer component
│   └── shared/           # Shared components
│       ├── Container.tsx # Layout container
│       └── Section.tsx   # Section wrapper
└── data/                 # Mock data
    └── mockData.ts       # Collections, products, testimonials
```

## 🎯 Key Features Implementation

### Responsive Navigation
- Transparent background that becomes solid on scroll
- Mobile hamburger menu with slide-out animation
- Smooth scroll to sections

### Hero Section
- Full viewport height with parallax-like background
- Staggered text animations
- Scroll indicator with smooth navigation

### Interactive Carousel
- Auto-play functionality with 5-second intervals
- Navigation arrows and dot indicators
- Pause on hover for better UX

### Form Handling
- React Hook Form with Zod validation
- Loading states and success messages
- Proper error handling and user feedback

### Animations
- Intersection Observer for scroll-triggered animations
- Smooth hover effects and transitions
- Staggered animations for grid items

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure build settings if needed

## 🔧 Customization

### Colors
Update the CSS custom properties in `globals.css`:
```css
:root {
  --brand-pink: #E8B4B8;
  --accent-gold: #D4A574;
  --deep-charcoal: #4a463a;
  --warm-beige: #cbc6bc;
  /* ... other colors */
}
```

### Content
Modify the mock data in `src/data/mockData.ts` to update:
- Collection information
- Product details
- Customer testimonials
- Instagram posts

### Images
Replace placeholder images with your own:
- Update image URLs in mock data
- Optimize images for web (WebP format recommended)
- Ensure proper alt text for accessibility

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

## 🎨 Performance Optimizations

- Lazy loading for images
- Optimized bundle size
- Smooth 60fps animations
- Efficient re-renders
- Proper image formats

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions, please open an issue in the repository.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
