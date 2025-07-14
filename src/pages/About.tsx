import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  Users,
  Award,
  Target,
  Heart,
  Shield,
  Leaf,
  Clock,
  CheckCircle,
  Mail,
  Phone,
  Star
} from 'lucide-react';

import lawnTeam from '@/assets/lawn-team.jpg';
import teamWork from '@/assets/team-work.jpg';
import beautifulLawn from '@/assets/beautiful-lawn.jpg';
import officeBuilding from '@/assets/office-building.jpg';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'Markus Tamm',
      role: t('language') === 'et' ? 'Juht ja asutaja' : 'CEO & Founder',
      experience: t('language') === 'et' ? '15+ aastat kogemust' : '15+ years experience',
      specialization: t('language') === 'et' ? 'Maastikuarhitektuur' : 'Landscape Architecture',
      description: t('language') === 'et' 
        ? 'Markus asutas ettevõtte 2014. aastal kirjutusega luua kõige kaunim ja terving murug.'
        : 'Markus founded the company in 2014 with a passion for creating beautiful and healthy lawns.',
      email: 'markus@muruhooldus.ee',
      phone: '+372 123 4567'
    },
    {
      name: 'Liis Kask',
      role: t('language') === 'et' ? 'Projektijuht' : 'Project Manager',
      experience: t('language') === 'et' ? '8+ aastat kogemust' : '8+ years experience',
      specialization: t('language') === 'et' ? 'Projektijuhtimine' : 'Project Management',
      description: t('language') === 'et' 
        ? 'Liis vastutab kõikide projektide planeerimise ja koordineerimise eest.'
        : 'Liis is responsible for planning and coordinating all our projects.',
      email: 'liis@muruhooldus.ee',
      phone: '+372 123 4568'
    },
    {
      name: 'Andres Mägi',
      role: t('language') === 'et' ? 'Peaaiandur' : 'Head Gardener',
      experience: t('language') === 'et' ? '12+ aastat kogemust' : '12+ years experience',
      specialization: t('language') === 'et' ? 'Taimede hooldus' : 'Plant Care',
      description: t('language') === 'et' 
        ? 'Andres on meie taimede ekspert, kes teab kõike murude ja taimede hooldusest.'
        : 'Andres is our plant expert who knows everything about lawn and plant care.',
      email: 'andres@muruhooldus.ee',
      phone: '+372 123 4569'
    },
    {
      name: 'Kati Org',
      role: t('language') === 'et' ? 'Klienditeeninduse juht' : 'Customer Service Manager',
      experience: t('language') === 'et' ? '6+ aastat kogemust' : '6+ years experience',
      specialization: t('language') === 'et' ? 'Klienditeenindus' : 'Customer Service',
      description: t('language') === 'et' 
        ? 'Kati tagab, et kõik meie kliendid oleksid täiesti rahul meie teenustega.'
        : 'Kati ensures that all our clients are completely satisfied with our services.',
      email: 'kati@muruhooldus.ee',
      phone: '+372 123 4570'
    }
  ];

  const values = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: t('language') === 'et' ? 'Keskkonnasõbralikkus' : 'Environmental Friendliness',
      description: t('language') === 'et' 
        ? 'Kasutame ainult keskkonnasõbralikke meetodeid ja materjale'
        : 'We only use environmentally friendly methods and materials'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: t('language') === 'et' ? 'Kvaliteet' : 'Quality',
      description: t('language') === 'et' 
        ? 'Kõigis meie töödes on kvaliteet esmatähtis'
        : 'Quality is our top priority in all our work'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: t('language') === 'et' ? 'Usaldusväärsus' : 'Reliability',
      description: t('language') === 'et' 
        ? 'Täidame alati oma lubadused ja tähtajad'
        : 'We always keep our promises and deadlines'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: t('language') === 'et' ? 'Kirg' : 'Passion',
      description: t('language') === 'et' 
        ? 'Töötame kirjutusega ja armastusega'
        : 'We work with passion and love'
    }
  ];

  const milestones = [
    {
      year: '2014',
      title: t('language') === 'et' ? 'Ettevõtte asutamine' : 'Company Founded',
      description: t('language') === 'et' 
        ? 'Markus Tamm asutas ettevõtte kahe töötajaga'
        : 'Markus Tamm founded the company with two employees'
    },
    {
      year: '2016',
      title: t('language') === 'et' ? 'Esimesed 100 klienti' : 'First 100 Clients',
      description: t('language') === 'et' 
        ? 'Saavutasime esimesed 100 rahuloleva kliendi'
        : 'We reached our first 100 satisfied clients'
    },
    {
      year: '2018',
      title: t('language') === 'et' ? 'Laiendamine' : 'Expansion',
      description: t('language') === 'et' 
        ? 'Laiendasime teenuseid kogu Eesti territooriumile'
        : 'We expanded our services to cover all of Estonia'
    },
    {
      year: '2020',
      title: t('language') === 'et' ? 'Tehnoloogia uuendamine' : 'Technology Upgrade',
      description: t('language') === 'et' 
        ? 'Investeerisime uudsesse tehnoloogiasse ja seadmetesse'
        : 'We invested in new technology and equipment'
    },
    {
      year: '2022',
      title: t('language') === 'et' ? 'Keskkonnateadlikkus' : 'Environmental Focus',
      description: t('language') === 'et' 
        ? 'Läksime üle 100% keskkonnasõbralikele meetoditele'
        : 'We switched to 100% environmentally friendly methods'
    },
    {
      year: '2024',
      title: t('language') === 'et' ? 'Täna' : 'Today',
      description: t('language') === 'et' 
        ? '500+ rahuloleva kliendi ja 50+ meeskonnaliiget'
        : '500+ satisfied clients and 50+ team members'
    }
  ];

  const certifications = [
    {
      title: t('language') === 'et' ? 'ISO 9001 Sertifikaat' : 'ISO 9001 Certificate',
      description: t('language') === 'et' ? 'Kvaliteedijuhtimise süsteem' : 'Quality Management System'
    },
    {
      title: t('language') === 'et' ? 'ISO 14001 Sertifikaat' : 'ISO 14001 Certificate',
      description: t('language') === 'et' ? 'Keskkonnajuhtimise süsteem' : 'Environmental Management System'
    },
    {
      title: t('language') === 'et' ? 'Aianduse litsents' : 'Gardening License',
      description: t('language') === 'et' ? 'Professionaalne aianduse litsents' : 'Professional gardening license'
    },
    {
      title: t('language') === 'et' ? 'Töötajate koolitus' : 'Employee Training',
      description: t('language') === 'et' ? 'Regulaarsed koolitused ja sertifikaadid' : 'Regular training and certifications'
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('language') === 'et' ? 'Meist' : 'About Us'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('language') === 'et' 
              ? 'Tutvu meie meeskonna ja ettevõtte looga, mis on pühendunud kõige parema muruhoolduse pakkumisele'
              : 'Get to know our team and company story, dedicated to providing the best lawn care services'}
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t('language') === 'et' ? 'Meie lugu' : 'Our Story'}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('language') === 'et' 
                ? 'Alustasime 2014. aastal väikse meeskonnaga, kelle eesmärk oli pakkuda kõige kvaliteetsemat muruhooldust Eestis. Täna oleme uhked, et teenindame üle 500 rahuloleva kliendi üle kogu riigi.'
                : 'We started in 2014 with a small team whose goal was to provide the highest quality lawn care in Estonia. Today we are proud to serve over 500 satisfied clients across the country.'}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('language') === 'et' 
                ? 'Meie kirg roheluse ja looduse vastu on see, mis ajab meid edasi igapäevaselt. Usume, et iga aed väärib parimat hooldust ja tähelepanu.'
                : 'Our passion for greenery and nature is what drives us forward every day. We believe that every garden deserves the best care and attention.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="shadow-elegant">
                <Link to="/contact">
                  {t('language') === 'et' ? 'Võta ühendust' : 'Get in Touch'}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/gallery">
                  {t('language') === 'et' ? 'Vaata galeriit' : 'View Gallery'}
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={lawnTeam}
              alt="Our Team"
              className="rounded-lg shadow-elegant w-full"
            />
            <div className="absolute inset-0 bg-gradient-primary/20 rounded-lg" />
          </div>
        </div>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('language') === 'et' ? 'Meie väärtused' : 'Our Values'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('language') === 'et' 
                ? 'Need põhimõtted juhindavad meie igapäevatööd'
                : 'These principles guide our daily work'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('language') === 'et' ? 'Meie meeskond' : 'Our Team'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('language') === 'et' 
                ? 'Tutvuge meie kogenud spetsialistidega'
                : 'Meet our experienced specialists'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <Badge variant="secondary" className="mb-3">
                    {member.experience}
                  </Badge>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{member.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('language') === 'et' ? 'Meie ajalugu' : 'Our History'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('language') === 'et' 
                ? 'Vaadake, kuidas me aja jooksul kasvanud ja arenenud oleme'
                : 'See how we have grown and evolved over time'}
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className="flex-1">
                    <Card className="hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                            {milestone.year}
                          </div>
                          <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('language') === 'et' ? 'Sertifikaadid ja tunnistused' : 'Certifications & Credentials'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('language') === 'et' 
                ? 'Oleme sertifitseeritud ja tunnustatud professionaalid'
                : 'We are certified and recognized professionals'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-gradient-primary text-white rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-white/90">{t('language') === 'et' ? 'Rahulolev klient' : 'Satisfied Clients'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-white/90">{t('language') === 'et' ? 'Lõpetatud projekt' : 'Completed Projects'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-white/90">{t('language') === 'et' ? 'Aastat kogemust' : 'Years Experience'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-white/90">{t('language') === 'et' ? 'Meeskonna liige' : 'Team Members'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {t('language') === 'et' ? 'Valmis meie meeskonnaga töötama?' : 'Ready to Work with Our Team?'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t('language') === 'et' 
              ? 'Võtke meiega ühendust tasuta konsultatsiooni jaoks'
              : 'Contact us for a free consultation'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-elegant">
              <Link to="/contact">
                {t('language') === 'et' ? 'Võta ühendust' : 'Get in Touch'}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/pricing">
                {t('language') === 'et' ? 'Vaata hinnakirja' : 'View Pricing'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 