import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Filter,
  Search,
  MapPin,
  Calendar,
  Eye,
  Grid,
  List
} from 'lucide-react';

import beautifulLawn from '@/assets/beautiful-lawn.jpg';
import serviceMowing from '@/assets/service-mowing.jpg';
import serviceTrimming from '@/assets/service-trimming.jpg';
import serviceCleanup from '@/assets/service-cleanup.jpg';
import lawnTeam from '@/assets/lawn-team.jpg';
import heroLawnService from '@/assets/hero-lawn-service.jpg';
import teamWork from '@/assets/team-work.jpg';
import officeBuilding from '@/assets/office-building.jpg';

export const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const projects = [
    {
      id: 1,
      title: t('language') === 'et' ? 'Perekonna eramaja aed' : 'Family Home Garden',
      category: t('language') === 'et' ? 'Eramajad' : 'Residential',
      location: 'Tallinn, Estonia',
      date: '2024-05-15',
      image: beautifulLawn,
      description: t('language') === 'et' 
        ? 'Täielik muruhooldus ja maastikuarhitektuur perekonna jaoks'
        : 'Complete lawn care and landscaping for a family home',
      services: [
        t('language') === 'et' ? 'Muruhooldus' : 'Lawn Care',
        t('language') === 'et' ? 'Maastikuarhitektuur' : 'Landscaping',
        t('language') === 'et' ? 'Istutamine' : 'Planting'
      ]
    },
    {
      id: 2,
      title: t('language') === 'et' ? 'Bürooholone hooldus' : 'Office Complex Maintenance',
      category: t('language') === 'et' ? 'Ärihooned' : 'Commercial',
      location: 'Tartu, Estonia',
      date: '2024-04-20',
      image: officeBuilding,
      description: t('language') === 'et' 
        ? 'Regulaarne muruhooldus ja haljastus büroohoonet'
        : 'Regular lawn maintenance and landscaping for office complex',
      services: [
        t('language') === 'et' ? 'Muruniitmine' : 'Lawn Mowing',
        t('language') === 'et' ? 'Hekipiiramine' : 'Hedge Trimming',
        t('language') === 'et' ? 'Hooajaline hooldus' : 'Seasonal Maintenance'
      ]
    },
    {
      id: 3,
      title: t('language') === 'et' ? 'Pargi renoveerimine' : 'Park Renovation',
      category: t('language') === 'et' ? 'Avalik ruum' : 'Public Space',
      location: 'Pärnu, Estonia',
      date: '2024-03-10',
      image: heroLawnService,
      description: t('language') === 'et' 
        ? 'Kohaliku pargi täielik renoveerimine ja haljastamine'
        : 'Complete renovation and landscaping of local park',
      services: [
        t('language') === 'et' ? 'Pargi kujundus' : 'Park Design',
        t('language') === 'et' ? 'Murupaigaldus' : 'Lawn Installation',
        t('language') === 'et' ? 'Puude istutamine' : 'Tree Planting'
      ]
    },
    {
      id: 4,
      title: t('language') === 'et' ? 'Spordiväljakute hooldus' : 'Sports Field Maintenance',
      category: t('language') === 'et' ? 'Spordiväljakud' : 'Sports Fields',
      location: 'Narva, Estonia',
      date: '2024-06-05',
      image: serviceMowing,
      description: t('language') === 'et' 
        ? 'Professionaalne jalgpalliväljaku hooldus ja taastamine'
        : 'Professional football field maintenance and restoration',
      services: [
        t('language') === 'et' ? 'Väljaku hooldus' : 'Field Care',
        t('language') === 'et' ? 'Professionaalne niitmine' : 'Professional Mowing',
        t('language') === 'et' ? 'Muru taastamine' : 'Turf Restoration'
      ]
    },
    {
      id: 5,
      title: t('language') === 'et' ? 'Villaaed koos tiigiga' : 'Villa Garden with Pond',
      category: t('language') === 'et' ? 'Eramajad' : 'Residential',
      location: 'Viimsi, Estonia',
      date: '2024-07-12',
      image: serviceTrimming,
      description: t('language') === 'et' 
        ? 'Luksuslik villaaed koos veeelemendiga ja keerulise haljastusega'
        : 'Luxury villa garden with water feature and complex landscaping',
      services: [
        t('language') === 'et' ? 'Veeelemendid' : 'Water Features',
        t('language') === 'et' ? 'Keerulised haljastus' : 'Complex Landscaping',
        t('language') === 'et' ? 'Dekoratiivsed taimed' : 'Decorative Plants'
      ]
    },
    {
      id: 6,
      title: t('language') === 'et' ? 'Kooliaed ja väljakud' : 'School Garden and Grounds',
      category: t('language') === 'et' ? 'Haridusasutused' : 'Educational',
      location: 'Viljandi, Estonia',
      date: '2024-08-03',
      image: serviceCleanup,
      description: t('language') === 'et' 
        ? 'Kooli territooriumi korrastamine ja laste jaoks turvalise keskkonna loomine'
        : 'School grounds maintenance and creating safe environment for children',
      services: [
        t('language') === 'et' ? 'Territooriumi korrastamine' : 'Grounds Maintenance',
        t('language') === 'et' ? 'Ohutuse tagamine' : 'Safety Measures',
        t('language') === 'et' ? 'Hariduslik aiandus' : 'Educational Gardening'
      ]
    },
    {
      id: 7,
      title: t('language') === 'et' ? 'Hotelli territoorium' : 'Hotel Territory',
      category: t('language') === 'et' ? 'Ärihooned' : 'Commercial',
      location: 'Kuressaare, Estonia',
      date: '2024-09-18',
      image: lawnTeam,
      description: t('language') === 'et' 
        ? 'Hotelli ümbruse kaunistamine ja külaliste muljet avaldav haljastus'
        : 'Hotel surroundings beautification and impressive landscaping for guests',
      services: [
        t('language') === 'et' ? 'Dekoratiivsed voodi' : 'Decorative Beds',
        t('language') === 'et' ? 'Hooajalised lilled' : 'Seasonal Flowers',
        t('language') === 'et' ? 'Pidev hooldus' : 'Continuous Maintenance'
      ]
    },
    {
      id: 8,
      title: t('language') === 'et' ? 'Korterelamu territorium' : 'Apartment Building Territory',
      category: t('language') === 'et' ? 'Korterelamu' : 'Residential Complex',
      location: 'Tartu, Estonia',
      date: '2024-10-05',
      image: teamWork,
      description: t('language') === 'et' 
        ? 'Korterelamu ümbruse korrastamine ja elanike jaoks mugava keskkonna loomine'
        : 'Apartment building surroundings maintenance and creating comfortable environment for residents',
      services: [
        t('language') === 'et' ? 'Sisehoovis haljastus' : 'Courtyard Landscaping',
        t('language') === 'et' ? 'Mänguväljakud' : 'Playgrounds',
        t('language') === 'et' ? 'Parkimisväljakud' : 'Parking Areas'
      ]
    }
  ];

  const categories = [
    { name: t('language') === 'et' ? 'Kõik' : 'All', value: 'all', count: projects.length },
    { name: t('language') === 'et' ? 'Eramajad' : 'Residential', value: 'residential', count: 2 },
    { name: t('language') === 'et' ? 'Ärihooned' : 'Commercial', value: 'commercial', count: 2 },
    { name: t('language') === 'et' ? 'Avalik ruum' : 'Public Space', value: 'public', count: 1 },
    { name: t('language') === 'et' ? 'Spordiväljakud' : 'Sports Fields', value: 'sports', count: 1 },
    { name: t('language') === 'et' ? 'Haridusasutused' : 'Educational', value: 'educational', count: 1 },
    { name: t('language') === 'et' ? 'Korterelamu' : 'Residential Complex', value: 'complex', count: 1 }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => {
        const categoryMap: { [key: string]: string } = {
          'residential': t('language') === 'et' ? 'Eramajad' : 'Residential',
          'commercial': t('language') === 'et' ? 'Ärihooned' : 'Commercial',
          'public': t('language') === 'et' ? 'Avalik ruum' : 'Public Space',
          'sports': t('language') === 'et' ? 'Spordiväljakud' : 'Sports Fields',
          'educational': t('language') === 'et' ? 'Haridusasutused' : 'Educational',
          'complex': t('language') === 'et' ? 'Korterelamu' : 'Residential Complex'
        };
        return project.category === categoryMap[selectedCategory];
      });

  return (
    <div className="min-h-screen bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('language') === 'et' ? 'Meie tööde galerii' : 'Our Work Gallery'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('language') === 'et' 
              ? 'Vaadake meie viimaste projektide galeriid ja saage inspiratsiooni oma aiale'
              : 'Browse our recent project gallery and get inspiration for your garden'}
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 items-center justify-between">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="flex items-center gap-2"
              >
                {category.name}
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className={`overflow-hidden ${
                viewMode === 'grid' ? 'aspect-video' : 'aspect-[2/1]'
              }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    {t('language') === 'et' ? 'Vaata detaile' : 'View Details'}
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{project.category}</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {project.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{project.location}</span>
                </div>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.services.map((service, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-primary text-white rounded-lg p-8">
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

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {t('language') === 'et' ? 'Valmis alustama oma projekti?' : 'Ready to Start Your Project?'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t('language') === 'et' 
              ? 'Võtke meiega ühendust tasuta konsultatsiooni jaoks'
              : 'Contact us for a free consultation'}
          </p>
          <Button size="lg" className="shadow-elegant">
            {t('language') === 'et' ? 'Võta ühendust' : 'Get in Touch'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery; 