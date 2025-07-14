"use client"

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Star, 
  Clock, 
  Share2, 
  Heart,
  CreditCard,
  Check,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

const events = [
  {
    id: 1,
    title: "Tech Conference 2024",
    description: "Join the biggest tech conference of the year featuring industry leaders and cutting-edge innovations. This comprehensive event will cover the latest trends in AI, machine learning, blockchain, and web development.",
    fullDescription: "The Tech Conference 2024 is a premier gathering of technology professionals, innovators, and thought leaders from around the world. Over three days, attendees will experience keynote presentations from industry pioneers, hands-on workshops, networking opportunities, and exclusive product demonstrations. The conference features multiple tracks covering artificial intelligence, cybersecurity, cloud computing, and emerging technologies. With over 100 speakers and 50+ sessions, this event promises to be the most comprehensive tech conference of the year.",
    image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "March 15, 2024",
    startTime: "9:00 AM",
    endTime: "6:00 PM",
    location: "San Francisco, CA",
    venue: "Moscone Center",
    category: "Technology",
    attendees: 2500,
    rating: 4.8,
    totalReviews: 324,
    organizer: "TechEvents Inc.",
    ticketTypes: [
      {
        name: "Early Bird",
        price: 199,
        originalPrice: 299,
        description: "Limited time offer - includes all sessions and networking lunch",
        available: 50,
        total: 500
      },
      {
        name: "Regular",
        price: 299,
        originalPrice: null,
        description: "Full access to all sessions, workshops, and networking events",
        available: 200,
        total: 1000
      },
      {
        name: "VIP",
        price: 599,
        originalPrice: null,
        description: "Premium access with exclusive networking dinner and priority seating",
        available: 25,
        total: 100
      }
    ]
  }
];

export default function EventDetailsPage() {
  const params = useParams();
  const eventId = parseInt(params.id as string);
  const event = events.find(e => e.id === eventId);
  const [selectedTicket, setSelectedTicket] = useState(0);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Event Not Found</h1>
            <Button asChild className="mt-4">
              <Link href="/events">Back to Events</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <Button variant="ghost" asChild className="p-0">
              <Link href="/events" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Events
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Hero Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-600 hover:bg-purple-700">
                    {event.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Event Details */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {event.title}
                  </h1>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{event.rating}</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        ({event.totalReviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 text-purple-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4 text-purple-600" />
                      <span>{event.startTime} - {event.endTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 text-purple-600" />
                      <span>{event.venue}, {event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Users className="h-4 w-4 text-purple-600" />
                      <span>By {event.organizer}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {event.description}
                  </p>

                  <Separator className="my-6" />

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      About This Event
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {event.fullDescription}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Ticket Selection */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Select Tickets
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    {event.ticketTypes.map((ticket, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedTicket === index
                            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'
                        }`}
                        onClick={() => setSelectedTicket(index)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {ticket.name}
                          </h4>
                          <div className="flex items-center gap-2">
                            {ticket.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                ${ticket.originalPrice}
                              </span>
                            )}
                            <span className="text-lg font-bold text-purple-600">
                              ${ticket.price}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {ticket.description}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">
                            {ticket.available} of {ticket.total} available
                          </span>
                          {selectedTicket === index && (
                            <Check className="h-4 w-4 text-purple-600" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-lg font-semibold">
                      <span>Total:</span>
                      <span className="text-purple-600">
                        ${event.ticketTypes[selectedTicket].price}
                      </span>
                    </div>
                    
                    <Button className="w-full" size="lg" asChild>
                      <Link href={`/checkout/${event.id}?ticket=${selectedTicket}`}>
                        <CreditCard className="mr-2 h-4 w-4" />
                        Proceed to Checkout
                      </Link>
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      Secure payment processing • 100% refund guarantee
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}