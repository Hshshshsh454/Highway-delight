"use client";

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { experiences as allExperiences } from '@/lib/data';
import { ExperienceCard } from '@/components/experience-card';
import { Search } from 'lucide-react';

const locations = [
  'All',
  'Udupi',
  'Bangalore',
  'Coorg',
  'Manali',
  'Sunderban',
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const filteredExperiences = useMemo(() => {
    return allExperiences.filter((experience) => {
      const matchesLocation =
        selectedLocation === 'All' || experience.location === selectedLocation;
      const matchesSearch =
        experience.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        experience.shortDescription
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      return matchesLocation && matchesSearch;
    });
  }, [searchQuery, selectedLocation]);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2 text-primary">
          Find Your Next Adventure
        </h1>
        <p className="text-lg text-muted-foreground">
          Curated experiences that you will never forget.
        </p>
      </header>

      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for experiences..."
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {locations.map((location) => (
            <Button
              key={location}
              variant={selectedLocation === location ? 'default' : 'outline'}
              onClick={() => setSelectedLocation(location)}
              className="shrink-0"
            >
              {location}
            </Button>
          ))}
        </div>
      </div>

      {filteredExperiences.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground">
            No experiences found. Try a different search or location!
          </p>
        </div>
      )}
    </div>
  );
}
