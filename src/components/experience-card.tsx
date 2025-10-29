
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Experience } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MapPin, Star } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const firstImage = PlaceHolderImages.find(
    (img) => img.id === experience.imageIds[0]
  );

  return (
    <Link href={`/experience/${experience.slug}`}>
      <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary">
        <div className="relative h-48 w-full">
          {firstImage ? (
            <Image
              src={firstImage.imageUrl}
              alt={experience.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={firstImage.imageHint}
            />
          ) : (
            <div className="bg-muted h-full w-full flex items-center justify-center">
              <span className="text-muted-foreground">No Image</span>
            </div>
          )}
          <Badge
            variant="default"
            className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm"
          >
            <MapPin className="h-3 w-3 mr-1" />
            {experience.location}
          </Badge>
        </div>
        <CardContent className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-bold font-headline mb-2 flex-grow">
            {experience.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {experience.shortDescription}
          </p>
          <div className="flex justify-between items-center mt-auto pt-4 border-t">
            <p className="text-lg font-bold text-primary">
              Rupees {experience.price.toLocaleString()}
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="font-semibold">{experience.rating}</span>
              <span>({experience.reviews})</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
