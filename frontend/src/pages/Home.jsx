import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import WhyChooseSection from '../components/WhyChooseSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import NewsletterSection from '../components/NewsletterSection';

const Home = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <StatsSection />
      <WhyChooseSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
    </div>
  );
};

export default Home;
