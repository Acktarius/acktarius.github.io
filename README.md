# Acktarius.CryptoAndMining

A modern, modernized cryptocurrency and mining blog built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- ⚡ **Vite** - Lightning fast build tool
- 🎨 **Tailwind CSS** - Utility-first CSS framework with neon effects
- 📘 **TypeScript** - Type-safe code
- 🔧 **Biome** - Fast linter and formatter
- ✨ **Neon Effects** - Modern cyberpunk-inspired design with glow effects
- 📱 **Responsive** - Mobile-first responsive design
- 🎯 **SPA Routing** - Client-side routing with React Router

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Linting/Formatting**: Biome
- **Routing**: React Router DOM

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── Navigation.tsx # Main navigation bar
│   └── Footer.tsx     # Site footer
├── pages/            # Page components
│   ├── Home.tsx      # Landing page
│   ├── About.tsx     # About page
│   ├── Crypto.tsx    # Crypto articles listing
│   ├── MiningRigBuild.tsx    # Mining rig build tutorial
│   ├── CCXBox.tsx            # CCX-BOX article
│   ├── SwapCCX.tsx           # Swap CCX guide
│   └── LedgerApollo.tsx      # Ledger Apollo tutorial
├── App.tsx           # Main app component with routing
├── main.tsx          # Application entry point
└── index.css         # Global styles and Tailwind imports
```

## Page Configuration

Each page includes a `CONFIG` object at the top for easy content management:

```typescript
const CONFIG = {
  title: 'Page Title',
  subtitle: 'Page Subtitle',
  sections: [
    // Page content
  ],
}
```

This makes it easy to update content without touching the component logic.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format and fix linting issues
npm run lint:fix
npm run format
```

## Design System

### Colors

- **Primary**: Neon Cyan (`#00ffff`)
- **Secondary**: Neon Orange (`#ff8000`)
- **Accent**: Neon Green (`#00ff00`)
- **Background**: Black with gray gradients

### Neon Effects

The site features custom neon glow effects:

- Text glow: `text-glow-cyan`, `text-glow-orange`, `text-glow-green`
- Box glow: `box-glow-cyan`, `box-glow-orange`, `box-glow-green`
- Hover effects: `hover-glow`

### Animations

- `animate-glow-pulse` - Pulsing glow effect
- `animate-float` - Floating animation
- `animate-slide-up` - Slide up on load

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory. The site is optimized and ready for deployment to any static hosting service.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

See LICENSE file for details.

## Contact

- Twitter: [@xchaps](https://twitter.com/xchaps)

---

Built with 💙 by cryptocurrency enthusiasts
