import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Award,
  Users,
  Clock,
  TrendingUp,
  Shield,
  Star,
  CheckCircle,
  Calendar,
  Phone,
  MapPin,
  Scissors,
  Sprout,
  Target,
  Zap,
  Heart,
  ThumbsUp
} from 'lucide-react';

import heroLawnService from '@/assets/hero-lawn-service.jpg';
import serviceMowing from '@/assets/service-mowing.jpg';
import serviceTrimming from '@/assets/service-trimming.jpg';
import serviceCleanup from '@/assets/service-cleanup.jpg';
import beautifulLawn from '@/assets/beautiful-lawn.jpg';
import lawnTeam from '@/assets/lawn-team.jpg';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroLawnService})` }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-fade-in">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-elegant">
                <Link to="/contact">
                  {t('heroButton')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                {t('learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">
                {t('statsHappyClients')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">
                {t('statsProjectsCompleted')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">5+</div>
              <div className="text-lg opacity-90">
                {t('statsYearsExperience')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">
                {t('statsCustomerSupport')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('servicesTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={serviceMowing}
                  alt="Lawn Mowing Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  {t('service1Title')}
                </CardTitle>
                <CardDescription className="text-base">
                  {t('service1Description')}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Service 2 */}
            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={serviceTrimming}
                  alt="Hedge Trimming Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scissors className="h-5 w-5 text-primary" />
                  {t('service2Title')}
                </CardTitle>
                <CardDescription className="text-base">
                  {t('service2Description')}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Service 3 */}
            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={serviceCleanup}
                  alt="Garden Cleanup Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  {t('service3Title')}
                </CardTitle>
                <CardDescription className="text-base">
                  {t('service3Description')}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('processTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('processSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t('processStep1Title')}
              </h3>
              <p className="text-muted-foreground">
                {t('processStep1Description')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t('processStep2Title')}
              </h3>
              <p className="text-muted-foreground">
                {t('processStep2Description')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t('processStep3Title')}
              </h3>
              <p className="text-muted-foreground">
                {t('processStep3Description')}
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t('processStep4Title')}
              </h3>
              <p className="text-muted-foreground">
                {t('processStep4Description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('portfolioTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('portfolioSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
                  alt="Beautiful Garden Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x400/22c55e/ffffff?text=Garden+Design';
                  }}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">
                  {t('portfolioItem1Title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('portfolioItem1Description')}
                </p>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
                  alt="Lawn Maintenance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x400/22c55e/ffffff?text=Lawn+Maintenance';
                  }}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">
                  {t('portfolioItem2Title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('portfolioItem2Description')}
                </p>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
                  alt="Hedge Trimming"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x400/22c55e/ffffff?text=Hedge+Trimming';
                  }}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">
                  {t('portfolioItem3Title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('portfolioItem3Description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                {t('featuresTitle')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {t('feature1Title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('feature1Description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {t('feature2Title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('feature2Description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {t('feature3Title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('feature3Description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={beautifulLawn}
                alt="Beautiful Maintained Lawn"
                className="rounded-lg shadow-elegant w-full"
              />
              <div className="absolute inset-0 bg-gradient-primary/20 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('teamTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('teamSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="group hover:shadow-elegant transition-all duration-300">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
                  alt="Team Member"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle>Jüri Tamm</CardTitle>
                <CardDescription>
                  {t('teamMember1Role')}
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  {t('teamMember1Bio')}
                </p>
              </CardHeader>
            </Card>

            {/* Team Member 2 */}
            <Card className="group hover:shadow-elegant transition-all duration-300">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
                  alt="Team Member"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle>Peeter Kask</CardTitle>
                <CardDescription>
                  {t('teamMember2Role')}
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  {t('teamMember2Bio')}
                </p>
              </CardHeader>
            </Card>

            {/* Team Member 3 */}
            <Card className="group hover:shadow-elegant transition-all duration-300">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
                  alt="Team Member"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle>Maris Lepik</CardTitle>
                <CardDescription>
                  {t('teamMember3Role')}
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  {t('teamMember3Bio')}
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={lawnTeam}
                alt="Professional Lawn Care Team"
                className="rounded-lg shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-elegant">
                <div className="flex items-center gap-2">
                  <Users className="h-8 w-8" />
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm opacity-90">Satisfied Clients</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {t('aboutTitle')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('aboutDescription')}
              </p>
              <Button asChild size="lg" className="shadow-elegant">
                <Link to="/contact">
                  {t('heroButton')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('blogTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('blogSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Card className="group hover:shadow-elegant transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Garden Tips"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">
                  {t('blogArticle1Title')}
                </CardTitle>
                <CardDescription>
                  {t('blogArticle1Description')}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Article 2 */}
            <Card className="group hover:shadow-elegant transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Pruning Guide"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">
                  {t('blogArticle2Title')}
                </CardTitle>
                <CardDescription>
                  {t('blogArticle2Description')}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Article 3 */}
            <Card className="group hover:shadow-elegant transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1558618047-b2b04e6c4bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Garden Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">
                  {t('blogArticle3Title')}
                </CardTitle>
                <CardDescription>
                  {t('blogArticle3Description')}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('testimonialsTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('testimonialsSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Mart Orav</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('testimonial1Name')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "{t('testimonial1Text')}"
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Liisa Mägi</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('testimonial2Name')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "{t('testimonial2Text')}"
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Andres Kask</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('testimonial3Name')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "{t('testimonial3Text')}"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('heroButton')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="shadow-elegant">
              <Link to="/contact">
                {t('heroButton')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/pricing">
                {t('pricing')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};