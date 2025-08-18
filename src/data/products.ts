import { Product } from '@/contexts/CartContext';

// Helper function to generate image paths for a product
// Uses /images/ path which points to public/images in Vercel
const generateProductImages = (productId: string, count: number = 4): string[] => {
  // Convert product ID to kebab-case for folder names
  const folderName = productId.replace(/-/g, '');
  return Array.from({ length: count }, (_, i) => `/images/products/${folderName}/${i + 1}.png`);
};

// Helper to get thumbnail path (first image)
const getThumbnail = (productId: string): string => {
  return `/images/products/${productId.replace(/-/g, '')}/1.png`;
};

export const products: Product[] = [
  // Chicken Products
  {
    id: 'chicken-whole',
    name: 'Whole Chicken (Fresh)',
    price: 250,
    images: generateProductImages('chicken-whole'),
    thumbnail: getThumbnail('chicken-whole'),
    category: 'Chicken',
    unit: 'per kg',
    exportAvailable: true,
    description: 'Fresh whole chicken, halal certified, perfect for roasting or cutting into pieces.'
  },
  {
    id: 'chicken-breast',
    name: 'Chicken Breast (Boneless)',
    price: 310,
    images: generateProductImages('chicken-breast'),
    thumbnail: getThumbnail('chicken-breast'),
    category: 'Chicken',
    unit: 'per kg',
    exportAvailable: true,
    description: 'Premium boneless chicken breast, ideal for grilling, baking, or stir-fry dishes.'
  },
  {
    id: 'chicken-thighs',
    name: 'Chicken Thighs',
    price: 300,
    images: generateProductImages('chicken-thighs'),
    thumbnail: getThumbnail('chicken-thighs'),
    category: 'Chicken',
    unit: 'per kg',
    exportAvailable: true,
    description: 'Juicy chicken thighs with skin, perfect for slow cooking and braising.'
  },
  {
    id: 'chicken-wings',
    name: 'Chicken Wings',
    price: 260,
    images: generateProductImages('chicken-wings'),
    thumbnail: getThumbnail('chicken-wings'),
    category: 'Chicken',
    unit: 'per kg',
    exportAvailable: false,
    description: 'Fresh chicken wings, great for BBQ, buffalo wings, or party appetizers.'
  },
  {
    id: 'chicken-drumsticks',
    name: 'Chicken Drumsticks',
    price: 290,
    images: generateProductImages('chicken-drumsticks'),
    thumbnail: getThumbnail('chicken-drumsticks'),
    category: 'Chicken',
    unit: 'per kg',
    exportAvailable: true,
    description: 'Tender chicken drumsticks, perfect for grilling or oven roasting.'
  },
  {
    id: 'chicken-mince',
    name: 'Chicken Mince',
    price: 240,
    images: generateProductImages('chicken-mince'),
    thumbnail: getThumbnail('chicken-mince'),
    category: 'Chicken',
    unit: 'per kg',
    exportAvailable: true,
    description: 'Fresh ground chicken mince, ideal for burgers, meatballs, and pasta dishes.'
  },

  // Mutton Products
  {
    id: 'mutton-leg',
    name: 'Mutton Leg (Bone-in)',
    price: 840,
    images: generateProductImages('mutton-leg'),
    thumbnail: getThumbnail('mutton-leg'),
    category: 'Mutton',
    unit: 'per kg',
    exportAvailable: true,
    description: 'Premium mutton leg with bone, perfect for traditional roasts and curries.'
  },
  {
    id: 'mutton-shoulder',
    name: 'Mutton Shoulder',
    price: 880,
    images: generateProductImages('mutton-shoulder'),
    thumbnail: getThumbnail('mutton-shoulder'),
    category: 'Mutton',
    unit: 'per kg',
    exportAvailable: true,
    description: 'Tender mutton shoulder cuts, excellent for slow cooking and braising.'
  },
  {
    id: 'mutton-chops',
    name: 'Mutton Chops',
    price: 920,
    images: generateProductImages('mutton-chops'),
    thumbnail: getThumbnail('mutton-chops'),
    category: 'Mutton',
    unit: 'per kg',
    exportAvailable: true,
    description: 'Premium mutton chops, perfect for grilling and pan-searing.'
  },
  {
    id: 'mutton-mince',
    name: 'Mutton Mince (Fresh)',
    price: 900,
    images: generateProductImages('mutton-mince'),
    thumbnail: getThumbnail('mutton-mince'),
    category: 'Mutton',
    unit: 'per kg',
    exportAvailable: true,
    description: 'Freshly ground mutton mince, great for kebabs, koftas, and traditional dishes.'
  },
];

export const categories = [
  'All',
  'Chicken',
  'Mutton',
  'Specialty',
  'Offals'
];

export const priceRanges = [
  { label: 'Under $15', min: 0, max: 15 },
  { label: '$15 - $25', min: 15, max: 25 },
  { label: '$25 - $35', min: 25, max: 35 },
  { label: 'Above $35', min: 35, max: Infinity }
];