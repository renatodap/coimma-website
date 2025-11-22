# Atomic Design Architecture

## Overview

This project follows **strict atomic design principles** with **zero hardcoding**. Every element is configurable through props or config files.

## Component Hierarchy

### ⚛️ Atoms (Basic Building Blocks)

Located in `src/components/atoms/`

#### Button
```jsx
import Button from '@/components/atoms/Button';

<Button
  variant="primary"      // primary | secondary | ghost | outline
  size="medium"          // small | medium | large
  icon="ArrowRight"      // Any Lucide React icon name
  iconPosition="right"   // left | right
  fullWidth={false}
  onClick={handleClick}
>
  Click Me
</Button>
```

#### Text
```jsx
import Text from '@/components/atoms/Text';

<Text
  as="h1"               // h1-h6 | p | span
  variant="h1"          // h1-h6 | body | bodyLarge | small | caption | legacy | industrial
  className="custom"
>
  Your text here
</Text>
```

#### Image
```jsx
import Image from '@/components/atoms/Image';

<Image
  src="/path/to/image.jpg"
  alt="Description"
  grayscale={false}
  overlay={true}
  overlayGradient="from-black via-transparent to-transparent"
  overlayOpacity="opacity-90"
/>
```

#### Icon
```jsx
import Icon from '@/components/atoms/Icon';

<Icon
  name="Mail"          // Any Lucide React icon
  size={24}
  color="#D90000"
  strokeWidth={2}
/>
```

#### Input
```jsx
import Input from '@/components/atoms/Input';

<Input
  type="text"
  label="Your Name"
  placeholder="Enter name"
  name="name"
  value={value}
  onChange={handleChange}
/>
```

#### Badge
```jsx
import Badge from '@/components/atoms/Badge';

<Badge variant="default">   // default | red | gold | dark
  Content
</Badge>
```

### 🧩 Molecules (Component Groups)

Located in `src/components/molecules/`

#### StatCard
```jsx
import StatCard from '@/components/molecules/StatCard';

<StatCard
  value="74"
  label="Anos de História"
/>
```

#### ProductCard
```jsx
import ProductCard from '@/components/molecules/ProductCard';

<ProductCard
  index={1}
  title="Product Name"
  category="Category"
  image="/path/to/image.jpg"
  description="Product description"
  delay={150}
/>
```

#### ContactMethod
```jsx
import ContactMethod from '@/components/molecules/ContactMethod';

<ContactMethod
  icon="Phone"
  label="Telefone Comercial"
  value="0800 11 2555"
/>
```

#### SectionHeader
```jsx
import SectionHeader from '@/components/molecules/SectionHeader';

<SectionHeader
  tag="Engineering Precision"
  title="Main Title"
  subtitle="Subtitle"
  titleClassName="text-white"
  subtitleClassName="text-gray-600"
/>
```

#### MarketSplitPanel
```jsx
import MarketSplitPanel from '@/components/molecules/MarketSplitPanel';

<MarketSplitPanel
  variant="primary"        // primary | secondary
  percentage={70}
  title="Panel Title"
  description="Description text"
  tag="Phase 1"
  backgroundImage="/path.jpg"
  cta="Call to Action"
/>
```

### 🏢 Organisms (Complex Sections)

Located in `src/components/organisms/`

#### Navigation
```jsx
import Navigation from '@/components/organisms/Navigation';

<Navigation
  logo="/path/to/logo.jpg"
  navItems={['Item 1', 'Item 2', 'Item 3']}
  ctaText="Menu"
/>
```

#### Hero
```jsx
import Hero from '@/components/organisms/Hero';

<Hero config={{
  preTitle: {
    text: "Since 1951",
    lineColor: "bg-red-600"
  },
  title: {
    line1: "The Weight of",
    line2: "Tradition",
    highlightColor: "from-red-600 to-red-900"
  },
  description: "Your description...",
  backgroundImage: "/path.jpg",
  buttons: [
    { text: "Explore", variant: "primary", icon: "ArrowRight" }
  ],
  scrollIndicator: {
    text: "Scroll to Discover"
  }
}} />
```

#### LegacySection
```jsx
import LegacySection from '@/components/organisms/LegacySection';

<LegacySection config={{
  image: {
    url: "/path.jpg",
    caption: "Dracena, SP — 1951"
  },
  title: "Main title",
  subtitle: "Subtitle",
  paragraphs: ["Paragraph 1", "Paragraph 2"],
  signature: "Company Name"
}} />
```

#### Stats
```jsx
import Stats from '@/components/organisms/Stats';

<Stats stats={[
  { value: "74", label: "Years of History" },
  { value: "23+", label: "Countries Served" }
]} />
```

#### MarketSplit
```jsx
import MarketSplit from '@/components/organisms/MarketSplit';

<MarketSplit
  pecuaria={marketConfig.pecuaria}
  industrial={marketConfig.industrial}
/>
```

#### ProductShowcase
```jsx
import ProductShowcase from '@/components/organisms/ProductShowcase';

<ProductShowcase config={{
  title: "Masterpieces",
  subtitle: "in Steel",
  tag: "Precision Engineering",
  items: [
    {
      id: 1,
      title: "Product",
      category: "Category",
      image: "/path.jpg",
      description: "Description"
    }
  ]
}} />
```

#### ContactSection
```jsx
import ContactSection from '@/components/organisms/ContactSection';

<ContactSection config={contactConfig} />
```

#### Footer
```jsx
import Footer from '@/components/organisms/Footer';

<Footer config={{
  copyright: "© 2025",
  links: [
    { text: "Privacy", href: "#" },
    { text: "Terms", href: "#" }
  ]
}} />
```

### 📄 Templates & Pages

#### Layout (Template)
```jsx
import Layout from '@/components/templates/Layout';

<Layout navigation={navConfig} footer={footerConfig}>
  {children}
</Layout>
```

#### HomePage (Page)
```jsx
import HomePage from '@/components/pages/HomePage';

<HomePage config={pageConfig} />
```

## Configuration Files

### Content Configuration
All content is in `src/config/content.config.js`:
- Brand information
- Hero section content
- Legacy section content
- Statistics
- Market split data
- Product catalog
- Contact information
- Footer links

### Theme Configuration
All styling variables in `src/config/theme.config.js`:
- Colors
- Fonts
- Spacing
- Border radius
- Transitions

## Custom Hooks

### useFadeIn
```jsx
import { useFadeIn } from '@/hooks/useFadeIn';

const [ref, isVisible] = useFadeIn(0.1);  // threshold

return (
  <div
    ref={ref}
    className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}
  >
    Content
  </div>
);
```

## Principles

1. **Zero Hardcoding**: All content in config files
2. **Prop-Driven**: Components accept all values as props
3. **Composable**: Build complex UIs from simple components
4. **Reusable**: Every component can be used anywhere
5. **Configurable**: Easy to customize without touching code
6. **Maintainable**: Changes in one place affect entire site

## Adding New Content

1. Update `src/config/content.config.js`
2. No component changes needed
3. Build and deploy

## Changing Styles

1. Update `src/config/theme.config.js` or `tailwind.config.js`
2. Rebuild
3. Styles update globally
