"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Plus, 
  Eye,
  Edit,
  Trash2,
  Download,
  Mail,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';
import { DashboardNav } from '@/components/dashboard/dashboard-nav';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Total Events',
      value: '12',
      change: '+2 from last month',
      icon: Calendar,
      color: 'text-purple-600'
    },
    {
      title: 'Total Attendees',
      value: '1,234',
      change: '+15% from last month',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+23% from last month',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Conversion Rate',
      value: '12.5%',
      change: '+2.1% from last month',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ];

  const myEvents = [
    {
      id: 1,
      title: 'Tech Conference 2024',
      date: 'March 15, 2024',
      status: 'Published',
      attendees: 245,
      revenue: '$12,250',
      image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      title: 'Startup Networking',
      date: 'April 8, 2024',
      status: 'Draft',
      attendees: 0,
      revenue: '$0',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      title: 'Design Workshop',
      date: 'May 20, 2024',
      status: 'Published',
      attendees: 89,
      revenue: '$3,560',
      image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const recentBookings = [
    {
      id: 1,
      eventTitle: 'Tech Conference 2024',
      customerName: 'John Doe',
      email: 'john@example.com',
      ticketType: 'VIP',
      amount: '$599',
      date: '2 hours ago'
    },
    {
      id: 2,
      eventTitle: 'Design Workshop',
      customerName: 'Sarah Wilson',
      email: 'sarah@example.com',
      ticketType: 'Regular',
      amount: '$89',
      date: '1 day ago'
    },
    {
      id: 3,
      eventTitle: 'Tech Conference 2024',
      customerName: 'Mike Chen',
      email: 'mike@example.com',
      ticketType: 'Early Bird',
      amount: '$199',
      date: '2 days ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardNav />
      
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Welcome back! Here's what's happening with your events.
              </p>
            </div>
            <Button asChild>
              <Link href="/create-event">
                <Plus className="mr-2 h-4 w-4" />
                Create Event
              </Link>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="events">My Events</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Revenue Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center text-gray-500">
                      Chart Component Would Go Here
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentBookings.slice(0, 3).map((booking) => (
                        <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {booking.customerName}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Booked {booking.ticketType} for {booking.eventTitle}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-green-600">{booking.amount}</p>
                            <p className="text-sm text-gray-500">{booking.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* My Events Tab */}
            <TabsContent value="events" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>My Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {myEvents.map((event) => (
                      <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {event.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {event.date}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant={event.status === 'Published' ? 'default' : 'secondary'}>
                                {event.status}
                              </Badge>
                              <span className="text-sm text-gray-500">
                                {event.attendees} attendees
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-green-600">{event.revenue}</span>
                          <div className="flex gap-1">
                            <Button size="sm" variant="ghost">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Bookings Tab */}
            <TabsContent value="bookings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Recent Bookings</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                      <Button size="sm" variant="outline">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Tickets
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {booking.customerName}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {booking.email}
                          </p>
                          <p className="text-sm text-gray-500">
                            {booking.eventTitle} • {booking.ticketType}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-600">{booking.amount}</p>
                          <p className="text-sm text-gray-500">{booking.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}