"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Users, 
  Search, 
  Filter,
  Download,
  Mail,
  Phone,
  Calendar,
  MapPin,
  MoreHorizontal,
  UserCheck,
  UserX
} from 'lucide-react';
import { DashboardNav } from '@/components/dashboard/dashboard-nav';

const attendees = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    event: 'Tech Conference 2024',
    ticketType: 'VIP',
    amount: 599,
    purchaseDate: '2024-02-15',
    status: 'Confirmed',
    checkInStatus: 'Not Checked In'
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    phone: '+1 (555) 234-5678',
    event: 'Design Workshop',
    ticketType: 'Regular',
    amount: 89,
    purchaseDate: '2024-02-14',
    status: 'Confirmed',
    checkInStatus: 'Checked In'
  },
  {
    id: 3,
    name: 'Mike Chen',
    email: 'mike@example.com',
    phone: '+1 (555) 345-6789',
    event: 'Tech Conference 2024',
    ticketType: 'Early Bird',
    amount: 199,
    purchaseDate: '2024-02-13',
    status: 'Pending',
    checkInStatus: 'Not Checked In'
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    email: 'emily@example.com',
    phone: '+1 (555) 456-7890',
    event: 'Startup Networking',
    ticketType: 'Regular',
    amount: 99,
    purchaseDate: '2024-02-12',
    status: 'Confirmed',
    checkInStatus: 'Checked In'
  },
  {
    id: 5,
    name: 'David Kim',
    email: 'david@example.com',
    phone: '+1 (555) 567-8901',
    event: 'Design Workshop',
    ticketType: 'VIP',
    amount: 149,
    purchaseDate: '2024-02-11',
    status: 'Cancelled',
    checkInStatus: 'Not Applicable'
  }
];

export default function AttendeesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [eventFilter, setEventFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [checkInFilter, setCheckInFilter] = useState('all');

  const filteredAttendees = attendees.filter(attendee => {
    const matchesSearch = 
      attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attendee.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEvent = eventFilter === 'all' || attendee.event === eventFilter;
    const matchesStatus = statusFilter === 'all' || attendee.status.toLowerCase() === statusFilter;
    const matchesCheckIn = checkInFilter === 'all' || attendee.checkInStatus.toLowerCase().includes(checkInFilter);
    
    return matchesSearch && matchesEvent && matchesStatus && matchesCheckIn;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'cancelled': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getCheckInColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'checked in': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'not checked in': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const uniqueEvents = [...new Set(attendees.map(a => a.event))];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardNav />
      
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Attendees</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage all attendees across your events
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export CSV
              </Button>
              <Button variant="outline" size="sm">
                <Mail className="mr-2 h-4 w-4" />
                Email All
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
                      Total Attendees
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {attendees.length}
                    </p>
                  </div>
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Confirmed
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {attendees.filter(a => a.status === 'Confirmed').length}
                    </p>
                  </div>
                  <UserCheck className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Checked In
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {attendees.filter(a => a.checkInStatus === 'Checked In').length}
                    </p>
                  </div>
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Total Revenue
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${attendees.reduce((sum, a) => sum + a.amount, 0).toLocaleString()}
                    </p>
                  </div>
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search attendees..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={eventFilter} onValueChange={setEventFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Events" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Events</SelectItem>
                    {uniqueEvents.map(event => (
                      <SelectItem key={event} value={event}>{event}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={checkInFilter} onValueChange={setCheckInFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Check-in Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Check-in</SelectItem>
                    <SelectItem value="checked">Checked In</SelectItem>
                    <SelectItem value="not">Not Checked In</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" className="w-full">
                  <Filter className="mr-2 h-4 w-4" />
                  More Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Attendees List */}
          <Card>
            <CardHeader>
              <CardTitle>Attendee List ({filteredAttendees.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredAttendees.map((attendee) => (
                  <div key={attendee.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-purple-600">
                          {attendee.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {attendee.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {attendee.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {attendee.phone}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {attendee.event}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {attendee.ticketType}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-medium text-green-600">${attendee.amount}</p>
                        <p className="text-sm text-gray-500">{attendee.purchaseDate}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Badge className={getStatusColor(attendee.status)}>
                          {attendee.status}
                        </Badge>
                        <Badge className={getCheckInColor(attendee.checkInStatus)}>
                          {attendee.checkInStatus}
                        </Badge>
                      </div>
                      <Button size="sm" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredAttendees.length === 0 && (
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No attendees found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Try adjusting your filters or search terms
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}