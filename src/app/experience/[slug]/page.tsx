import { experiences } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookingWidget } from './booking-widget';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export default function ExperiencePage({ params }: Props) {
  const experience = experiences.find((exp) => exp.slug === params.slug);

  if (!experience) {
    notFound();
  }

  const experienceImages = PlaceHolderImages.filter((img) =>
    experience.imageIds.includes(img.id)
  );
  const CategoryIcon = experience.categoryIcon;

  return (
    <div className="container mx-auto px-4 py-8 animate-in fade-in duration-500">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column: Images and Details */}
        <div>
          <div className="mb-4">
            <Badge variant="secondary" className="mb-2">
              <MapPin className="h-4 w-4 mr-2" />
              {experience.location}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold font-headline">
              {experience.title}
            </h1>
          </div>

          <Carousel className="w-full mb-6">
            <CarouselContent>
              {experienceImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={image.imageUrl}
                      alt={`${experience.title} - image ${index + 1}`}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>

          <div className="flex items-center gap-4 mb-6 text-lg">
            <div className="flex items-center gap-2">
              <CategoryIcon className="h-6 w-6 text-primary" />
              <span>Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 text-accent fill-accent" />
              <span className="font-semibold">{experience.rating}</span>
              <span className="text-muted-foreground">
                ({experience.reviews} reviews)
              </span>
            </div>
          </div>
          <div className="prose prose-lg max-w-none text-foreground/80">
            <p>{experience.description}</p>
          </div>
        </div>

        {/* Right Column: Booking Widget */}
        <div className="md:sticky md:top-24 h-fit">
          <BookingWidget experience={experience} />
        </div>
      </div>
    </div>
  );
}
