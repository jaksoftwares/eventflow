"use client"

import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Calendar } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Your Next Event?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful event organizers who trust EventFlow to deliver exceptional experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto px-6 sm:px-8 py-6 text-base sm:text-lg">
              <Link href="/create-event">
                <Calendar className="mr-2 h-5 w-5" />
                Create Event
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto px-6 sm:px-8 py-6 text-base sm:text-lg border-white text-white hover:bg-white hover:text-purple-600">
              <Link href="/events">
                <Users className="mr-2 h-5 w-5" />
                Browse Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}