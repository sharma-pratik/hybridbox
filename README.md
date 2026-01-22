# Hybridbox - Open Park Gym Website

A modern, interactive single-page website for Hybridbox, featuring calisthenics, animal flow, and crossfit programs.

## Features

- 🎨 Modern, responsive design
- ✨ Smooth animations and transitions
- 📱 Mobile-friendly interface
- 🖼️ Interactive gallery with lightbox
- 📧 Contact form
- 🎯 Smooth scrolling navigation

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS3 with modern animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

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
hybridbox/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Customization

### Adding Your Images

Replace the placeholder images in `src/components/Gallery.tsx` with your actual images. Update the `images` array with your image URLs.

### Updating Contact Information

Edit the contact information in `src/components/Contact.tsx` to match your actual location, email, and phone number.

## License

MIT
