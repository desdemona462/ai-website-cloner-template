export interface PlanTier {
  name: string;
  tag: string;
  quota: string;
  popular?: boolean;
  features: string[];
}

export interface UseCase {
  name: string;
  role: string;
  quote: string;
}
