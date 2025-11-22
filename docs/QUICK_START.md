# Quick Start Guide

## Installation

```bash
cd coimma-atomic
npm install
```

## Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see the site.

## Build for Production

```bash
npm run build
```

Built files will be in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
coimma-atomic/
├── src/
│   ├── components/        # All components (atoms → organisms)
│   ├── config/            # Content and theme configurations
│   ├── hooks/             # Custom React hooks
│   ├── styles/            # Global styles
│   └── types/             # Type definitions
├── docs/                  # Documentation
├── public/                # Static assets
└── dist/                  # Production build (generated)
```

## Making Changes

### Change Content

1. Open `src/config/content.config.js`
2. Modify any text, images, or data
3. Save - changes appear instantly in dev mode

### Change Colors/Theme

1. Open `src/config/theme.config.js`
2. Modify colors, fonts, spacing
3. Or edit `tailwind.config.js` for Tailwind-specific config

### Add New Section

1. Create organism component in `src/components/organisms/`
2. Import and use in `src/components/pages/HomePage/HomePage.jsx`
3. Add configuration in `src/config/content.config.js`

### Example: Adding a New Product

```js
// In src/config/content.config.js
products: {
  items: [
    // ... existing products
    {
      id: 4,  // New ID
      title: 'New Product',
      category: 'Industrial',
      image: 'https://example.com/image.jpg',
      description: 'Product description',
    }
  ]
}
```

No code changes needed - just add to config!

## Component Usage Examples

### Using Button Component Anywhere

```jsx
import Button from './components/atoms/Button';

function MyComponent() {
  return (
    <Button
      variant="primary"
      icon="ArrowRight"
      onClick={() => console.log('clicked')}
    >
      Click Me
    </Button>
  );
}
```

### Creating a Custom Section

```jsx
import Text from './components/atoms/Text';
import Image from './components/atoms/Image';

function CustomSection({ config }) {
  return (
    <section className="py-32 bg-black">
      <Text as="h2" variant="h2" className="text-white mb-8">
        {config.title}
      </Text>
      <Image
        src={config.image}
        alt={config.title}
        overlay
      />
    </section>
  );
}
```

### Using Configuration

```jsx
// In your config file
export const MY_CONFIG = {
  title: 'My Section',
  image: '/path/to/image.jpg',
  // ... more config
};

// In your component
import { MY_CONFIG } from '@/config/content.config';

<CustomSection config={MY_CONFIG} />
```

## Tips

1. **Never hardcode content** - always use config files
2. **Reuse atoms** - build complex UIs from simple components
3. **Use Tailwind classes** - for custom styling
4. **Leverage hooks** - like `useFadeIn` for animations
5. **Keep components pure** - props in, JSX out

## Common Tasks

### Change Logo

```js
// src/config/content.config.js
brand: {
  logo: 'path/to/new/logo.jpg',  // Change this
}
```

### Change Colors

```js
// tailwind.config.js or src/config/theme.config.js
colors: {
  'coimma-red': '#YOUR_COLOR',  // Change this
}
```

### Add Navigation Item

```js
// src/config/content.config.js
navigation: {
  items: ['Legado', 'Pecuária', 'Industrial', 'Contato', 'New Item'],
}
```

### Change Footer Links

```js
// src/config/content.config.js
footer: {
  links: [
    { text: 'Privacy', href: '#' },
    { text: 'Terms', href: '#' },
    { text: 'New Link', href: '#' },  // Add new
  ]
}
```

## Troubleshooting

### Build Errors

1. Clear node_modules: `rm -rf node_modules && npm install`
2. Clear Vite cache: `rm -rf node_modules/.vite`
3. Rebuild: `npm run build`

### Styling Issues

1. Check Tailwind config
2. Ensure classes are in safelist if dynamic
3. Check browser console for errors

### Component Not Updating

1. Check if file is saved
2. Restart dev server
3. Clear browser cache

## Resources

- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide React Icons](https://lucide.dev/icons/)
- [Vite Documentation](https://vitejs.dev/)
