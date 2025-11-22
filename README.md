# Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Glassmorphism Design** - Beautiful floating timeline with glass effects
- 🌓 **Dark/Light Theme** - Toggle between themes with persistent preference
- 🖼️ **Interactive Image Flip** - Click photo to reveal doodle with 3D flip animation
- ✨ **Smooth Animations** - Powered by Framer Motion
- 📱 **Mobile Responsive** - Optimized for all screen sizes
- 🎯 **Dynamic Content** - Easy to update via JSON file

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/     # React components
  context/        # Context providers (Theme, Navigation)
  data/           # Portfolio data (portfolio.json)
  assets/         # Static assets
```

## Customization

### Update Portfolio Data

Edit `src/data/portfolio.json` with your information:

- Personal details (name, title, bio, email)
- Experience entries
- Education entries
- Social media links
- Image paths

### Add Images

Place your images in `public/images/`:
- `photo.jpg` - Your profile photo
- `doodle.jpg` - Your doodle image

### Styling

The project uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.js` - Theme configuration
- `src/index.css` - Global styles and utilities

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

- Netlify
- Cloudflare Pages
- Any static hosting service

## Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## License

MIT
