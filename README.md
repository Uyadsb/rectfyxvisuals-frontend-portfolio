# 🎬 Cinematic Portfolio Website

A high-end cinematic portfolio website for filmmakers, video editors, and photographers. Inspired by the immersive storytelling style of Kolder Creative, this experience feels like watching a short film rather than browsing a traditional website.

## ✨ Features

### 🎥 Art Direction & Visual Identity
- **Cinematic / Moody / Atmospheric** design
- Subtle **film grain texture overlay**
- **Light leaks** and lens flares on transitions
- **Vignette edges** with deep blacks
- **Teal & Orange** cinematic color grading

### 🎭 Immersive Experience
- **Film-like flow** - each scroll reveals a new scene
- **Parallax effects** - background moves slower than foreground
- **Custom cursor** with blur effect that expands on hover
- **Smooth scrolling** powered by Lenis

### 📑 Sections
1. **Hero** - Fullscreen cinematic intro with Ken Burns effect
2. **Work Overview** - Three chapters: Filmmaking, Editing, Photography
3. **Films** - Asymmetrical grid with video hover previews
4. **Photography** - Masonry gallery with fullscreen lightbox
5. **About** - Split-screen storytelling layout
6. **Contact** - Minimal form with smooth animations

### ⚡ Advanced Features
- **Loading screen** with logo animation
- **Responsive design** - works on all devices
- **Keyboard navigation** in lightbox (←/→/ESC)
- **Sound toggle** for ambient audio (optional)
- **EXIF data display** for photographs

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **Lenis** - Smooth scrolling
- **Howler.js** - Sound design

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the portfolio.

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Navigation, Cursor, Loading, Sound
│   ├── sections/        # Hero, Films, Photos, About, Contact
│   ├── ui/              # VideoPlayer, Lightbox, Filters
│   └── effects/         # FilmGrain, LightLeaks, Parallax
├── hooks/               # Custom React hooks
├── data/                # Portfolio content data
└── index.css            # Global styles & Tailwind config
```

## 🎨 Customization

### Adding Your Content

1. Replace placeholder images in `src/data/portfolio.js`
2. Add your videos to the `public/` folder
3. Update social links in the Contact section
4. Customize colors in `src/index.css` @theme block

### Adding Ambient Sound

Add an audio file to `public/ambient.mp3`

### Changing Colors

Edit the theme variables in `src/index.css`:

```css
@theme {
  --color-cinematic-teal: #2dd4bf;
  --color-cinematic-orange: #f97316;
}
```

## 🎯 Design Philosophy

> "Prioritize emotion over information, motion over static design, and storytelling over layout structure."

---

Inspired by [Kolder Creative](https://koldercreative.com)
