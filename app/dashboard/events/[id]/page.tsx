"use client"

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign, 
  Edit,
  Share2,
  Download,
  Mail,
  BarChart3,
  Clock,
  ArrowLeft,
  Copy,
  ExternalLink,
  Trash2
} from 'lucide-react';
import Link from 'next/link';
import { DashboardNav } from '@/components/dashboard/dashboard-nav';

const eventData = {
  id: 1,
  title: 'Tech Conference 2024',
  description: 'Join the biggest tech conference of the year featuring industry leaders and cutting-edge innovations.',
  image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=800',
  date: 'March 15, 2024',
  startTime: '9:00 AM',
  endTime: '6:00 PM',
  location: 'Moscone Center, San Francisco, CA',
  category: 'Technology',
  status: 'Published',
  capacity: 500,
  ticketsSold: 245,
  revenue: 12250,
  ticketTypes: [
    { name: 'Early Bird', price: 199, sold: 150, total: 200 },
    { name: 'Regular', price: 299, sold: 80, total: 250 },
    { name: 'VIP', price: 599, sold: 15, total: 50 }
  ]
};

const recentBookings = [
  {
    id: 1,
    customerName: 'John Doe',
    email: 'john@example.com',
    ticketType: 'VIP',
    amount: 599,
    date: '2 hours ago',
    status: 'Confirmed'
  },
  {
    id: 2,
    customerName: 'Sarah Wilson',
    email: 'sarah@example.com',
    ticketType: 'Regular',
    amount: 299,
    date: '1 day ago',
    status: 'Confirmed'
  },
  {
    id: 3,
    customerName: 'Mike Chen',
    email: 'mike@example.com',
    ticketType: 'Early Bird',
    amount: 199,
    date: '2 days ago',
    status: 'Pending'
  }
];

export default function EventDetailsPage() {
  const params = useParams();
  const eventId = params.id;
  const [activeTab, setActiveTab] = useState('overview');

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'published': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'draft': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'cancelled': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardNav />
      
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Button variant="ghost" asChild className="p-0">
              <Link href="/dashboard/events" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Events
              </Link>
            </Button>
          </div>

          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {eventData.title}
                </h1>
                <Badge className={getStatusColor(eventData.status)}>
                  {eventData.status}
                </Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {eventData.description}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{eventData.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{eventData.startTime} - {eventData.endTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{eventData.location}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Copy className="mr-2 h-4 w-4" />
                Copy Link
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Public
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href={`/dashboard/events/${eventId}/edit`}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Tickets Sold
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {eventData.ticketsSold}
                    </p>
                  </div>
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {Math.round((eventData.ticketsSold / eventData.capacity) * 100)}% of capacity
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Revenue
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${eventData.revenue.toLocaleString()}
                    </p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  ${Math.round(eventData.revenue / eventData.ticketsSold)} avg per ticket
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Capacity
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {eventData.capacity}
                    </p>
                  </div>
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {eventData.capacity - eventData.ticketsSold} remaining
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Conversion
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      12.5%
                    </p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  +2.1% from last event
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="tickets">Tickets</TabsTrigger>
              <TabsTrigger value="attendees">Attendees</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Event Image</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={eventData.image}
                      alt={eventData.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Bookings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentBookings.map((booking) => (
                        <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {booking.customerName}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {booking.ticketType} • {booking.email}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-green-600">${booking.amount}</p>
                            <p className="text-sm text-gray-500">{booking.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tickets Tab */}
            <TabsContent value="tickets" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Ticket Types</span>
                    <Button size="sm" asChild>
                      <Link href={`/dashboard/events/${eventId}/edit`}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Tickets
                      </Link>
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {eventData.ticketTypes.map((ticket, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {ticket.name}
                          </h3>
                          <span className="text-lg font-bold text-purple-600">
                            ${ticket.price}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                          <span>Sold: {ticket.sold} / {ticket.total}</span>
                          <span>Revenue: ${(ticket.sold * ticket.price).toLocaleString()}</span>
                        </div>
                        <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-purple-600 h-2 rounded-full" 
                            style={{ width: `${(ticket.sold / ticket.total) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Attendees Tab */}
            <TabsContent value="attendees" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Attendee List</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                      <Button size="sm" variant="outline">
                        <Mail className="mr-2 h-4 w-4" />
                        Email All
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-purple-600">
                              {booking.customerName.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {booking.customerName}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {booking.email}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline">{booking.ticketType}</Badge>
                          <p className="text-sm text-gray-500 mt-1">{booking.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sales Over Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center text-gray-500">
                      Sales Chart Would Go Here
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ticket Type Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center text-gray-500">
                      Pie Chart Would Go Here
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}