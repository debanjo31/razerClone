export interface Product {
    _id: string;
    name: string;
    type: 'laptop' | 'desktop' | 'monitor' | 'mouse' | 'mouse_mat' | 'keyboard' | 'headset' | 'speaker' | 'chair' | 'software';
    brand: string;
    price: number;
    createdAt: Date;
    slug: string;
    description: string;
    image: string;
    url: string;
    // Add more fields specific to each product type, if needed
  }