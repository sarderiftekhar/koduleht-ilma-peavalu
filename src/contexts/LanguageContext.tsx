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
    heroTitle: 'Professionaalne muruhooldus teie kodu jaoks',
    heroSubtitle: 'Pakume kvaliteetseid murulõikuse, hekilõikuse ja aiahoolduse teenuseid. Meie asjatundjate meeskond hoiab teie muru alati korras ja kaunina.',
    heroButton: 'Küsi pakkumist',
    learnMore: 'Tutvu teenustega',
    
    // Services Section
    servicesTitle: 'Meie teenused',
    servicesSubtitle: 'Täielik muruhoolduse lahendus teie kodu jaoks',
    
    service1Title: 'Murulõikus',
    service1Description: 'Regulaarne ja professionaalne murulõikus, mis hoiab teie muru tervena ja kaunina aastaringselt.',
    
    service2Title: 'Hekilõikus',
    service2Description: 'Põõsaste, hekivõrkude ja dekoratiivtaimede lõikamine ning kujundamine.',
    
    service3Title: 'Aiakoristus',
    service3Description: 'Lehestiku koristamine, umbrohu eemaldamine ja üldine aiahooldus.',
    
    // Features Section
    featuresTitle: 'Miks valida meid?',
    feature1Title: 'Kogemus',
    feature1Description: 'Üle 10 aasta kogemust muruhoolduses ja haljastuses',
    
    feature2Title: 'Kvaliteet',
    feature2Description: 'Kasutame ainult kvaliteetseid tööriistu ja tehnikaid',
    
    feature3Title: 'Usaldusväärsus',
    feature3Description: 'Korrapärane teenindus ja alati õigel ajal kohal',
    
    // About Section
    aboutTitle: 'Meist',
    aboutDescription: 'Oleme kogemusega muruhoolduse ettevõte, mis spetsialierunud kvaliteetsetele murulõikuse ja hekilõikuse teenustele. Meie eesmärk on hoida teie aed alati kaunis ja korras, et saaksite nautida oma kodu ümbruse ilu.',
    
    // Pricing Page
    pricingTitle: 'Meie hinnakirjad',
    pricingSubtitle: 'Valige teie vajadusele sobiv muruhoolduse pakett',
    
    basicPlan: 'Põhipakett',
    basicPrice: '€25',
    basicFeatures: [
      'Murulõikus kuni 300m²',
      'Servalõikus',
      'Korrapärane teenindus',
      'Kord nädalas suvehooajal'
    ],
    
    proPlan: 'Standardpakett',
    proPrice: '€45',
    proFeatures: [
      'Murulõikus kuni 600m²',
      'Hekide lõikamine',
      'Servalõikus ja äärete puhastus',
      'Lehestiku koristamine sügisel',
      'Prioriteetne teenindus'
    ],
    
    enterprisePlan: 'Premium pakett',
    enterprisePrice: '€75',
    enterpriseFeatures: [
      'Piiramatult muruala',
      'Täielik aiahooldus',
      'Hekilõikus ja kujundamine',
      'Hooajaline aiakoristus',
      'Väetamine ja umbrohutõrje',
      'Aasta ringi hooldus'
    ],
    
    month: '/külastus',
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
    footerDescription: 'Professionaalne muruhooldus teie kodu jaoks. Võtke meiega ühendust ja küsige tasuta hinnapakkumist.',
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
    heroTitle: 'Professional lawn care for your home',
    heroSubtitle: 'We provide quality lawn mowing, hedge trimming and garden maintenance services. Our expert team keeps your lawn looking perfect all year round.',
    heroButton: 'Get a quote',
    learnMore: 'Learn about services',
    
    // Services Section
    servicesTitle: 'Our services',
    servicesSubtitle: 'Complete lawn care solution for your home',
    
    service1Title: 'Lawn mowing',
    service1Description: 'Regular and professional lawn mowing to keep your grass healthy and beautiful year-round.',
    
    service2Title: 'Hedge trimming',
    service2Description: 'Trimming and shaping of bushes, hedges and decorative plants.',
    
    service3Title: 'Garden cleanup',
    service3Description: 'Leaf removal, weed control and general garden maintenance.',
    
    // Features Section
    featuresTitle: 'Why choose us?',
    feature1Title: 'Experience',
    feature1Description: 'Over 10 years of experience in lawn care and landscaping',
    
    feature2Title: 'Quality',
    feature2Description: 'We use only quality tools and techniques',
    
    feature3Title: 'Reliability',
    feature3Description: 'Regular service and always on time',
    
    // About Section
    aboutTitle: 'About us',
    aboutDescription: 'We are an experienced lawn care company specializing in quality lawn mowing and hedge trimming services. Our goal is to keep your garden always beautiful and well-maintained so you can enjoy the beauty of your home surroundings.',
    
    // Pricing Page
    pricingTitle: 'Our pricing',
    pricingSubtitle: 'Choose the lawn care package that suits your needs',
    
    basicPlan: 'Basic package',
    basicPrice: '€25',
    basicFeatures: [
      'Lawn mowing up to 300m²',
      'Edge trimming',
      'Regular service',
      'Once weekly in summer season'
    ],
    
    proPlan: 'Standard package',
    proPrice: '€45',
    proFeatures: [
      'Lawn mowing up to 600m²',
      'Hedge trimming',
      'Edge trimming and cleanup',
      'Autumn leaf removal',
      'Priority service'
    ],
    
    enterprisePlan: 'Premium package',
    enterprisePrice: '€75',
    enterpriseFeatures: [
      'Unlimited lawn area',
      'Complete garden maintenance',
      'Hedge trimming and shaping',
      'Seasonal garden cleanup',
      'Fertilizing and weed control',
      'Year-round maintenance'
    ],
    
    month: '/visit',
    getStarted: 'Get started',
    mostPopular: 'Most popular',
    
    // Contact Page
    contactTitle: 'Contact us',
    contactSubtitle: 'We are here to help you achieve the perfect lawn',
    
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
    footerDescription: 'Professional lawn care for your home. Contact us and get a free quote today.',
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