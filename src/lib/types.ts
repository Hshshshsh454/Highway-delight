import type { LucideIcon } from 'lucide-react';

export type TimeSlot = {
  time: string;
  capacity: number;
  booked: number;
};

export type Availability = {
  date: string; // Using string in 'YYYY-MM-DD' format for easier matching
  slots: TimeSlot[];
};

export type Experience = {
  id: string;
  slug: string;
  title: string;
  location: string;
  description: string;
  shortDescription: string;
  price: number;
  imageIds: string[];
  rating: number;
  reviews: number;
  categoryIcon: React.ComponentType<{ className?: string }>;
  availability: Availability[];
};
