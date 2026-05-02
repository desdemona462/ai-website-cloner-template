export interface PricingPlan {
  name: string;
  monthly: number;
  yearly: number;
  monthlyOriginal?: number;
  popular?: boolean;
  quota: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
  href: string;
}
