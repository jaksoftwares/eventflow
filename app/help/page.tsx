"use client"

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Search, 
  Book, 
  Users, 
  CreditCard, 
  Settings, 
  BarChart3,
  MessageCircle,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    icon: Book,
    title: 'Getting Started',
    description: 'Learn the basics of EventFlow',
    articles: 12
  },
  {
    icon: Users,
    title: 'Event Management',
    description: 'Create and manage your events',
    articles: 18
  },
  {
    icon: CreditCard,
    title: 'Payments & Tickets',
    description: 'Handle payments and ticketing',
    articles: 15
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Track your event performance',
    articles: 8
  },
  {
    icon: Settings,
    title: 'Account Settings',
    description: 'Manage your account preferences',
    articles: 10
  }
];

const popularArticles = [
  {
    title: 'How to create your first event',
    category: 'Getting Started',
    readTime: '5 min read'
  },
  {
    title: 'Setting up payment processing',
    category: 'Payments & Tickets',
    readTime: '8 min read'
  },
  {
    title: 'Understanding event analytics',
    category: 'Analytics & Reports',
    readTime: '6 min read'
  },
  {
    title: 'Managing attendee registrations',
    category: 'Event Management',
    readTime: '7 min read'
  },
  {
    title: 'Customizing your event page',
    category: 'Event Management',
    readTime: '4 min read'
  }
];

const faqs = [
  {
    question: 'How do I create my first event?',
    answer: 'To create your first event, sign up for an account, click "Create Event" from your dashboard, fill in the event details including title, description, date, location, and ticket information, then publish your event.'
  },
  {
    question: 'What payment methods are supported?',
    answer: 'EventFlow supports all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. We use Stripe for secure payment processing.'
  },
  {
    question: 'How do attendees receive their tickets?',
    answer: 'After successful payment, attendees automatically receive their tickets via email with a QR code. They can also download tickets from their account dashboard or view them on mobile.'
  },
  {
    question: 'Can I customize my event page?',
    answer: 'Yes! Pro and Enterprise users can fully customize their event pages with custom branding, colors, logos, and layouts. Free users get access to basic customization options.'
  },
  {
    question: 'How do I track event performance?',
    answer: 'Your dashboard provides real-time analytics including ticket sales, revenue, attendee demographics, traffic sources, and conversion rates. Export reports for detailed analysis.'
  },
  {
    question: 'What if I need to cancel or reschedule my event?',
    answer: 'You can cancel or reschedule events from your dashboard. EventFlow will automatically notify all attendees and handle refunds according to your refund policy.'
  },
  {
    question: 'Is there a mobile app?',
    answer: 'EventFlow is fully responsive and works perfectly on mobile browsers. We also offer a dedicated mobile app for event organizers to manage events on the go.'
  },
  {
    question: 'How do I get support?',
    answer: 'Free users get email support, Pro users get priority email support, and Enterprise users get 24/7 phone and email support plus a dedicated account manager.'
  }
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Help Center
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Find answers to your questions and learn how to make the most of EventFlow
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-purple-200 focus:border-purple-500 dark:border-purple-700 dark:focus:border-purple-400"
                />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3">
                        <category.icon className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {category.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {category.articles} articles
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Popular Articles */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Popular Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white flex-1">
                        {article.title}
                      </h3>
                      <ExternalLink className="h-4 w-4 text-gray-400 ml-2 flex-shrink-0" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-white hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Still Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Button variant="outline" asChild className="h-auto p-4">
                    <Link href="/contact">
                      <div className="text-center">
                        <Mail className="h-6 w-6 mx-auto mb-2" />
                        <div className="font-medium">Email Support</div>
                        <div className="text-xs text-gray-500">24-48 hours</div>
                      </div>
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-auto p-4">
                    <div className="text-center">
                      <MessageCircle className="h-6 w-6 mx-auto mb-2" />
                      <div className="font-medium">Live Chat</div>
                      <div className="text-xs text-gray-500">Mon-Fri 9AM-6PM</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4">
                    <div className="text-center">
                      <Phone className="h-6 w-6 mx-auto mb-2" />
                      <div className="font-medium">Phone Support</div>
                      <div className="text-xs text-gray-500">Pro & Enterprise</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}