# Vaishnavi AT-One Krishna Brindavan - Real Estate Website Clone

A modern, responsive real estate website clone built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. This project replicates the design and functionality of the Vaishnavi Group's real estate project website.

## Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern Animations**: Smooth scroll animations using Framer Motion
- **Component-Based Architecture**: Modular and reusable React components
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **SEO Friendly**: Optimized for search engines

## Sections

1. **Hero Section**: Eye-catching banner with project name and call-to-action
2. **Overview**: Key project statistics and highlights
3. **Value Proposition**: Four key benefits (Location, Design, Experience, Vantage)
4. **Amenities**: Comprehensive list of 12+ amenities with expandable view
5. **Features**: Standout features with image overlays
6. **Location**: Interactive map and nearby places
7. **Footer**: Contact information and social links
8. **Floating CTA**: Contact form modal for lead generation

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd real-estate-clone
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
real-estate-clone/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Overview.tsx         # Project overview
│   ├── ValueProposition.tsx # Value propositions
│   ├── Amenities.tsx        # Amenities section
│   ├── Features.tsx         # Features section
│   ├── Location.tsx         # Location and map
│   ├── Footer.tsx           # Footer section
│   └── FloatingCTA.tsx      # Floating contact button
├── public/                  # Static assets
└── package.json
```

## Customization

### Colors

The project uses a custom color scheme defined in `app/globals.css`:

- **Primary**: `#1a4d2e` (Dark green)
- **Secondary**: `#f5f3f0` (Light beige)
- **Accent**: `#d4af37` (Gold)

You can customize these colors in the `:root` CSS variables.

### Content

To update content:

1. **Project Details**: Edit the data in each component file
2. **Images**: Replace image URLs in components (currently using Unsplash placeholders)
3. **Contact Info**: Update contact details in `Footer.tsx` and `FloatingCTA.tsx`
4. **Map Location**: Update the Google Maps iframe URL in `Location.tsx`

### Adding New Sections

1. Create a new component in the `components/` directory
2. Import and add it to `app/page.tsx`
3. Update navigation links in `Header.tsx`

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety and better DX
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **React Icons**: Icon library

## Build for Production

```bash
npm run build
npm start
```

## Deploy

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build

### Other Platforms

You can also deploy to:
- Netlify
- AWS Amplify
- Google Cloud Platform
- DigitalOcean App Platform

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS optimization with Tailwind's purge
- Framer Motion animations optimized for performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a educational/demonstration project. For commercial use, ensure you have proper rights and permissions.

## Acknowledgments

- Original design inspired by [Vaishnavi Group](https://www.vaishnavigroup.com)
- Images from [Unsplash](https://unsplash.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

## Contact

For questions or support, please open an issue in the repository.
