import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'et' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  et: {
    // Navigation
    home: 'Avaleht',
    pricing: 'Hinnakiri',
    contact: 'Kontakt',
    
    // Hero Section
    heroTitle: 'Professionaalsed ärilahendused teie edukuseks',
    heroSubtitle: 'Pakume kvaliteetseid teenuseid, mis aitavad teie äril kasvada ja areneda. Meie asjatundjate meeskond on siin, et toetada teid igal sammul.',
    heroButton: 'Alusta koostööd',
    learnMore: 'Tutvu lähemalt',
    
    // Services Section
    servicesTitle: 'Meie teenused',
    servicesSubtitle: 'Laialdane valik professionaalseid lahendusi',
    
    service1Title: 'Ärikonsultatsioon',
    service1Description: 'Professionaalne nõustamine äriprotsesside optimeerimiseks ja kasvu võimaldamiseks.',
    
    service2Title: 'Digitaalne turundus',
    service2Description: 'Kaasaegsed turundusstrateegiad ja digitaalsed lahendused teie brändi tugevdamiseks.',
    
    service3Title: 'Finantsnõustamine',
    service3Description: 'Ekspertide abi finantsplaanimisel ja investeerimisotsuste tegemisel.',
    
    // Features Section
    featuresTitle: 'Miks valida meid?',
    feature1Title: 'Kogemus',
    feature1Description: 'Üle 10 aasta kogemust erinevates valdkondades',
    
    feature2Title: 'Kvaliteet',
    feature2Description: 'Kõrgeimad kvaliteedistandardid kõigis teenustes',
    
    feature3Title: 'Tugi',
    feature3Description: '24/7 klienditugi ja personaalne lähenemisviis',
    
    // About Section
    aboutTitle: 'Meist',
    aboutDescription: 'Oleme innovaatiline ettevõte, mis keskendub klientide vajaduste täitmisele ja pikaajaliste partnerlussuhete loomisele. Meie missioon on pakkuda tipptasemel teenuseid, mis aitavad ettevõtetel saavutada oma eesmärke.',
    
    // Pricing Page
    pricingTitle: 'Meie hinnakirjad',
    pricingSubtitle: 'Valige teie vajadustele sobiv pakett',
    
    basicPlan: 'Baaspakett',
    basicPrice: '€99',
    basicFeatures: [
      'Põhilised ärikonsultatsioonid',
      'E-posti tugi',
      'Iganädalased aruanded',
      'Kuni 3 projektiga'
    ],
    
    proPlan: 'Profipakett',
    proPrice: '€299',
    proFeatures: [
      'Täielik ärikonsultatsioon',
      'Prioriteetne tugi',
      'Päevased aruanded',
      'Piiramatult projekte',
      'Personaalne nõustaja'
    ],
    
    enterprisePlan: 'Ettevõttepakett',
    enterprisePrice: '€599',
    enterpriseFeatures: [
      'Kõik profipaketi teenused',
      '24/7 tugi',
      'Kohandatud lahendused',
      'Meeskonna koolitus',
      'Strateegiline planeerimine'
    ],
    
    month: '/kuu',
    getStarted: 'Alusta',
    mostPopular: 'Populaarseim',
    
    // Contact Page
    contactTitle: 'Võtke meiega ühendust',
    contactSubtitle: 'Oleme siin, et aidata teil saavutada oma eesmärke',
    
    contactInfo: 'Kontaktandmed',
    address: 'Aadress',
    phone: 'Telefon',
    email: 'E-post',
    
    contactForm: 'Saatke meile sõnum',
    fullName: 'Täisnimi',
    yourEmail: 'Teie e-post',
    subject: 'Teema',
    message: 'Sõnum',
    sendMessage: 'Saada sõnum',
    
    workingHours: 'Lahtiolekuajad',
    monday: 'Esmaspäev',
    friday: 'Reede',
    saturday: 'Laupäev',
    sunday: 'Pühapäev',
    closed: 'Suletud',
    
    // Footer
    footerDescription: 'Professionaalsed ärilahendused teie edukuseks. Võtke meiega ühendust ja alustame koostööd juba täna.',
    quickLinks: 'Kiirlingid',
    followUs: 'Jälgige meid',
    allRightsReserved: 'Kõik õigused kaitstud.',
  },
  en: {
    // Navigation
    home: 'Home',
    pricing: 'Pricing',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Professional business solutions for your success',
    heroSubtitle: 'We provide quality services that help your business grow and develop. Our team of experts is here to support you every step of the way.',
    heroButton: 'Start cooperation',
    learnMore: 'Learn more',
    
    // Services Section
    servicesTitle: 'Our services',
    servicesSubtitle: 'Wide range of professional solutions',
    
    service1Title: 'Business consulting',
    service1Description: 'Professional advice for optimizing business processes and enabling growth.',
    
    service2Title: 'Digital marketing',
    service2Description: 'Modern marketing strategies and digital solutions to strengthen your brand.',
    
    service3Title: 'Financial consulting',
    service3Description: 'Expert assistance in financial planning and investment decision making.',
    
    // Features Section
    featuresTitle: 'Why choose us?',
    feature1Title: 'Experience',
    feature1Description: 'Over 10 years of experience in various fields',
    
    feature2Title: 'Quality',
    feature2Description: 'Highest quality standards in all services',
    
    feature3Title: 'Support',
    feature3Description: '24/7 customer support and personal approach',
    
    // About Section
    aboutTitle: 'About us',
    aboutDescription: 'We are an innovative company focused on meeting customer needs and building long-term partnerships. Our mission is to provide top-level services that help companies achieve their goals.',
    
    // Pricing Page
    pricingTitle: 'Our pricing',
    pricingSubtitle: 'Choose the package that suits your needs',
    
    basicPlan: 'Basic package',
    basicPrice: '€99',
    basicFeatures: [
      'Basic business consulting',
      'Email support',
      'Weekly reports',
      'Up to 3 projects'
    ],
    
    proPlan: 'Professional package',
    proPrice: '€299',
    proFeatures: [
      'Full business consulting',
      'Priority support',
      'Daily reports',
      'Unlimited projects',
      'Personal advisor'
    ],
    
    enterprisePlan: 'Enterprise package',
    enterprisePrice: '€599',
    enterpriseFeatures: [
      'All professional package services',
      '24/7 support',
      'Custom solutions',
      'Team training',
      'Strategic planning'
    ],
    
    month: '/month',
    getStarted: 'Get started',
    mostPopular: 'Most popular',
    
    // Contact Page
    contactTitle: 'Contact us',
    contactSubtitle: 'We are here to help you achieve your goals',
    
    contactInfo: 'Contact information',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    
    contactForm: 'Send us a message',
    fullName: 'Full name',
    yourEmail: 'Your email',
    subject: 'Subject',
    message: 'Message',
    sendMessage: 'Send message',
    
    workingHours: 'Working hours',
    monday: 'Monday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    closed: 'Closed',
    
    // Footer
    footerDescription: 'Professional business solutions for your success. Contact us and let\'s start cooperation today.',
    quickLinks: 'Quick links',
    followUs: 'Follow us',
    allRightsReserved: 'All rights reserved.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('et');

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations['et']];
    return typeof translation === 'string' ? translation : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};