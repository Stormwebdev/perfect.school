import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../components/card';
import { TrendingUp, Target, CheckCircle, Users } from 'lucide-react';

export function CaseStudyPage() {
  const metrics = [
    { label: 'Revenue Increase', value: '+245%', icon: TrendingUp },
    { label: 'User Engagement', value: '+180%', icon: Users },
    { label: 'Conversion Rate', value: '+95%', icon: Target },
    { label: 'Client Satisfaction', value: '98%', icon: CheckCircle },
  ];
  
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground mb-6">
              Case Study
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TechFlow E-Commerce Platform
            </h1>
            <p className="text-xl text-muted-foreground">
              How we helped TechFlow scale their e-commerce business with a custom platform
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Project Overview */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden mb-12">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop"
              alt="Project Overview"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <h3 className="text-xl font-semibold mb-4">Client</h3>
              <p className="text-muted-foreground">TechFlow Inc. - Leading technology retailer</p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-4">Timeline</h3>
              <p className="text-muted-foreground">6 months (January - June 2024)</p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <p className="text-muted-foreground">Web Development, UI/UX Design, Cloud Infrastructure</p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-4">Technologies</h3>
              <p className="text-muted-foreground">React, Node.js, MongoDB, AWS, Stripe</p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Problem */}
      <section className="py-12 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg text-muted-foreground mb-4">
            TechFlow was struggling with an outdated e-commerce platform that couldn't handle their growing customer base. Their existing solution had performance issues, lacked modern features, and provided a poor mobile experience.
          </p>
          <p className="text-lg text-muted-foreground">
            They needed a complete platform overhaul that would support their growth ambitions while providing an exceptional user experience across all devices.
          </p>
        </div>
      </section>
      
      {/* Solution */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Our Solution</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">1. Discovery & Research</h3>
              <p className="text-muted-foreground">
                We conducted extensive user research and competitor analysis to understand the market landscape and user needs.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">2. Modern Architecture</h3>
              <p className="text-muted-foreground">
                Built a scalable microservices architecture using React for the frontend and Node.js for the backend, deployed on AWS.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">3. Enhanced UX</h3>
              <p className="text-muted-foreground">
                Designed an intuitive, mobile-first interface with advanced features like real-time inventory, personalized recommendations, and one-click checkout.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">4. Performance Optimization</h3>
              <p className="text-muted-foreground">
                Implemented advanced caching, lazy loading, and CDN integration to achieve sub-second page load times.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results */}
      <section className="py-12 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">The Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="text-white" size={28} />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <div className="text-center">
              <p className="text-xl italic mb-6">
                "The team delivered beyond our expectations. The new platform has transformed our business and our customers love it."
              </p>
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-muted-foreground">CEO, TechFlow Inc.</div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
