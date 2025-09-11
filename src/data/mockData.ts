export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
}

export const collections: Collection[] = [
  {
    id: '1',
    name: 'Birthday Collection',
    description: 'Elegant dresses perfect for special celebrations and memorable moments.',
    image: '/images/collections/Birthday_dress.jpeg',
    category: 'Dresses'
  },
  {
    id: '2',
    name: 'Cream & Chocolate',
    description: 'Sophisticated pieces in warm, neutral tones for everyday elegance.',
    image: '/images/collections/creamandchoc.jpg',
    category: 'Casual'
  },
  {
    id: '3',
    name: 'Summer Essentials',
    description: 'Light and breezy styles that keep you comfortable and stylish all season.',
    image: '/images/collections/e4cc8f25ddf3e14e264a6054ebaa3a8b.jpg',
    category: 'Summer'
  },
  {
    id: '4',
    name: 'Elegant Evening',
    description: 'Refined silhouettes and luxe textures for unforgettable nights.',
    image: '/images/collections/fb1ebee02fc2fe7605b961fce5cca6ee.jpg',
    category: 'Evening'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Elegant Birthday Dress',
    price: 18500,
    image: '/images/collections/Birthday_dress.jpeg',
    category: 'Dresses'
  },
  {
    id: '2',
    name: 'Cream & Chocolate Set',
    price: 22500,
    image: '/images/collections/creamandchoc.jpg',
    category: 'Sets'
  },
  {
    id: '3',
    name: 'Summer Essential Dress',
    price: 27500,
    image: '/images/collections/e4cc8f25ddf3e14e264a6054ebaa3a8b.jpg',
    category: 'Dresses'
  },
  {
    id: '4',
    name: 'Evening Elegance',
    price: 32500,
    image: '/images/collections/fb1ebee02fc2fe7605b961fce5cca6ee.jpg',
    category: 'Evening Wear'
  },
  {
    id: '5',
    name: 'Designer Collection',
    price: 35000,
    image: '/images/collections/image-7-removebg-preview.png',
    category: 'Premium'
  },
  {
    id: '6',
    name: 'Classic Birthday Style',
    price: 15000,
    image: '/images/collections/Birthday_dress.jpeg',
    category: 'Dresses'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Aisha',
    location: 'Lagos, Nigeria',
    rating: 5,
    text: 'The quality of these pieces is incredible. I feel confident and beautiful every time I wear them. The fit is perfect and the fabrics are so luxurious.',
    image: '/images/testimonials/Aisha.jpg'
  },
  {
    id: '2',
    name: 'Chioma',
    location: 'Abuja, Nigeria',
    rating: 5,
    text: 'I love how versatile the collections are. I can dress them up for work or down for weekends. The attention to detail is amazing.',
    image: '/images/testimonials/Chioma.jpg'
  },
  {
    id: '3',
    name: 'Halimat',
    location: 'Enugu, Nigeria',
    rating: 5,
    text: 'These clothes make me feel empowered and elegant. The customer service is exceptional and shipping is always fast.',
    image: '/images/testimonials/Halimat.jpg'
  },
  {
    id: '4',
    name: 'Reola',
    location: 'Port Harcourt, Nigeria',
    rating: 5,
    text: 'Lady Betty has transformed my wardrobe completely. The designs are so elegant and the quality is outstanding. I get compliments everywhere I go!',
    image: '/images/testimonials/reola.png'
  },
  {
    id: '5',
    name: 'Shade',
    location: 'Lagos, Nigeria',
    rating: 5,
    text: 'The corporate fits I got from Lady Betty were absolutely beautiful! Perfect for my business meetings and professional events. The quality and attention to detail is exceptional.',
    image: '/images/testimonials/shade.jpg'
  }
];

// Debug logging
console.log('mockData loaded, testimonials:', testimonials);
console.log('testimonials length:', testimonials.length);

export const instagramPosts: InstagramPost[] = [
  {
    id: '1',
    image: '/images/collections/Birthday_dress.jpeg',
    likes: 1247,
    comments: 89
  },
  {
    id: '2',
    image: '/images/collections/creamandchoc.jpg',
    likes: 892,
    comments: 56
  },
  {
    id: '3',
    image: '/images/collections/e4cc8f25ddf3e14e264a6054ebaa3a8b.jpg',
    likes: 1567,
    comments: 123
  },
  {
    id: '4',
    image: '/images/collections/fb1ebee02fc2fe7605b961fce5cca6ee.jpg',
    likes: 743,
    comments: 45
  },
  {
    id: '5',
    image: '/images/collections/image-7-removebg-preview.png',
    likes: 1123,
    comments: 78
  },
  {
    id: '6',
    image: '/images/collections/Birthday_dress.jpeg',
    likes: 987,
    comments: 67
  }
];
