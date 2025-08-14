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
  {
    id: 'mutton-curry',
    name: 'Mutton Curry Cut',
    price: 860,
    images: generateProductImages('mutton-curry'),
    thumbnail: getThumbnail('mutton-curry'),
    category: 'Mutton',
    unit: 'per kg',
    exportAvailable: true,
    description: 'Pre-cut mutton pieces, ideal for curries and stews, with perfect meat-to-bone ratio.'
  },
  {
    id: 'mutton-keema',
    name: 'Mutton Keema',
    price: 880,
    images: generateProductImages('mutton-keema'),
    thumbnail: getThumbnail('mutton-keema'),
    category: 'Mutton',
    unit: 'per kg',
    exportAvailable: true,
    description: 'Finely minced mutton, perfect for making keema, samosas, and stuffed parathas.'
  },
  {
    id: 'mutton-biryani',
    name: 'Mutton Biryani Cut',
    price: 900,
    images: generateProductImages('mutton-biryani'),
    thumbnail: getThumbnail('mutton-biryani'),
    category: 'Mutton',
    unit: 'per kg',
    exportAvailable: true,
    description: 'Special cuts of mutton, perfect for biryanis and pulao, with just the right amount of fat for flavor.'
  },
  {
    id: 'mutton-ribs',
    name: 'Mutton Ribs',
    price: 850,
    images: generateProductImages('mutton-ribs'),
    thumbnail: getThumbnail('mutton-ribs'),
    category: 'Mutton',
    unit: 'per kg',
    exportAvailable: false,
    description: 'Succulent mutton ribs, perfect for BBQ and slow-cooked stews.'
  },
  {
    id: 'mutton-boneless',
    name: 'Mutton Boneless Cubes',
    price: 950,
    images: generateProductImages('mutton-boneless'),
    thumbnail: getThumbnail('mutton-boneless'),
    category: 'Mutton',
    unit: 'per kg',
    exportAvailable: true,
    description: 'Premium boneless mutton cubes, ready for curries and stir-fry dishes.'
  },

  // Specialty Cuts
  {
    id: 'lamb-rack',
    name: 'Lamb Rack (Premium)',
    price: 1200,
    images: generateProductImages('lamb-rack'),
    thumbnail: getThumbnail('lamb-rack'),
    category: 'Specialty',
    unit: 'per kg',
    exportAvailable: true,
    description: 'Premium lamb rack, French-trimmed, perfect for special occasions and fine dining.'
  },
  {
    id: 'chicken-liver',
    name: 'Chicken Liver (Fresh)',
    price: 180,
    images: generateProductImages('chicken-liver'),
    thumbnail: getThumbnail('chicken-liver'),
    category: 'Offals',
    unit: 'per kg',
    exportAvailable: false,
    description: 'Fresh chicken liver, rich in nutrients, perfect for pâtés and traditional dishes.'
  },
  {
    id: 'mutton-kidney',
    name: 'Mutton Kidney',
    price: 450,
    images: generateProductImages('mutton-kidney'),
    thumbnail: getThumbnail('mutton-kidney'),
    category: 'Offals',
    unit: 'per kg',
    exportAvailable: false,
    description: 'Fresh mutton kidney, traditional ingredient for specialty dishes and stews.'
  }
];

export const categories = [
  'All',
  'Chicken',
  'Mutton',
  'Specialty',
  'Offals'
];

export const priceRanges = [
  { label: 'Under ₹300', min: 0, max: 300 },
  { label: '₹300 - ₹600', min: 300, max: 600 },
  { label: '₹600 - ₹900', min: 600, max: 900 },
  { label: 'Above ₹900', min: 900, max: Infinity }
];