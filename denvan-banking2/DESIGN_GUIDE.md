# Denvan Banking - Navy Federal Inspired Design Guide

## 🎨 Color Palette

### Primary Colors
- **Navy Blue**: `#003057` - Main brand color
- **Dark Navy**: `#001f3f` - Darker accent
- **Gold**: `#D4AF37` - Primary accent color
- **Light Gold**: `#F4E5B8` - Soft gold accent
- **Dark Gold**: `#B8952E` - Rich gold accent

### Secondary Colors
- **Background**: `#F8F9FA` - Light gray background
- **Card Background**: `#FFFFFF` - Pure white
- **Text Primary**: `#212529` - Dark text
- **Text Secondary**: `#6C757D` - Gray text
- **Border**: `#DEE2E6` - Light border

### Status Colors
- **Success**: `#28A745` - Green for positive actions
- **Danger**: `#DC3545` - Red for negative/warning
- **Warning**: `#FFC107` - Yellow for caution

## 🎯 Typography

### Font Family
- **Primary**: Inter (professional, clean, banking-appropriate)
- **Fallback**: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif

### Font Weights
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800

## 🧩 Component Styling

### Buttons
1. **Primary Button**
   - Background: Gold gradient (#D4AF37 to #B8952E)
   - Text: Navy (#003057)
   - Font Weight: 600
   - Border: 2px solid gold

2. **Outline Button**
   - Background: Transparent
   - Border: 2px solid gold
   - Text: Gold
   - Hover: Gold background with navy text

### Cards
- **Account Cards**
  - Background: Navy gradient with gold border
  - Subtle gold radial overlay for depth
  - Border: 2px solid gold
  - Shadow: `0 6px 20px rgba(0, 48, 87, 0.12)`

- **Standard Cards**
  - Background: White
  - Border Radius: 12px
  - Shadow: `0 2px 12px rgba(0, 48, 87, 0.08)`

### Navigation
- **Navbar**
  - Background: Navy gradient
  - Bottom border: 3px solid gold
  - Links: White text
  - Hover: Gold bottom border with subtle gold background

### Forms
- **Input Fields**
  - Border: 2px solid #DEE2E6
  - Focus: Gold border with subtle gold shadow
  - Border Radius: 8px
  - Padding: 12px 16px

## 📐 Spacing System

- Extra Small: 8px
- Small: 16px
- Medium: 24px
- Large: 32px
- Extra Large: 40px

## 🎭 Shadows

### Standard Shadow
```css
box-shadow: 0 2px 12px rgba(0, 48, 87, 0.08);
```

### Hover Shadow
```css
box-shadow: 0 6px 20px rgba(0, 48, 87, 0.12);
```

### Navbar Shadow
```css
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
```

## 🖼️ Logo Usage

### Current Logo
The app uses a custom SVG logo with:
- Gold circular background with gradient
- Navy inner circle
- Gold "D" letter in the center

### To Replace with Your Logo

1. **Create assets folder**:
   ```bash
   mkdir frontend/src/assets
   ```

2. **Add your logo** (PNG, SVG, etc.):
   ```
   frontend/src/assets/logo.png
   ```

3. **Update Logo component** (`frontend/src/components/Logo.js`):
   ```jsx
   import React from 'react';
   import logoImage from '../assets/logo.png';
   
   const Logo = ({ size = 40 }) => {
     return (
       <img 
         src={logoImage} 
         alt="Denvan Banking Logo" 
         style={{ width: size, height: size }}
       />
     );
   };
   
   export default Logo;
   ```

### Logo Specifications
- **Size**: 40x40px (default)
- **Format**: SVG (preferred), PNG, or WebP
- **Colors**: Should incorporate navy and/or gold
- **Style**: Professional, clean, banking-appropriate

## 🎨 Navy Federal Inspired Elements

### Account Cards
- Navy blue background with gold accents
- Clean typography with clear hierarchy
- Balance displayed prominently
- Account status badges in gold

### Dashboard Layout
- Welcome message at top
- Quick action cards with icons
- Recent transactions list
- Clean, spacious design

### Transaction Display
- Color-coded (red for debits, green for credits)
- Clear transaction details
- Professional icons and layout
- Reference numbers displayed

## 📱 Responsive Design

### Breakpoints
- Mobile: 768px and below
- Tablet: 769px - 1024px
- Desktop: 1025px and above

### Mobile Considerations
- Navbar collapses to vertical layout
- Cards stack vertically
- Font sizes reduce slightly
- Padding adjusts for smaller screens

## 🔄 Gradients

### Navy Gradient (for backgrounds)
```css
background: linear-gradient(135deg, #003057 0%, #001f3f 100%);
```

### Gold Gradient (for buttons/accents)
```css
background: linear-gradient(135deg, #D4AF37, #B8952E);
```

## ✨ Animations

### Button Hover
```css
transition: all 0.3s ease;
transform: translateY(-2px);
```

### Card Hover
```css
transition: transform 0.3s ease;
transform: translateY(-4px);
```

## 🎯 Best Practices

1. **Consistency**: Use the color variables defined in App.css
2. **Accessibility**: Maintain proper contrast ratios
3. **Spacing**: Use the spacing system consistently
4. **Typography**: Stick to the defined font weights
5. **Shadows**: Use standard shadow definitions
6. **Gradients**: Apply gradients for visual interest
7. **Borders**: Gold borders for important elements

## 📝 Quick Reference

### CSS Variables
```css
--navy: #003057
--gold: #D4AF37
--gold-light: #F4E5B8
--gold-dark: #B8952E
--bg-color: #F8F9FA
--text-primary: #212529
--text-secondary: #6C757D
```

### Common Classes
- `.btn-primary` - Gold button
- `.btn-outline` - Outlined button
- `.card` - Standard card
- `.account-card` - Navy account card
- `.navbar-brand` - Logo and brand name
- `.form-input` - Input fields

---

**Note**: This design system is inspired by Navy Federal Credit Union's professional, trustworthy aesthetic with a custom gold and navy color scheme for Denvan Banking.
