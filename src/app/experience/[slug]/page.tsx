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
import { ArrowLeft } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookingWidget } from './booking-widget';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export default function ExperiencePage({ params }: Props) {
  const experienceData = experiences.find((exp) => exp.slug === params.slug);

  if (!experienceData) {
    notFound();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { categoryIcon, ...experience } = experienceData;

  const experienceImages = PlaceHolderImages.filter((img) =>
    experience.imageIds.includes(img.id)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          <span>Details</span>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {/* Left and Middle Column: Images and Details */}
        <div className="md:col-span-2">
          
          <Carousel className="w-full mb-6">
            <CarouselContent>
              {experienceImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg">
                    <Image
                      src={image.imageUrl}
                      alt={`${experience.title} - image ${index + 1}`}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {experienceImages.length > 1 && (
                <>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                </>
            )}
          </Carousel>

          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {experience.title}
          </h1>
          <p className="text-muted-foreground mb-6">{experience.description}</p>
          
          <div className="prose max-w-none text-foreground/80 border-t pt-4">
            <h2 className="font-bold text-xl mb-2">About</h2>
            <p>Scenic routes, trained guides, and safety briefing. Minimum age 10.</p>
          </div>
        </div>

        {/* Right Column: Booking Widget */}
        <div className="h-fit">
          <BookingWidget experience={experience} />
        </div>
      </div>
    </div>
  );
}
