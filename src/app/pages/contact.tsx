import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../components/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@studio.com',
      link: 'mailto:hello@studio.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      link: '#'
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
              Let's Build<br />Something Extraordinary
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to transform your digital vision into reality? Get in touch with us today.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
                
                {/* Abstract 3D Globe */}
                <div className="mt-8 aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="w-32 h-32 rounded-full border-4 border-primary/30"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                      className="absolute w-40 h-40 rounded-full border-4 border-secondary/30"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <form onSubmit={handleSubmit} className="space-y-6" action="https://formspree.io/f/xaqjoqyv">
                  
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className={`absolute left-4 transition-all duration-300 ${
                          focusedField === 'name' || formData.name
                            ? 'top-2 text-xs text-primary'
                            : 'top-1/2 -translate-y-1/2 text-muted-foreground'
                        }`}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 pt-8 pb-4 bg-input-background border border-border rounded-xl focus:border-primary focus:outline-none transition-all"
                      />
                    </div>
                    
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className={`absolute left-4 transition-all duration-300 ${
                          focusedField === 'email' || formData.email
                            ? 'top-2 text-xs text-primary'
                            : 'top-1/2 -translate-y-1/2 text-muted-foreground'
                        }`}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 pt-8 pb-4 bg-input-background border border-border rounded-xl focus:border-primary focus:outline-none transition-all"
                      />
                    </div>
                    
                    <div className="relative">
                      <label
                        htmlFor="company"
                        className={`absolute left-4 transition-all duration-300 ${
                          focusedField === 'company' || formData.company
                            ? 'top-2 text-xs text-primary'
                            : 'top-1/2 -translate-y-1/2 text-muted-foreground'
                        }`}
                      >
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 pt-8 pb-4 bg-input-background border border-border rounded-xl focus:border-primary focus:outline-none transition-all"
                      />
                    </div>
                    
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className={`absolute left-4 transition-all duration-300 ${
                          focusedField === 'message' || formData.message
                            ? 'top-2 text-xs text-primary'
                            : 'top-6 text-muted-foreground'
                        }`}
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 pt-10 pb-4 bg-input-background border border-border rounded-xl focus:border-primary focus:outline-none transition-all resize-none"
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2"
                    >
                      Send Message <Send size={20} />
                    </motion.button>
                  </form>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
