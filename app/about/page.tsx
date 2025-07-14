"use client"

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Target, 
  Award, 
  Heart,
  Calendar,
  Globe,
  Shield,
  Zap
} from 'lucide-react';
import Link from 'next/link';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Co-Founder',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Former VP of Product at major tech company with 15+ years in event technology.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO & Co-Founder',
    image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Full-stack engineer with expertise in scalable platforms and payment systems.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Award-winning UX designer focused on creating intuitive event experiences.'
  },
  {
    name: 'David Kim',
    role: 'Head of Marketing',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Growth marketing expert with deep experience in the events industry.'
  }
];

const values = [
  {
    icon: Heart,
    title: 'User-Centric',
    description: 'Every decision we make is guided by what\'s best for our users and their event experiences.'
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We prioritize the security and privacy of all user data and transactions.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We continuously push the boundaries of what\'s possible in event technology.'
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'Making event management accessible to everyone, regardless of technical expertise.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About EventFlow
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're on a mission to make event management effortless and event experiences unforgettable. 
              Founded in 2020, EventFlow has grown to serve thousands of event organizers worldwide.
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    EventFlow was born from a simple frustration: existing event management tools were 
                    either too complex for small organizers or too limited for growing businesses. 
                    Our founders experienced this firsthand while organizing tech meetups and conferences.
                  </p>
                  <p>
                    We set out to create a platform that would scale with organizers' needs - from 
                    intimate workshops to large-scale conferences. Today, EventFlow powers over 10,000 
                    events annually, helping organizers focus on what matters most: creating amazing experiences.
                  </p>
                  <p>
                    Our commitment to innovation and user experience has made us the fastest-growing 
                    event management platform, trusted by organizers in over 50 countries.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="rounded-lg shadow-xl w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-6 sm:p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  To democratize event management by providing powerful, intuitive tools that enable 
                  anyone to create and manage successful events, regardless of their technical expertise 
                  or budget.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  To become the global standard for event management, connecting communities worldwide 
                  through seamless, memorable experiences that bring people together and create lasting impact.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 text-sm mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 sm:p-12 text-white mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">EventFlow by the Numbers</h2>
              <p className="text-lg text-purple-100">
                Our impact on the events industry continues to grow
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">50K+</div>
                <div className="text-sm sm:text-base text-purple-100">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">10K+</div>
                <div className="text-sm sm:text-base text-purple-100">Events Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">150+</div>
                <div className="text-sm sm:text-base text-purple-100">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-sm sm:text-base text-purple-100">User Rating</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're planning your first event or your hundredth, EventFlow is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/register">
                  <Users className="mr-2 h-4 w-4" />
                  Get Started Free
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}