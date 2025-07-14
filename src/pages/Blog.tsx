import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  Calendar,
  Clock,
  ArrowRight,
  Leaf,
  Sun,
  Snowflake,
  Flower
} from 'lucide-react';

import beautifulLawn from '@/assets/beautiful-lawn.jpg';
import serviceMowing from '@/assets/service-mowing.jpg';
import serviceTrimming from '@/assets/service-trimming.jpg';
import serviceCleanup from '@/assets/service-cleanup.jpg';

export const Blog: React.FC = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: t('language') === 'et' ? 'Kevadised muruhoolduse nipid' : 'Spring Lawn Care Tips',
      excerpt: t('language') === 'et' 
        ? 'Kuidas valmistada oma muru kevadeks ette ja saavutada terve, roheline muru kogu hooaja jooksul.'
        : 'How to prepare your lawn for spring and achieve a healthy, green lawn throughout the season.',
      content: t('language') === 'et' 
        ? 'Kevad on parim aeg alustada muruhooldust. Siin on mõned olulised sammud: 1) Eemalda kõik talvised mustused ja lehed. 2) Kontrolli mullaviljakust. 3) Külva uusi seemneid vajadusel. 4) Alusta regulaarset niitmist. 5) Kasuta sobivat väetist.'
        : 'Spring is the best time to start lawn care. Here are some essential steps: 1) Remove all winter debris and leaves. 2) Test soil fertility. 3) Sow new seeds if needed. 4) Start regular mowing. 5) Apply appropriate fertilizer.',
      date: '2024-03-15',
      category: t('language') === 'et' ? 'Kevadised nipid' : 'Spring Tips',
      readTime: '5 min',
      image: beautifulLawn,
      icon: <Flower className="h-5 w-5" />
    },
    {
      id: 2,
      title: t('language') === 'et' ? 'Suvine muruhooldus' : 'Summer Lawn Maintenance',
      excerpt: t('language') === 'et' 
        ? 'Kuidas hoida oma muru tervena ja rohelisena ka kuuma suveperioodil.'
        : 'How to keep your lawn healthy and green during hot summer periods.',
      content: t('language') === 'et' 
        ? 'Suvel vajab muru erilist tähelepanu. Kastke hommikul või õhtul, vältige kuuma keskpäeva. Niitke kõrgemalt, et jätta rohkem varjutust. Kasutage mulši kuivuse vältimiseks.'
        : 'Summer lawns need special attention. Water in the morning or evening, avoid hot midday. Mow higher to leave more shade. Use mulch to prevent drought.',
      date: '2024-06-20',
      category: t('language') === 'et' ? 'Suvised nipid' : 'Summer Tips',
      readTime: '4 min',
      image: serviceMowing,
      icon: <Sun className="h-5 w-5" />
    },
    {
      id: 3,
      title: t('language') === 'et' ? 'Sügisene muruhooldus' : 'Fall Lawn Care',
      excerpt: t('language') === 'et' 
        ? 'Kuidas valmistada oma muru talveks ette, et see oleks kevadel tervem ja tugevam.'
        : 'How to prepare your lawn for winter so it will be healthier and stronger in spring.',
      content: t('language') === 'et' 
        ? 'Sügis on oluline aeg muruhoolduses. Koristage lehed regulaarselt, tehke viimane niitmine madalamal. Kasutage talvist väetist ja kõrrendage muru õhutamiseks.'
        : 'Fall is crucial for lawn care. Rake leaves regularly, make the last cut lower. Use winter fertilizer and dethatch for aeration.',
      date: '2024-09-10',
      category: t('language') === 'et' ? 'Sügisesed nipid' : 'Fall Tips',
      readTime: '6 min',
      image: serviceCleanup,
      icon: <Leaf className="h-5 w-5" />
    },
    {
      id: 4,
      title: t('language') === 'et' ? 'Talvine muruhooldus' : 'Winter Lawn Care',
      excerpt: t('language') === 'et' 
        ? 'Kuidas hoida oma muru ka talvel ja valmistuda järgmiseks hooajaks.'
        : 'How to care for your lawn in winter and prepare for the next season.',
      content: t('language') === 'et' 
        ? 'Talvel on muru hooldus minimaalne, kuid siiski oluline. Vältige kõndimist külmunud murul. Hooldage tööriistu ja planeerige järgmist hooaega.'
        : 'Winter lawn care is minimal but important. Avoid walking on frozen grass. Maintain tools and plan for next season.',
      date: '2024-12-01',
      category: t('language') === 'et' ? 'Talvised nipid' : 'Winter Tips',
      readTime: '3 min',
      image: serviceTrimming,
      icon: <Snowflake className="h-5 w-5" />
    },
    {
      id: 5,
      title: t('language') === 'et' ? 'Umbrohutõrje natural meetodid' : 'Natural Weed Control Methods',
      excerpt: t('language') === 'et' 
        ? 'Keskkonnasõbralikud viisid umbrohuga võitlemiseks ilma kahjulike kemikaalideta.'
        : 'Eco-friendly ways to fight weeds without harmful chemicals.',
      content: t('language') === 'et' 
        ? 'Looduslikud umbrohutõrje meetodid on turvalised ja tõhusad. Kasutage äädika ja soola segu, kõrt mulši, käsitsi rohimist ja tihe külv.'
        : 'Natural weed control methods are safe and effective. Use vinegar and salt mixture, straw mulch, hand weeding, and dense seeding.',
      date: '2024-04-05',
      category: t('language') === 'et' ? 'Ökoloogilised nipid' : 'Eco Tips',
      readTime: '7 min',
      image: beautifulLawn,
      icon: <Leaf className="h-5 w-5" />
    },
    {
      id: 6,
      title: t('language') === 'et' ? 'Õige niitmise tehnika' : 'Proper Mowing Techniques',
      excerpt: t('language') === 'et' 
        ? 'Kuidas õigesti niita muru, et tagada selle tervis ja ilu.'
        : 'How to properly mow your lawn to ensure its health and beauty.',
      content: t('language') === 'et' 
        ? 'Õige niitmine on muruhoolduse alus. Niitke kuiva ilmaga, teravate teradega, 1/3 reeglit järgides. Jätke lõikejäägid mullas.'
        : 'Proper mowing is the foundation of lawn care. Mow in dry weather, with sharp blades, following the 1/3 rule. Leave clippings on the lawn.',
      date: '2024-05-12',
      category: t('language') === 'et' ? 'Tehnika' : 'Technique',
      readTime: '5 min',
      image: serviceMowing,
      icon: <Sun className="h-5 w-5" />
    }
  ];

  const categories = [
    { name: t('language') === 'et' ? 'Kõik' : 'All', count: blogPosts.length },
    { name: t('language') === 'et' ? 'Kevadised nipid' : 'Spring Tips', count: 1 },
    { name: t('language') === 'et' ? 'Suvised nipid' : 'Summer Tips', count: 1 },
    { name: t('language') === 'et' ? 'Sügisesed nipid' : 'Fall Tips', count: 1 },
    { name: t('language') === 'et' ? 'Talvised nipid' : 'Winter Tips', count: 1 },
    { name: t('language') === 'et' ? 'Ökoloogilised nipid' : 'Eco Tips', count: 1 },
    { name: t('language') === 'et' ? 'Tehnika' : 'Technique', count: 1 }
  ];

  return (
    <div className="min-h-screen bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('language') === 'et' ? 'Muruhoolduse blogi' : 'Lawn Care Blog'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('language') === 'et' 
              ? 'Professionaalsed nõuanded ja nipid teie muru tervise ja ilu säilitamiseks'
              : 'Professional advice and tips for maintaining your lawn\'s health and beauty'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {t('language') === 'et' ? 'Kategooriad' : 'Categories'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                      <span className="text-sm">{category.name}</span>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {t('language') === 'et' ? 'Viimased postitused' : 'Recent Posts'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {post.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {post.icon}
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <Button variant="ghost" size="sm" className="p-0 h-auto">
                        {t('language') === 'et' ? 'Loe edasi' : 'Read more'}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16">
          <Card className="bg-gradient-primary text-white">
            <CardContent className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">
                {t('language') === 'et' ? 'Tellige meie uudiskiri' : 'Subscribe to Our Newsletter'}
              </h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                {t('language') === 'et' 
                  ? 'Saage viimased muruhoolduse nipid ja hooajalised nõuanded otse oma postkasti'
                  : 'Get the latest lawn care tips and seasonal advice delivered straight to your inbox'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t('language') === 'et' ? 'Sisestage oma e-mail' : 'Enter your email'}
                  className="flex-1 px-4 py-2 rounded-lg text-black"
                />
                <Button variant="secondary" size="lg">
                  {t('language') === 'et' ? 'Telli' : 'Subscribe'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog; 