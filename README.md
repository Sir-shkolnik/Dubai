# Let's Get Moving Dubai

A professional moving company website built with Next.js 15, featuring a modern design with mascot branding and comprehensive moving services.

## Features

- 🚚 **Professional Moving Services**: Residential, office, packing, storage, junk removal, and specialty moving
- 🎨 **Modern Design**: Clean, responsive design with mascot branding
- 📱 **Mobile Responsive**: Optimized for all devices
- ⚡ **Fast Performance**: Built with Next.js 15 and optimized for speed
- 🎯 **SEO Optimized**: Structured data and meta tags for better search visibility
- 📞 **Contact Integration**: WhatsApp integration and contact forms

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Language**: TypeScript
- **Deployment**: Render.com

## Getting Started

### Prerequisites

- Node.js 18.18.2 or higher
- npm 9.0.0 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sir-shkolnik/Dubai.git
cd Dubai/lgm-dubai
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for automatic deployment to Render.com using a Blueprint.

### Manual Deployment to Render.com

1. **Connect GitHub Repository**:
   - Go to [Render.com](https://render.com)
   - Sign in and go to "Blueprints"
   - Click "New Blueprint Instance"
   - Connect your GitHub repository

2. **Automatic Configuration**:
   - Render will detect the `render.yaml` file
   - The service will be configured automatically
   - Click "Apply" to deploy

3. **Environment Variables**:
   - `NODE_VERSION`: 18.18.2
   - `NODE_ENV`: production

### Automatic Deployment

Every push to the `main` branch will automatically trigger a new deployment on Render.com.

## Project Structure

```
lgm-dubai/
├── public/                 # Static assets
│   ├── logo0.png          # Main logo
│   ├── layer-10.svg       # Footer logo
│   ├── chartchte image icon logo LGM.png  # Mascot logo
│   ├── Background image.png  # Hero background
│   └── gallery-thumbnail-*.png  # Customer photos
├── src/
│   ├── app/               # Next.js app router
│   │   ├── page.tsx       # Home page
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── pricing/       # Pricing page
│   │   └── areas/         # Service areas
│   ├── components/        # Reusable components
│   └── lib/              # Utility functions
├── render.yaml           # Render.com deployment config
└── package.json         # Dependencies and scripts
```

## Services

- **Residential Moving**: Apartments, villas, townhouses
- **Office Relocation**: Weekend/evening moves, zero-downtime plans
- **Professional Packing**: Export-grade materials and fragile wrapping
- **Secure Storage**: Short/long-term climate-aware storage
- **Junk Removal**: Pre/post-move declutter and eco-friendly disposal
- **Specialty Items**: Pianos, safes, gym machines, pool tables, large art

## Contact

- **Email**: Sales@Letsgetmovingdubai.com
- **Phone**: +971-56-142-9800
- **Address**: 110 Umm Hurair Rd - Oud Metha, Al Fajer Complex, Dubai, UAE
- **WhatsApp**: [Contact via WhatsApp](https://wa.me/971561429800)

## License

Copyright Reserved © 2025 letsgetmoving.ca

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request