# Portfolio Website Plan

## Technical Stack
- **Vite + React** (Client-side, no SSR needed)
- **TypeScript** (Type safety)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **CSS 3D Transforms** (Image flip effect)

## Project Structure
```
/src
  /components
    Header.tsx - Navigation with Experience & Education buttons
    Hero.tsx - Bio, photo, interactive questions
    FlipImage.tsx - Clickable image with flip animation
    Experience.tsx - Glassmorphism floating timeline
    Education.tsx - Glassmorphism floating timeline
    Footer.tsx - Email input with copy, Social icons (LinkedIn, LeetCode, Instagram)
    ThemeToggle.tsx - Dark/Light theme switcher
  /context
    ThemeContext.tsx - Theme state management
    NavigationContext.tsx - Active section state (Home/Experience/Education)
  /data
    portfolio.json - Centralized portfolio content
  App.tsx - Main app component (handles content switching based on active section)
  main.tsx - Entry point
```

## Features

### 1. Home Page (Entry Point)
- Hero section with:
  - Quick bio text
  - Clickable photo with flip feature
  - Interactive questions (clickable, engaging):
    - "See my experience" → Navigate to Experience section
    - "My education" → Navigate to Education section
    - "Let's connect" → Scroll to Footer/Contact section
- Smooth animations on load
- **Default view** when page loads

### 2. Header Navigation
- **Logo/Name** (left side) - Clickable, returns to home page
- Navigation buttons: **Experience**, **Education** (right side)
- **Navigation Behavior**: Clicking a button **replaces the body content**
  - Click Logo/Name → Shows home page content
  - Click "Experience" → Body content replaced with Experience section
  - Click "Education" → Body content replaced with Education section
- Active state indicator (shows current section - Experience or Education)
- Smooth content transitions when switching (fade/slide animation)
- Mobile: Hamburger menu or bottom navigation
- **State Management**: Track active section (Home/Experience/Education)

### 3. Experience Section
- **UI Style**: Glassmorphism floating timeline
- Floating glass panels with blur effect
- Timeline structure with depth
- Smooth hover/click interactions
- Modern, elegant aesthetic
- **Theme Adaptation**: Glass effects adjust opacity/blur for dark/light modes
- Mobile: Vertical stack layout

### 4. Education Section
- **UI Style**: Glassmorphism floating timeline
- Same design as Experience for consistency
- Floating glass panels with blur
- Timeline with depth
- **Theme Adaptation**: Glass effects adjust opacity/blur for dark/light modes
- Mobile: Vertical stack layout

### 5. Image Flip Feature
- **Direction**: Horizontal flip (left-right)
- **Trigger**: Click on photo
- **Back Action**: Click anywhere on doodle side to flip back
- **Content**: Shows one doodle
- **Speed**: Quick animation (~0.3s)
- **Technology**: CSS 3D transforms

### 6. Clickable Image Indication
- **Style**: Neon/glowing text message
- **Text**: "Click me for a surprise! ✨" (or similar)
- **Animation**: Slides in smoothly on first visit
- **Behavior**: 
  - Appears on page load (first time only)
  - Slides out after a few seconds
  - Stored in localStorage (doesn't show again after first click)
- **Not a normal tooltip** - unique sliding message design

### 7. Theme Toggle (Dark/Light Mode)
- **Toggle Button**: Floating button or in header
- **Functionality**: Switch between dark and light themes
- **Persistence**: Theme preference saved in localStorage
- **Implementation**: React Context for theme state
- **Design**: 
  - Smooth transition between themes
  - Icon changes (sun/moon)
  - Glassmorphism adapts to theme (different blur/opacity)
  - All colors adapt (background, text, glass effects)
- **Default**: System preference or light mode

### 8. Contact Section (Footer)
- **Email Input Field**:
  - Displays your email address
  - On hover: Shows "Copy" button/icon
  - Click to copy email to clipboard
  - Visual feedback when copied (toast notification or icon change)
- **Social Media Icons**:
  - LinkedIn
  - LeetCode
  - Instagram (optional)
- Copyright/back to top (optional)

## Mobile Responsiveness (Priority)

### Mobile-First Approach
- All components designed mobile-first
- Responsive breakpoints: mobile, tablet, desktop
- Touch-friendly interactions
- Large tap targets
- Optimized animations for mobile performance

### Mobile-Specific Adaptations
- Header: Hamburger menu or bottom navigation bar
- Timeline: Vertical stack instead of horizontal
- Image flip: Larger tap area, touch-friendly
- Text: Readable sizes, proper spacing
- Glassmorphism: Adjusted blur/effects for smaller screens
- Sliding message: Mobile-optimized size and position

### Performance
- Optimized images
- Lazy loading where appropriate
- Smooth 60fps animations
- Fast load times

## Data Management
- **Centralized Data**: `/data/portfolio.json`
  - Personal information (name, title, bio, location)
  - Experience entries
  - Education entries
  - Social links
  - Doodle image path
- Easy to update content without touching component code
- **Theme Preference**: Stored in localStorage (user's choice)

## Deployment
- **Recommended**: Vercel (best for React/Vite)
- Alternative: Netlify, Cloudflare Pages
- Build command: `npm run build`
- Output: `dist` folder

## Future Phases (Not in Current Scope)
- Projects section
- Skills section
- Contact form
- Additional navigation items

## Design Principles
- **Unique and creative** design
- **Modern aesthetic** with glassmorphism
- **Smooth animations** throughout
- **Mobile-first** responsive design
- **Interactive elements** for engagement
- **Clean and professional** appearance

