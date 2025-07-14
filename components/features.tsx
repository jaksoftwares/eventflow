"use client"

import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  CreditCard, 
  QrCode, 
  BarChart, 
  Shield, 
  Smartphone,
  Calendar,
  Mail,
  Globe
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "User Management",
    description: "Comprehensive user profiles for both attendees and organizers with role-based access control."
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Multiple payment options with secure processing and automatic invoicing for peace of mind."
  },
  {
    icon: QrCode,
    title: "Digital Tickets",
    description: "QR code tickets with download and email delivery options for easy access and verification."
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Real-time insights into ticket sales, attendee demographics, and event performance metrics."
  },
  {
    icon: Shield,
    title: "Fraud Protection",
    description: "Advanced security measures to prevent ticket fraud and protect both organizers and attendees."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Fully responsive design that works perfectly on all devices and screen sizes."
  },
  {
    icon: Calendar,
    title: "Event Management",
    description: "Complete event lifecycle management from creation to post-event analytics and feedback."
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Built-in email marketing tools to promote events and communicate with attendees."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Multi-language and multi-currency support for international events and audiences."
  }
];

export function Features() {
  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Powerful features designed to make event management effortless and attendee experience unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
                  <feature.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}