"use client"

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  DollarSign, 
  Plus, 
  Trash2,
  Upload,
  Save,
  Eye
} from 'lucide-react';

interface TicketTier {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
}

export default function CreateEventPage() {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    category: '',
    date: '',
    startTime: '',
    endTime: '',
    venue: '',
    location: '',
    maxAttendees: '',
    image: ''
  });

  const [ticketTiers, setTicketTiers] = useState<TicketTier[]>([
    {
      id: '1',
      name: 'General Admission',
      price: 0,
      quantity: 100,
      description: 'Standard access to the event'
    }
  ]);

  const categories = [
    'Technology',
    'Business',
    'Music',
    'Art',
    'Food',
    'Sports',
    'Education',
    'Health',
    'Entertainment',
    'Other'
  ];

  const handleInputChange = (field: string, value: string) => {
    setEventData(prev => ({ ...prev, [field]: value }));
  };

  const addTicketTier = () => {
    const newTier: TicketTier = {
      id: Date.now().toString(),
      name: '',
      price: 0,
      quantity: 0,
      description: ''
    };
    setTicketTiers(prev => [...prev, newTier]);
  };

  const updateTicketTier = (id: string, field: keyof TicketTier, value: string | number) => {
    setTicketTiers(prev => prev.map(tier => 
      tier.id === id ? { ...tier, [field]: value } : tier
    ));
  };

  const removeTicketTier = (id: string) => {
    if (ticketTiers.length > 1) {
      setTicketTiers(prev => prev.filter(tier => tier.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle event creation logic here
    console.log('Event Data:', eventData);
    console.log('Ticket Tiers:', ticketTiers);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Create Your Event
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Fill in the details below to create an amazing event experience
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="title">Event Title *</Label>
                    <Input
                      id="title"
                      placeholder="Enter event title"
                      value={eventData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your event..."
                      rows={4}
                      value={eventData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select value={eventData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="maxAttendees">Max Attendees</Label>
                    <Input
                      id="maxAttendees"
                      type="number"
                      placeholder="e.g. 500"
                      value={eventData.maxAttendees}
                      onChange={(e) => handleInputChange('maxAttendees', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Date & Time */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Date & Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="date">Event Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={eventData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="startTime">Start Time *</Label>
                    <Input
                      id="startTime"
                      type="time"
                      value={eventData.startTime}
                      onChange={(e) => handleInputChange('startTime', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="endTime">End Time *</Label>
                    <Input
                      id="endTime"
                      type="time"
                      value={eventData.endTime}
                      onChange={(e) => handleInputChange('endTime', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="venue">Venue Name *</Label>
                    <Input
                      id="venue"
                      placeholder="e.g. Convention Center"
                      value={eventData.venue}
                      onChange={(e) => handleInputChange('venue', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="location">City, State *</Label>
                    <Input
                      id="location"
                      placeholder="e.g. San Francisco, CA"
                      value={eventData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Event Image */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Event Image
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Drag and drop an image, or click to browse
                  </p>
                  <p className="text-sm text-gray-500">
                    Recommended: 1200x600px, JPG or PNG
                  </p>
                  <Button type="button" variant="outline" className="mt-4">
                    Choose File
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Ticket Tiers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Ticket Tiers
                  </div>
                  <Button type="button" onClick={addTicketTier} size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Tier
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {ticketTiers.map((tier, index) => (
                  <div key={tier.id} className="p-4 border rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">Tier {index + 1}</Badge>
                      {ticketTiers.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeTicketTier(tier.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label>Tier Name *</Label>
                        <Input
                          placeholder="e.g. VIP, General"
                          value={tier.name}
                          onChange={(e) => updateTicketTier(tier.id, 'name', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label>Price ($) *</Label>
                        <Input
                          type="number"
                          min="0"
                          step="0.01"
                          placeholder="0.00"
                          value={tier.price}
                          onChange={(e) => updateTicketTier(tier.id, 'price', parseFloat(e.target.value) || 0)}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label>Quantity *</Label>
                        <Input
                          type="number"
                          min="1"
                          placeholder="100"
                          value={tier.quantity}
                          onChange={(e) => updateTicketTier(tier.id, 'quantity', parseInt(e.target.value) || 0)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label>Description</Label>
                      <Textarea
                        placeholder="Describe what's included in this tier..."
                        rows={2}
                        value={tier.description}
                        onChange={(e) => updateTicketTier(tier.id, 'description', e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button type="button" variant="outline" size="lg">
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
              <Button type="button" variant="outline" size="lg">
                <Save className="mr-2 h-4 w-4" />
                Save Draft
              </Button>
              <Button type="submit" size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Create Event
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}