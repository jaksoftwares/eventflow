"use client"

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Star, Clock } from 'lucide-react';
import Link from 'next/link';

const featuredEvents = [
  {
    id: 1,
    title: "Tech Conference 2024",
    description: "Join the biggest tech conference of the year featuring industry leaders and cutting-edge innovations.",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "March 15, 2024",
    time: "9:00 AM",
    location: "San Francisco, CA",
    price: "From $299",
    category: "Technology",
    attendees: 2500,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Music Festival Summer",
    description: "A three-day music festival featuring top artists from around the world with multiple stages.",
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "July 20-22, 2024",
    time: "2:00 PM",
    location: "Austin, TX",
    price: "From $159",
    category: "Music",
    attendees: 5000,
    rating: 4.9,
  },
  {
    id: 3,
    title: "Startup Pitch Competition",
    description: "Watch innovative startups pitch their ideas to investors and compete for funding.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "April 8, 2024",
    time: "6:00 PM",
    location: "New York, NY",
    price: "From $99",
    category: "Business",
    attendees: 800,
    rating: 4.7,
  },
];

export function FeaturedEvents() {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Events
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover amazing events happening near you and around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-md h-full flex flex-col">
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-600 hover:bg-purple-700">
                    {event.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-black/50 rounded-full px-2 py-1 text-white text-sm">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{event.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-1">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4 text-purple-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="h-4 w-4 text-purple-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4 text-purple-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Users className="h-4 w-4 text-purple-600" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="text-lg font-bold text-purple-600">
                    {event.price}
                  </div>
                  <Button asChild className="w-full sm:w-auto">
                    <Link href={`/events/${event.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild className="px-6 sm:px-8 w-full sm:w-auto">
            <Link href="/events">
              View All Events
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}