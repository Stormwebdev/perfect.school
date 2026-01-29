import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../components/card';
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react';

export function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechFlow Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      content: 'Working with this team has been transformative for our business. Their attention to detail and innovative approach exceeded all expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'Digital Dynamics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      content: 'Exceptional work! The platform they built has helped us scale our operations and improve customer satisfaction significantly.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'InnovateCorp',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      content: 'Their expertise in both design and development is remarkable. They delivered a product that our users absolutely love.',
      rating: 5
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Founder',
      company: 'StartUp Labs',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      content: 'From concept to launch, they were with us every step of the way. The results speak for themselves - 300% growth in 6 months!',
      rating: 5
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Marketing Director',
      company: 'BrandCraft',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
      content: 'The most professional and creative team I\'ve worked with. They transformed our digital presence completely.',
      rating: 5
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'VP Engineering',
      company: 'CloudTech',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      content: 'Outstanding technical expertise combined with great communication. They made the entire process smooth and enjoyable.',
      rating: 5
    },
  ];
  
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Projects Completed', value: '1000+' },
    { icon: TrendingUp, label: 'Client Retention', value: '95%' },
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Client Success Stories
            </h1>
            <p className="text-xl text-muted-foreground">
              See what our clients have to say about working with us
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-12 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col">
                  <Quote className="text-primary mb-4" size={32} />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-yellow-500" size={16} />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 flex-1">
                    {testimonial.content}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Join Our Success Stories</h2>
            <p className="text-muted-foreground mb-6">
              Let's create something extraordinary together
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all">
              Start Your Project
            </button>
          </Card>
        </div>
      </section>
    </div>
  );
}
