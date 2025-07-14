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
    about: 'Meist',
    pricing: 'Hinnakiri',
    gallery: 'Galerii',
    blog: 'Blogi',
    faq: 'KKK',
    contact: 'Kontakt',
    
    // Hero Section
    heroTitle: 'Professionaalne muruhooldus teie kodu jaoks',
    heroSubtitle: 'Pakume kvaliteetseid murulõikuse, hekilõikuse ja aiahoolduse teenuseid. Meie asjatundjate meeskond hoiab teie muru alati korras ja kaunina.',
    heroButton: 'Küsi pakkumist',
    learnMore: 'Tutvu teenustega',
    
    // Statistics Section
    statsHappyClients: 'Rahulolev kliente',
    statsProjectsCompleted: 'Projekte lõpetatud',
    statsYearsExperience: 'Aastat kogemust',
    statsCustomerSupport: 'Klienditugi',
    
    // Services Section
    servicesTitle: 'Meie teenused',
    servicesSubtitle: 'Täielik muruhoolduse lahendus teie kodu jaoks',
    
    service1Title: 'Murulõikus',
    service1Description: 'Regulaarne ja professionaalne murulõikus, mis hoiab teie muru tervena ja kaunina aastaringselt.',
    
    service2Title: 'Hekilõikus',
    service2Description: 'Põõsaste, hekivõrkude ja dekoratiivtaimede lõikamine ning kujundamine.',
    
    service3Title: 'Aiakoristus',
    service3Description: 'Lehestiku koristamine, umbrohu eemaldamine ja üldine aiahooldus.',
    
    // Process Section
    processTitle: 'Kuidas me töötame',
    processSubtitle: 'Meie protsess on lihtne ja tõhus, tagades parima tulemuse',
    processStep1Title: 'Kontakt',
    processStep1Description: 'Võtke meiega ühendust ja rääkige oma vajadustest',
    processStep2Title: 'Hinnangu andmine',
    processStep2Description: 'Külastame teie kinnistut ja anname tasuta hinnangu',
    processStep3Title: 'Planeerimine',
    processStep3Description: 'Planeerime töö ja lepime kokku sobiva aja',
    processStep4Title: 'Teostamine',
    processStep4Description: 'Viime töö kvaliteetselt ja õigeaegselt lõpule',
    
    // Portfolio Section
    portfolioTitle: 'Meie töö näited',
    portfolioSubtitle: 'Vaadake meie viimaseid projekte ja saavutusi',
    portfolioItem1Title: 'Aiandusteenused',
    portfolioItem1Description: 'Kaunis aed koos dekoratiivtaimedega',
    portfolioItem2Title: 'Muru hooldus',
    portfolioItem2Description: 'Professionaalne muru hooldus ja lõikus',
    portfolioItem3Title: 'Heki pügamine',
    portfolioItem3Description: 'Professionaalne heki pügamine ja kujundamine',
    
    // Features Section
    featuresTitle: 'Miks valida meid?',
    feature1Title: 'Kogemus',
    feature1Description: 'Üle 10 aasta kogemust muruhoolduses ja haljastuses',
    
    feature2Title: 'Kvaliteet',
    feature2Description: 'Kasutame ainult kvaliteetseid tööriistu ja tehnikaid',
    
    feature3Title: 'Usaldusväärsus',
    feature3Description: 'Korrapärane teenindus ja alati õigel ajal kohal',
    
    // Team Section
    teamTitle: 'Meie meeskond',
    teamSubtitle: 'Tutvuge meie kogenud spetsialistidega',
    teamMember1Role: 'Projektijuht',
    teamMember1Bio: '10+ aastat kogemust aiahoolduses',
    teamMember2Role: 'Peaspetsialist',
    teamMember2Bio: 'Ekspert muru hoolduses ja kujunduses',
    teamMember3Role: 'Aednike juht',
    teamMember3Bio: 'Spetsialist taimede hoolduses',
    
    // About Section
    aboutTitle: 'Meist',
    aboutDescription: 'Oleme kogemusega muruhoolduse ettevõte, mis spetsialierunud kvaliteetsetele murulõikuse ja hekilõikuse teenustele. Meie eesmärk on hoida teie aed alati kaunis ja korras, et saaksite nautida oma kodu ümbruse ilu.',
    
    // Blog Section
    blogTitle: 'Viimased artiklid',
    blogSubtitle: 'Lugege meie nõuandeid ja juhiseid',
    blogArticle1Title: 'Muru hooldus kevadel',
    blogArticle1Description: 'Kuidas valmistada muru ette kevadiseks hooajaks',
    blogArticle2Title: 'Heki pügamise õige aeg',
    blogArticle2Description: 'Millal ja kuidas teha heki pügamist',
    blogArticle3Title: 'Aed aasta ringi',
    blogArticle3Description: 'Aiahoolduse kalender ja seasonised tööd',
    
    // Testimonials Section
    testimonialsTitle: 'Kliendid meist',
    testimonialsSubtitle: 'Meie rahuloleva kliendid jagavad oma kogemusi meie teenustega',
    testimonial1Name: 'Eramaja omanik',
    testimonial1Text: 'Suurepärane teenus! Meie muru on alati perfektselt hooldatud. Meeskond on professionaalne ja töötab alati ajakohaselt. Soovitan kindlasti!',
    testimonial2Name: 'Korterelamu elanik',
    testimonial2Text: 'Kasutame juba 3 aastat nende teenuseid. Meie korterelamu ümbrus näeb alati hästi välja. Hinnad on mõistlikud ja kvaliteet suurepärane.',
    testimonial3Name: 'Ettevõtte juht',
    testimonial3Text: 'Meie bürooolhoonet hooldatakse professionaalselt. Kliendid märkavad alati kaunist ja korrastatud keskkonda. Väga rahul teenusega!',
    
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
    
    // Additional pricing texts
    pricingAdditionalInfo: 'Vajate kohandatud lahendust? Oleme siin, et aidata.',
    customPricingButton: 'Võtke ühendust kohandatud hinnakirja jaoks',
    
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
    
    // Contact form texts
    contactFormDescription: 'Täitke alljärgnev vorm ja me võtame teiega ühendust esimesel võimalusel.',
    contactMapTitle: 'Leidke meid siit',
    contactMapDescription: 'Interaktiivne kaart oleks siin integreeritud',
    
    // Form validation messages
    formErrorTitle: 'Viga',
    formErrorMessage: 'Palun täitke kõik nõutavad väljad.',
    formSuccessTitle: 'Sõnum saadetud!',
    formSuccessMessage: 'Täname sõnumi eest. Võtame teiega peagi ühendust.',
    
    // Footer
    footerDescription: 'Professionaalne muruhooldus teie kodu jaoks. Võtke meiega ühendust ja küsige tasuta hinnapakkumist.',
    quickLinks: 'Kiirlingid',
    followUs: 'Jälgige meid',
    allRightsReserved: 'Kõik õigused kaitstud.',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    pricing: 'Pricing',
    gallery: 'Gallery',
    blog: 'Blog',
    faq: 'FAQ',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Professional lawn care for your home',
    heroSubtitle: 'We provide quality lawn mowing, hedge trimming and garden maintenance services. Our expert team keeps your lawn looking perfect all year round.',
    heroButton: 'Get a quote',
    learnMore: 'Learn about services',
    
    // Statistics Section
    statsHappyClients: 'Happy Clients',
    statsProjectsCompleted: 'Projects Completed',
    statsYearsExperience: 'Years Experience',
    statsCustomerSupport: 'Customer Support',
    
    // Services Section
    servicesTitle: 'Our services',
    servicesSubtitle: 'Complete lawn care solution for your home',
    
    service1Title: 'Lawn mowing',
    service1Description: 'Regular and professional lawn mowing to keep your grass healthy and beautiful year-round.',
    
    service2Title: 'Hedge trimming',
    service2Description: 'Trimming and shaping of bushes, hedges and decorative plants.',
    
    service3Title: 'Garden cleanup',
    service3Description: 'Leaf removal, weed control and general garden maintenance.',
    
    // Process Section
    processTitle: 'How We Work',
    processSubtitle: 'Our process is simple and efficient, ensuring the best results',
    processStep1Title: 'Contact',
    processStep1Description: 'Get in touch and tell us about your needs',
    processStep2Title: 'Assessment',
    processStep2Description: 'We visit your property and provide a free assessment',
    processStep3Title: 'Planning',
    processStep3Description: 'We plan the work and agree on a convenient time',
    processStep4Title: 'Execution',
    processStep4Description: 'We complete the work with quality and on time',
    
    // Portfolio Section
    portfolioTitle: 'Our Work Examples',
    portfolioSubtitle: 'Check out our recent projects and achievements',
    portfolioItem1Title: 'Garden Design',
    portfolioItem1Description: 'Beautiful garden with decorative plants',
    portfolioItem2Title: 'Lawn Maintenance',
    portfolioItem2Description: 'Professional lawn care and mowing',
    portfolioItem3Title: 'Hedge Trimming',
    portfolioItem3Description: 'Professional hedge trimming and shaping',
    
    // Features Section
    featuresTitle: 'Why choose us?',
    feature1Title: 'Experience',
    feature1Description: 'Over 10 years of experience in lawn care and landscaping',
    
    feature2Title: 'Quality',
    feature2Description: 'We use only quality tools and techniques',
    
    feature3Title: 'Reliability',
    feature3Description: 'Regular service and always on time',
    
    // Team Section
    teamTitle: 'Our Team',
    teamSubtitle: 'Meet our experienced specialists',
    teamMember1Role: 'Project Manager',
    teamMember1Bio: '10+ years experience in garden care',
    teamMember2Role: 'Lead Specialist',
    teamMember2Bio: 'Expert in lawn care and design',
    teamMember3Role: 'Garden Supervisor',
    teamMember3Bio: 'Specialist in plant care',
    
    // About Section
    aboutTitle: 'About us',
    aboutDescription: 'We are an experienced lawn care company specializing in quality lawn mowing and hedge trimming services. Our goal is to keep your garden always beautiful and well-maintained so you can enjoy the beauty of your home surroundings.',
    
    // Blog Section
    blogTitle: 'Latest Articles',
    blogSubtitle: 'Read our tips and guides',
    blogArticle1Title: 'Spring Lawn Care Tips',
    blogArticle1Description: 'How to prepare your lawn for spring season',
    blogArticle2Title: 'Best Time for Hedge Trimming',
    blogArticle2Description: 'When and how to trim your hedges',
    blogArticle3Title: 'Year-Round Garden Care',
    blogArticle3Description: 'Garden maintenance calendar and seasonal tasks',
    
    // Testimonials Section
    testimonialsTitle: 'What Our Clients Say',
    testimonialsSubtitle: 'Our satisfied clients share their experiences with our services',
    testimonial1Name: 'Homeowner',
    testimonial1Text: 'Excellent service! Our lawn is always perfectly maintained. The team is professional and always works on time. Highly recommend!',
    testimonial2Name: 'Apartment Resident',
    testimonial2Text: 'We have been using their services for 3 years. Our apartment building surroundings always look great. Prices are reasonable and quality is excellent.',
    testimonial3Name: 'Company Manager',
    testimonial3Text: 'Our office building is professionally maintained. Clients always notice the beautiful and well-maintained environment. Very satisfied with the service!',
    
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
    
    // Additional pricing texts
    pricingAdditionalInfo: 'Need a custom solution? We\'re here to help.',
    customPricingButton: 'Contact us for custom pricing',
    
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
    
    // Contact form texts
    contactFormDescription: 'Fill out the form below and we\'ll get back to you as soon as possible.',
    contactMapTitle: 'Find us here',
    contactMapDescription: 'Interactive map would be integrated here',
    
    // Form validation messages
    formErrorTitle: 'Error',
    formErrorMessage: 'Please fill in all required fields.',
    formSuccessTitle: 'Message sent!',
    formSuccessMessage: 'Thank you for your message. We\'ll get back to you soon.',
    
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