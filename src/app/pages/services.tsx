import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from '../components/card';
import { Code, Palette, Smartphone, Globe, Database, Shield } from 'lucide-react';

export function ServicesPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies',
      details: 'We create scalable, performant web applications using React, Next.js, and modern frameworks. Our solutions are optimized for speed, SEO, and user experience.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful interfaces that users love to interact with',
      details: 'Our design process focuses on user research, prototyping, and iterative testing to create intuitive and visually stunning experiences that drive engagement.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      details: 'We build high-performance mobile apps for iOS and Android using React Native and Flutter, ensuring consistent experiences across all devices.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Digital Strategy',
      description: 'Strategic planning for digital transformation',
      details: 'We help businesses navigate the digital landscape with comprehensive strategies that align technology with business goals and drive measurable results.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Database,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services',
      details: 'Our cloud experts design and implement robust, scalable solutions on AWS, Google Cloud, and Azure, ensuring reliability and performance.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance solutions',
      details: 'We implement comprehensive security measures and ensure compliance with industry standards to protect your data and maintain user trust.',
      gradient: 'from-pink-500 to-rose-500'
    },
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
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital solutions tailored to your unique needs
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full cursor-pointer" hover={false}>
                  <div 
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="space-y-4"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform`}>
                      <service.icon className="text-white" size={28} />
                    </div>
                    
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="pt-4 border-t border-border">
                            <p className="text-muted-foreground">{service.details}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <button className="text-primary hover:text-secondary transition-colors">
                      {expandedIndex === index ? 'Show Less' : 'Learn More →'}
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help transform your digital presence
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all">
              Schedule a Consultation
            </button>
          </Card>
        </div>
      </section>
    </div>
  );
}
