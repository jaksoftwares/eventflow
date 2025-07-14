"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Star, Users, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <div className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 animate-pulse" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Create & Discover Amazing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> Events</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of event organizers and attendees who trust EventFlow for seamless event management and unforgettable experiences.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 px-4 sm:px-0">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search events, locations, or categories..."
                className="pl-10 pr-20 sm:pr-4 py-6 text-base sm:text-lg rounded-full border-2 border-purple-200 focus:border-purple-500 dark:border-purple-700 dark:focus:border-purple-400"
              />
              <Button className="absolute right-2 top-2 rounded-full px-4 sm:px-8 text-sm sm:text-base">
                Search
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" asChild className="w-full sm:w-auto px-6 sm:px-8 py-6 text-base sm:text-lg rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Link href="/events">
                Explore Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto px-6 sm:px-8 py-6 text-base sm:text-lg rounded-full border-2 border-purple-200 hover:border-purple-500 dark:border-purple-700 dark:hover:border-purple-400">
              <Link href="/create-event">
                Create Event
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              <span>50K+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              <span>10K+ Events Created</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-purple-600" />
              <span>4.9 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}