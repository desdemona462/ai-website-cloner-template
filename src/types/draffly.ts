export interface PlanTier {
  name: string;
  tag: string;
  monthlyPrice: number;
  yearlyPrice: number;
  quota: string;
  popular?: boolean;
  features: string[];
  unavailable?: string[];
}

export interface UseCase {
  name: string;
  role: string;
  quote: string;
}
