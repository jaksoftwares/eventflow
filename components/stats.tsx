"use client"

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Calendar, MapPin, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 50000,
    label: 'Active Users',
    suffix: '+',
    color: 'text-purple-600',
  },
  {
    icon: Calendar,
    value: 12000,
    label: 'Events Created',
    suffix: '+',
    color: 'text-blue-600',
  },
  {
    icon: MapPin,
    value: 150,
    label: 'Cities Covered',
    suffix: '+',
    color: 'text-green-600',
  },
  {
    icon: Award,
    value: 4.9,
    label: 'User Rating',
    suffix: '/5',
    color: 'text-yellow-600',
  },
];

export function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      const increment = stat.value / 100;
      let current = 0;
      
      return setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timers[index]);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, 20);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value === 4.9 ? counts[index] / 10 : counts[index]}{stat.suffix}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}