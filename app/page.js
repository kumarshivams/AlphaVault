import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 stats-gradient opacity-90"></div>
        {/* Money flow background */}
        <div className="absolute inset-0 opacity-30">
          <div className="money-flow money-flow-1">💵</div>
          <div className="money-flow money-flow-2">💴</div>
          <div className="money-flow money-flow-3">💶</div>
          <div className="money-flow money-flow-4">💷</div>
          <div className="money-flow money-flow-5">💵</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 features-section-bg relative overflow-hidden">
        {/* Subtle money background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="money-flow money-flow-1">💵</div>
          <div className="money-flow money-flow-2">💴</div>
          <div className="money-flow money-flow-3">💶</div>
          <div className="money-flow money-flow-4">💷</div>
          <div className="money-flow money-flow-5">💵</div>
          <div className="money-flow money-flow-6">💴</div>
          <div className="money-flow money-flow-7">💶</div>
          <div className="money-flow money-flow-8">💷</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advanced Analytics Card */}
            {featuresData[0] && (
              <Card 
                key={0}
                className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 card-analytics card-hover feature-card-chart"
              >
                <CardContent className="space-y-4 pt-4">
                  <div className="feature-icon-bg bg-blue-100">
                    {featuresData[0].icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{featuresData[0].title}</h3>
                  <p className="text-gray-600">{featuresData[0].description}</p>
                </CardContent>
              </Card>
            )}

            {/* Smart Receipt Scanner Card */}
            {featuresData[1] && (
              <Card 
                key={1}
                className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 card-scanner card-hover feature-card-chart"
              >
                <CardContent className="space-y-4 pt-4">
                  <div className="feature-icon-bg bg-purple-100">
                    {featuresData[1].icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{featuresData[1].title}</h3>
                  <p className="text-gray-600">{featuresData[1].description}</p>
                </CardContent>
              </Card>
            )}

            {/* Budget Planning Card */}
            {featuresData[2] && (
              <Card 
                key={2}
                className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 card-budget card-hover feature-card-chart"
              >
                <CardContent className="space-y-4 pt-4">
                  <div className="feature-icon-bg bg-green-100">
                    {featuresData[2].icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{featuresData[2].title}</h3>
                  <p className="text-gray-600">{featuresData[2].description}</p>
                </CardContent>
              </Card>
            )}

            {/* Multi-Account Support Card */}
            {featuresData[3] && (
              <Card 
                key={3}
                className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 card-multi-account card-hover feature-card-chart"
              >
                <CardContent className="space-y-4 pt-4">
                  <div className="feature-icon-bg bg-orange-100">
                    {featuresData[3].icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{featuresData[3].title}</h3>
                  <p className="text-gray-600">{featuresData[3].description}</p>
                </CardContent>
              </Card>
            )}

            {/* Multi-Currency Card */}
            {featuresData[4] && (
              <Card 
                key={4}
                className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 card-currency card-hover feature-card-chart"
              >
                <CardContent className="space-y-4 pt-4">
                  <div className="feature-icon-bg bg-sky-100">
                    {featuresData[4].icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{featuresData[4].title}</h3>
                  <p className="text-gray-600">{featuresData[4].description}</p>
                </CardContent>
              </Card>
            )}

            {/* Automated Insights Card */}
            {featuresData[5] && (
              <Card 
                key={5}
                className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 card-insights card-hover feature-card-chart"
              >
                <CardContent className="space-y-4 pt-4">
                  <div className="feature-icon-bg bg-pink-100">
                    {featuresData[5].icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{featuresData[5].title}</h3>
                  <p className="text-gray-600">{featuresData[5].description}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-50 relative overflow-hidden">
        {/* Money flow background */}
        <div className="absolute inset-0 opacity-15">
          <div className="money-flow money-flow-1">💵</div>
          <div className="money-flow money-flow-2">💴</div>
          <div className="money-flow money-flow-3">💶</div>
          <div className="money-flow money-flow-4">💷</div>
          <div className="money-flow money-flow-5">💵</div>
          <div className="money-flow money-flow-6">💴</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300 text-white text-2xl">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
        {/* Money flow background */}
        <div className="absolute inset-0 opacity-8">
          <div className="money-flow money-flow-1">💵</div>
          <div className="money-flow money-flow-2">💴</div>
          <div className="money-flow money-flow-3">💶</div>
          <div className="money-flow money-flow-4">💷</div>
          <div className="money-flow money-flow-5">💵</div>
          <div className="money-flow money-flow-6">💴</div>
          <div className="money-flow money-flow-7">💶</div>
          <div className="money-flow money-flow-8">💷</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 border-0 shadow-md hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-purple-50 card-hover"
              >
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                  <div className="flex mt-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 stats-gradient"></div>
        {/* Money flow background */}
        <div className="absolute inset-0 opacity-20">
          <div className="money-flow money-flow-1">💵</div>
          <div className="money-flow money-flow-2">💴</div>
          <div className="money-flow money-flow-3">💶</div>
          <div className="money-flow money-flow-4">💷</div>
          <div className="money-flow money-flow-5">💵</div>
          <div className="money-flow money-flow-6">💴</div>
          <div className="money-flow money-flow-7">💶</div>
          <div className="money-flow money-flow-8">💷</div>
          <div className="money-flow money-flow-9">💵</div>
          <div className="money-flow money-flow-10">💴</div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with AlphaVault - AI Finance Manager
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
