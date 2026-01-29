import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/app/components/navigation';
import { Footer } from '@/app/components/footer';
import { HomePage } from '@/app/pages/home';
import { AboutPage } from '@/app/pages/about';
import { ServicesPage } from '@/app/pages/services';
import { PortfolioPage } from '@/app/pages/portfolio';
import { CaseStudyPage } from '@/app/pages/case-study';
import { BlogPage } from '@/app/pages/blog';
import { TestimonialsPage } from '@/app/pages/testimonials';
import { ContactPage } from '@/app/pages/contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/case-study" element={<CaseStudyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
