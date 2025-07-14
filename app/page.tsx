import { Hero } from '@/components/hero';
import { FeaturedEvents } from '@/components/featured-events';
import { Features } from '@/components/features';
import { Stats } from '@/components/stats';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-purple-950 dark:via-gray-900 dark:to-blue-950">
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedEvents />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}