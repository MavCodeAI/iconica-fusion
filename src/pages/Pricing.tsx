
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, HelpCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PricingFeatures = {
  free: [
    "Access to 10,000+ free icons",
    "Personal use only",
    "PNG downloads only",
    "Standard license",
    "Basic search functionality",
    "Email support"
  ],
  pro: [
    "Everything in Free plan",
    "Access to 100,000+ premium icons",
    "Commercial use allowed",
    "SVG, PNG, and EPS formats",
    "No attribution required",
    "Priority email support",
    "Regular updates"
  ],
  teams: [
    "Everything in Pro plan",
    "Team collaboration features",
    "Shared collections",
    "Administrative controls",
    "Usage analytics",
    "API access",
    "Dedicated account manager",
    "24/7 phone & email support"
  ]
};

const FAQs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. We do not store your payment information on our servers."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to your plan until the end of your billing period."
  },
  {
    question: "Is there a free trial for premium plans?",
    answer: "Yes, we offer a 7-day free trial for our Pro plan. You won't be charged until the trial period ends, and you can cancel anytime."
  },
  {
    question: "What's the difference between personal and commercial use?",
    answer: "Personal use means using icons for non-commercial projects. Commercial use allows you to use icons in products, websites, or applications that you or your clients sell or monetize."
  },
  {
    question: "Can I use the icons in client projects?",
    answer: "With the Pro and Teams plans, you can use the icons in client projects. The Free plan is limited to personal use only."
  },
  {
    question: "Do you offer discounts for non-profits or educational institutions?",
    answer: "Yes, we offer special pricing for non-profits, educational institutions, and open-source projects. Please contact us for more information."
  }
];

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600">
              Choose the plan that's right for you and get access to thousands of high-quality icons.
            </p>
            
            <div className="mt-8">
              <Tabs 
                defaultValue={billingPeriod} 
                onValueChange={(value) => setBillingPeriod(value as 'monthly' | 'annual')}
                className="inline-flex"
              >
                <TabsList className="grid w-[400px] grid-cols-2">
                  <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                  <TabsTrigger value="annual">
                    Annual Billing
                    <Badge variant="outline" className="ml-2 bg-green-100 text-green-800 border-green-200">
                      Save 20%
                    </Badge>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="relative border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">Free</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-gray-500 ml-2">Forever</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Perfect for personal projects and exploration
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {PricingFeatures.free.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
            
            {/* Pro Plan */}
            <Card className="relative border-brand-300 shadow-md">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Badge className="bg-brand-500 px-3 py-1">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Pro</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">
                    ${billingPeriod === 'monthly' ? '12' : '115'}
                  </span>
                  <span className="text-gray-500 ml-2">
                    /{billingPeriod === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Ideal for designers and developers
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {PricingFeatures.pro.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-brand-500 hover:bg-brand-600">
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>
            
            {/* Team Plan */}
            <Card className="relative border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">Teams</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">
                    ${billingPeriod === 'monthly' ? '49' : '470'}
                  </span>
                  <span className="text-gray-500 ml-2">
                    /{billingPeriod === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  For design teams and agencies
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {PricingFeatures.teams.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Compare Plans</h2>
              <p className="text-gray-600">
                See which plan is right for you and your team
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm border">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-4 px-6 text-left font-medium">Features</th>
                    <th className="py-4 px-6 text-center font-medium">Free</th>
                    <th className="py-4 px-6 text-center font-medium bg-brand-50">Pro</th>
                    <th className="py-4 px-6 text-center font-medium">Teams</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-4 px-6 font-medium">Icon Access</td>
                    <td className="py-4 px-6 text-center">10,000+ icons</td>
                    <td className="py-4 px-6 text-center bg-brand-50">100,000+ icons</td>
                    <td className="py-4 px-6 text-center">100,000+ icons</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-4 px-6 font-medium">
                      <div className="flex items-center">
                        Download Formats
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-4 w-4 ml-2 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Available file formats for icon downloads</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">PNG only</td>
                    <td className="py-4 px-6 text-center bg-brand-50">PNG, SVG, EPS</td>
                    <td className="py-4 px-6 text-center">PNG, SVG, EPS, AI</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-4 px-6 font-medium">Commercial Use</td>
                    <td className="py-4 px-6 text-center">
                      <svg className="h-5 w-5 text-red-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center bg-brand-50">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-4 px-6 font-medium">Attribution Requirement</td>
                    <td className="py-4 px-6 text-center">Required</td>
                    <td className="py-4 px-6 text-center bg-brand-50">Not Required</td>
                    <td className="py-4 px-6 text-center">Not Required</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-4 px-6 font-medium">Collections</td>
                    <td className="py-4 px-6 text-center">3 collections</td>
                    <td className="py-4 px-6 text-center bg-brand-50">Unlimited</td>
                    <td className="py-4 px-6 text-center">Unlimited + Shared</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-4 px-6 font-medium">API Access</td>
                    <td className="py-4 px-6 text-center">
                      <svg className="h-5 w-5 text-red-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center bg-brand-50">
                      <svg className="h-5 w-5 text-red-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-4 px-6 font-medium">Support</td>
                    <td className="py-4 px-6 text-center">Email</td>
                    <td className="py-4 px-6 text-center bg-brand-50">Priority Email</td>
                    <td className="py-4 px-6 text-center">24/7 Email & Phone</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {FAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border shadow-sm">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-24 text-center max-w-3xl mx-auto bg-brand-50 p-8 rounded-lg border border-brand-200">
            <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
            <p className="text-lg mb-6">
              We offer custom enterprise plans for large teams or special requirements.
              Get in touch with us to discuss your needs.
            </p>
            <Button className="bg-brand-500 hover:bg-brand-600">Contact Sales</Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
