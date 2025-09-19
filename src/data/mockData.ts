
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
  description: string;
  color: string;
  style: string;
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
    name: 'Betty White Maxi Dress',
    description: 'Elegant full-length maxi dress designed for graceful movement and all-day polish.',
    image: '/images/products/Betty  White Maxi Dress.JPG',
    category: 'Maxi'
  },
  {
    id: '2',
    name: 'Betty Yellow Maxi Dress',
    description: 'Vibrant yellow maxi dress that brings sunshine energy to any occasion.',
    image: '/images/products/Betty Yellow Maxi dress.jpg',
    category: 'Maxi'
  },
  {
    id: '3',
    name: 'Betty Mono Patterned Maxi Dress',
    description: 'Monochrome patterned maxi dress with elevated simplicity and movement.',
    image: '/images/products/Betty Mono patterened Maxi dress.jpg',
    category: 'Monochrome'
  },
  {
    id: '4',
    name: 'Christy Dress',
    description: 'Refined full-length dress with elegant lines for formal and special events.',
    image: '/images/products/Christy dress.jpg',
    category: 'Evening'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Betty White Maxi Dress',
    price: 25000,
    image: '/images/products/Betty  White Maxi Dress.JPG',
    category: 'Maxi',
    description: 'Elegant white maxi with flowing silhouette for polished occasions.',
    color: 'White',
    style: 'Maxi Dress'
  },
  {
    id: '2',
    name: 'Betty Yellow Maxi Dress',
    price: 25000,
    image: '/images/products/Betty Yellow Maxi dress.jpg',
    category: 'Maxi',
    description: 'Vibrant yellow maxi dress with full-length movement and ease.',
    color: 'Yellow',
    style: 'Maxi Dress'
  },
  {
    id: '3',
    name: 'Betty Patterned Maxi Dress',
    price: 25000,
    image: '/images/products/Betty Patterned Maxi dress.jpeg',
    category: 'Patterned',
    description: 'Statement patterned maxi for standout moments and confident style.',
    color: 'Patterned',
    style: 'Maxi Dress'
  },
  {
    id: '4',
    name: 'Betty Mono Patterned Maxi Dress',
    price: 25000,
    image: '/images/products/Betty Mono patterened Maxi dress.jpg',
    category: 'Monochrome',
    description: 'Modern monochrome maxi with elevated simplicity and flow.',
    color: 'Monochrome',
    style: 'Maxi Dress'
  },
  {
    id: '5',
    name: 'Christy Dress',
    price: 25000,
    image: '/images/products/Christy dress.jpg',
    category: 'Evening',
    description: 'Refined full-length evening dress with elegant lines.',
    color: 'Neutral',
    style: 'Evening Dress'
  },
  {
    id: '6',
    name: 'Doris Evening Dress',
    price: 20000,
    image: '/images/products/Doris Evening dress..JPG',
    category: 'Evening',
    description: 'Polished evening silhouette designed for head‑to‑toe presence.',
    color: 'Navy',
    style: 'Evening Dress'
  },
  {
    id: '7',
    name: 'Betty Black Midi Dress',
    price: 25000,
    image: '/images/products/Betty Black Midi Dress .jpg',
    category: 'Midi',
    description: 'Chic black midi with versatile day‑to‑evening appeal.',
    color: 'Black',
    style: 'Midi Dress'
  },
  {
    id: '8',
    name: 'Betty Two‑Tone Print Mini Dress',
    price: 28000,
    image: '/images/products/Betty two tone print Mini Dress.jpg',
    category: 'Mini',
    description: 'Playful two‑tone mini designed to stand out.',
    color: 'Multi',
    style: 'Mini Dress'
  },
  {
    id: '9',
    name: 'Enitan Afro Print Shift Dress',
    price: 20000,
    image: '/images/products/Enitan Afro print Shift dress .jpg',
    category: 'Shift',
    description: 'Afro‑print shift dress with modern cultural flair.',
    color: 'Print',
    style: 'Shift Dress'
  },
  {
    id: '10',
    name: 'Enitan Floral Print Shift Dress',
    price: 20000,
    image: '/images/products/Enitan Floral print Shift dress .jpeg',
    category: 'Shift',
    description: 'Floral shift dress with soft drape and ease.',
    color: 'Floral',
    style: 'Shift Dress'
  },
  {
    id: '11',
    name: 'Enitan Red Floral Shift Dress',
    price: 20000,
    image: '/images/products/Enitan Red Floral Shift dress .jpeg',
    category: 'Shift',
    description: 'Red floral shift with confident color and comfort.',
    color: 'Red Floral',
    style: 'Shift Dress'
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Aisha',
    location: 'Abuja, Nigeria',
    rating: 5,
    text: 'The quality of these pieces is incredible. I feel confident and beautiful every time I wear them. The fit is perfect and the fabrics are so luxurious.',
    image: '/images/testimonials/Aisha.jpg'
  },
  {
    id: '2',
    name: 'Chioma',
    location: 'Lagos, Nigeria',
    rating: 5,
    text: 'I love how versatile the collections are. I can dress them up for work or down for weekends. The attention to detail is amazing.',
    image: '/images/testimonials/Chioma.jpg'
  },
  {
    id: '3',
    name: 'Halimat',
    location: 'Abuja, Nigeria',
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
    image: '/images/products/Betty  White Maxi Dress.JPG',
    likes: 1247,
    comments: 89
  },
  {
    id: '2',
    image: '/images/products/Betty Yellow Maxi dress.jpg',
    likes: 892,
    comments: 56
  },
  {
    id: '3',
    image: '/images/products/Betty Patterned Maxi dress.jpeg',
    likes: 1567,
    comments: 123
  },
  {
    id: '4',
    image: '/images/products/Betty Mono patterened Maxi dress.jpg',
    likes: 743,
    comments: 45
  },
  {
    id: '5',
    image: '/images/products/Christy dress.jpg',
    likes: 1123,
    comments: 78
  },
  {
    id: '6',
    image: '/images/products/Doris Evening dress..JPG',
    likes: 987,
    comments: 67
  },
  {
    id: '7',
    image: '/images/products/Betty Black Midi Dress .jpg',
    likes: 1156,
    comments: 92
  },
  {
    id: '8',
    image: '/images/products/Betty two tone print Mini Dress.jpg',
    likes: 1342,
    comments: 156
  },
  {
    id: '9',
    image: '/images/products/Enitan Afro print Shift dress .jpg',
    likes: 1089,
    comments: 78
  }
];
