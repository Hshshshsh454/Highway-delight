
import type { Experience } from './types';
import {
  Waves,
  Building2,
  Coffee,
  Mountain,
  Sailboat,
  Beer,
  Palmtree,
  Castle,
  Landmark,
  Building,
  TrainTrack,
  Wind,
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
  {
    id: '7',
    slug: 'goa-beach-hopping',
    title: 'Goa Beach Hopping Adventure',
    location: 'Goa',
    shortDescription: 'Discover the famous and hidden beaches of Goa.',
    description:
      'A full-day tour exploring the beautiful coastline of Goa. We will visit famous beaches like Baga and Calangute, as well as some hidden gems. Enjoy water sports, relax on the sand, and savor delicious seafood at a beachside shack.',
    price: 3000,
    imageIds: ['goa-beach-1', 'goa-beach-2'],
    rating: 4.8,
    reviews: 250,
    categoryIcon: Palmtree,
    availability: [
      {
        date: format(addDays(today, 4), 'yyyy-MM-dd'),
        slots: [{ time: '09:00', capacity: 15, booked: 10 }],
      },
      {
        date: format(addDays(today, 5), 'yyyy-MM-dd'),
        slots: [{ time: '09:00', capacity: 15, booked: 5 }],
      },
    ],
  },
  {
    id: '8',
    slug: 'jaipur-historical-tour',
    title: 'Jaipur Historical Tour',
    location: 'Jaipur',
    shortDescription: 'Explore the royal palaces and forts of the Pink City.',
    description:
      'Immerse yourself in the history of Jaipur with a guided tour of its most iconic landmarks. Visit the Amber Fort, City Palace, and Hawa Mahal. Learn about the rich culture and heritage of the Rajputs.',
    price: 2200,
    imageIds: ['jaipur-fort-1', 'jaipur-fort-2'],
    rating: 4.9,
    reviews: 320,
    categoryIcon: Castle,
    availability: [
      {
        date: format(addDays(today, 7), 'yyyy-MM-dd'),
        slots: [{ time: '10:00', capacity: 20, booked: 15 }],
      },
    ],
  },
  {
    id: '9',
    slug: 'agra-taj-mahal-sunrise',
    title: 'Agra Taj Mahal Sunrise Tour',
    location: 'Agra',
    shortDescription: 'Witness the breathtaking beauty of the Taj Mahal at sunrise.',
    description:
      'An early morning tour to see the Taj Mahal in the soft light of sunrise. Avoid the crowds and capture stunning photos of this Wonder of the World. The tour also includes a visit to the Agra Fort.',
    price: 1800,
    imageIds: ['agra-taj-1', 'agra-taj-2'],
    rating: 5.0,
    reviews: 500,
    categoryIcon: Landmark,
    availability: [
      {
        date: format(addDays(today, 8), 'yyyy-MM-dd'),
        slots: [{ time: '05:30', capacity: 25, booked: 20 }],
      },
    ],
  },
  {
    id: '10',
    slug: 'mumbai-city-of-dreams-tour',
    title: 'Mumbai City of Dreams Tour',
    location: 'Mumbai',
    shortDescription: 'Explore the bustling streets and landmarks of Mumbai.',
    description:
      'A comprehensive tour of Mumbai, covering everything from the Gateway of India and Marine Drive to the bustling markets of Colaba. Experience the fast-paced life of India\'s financial capital.',
    price: 2800,
    imageIds: ['mumbai-city-1', 'mumbai-city-2'],
    rating: 4.7,
    reviews: 190,
    categoryIcon: Building,
    availability: [
      {
        date: format(addDays(today, 12), 'yyyy-MM-dd'),
        slots: [{ time: '09:30', capacity: 18, booked: 10 }],
      },
    ],
  },
  {
    id: '11',
    slug: 'rishikesh-river-rafting',
    title: 'Rishikesh White Water Rafting',
    location: 'Rishikesh',
    shortDescription: 'An adrenaline-pumping rafting experience on the Ganges.',
    description:
      'Navigate the thrilling rapids of the River Ganges with our expert guides. This white water rafting adventure is perfect for thrill-seekers. The package includes all safety gear and a briefing.',
    price: 3200,
    imageIds: ['rishikesh-rafting-1', 'rishikesh-rafting-2'],
    rating: 4.9,
    reviews: 400,
    categoryIcon: Wind,
    availability: [
      {
        date: format(addDays(today, 15), 'yyyy-MM-dd'),
        slots: [{ time: '10:00', capacity: 12, booked: 8 }],
      },
    ],
  },
  {
    id: '12',
    slug: 'shimla-himalayan-toy-train',
    title: 'Shimla Himalayan Toy Train',
    location: 'Shimla',
    shortDescription: 'A scenic journey on a historic mountain railway.',
    description:
      'Experience the charm of the UNESCO World Heritage Kalka-Shimla Railway. This toy train ride offers stunning views of the Himalayan landscape as it winds through picturesque valleys and tunnels.',
    price: 1500,
    imageIds: ['shimla-train-1', 'shimla-train-2'],
    rating: 4.6,
    reviews: 280,
    categoryIcon: TrainTrack,
    availability: [
      {
        date: format(addDays(today, 20), 'yyyy-MM-dd'),
        slots: [{ time: '11:00', capacity: 30, booked: 25 }],
      },
    ],
  },
  {
    id: '13',
    slug: 'ooty-nilgiri-mountain-railway',
    title: 'Ooty Nilgiri Mountain Railway',
    location: 'Ooty',
    shortDescription: 'Ride the historic steam train through the Nilgiri Hills.',
    description:
      'Journey through tea plantations and forested hills on the iconic Nilgiri Mountain Railway. This steam-powered train offers a nostalgic and scenic experience, showcasing the natural beauty of Ooty.',
    price: 1300,
    imageIds: ['ooty-train-1', 'ooty-train-2'],
    rating: 4.7,
    reviews: 220,
    categoryIcon: TrainTrack,
    availability: [
      {
        date: format(addDays(today, 18), 'yyyy-MM-dd'),
        slots: [{ time: '10:30', capacity: 40, booked: 30 }],
      },
    ],
  },
  {
    id: '14',
    slug: 'darjeeling-tea-tasting',
    title: 'Darjeeling Tea Garden & Tasting',
    location: 'Darjeeling',
    shortDescription: 'Explore the world-famous tea estates of Darjeeling.',
    description:
      'Visit a renowned tea garden in Darjeeling, learn about the tea-making process, and enjoy a tasting session of the finest Darjeeling teas. Enjoy panoramic views of the Kanchenjunga range.',
    price: 1900,
    imageIds: ['darjeeling-tea-1', 'darjeeling-tea-2'],
    rating: 4.8,
    reviews: 350,
    categoryIcon: Coffee,
    availability: [
      {
        date: format(addDays(today, 22), 'yyyy-MM-dd'),
        slots: [{ time: '09:00', capacity: 15, booked: 10 }],
      },
    ],
  },
  {
    id: '15',
    slug: 'munnar-tea-plantation-tour',
    title: 'Munnar Tea Plantation Tour',
    location: 'Munnar',
    shortDescription: 'Walk through the rolling tea gardens of Munnar.',
    description:
      'A guided tour of the sprawling tea plantations in Munnar, Kerala. Learn about the history of tea in the region, witness the tea-plucking process, and visit a tea museum. The stunning landscapes make for a perfect day out.',
    price: 1600,
    imageIds: ['munnar-tea-1', 'munnar-tea-2'],
    rating: 4.9,
    reviews: 380,
    categoryIcon: Coffee,
    availability: [
      {
        date: format(addDays(today, 25), 'yyyy-MM-dd'),
        slots: [{ time: '10:00', capacity: 20, booked: 12 }],
      },
    ],
  },
];
