"use client"

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, CreditCard, Shield, AlertTriangle, Scale } from 'lucide-react';

export default function TermsPage() {
  const sections = [
    {
      icon: Users,
      title: 'User Accounts and Responsibilities',
      content: [
        'You must be at least 18 years old to create an account',
        'Provide accurate and complete information during registration',
        'Maintain the security of your account credentials',
        'You are responsible for all activities under your account',
        'Notify us immediately of any unauthorized use',
        'One person or entity per account unless otherwise agreed'
      ]
    },
    {
      icon: FileText,
      title: 'Event Creation and Content',
      content: [
        'You retain ownership of your event content and data',
        'Grant EventFlow license to display and promote your events',
        'Ensure all event information is accurate and up-to-date',
        'Comply with all applicable laws and regulations',
        'Respect intellectual property rights of others',
        'Prohibited content includes illegal, harmful, or offensive material'
      ]
    },
    {
      icon: CreditCard,
      title: 'Payment Terms and Fees',
      content: [
        'Service fees are clearly disclosed before payment',
        'Payment processing handled by secure third-party providers',
        'Refunds subject to our refund policy and event organizer terms',
        'You are responsible for applicable taxes',
        'Chargebacks may result in account suspension',
        'Pricing may change with 30 days notice'
      ]
    },
    {
      icon: Shield,
      title: 'Platform Usage and Conduct',
      content: [
        'Use services only for lawful purposes',
        'Do not interfere with platform security or functionality',
        'Respect other users and maintain professional conduct',
        'No spam, harassment, or abusive behavior',
        'Report violations to our support team',
        'We reserve the right to suspend accounts for violations'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Limitations and Disclaimers',
      content: [
        'Services provided "as is" without warranties',
        'We are not liable for event cancellations or disputes',
        'Maximum liability limited to fees paid in past 12 months',
        'No guarantee of uninterrupted service availability',
        'Third-party integrations subject to their own terms',
        'Force majeure events may affect service delivery'
      ]
    },
    {
      icon: Scale,
      title: 'Dispute Resolution',
      content: [
        'Disputes resolved through binding arbitration',
        'Governing law: State of California, United States',
        'Class action lawsuits are waived',
        'Informal resolution attempted before formal proceedings',
        'Arbitration conducted by American Arbitration Association',
        'Exceptions for intellectual property and injunctive relief'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Last updated: January 1, 2024
            </p>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These terms govern your use of EventFlow and the services we provide. 
              Please read them carefully before using our platform.
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Agreement to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By accessing and using EventFlow ("the Service"), you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                EventFlow is owned and operated by EventFlow Inc. ("Company," "we," "our," or "us"). 
                These Terms of Service ("Terms") govern your use of our website, mobile application, 
                and related services.
              </p>
            </CardContent>
          </Card>

          {/* Main Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <section.icon className="h-4 w-4 text-purple-600" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Service Availability */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Service Availability and Modifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Service Uptime</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• 99.9% uptime target for core services</li>
                    <li>• Scheduled maintenance with advance notice</li>
                    <li>• Emergency maintenance as needed</li>
                    <li>• Status updates at status.eventflow.com</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Service Changes</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Features may be added, modified, or removed</li>
                    <li>• 30 days notice for significant changes</li>
                    <li>• Continued use implies acceptance</li>
                    <li>• Legacy features may be deprecated</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Account Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <h4 className="font-semibold text-red-900 dark:text-red-300 mb-2">Termination by You</h4>
                  <p className="text-sm text-red-800 dark:text-red-400">
                    You may terminate your account at any time through your account settings. 
                    Data will be retained for 30 days for recovery purposes.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">Termination by Us</h4>
                  <p className="text-sm text-orange-800 dark:text-orange-400">
                    We may suspend or terminate accounts for violations of these terms, 
                    illegal activity, or extended inactivity with appropriate notice.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Questions and Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Email:</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">legal@eventflow.com</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Phone:</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">+1 (555) 123-4567</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="font-medium text-gray-900 dark:text-white">Address:</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">
                    EventFlow Inc., 123 Innovation Drive, San Francisco, CA 94105
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates Notice */}
          <Card className="mt-8">
            <CardContent className="p-6 sm:p-8 text-center bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Terms Updates
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We reserve the right to modify these terms at any time. Material changes will be 
                communicated via email and platform notifications. Your continued use of EventFlow 
                after changes constitutes acceptance of the updated terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}