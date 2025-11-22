/**
 * @typedef {Object} ButtonProps
 * @property {string} [variant] - Button style variant
 * @property {string} [size] - Button size
 * @property {React.ReactNode} children - Button content
 * @property {string} [className] - Additional CSS classes
 * @property {Function} [onClick] - Click handler
 * @property {string} [icon] - Icon name from lucide-react
 */

/**
 * @typedef {Object} TextProps
 * @property {('h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p'|'span')} [as] - HTML element
 * @property {string} [variant] - Text style variant
 * @property {React.ReactNode} children - Text content
 * @property {string} [className] - Additional CSS classes
 */

/**
 * @typedef {Object} ImageProps
 * @property {string} src - Image source URL
 * @property {string} alt - Image alt text
 * @property {string} [className] - Additional CSS classes
 * @property {string} [objectFit] - CSS object-fit value
 */

/**
 * @typedef {Object} StatCardProps
 * @property {string} value - Stat value
 * @property {string} label - Stat label
 * @property {string} [className] - Additional CSS classes
 */

/**
 * @typedef {Object} ProductCardProps
 * @property {number} index - Card index
 * @property {string} title - Product title
 * @property {string} category - Product category
 * @property {string} image - Product image URL
 * @property {string} description - Product description
 * @property {number} [delay] - Animation delay
 */

/**
 * @typedef {Object} ContactMethodProps
 * @property {string} icon - Icon name
 * @property {string} label - Method label
 * @property {string} value - Contact value
 */

export {};
