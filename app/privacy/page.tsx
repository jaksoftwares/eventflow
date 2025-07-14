"use client"

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lock, Users, Database, Globe } from 'lucide-react';

export default function PrivacyPage() {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Account information (name, email, password)',
        'Event details and content you create',
        'Payment and billing information',
        'Usage data and analytics',
        'Device and browser information',
        'Communication preferences'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Provide and improve our services',
        'Process payments and transactions',
        'Send important updates and notifications',
        'Provide customer support',
        'Analyze usage patterns and improve features',
        'Comply with legal obligations'
      ]
    },
    {
      icon: Users,
      title: 'Information Sharing',
      content: [
        'We do not sell your personal information',
        'Event information is shared with attendees as intended',
        'Payment processing through secure third-party providers',
        'Analytics data may be shared in aggregate form',
        'Legal compliance when required by law',
        'Business transfers with appropriate protections'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'Industry-standard encryption for data transmission',
        'Secure data storage with regular backups',
        'Regular security audits and monitoring',
        'Access controls and authentication measures',
        'Employee training on data protection',
        'Incident response procedures'
      ]
    },
    {
      icon: Globe,
      title: 'International Transfers',
      content: [
        'Data may be processed in various countries',
        'Appropriate safeguards for international transfers',
        'Compliance with applicable data protection laws',
        'Standard contractual clauses where required',
        'Regular review of transfer mechanisms',
        'User notification of significant changes'
      ]
    },
    {
      icon: Shield,
      title: 'Your Rights',
      content: [
        'Access your personal information',
        'Correct inaccurate data',
        'Delete your account and data',
        'Export your data',
        'Opt-out of marketing communications',
        'File complaints with supervisory authorities'
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
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Last updated: January 1, 2024
            </p>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              At EventFlow, we take your privacy seriously. This policy explains how we collect, 
              use, and protect your personal information when you use our services.
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Commitment to Privacy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                EventFlow ("we," "our," or "us") is committed to protecting and respecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website and use our event management services.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                By using EventFlow, you agree to the collection and use of information in accordance 
                with this policy. If you do not agree with our policies and practices, do not use our services.
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

          {/* Data Retention */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We retain your personal information only for as long as necessary to provide our services 
                and fulfill the purposes outlined in this privacy policy. Specific retention periods include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Account Data</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Retained while your account is active and for 30 days after deletion
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Event Data</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Retained for 7 years for tax and legal compliance purposes
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Payment Data</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Processed by secure third parties, not stored on our servers
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Analytics Data</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Aggregated data retained indefinitely, personal data for 26 months
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our platform:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Essential Cookies:</span>
                    <span className="text-gray-600 dark:text-gray-300 ml-2">
                      Required for basic functionality and security
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Analytics Cookies:</span>
                    <span className="text-gray-600 dark:text-gray-300 ml-2">
                      Help us understand how you use our services
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Preference Cookies:</span>
                    <span className="text-gray-600 dark:text-gray-300 ml-2">
                      Remember your settings and preferences
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Email:</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">privacy@eventflow.com</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Address:</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">123 Innovation Drive, San Francisco, CA 94105</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="mt-8">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Policy Updates
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date. 
                Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}