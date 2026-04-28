export interface PricingOption {
  duration: string;
  price: number;
  originalPrice: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: 'Curso' | 'Ebook' | 'Template' | 'Mentoria';
  rating: number;
  options: PricingOption[];
  benefits: string[];
}
