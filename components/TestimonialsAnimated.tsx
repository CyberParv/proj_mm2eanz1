"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  headline = 'Loved by modern shoppers',
  subheadline = 'Real reviews from customers who shop BrightCart weekly.',
  testimonials = [
    {
      quote: 'Fast shipping and everything arrived beautifully packaged. The quality is excellent for the price.',
      name: 'Avery Collins',
      designation: 'Verified Buyer',
      src: '/images/gallery.jpg',
    },
    {
      quote: 'The curated bundles make it so easy to shop. I’ve reordered twice already.',
      name: 'Jordan Lee',
      designation: 'Home Essentials',
      src: '/images/gallery.jpg',
    },
    {
      quote: 'Great support team and super quick responses. Returns were painless.',
      name: 'Maya Rivera',
      designation: 'Lifestyle Shopper',
      src: '/images/gallery.jpg',
    },
  ],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={autoplay} />
      </div>
    </section>
  );
}
