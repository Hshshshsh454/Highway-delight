import type { Experience } from './types';
import {
  Waves,
  Building2,
  Coffee,
  Mountain,
  Sailboat,
  Beer,
} from 'lucide-react';
import { subDays, addDays, format } from 'date-fns';

const today = new Date();

export const experiences: Experience[] = [
  {
    id: '1',
    slug: 'kayaking-in-udupi',
    title: 'Sunset Kayaking in Udupi',
    location: 'Udupi',
    shortDescription: 'Paddle through serene backwaters as the sun sets.',
    description:
      'Experience the magic of Udupi\'s backwaters with our guided sunset kayaking tour. This 2-hour journey takes you through tranquil waters, surrounded by lush greenery and the vibrant colors of the evening sky. Perfect for beginners and experienced kayakers alike.',
    price: 1200,
    imageIds: ['udupi-kayak-1', 'udupi-kayak-2', 'udupi-kayak-3'],
    rating: 4.8,
    reviews: 124,
    categoryIcon: Waves,
    availability: [
      {
        date: format(today, 'yyyy-MM-dd'),
        slots: [
          { time: '16:00', capacity: 10, booked: 8 },
          { time: '17:00', capacity: 10, booked: 4 },
        ],
      },
      {
        date: format(addDays(today, 1), 'yyyy-MM-dd'),
        slots: [
          { time: '16:00', capacity: 10, booked: 2 },
          { time: '17:00', capacity: 10, booked: 0 },
        ],
      },
      {
        date: format(addDays(today, 2), 'yyyy-MM-dd'),
        slots: [
          { time: '16:00', capacity: 10, booked: 5 },
          { time: '17:00', capacity: 10, booked: 10 },
        ],
      },
    ],
  },
  {
    id: '2',
    slug: 'bangalore-tech-hub-tour',
    title: 'Bangalore Tech Hub Tour',
    location: 'Bangalore',
    shortDescription: 'Explore the heart of India\'s Silicon Valley.',
    description:
      'Join us for an insightful tour of Bangalore\'s most famous tech parks. Understand the architecture, the work culture, and the buzz that makes this city a global IT hub. This is a walking tour that covers key areas and includes a stop at a classic Bangalore cafe.',
    price: 800,
    imageIds: ['bangalore-tech-1', 'bangalore-tech-2'],
    rating: 4.5,
    reviews: 88,
    categoryIcon: Building2,
    availability: [
      {
        date: format(today, 'yyyy-MM-dd'),
        slots: [
          { time: '10:00', capacity: 15, booked: 15 },
          { time: '14:00', capacity: 15, booked: 10 },
        ],
      },
      {
        date: format(addDays(today, 3), 'yyyy-MM-dd'),
        slots: [
          { time: '10:00', capacity: 15, booked: 5 },
          { time: '14:00', capacity: 15, booked: 2 },
        ],
      },
    ],
  },
  {
    id: '3',
    slug: 'coorg-coffee-plantation-walk',
    title: 'Coorg Coffee Plantation Walk',
    location: 'Coorg',
    shortDescription: 'Discover the journey from bean to cup.',
    description:
      'Take a peaceful walk through a verdant coffee estate in Coorg. Our guide will explain the process of coffee cultivation, from planting and harvesting to roasting. The tour ends with a coffee tasting session where you can sample different local blends.',
    price: 1500,
    imageIds: ['coorg-coffee-1', 'coorg-coffee-2'],
    rating: 4.9,
    reviews: 210,
    categoryIcon: Coffee,
    availability: [
       {
        date: format(subDays(today, 1), 'yyyy-MM-dd'),
        slots: [
          { time: '09:00', capacity: 12, booked: 12 },
        ],
      },
      {
        date: format(today, 'yyyy-MM-dd'),
        slots: [
          { time: '09:00', capacity: 12, booked: 10 },
          { time: '11:00', capacity: 12, booked: 7 },
        ],
      },
      {
        date: format(addDays(today, 1), 'yyyy-MM-dd'),
        slots: [
          { time: '09:00', capacity: 12, booked: 4 },
          { time: '11:00', capacity: 12, booked: 3 },
        ],
      },
    ],
  },
  {
    id: '4',
    slug: 'manali-mountain-trek',
    title: 'Manali Mountain Trek',
    location: 'Manali',
    shortDescription: 'A breathtaking day trek in the Himalayas.',
    description:
      'Embark on a guided day trek to experience the majestic beauty of the Himalayas. This moderate trek offers panoramic views of snow-capped peaks, alpine meadows, and dense pine forests. A packed lunch amidst nature is included.',
    price: 2500,
    imageIds: ['manali-trek-1', 'manali-trek-2'],
    rating: 4.7,
    reviews: 156,
    categoryIcon: Mountain,
    availability: [
      {
        date: format(addDays(today, 5), 'yyyy-MM-dd'),
        slots: [{ time: '08:00', capacity: 8, booked: 6 }],
      },
      {
        date: format(addDays(today, 6), 'yyyy-MM-dd'),
        slots: [{ time: '08:00', capacity: 8, booked: 2 }],
      },
    ],
  },
  {
    id: '5',
    slug: 'sunderban-mangrove-safari',
    title: 'Sunderban Mangrove Safari',
    location: 'Sunderban',
    shortDescription: 'Navigate the mysterious mangrove forests.',
    description:
      'A thrilling boat safari through the UNESCO World Heritage site of the Sunderbans. Explore the unique ecosystem of the world\'s largest mangrove forest, spot diverse wildlife including crocodiles, deer, and various bird species. If you are lucky, you might even spot the Royal Bengal Tiger.',
    price: 3500,
    imageIds: ['sunderban-safari-1', 'sunderban-safari-2'],
    rating: 4.6,
    reviews: 95,
    categoryIcon: Sailboat,
    availability: [
      {
        date: format(addDays(today, 10), 'yyyy-MM-dd'),
        slots: [{ time: '07:00', capacity: 20, booked: 15 }],
      },
      {
        date: format(addDays(today, 11), 'yyyy-MM-dd'),
        slots: [{ time: '07:00', capacity: 20, booked: 11 }],
      },
    ],
  },
  {
    id: '6',
    slug: 'bangalore-pub-crawl',
    title: 'Bangalore Pub Crawl',
    location: 'Bangalore',
    shortDescription: 'Experience the best of Bangalore\'s nightlife.',
    description:
      'Discover Bangalore\'s vibrant nightlife with our curated pub crawl. We take you to three of the city\'s best pubs, with a complimentary drink at each stop. Meet new people, enjoy great music, and experience the energetic vibe of the city after dark.',
    price: 2000,
    imageIds: ['bangalore-pub-1', 'bangalore-tech-2'],
    rating: 4.7,
    reviews: 180,
    categoryIcon: Beer,
    availability: [
      {
        date: format(addDays(today, 2), 'yyyy-MM-dd'),
        slots: [{ time: '19:00', capacity: 25, booked: 18 }],
      },
      {
        date: format(addDays(today, 3), 'yyyy-MM-dd'),
        slots: [{ time: '19:00', capacity: 25, booked: 12 }],
      },
    ],
  },
];
