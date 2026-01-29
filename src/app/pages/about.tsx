import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../components/card';
import { Users, Award, Rocket, Heart } from 'lucide-react';

export function AboutPage() {
  const timeline = [
    { year: '2018', title: 'Founded', description: 'Started with a vision to transform digital experiences' },
    { year: '2020', title: 'Growth', description: 'Expanded team and delivered 100+ projects' },
    { year: '2022', title: 'Innovation', description: 'Launched cutting-edge AI-powered solutions' },
    { year: '2024', title: 'Excellence', description: 'Recognized as industry leaders in digital transformation' },
  ];
  
  const values = [
    { icon: Users, title: 'Collaboration', description: 'We work together to achieve extraordinary results' },
    { icon: Award, title: 'Excellence', description: 'We strive for perfection in everything we create' },
    { icon: Rocket, title: 'Innovation', description: 'We push boundaries and embrace new technologies' },
    { icon: Heart, title: 'Passion', description: 'We love what we do and it shows in our work' },
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
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a team of passionate designers, developers, and strategists committed to creating digital experiences that make a difference.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital world.
              </p>
            </Card>
            <Card>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the world's most trusted partner for digital transformation, setting new standards for creativity, innovation, and excellence.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0 w-24">
                  <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 bg-card border border-border rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why We're Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
