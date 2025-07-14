import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Pricing: React.FC = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('basicPlan'),
      price: t('basicPrice'),
      period: t('month'),
      features: [
        'Põhilised ärikonsultatsioonid',
        'E-posti tugi',
        'Iganädalased aruanded',
        'Kuni 3 projektiga'
      ],
      popular: false,
      buttonText: t('getStarted')
    },
    {
      name: t('proPlan'),
      price: t('proPrice'),
      period: t('month'),
      features: [
        'Täielik ärikonsultatsioon',
        'Prioriteetne tugi',
        'Päevased aruanded',
        'Piiramatult projekte',
        'Personaalne nõustaja'
      ],
      popular: true,
      buttonText: t('getStarted')
    },
    {
      name: t('enterprisePlan'),
      price: t('enterprisePrice'),
      period: t('month'),
      features: [
        'Kõik profipaketi teenused',
        '24/7 tugi',
        'Kohandatud lahendused',
        'Meeskonna koolitus',
        'Strateegiline planeerimine'
      ],
      popular: false,
      buttonText: t('getStarted')
    }
  ];

  const getFeatures = (planName: string) => {
    switch (planName) {
      case t('basicPlan'):
        return t('language') === 'et' ? [
          'Põhilised ärikonsultatsioonid',
          'E-posti tugi',
          'Iganädalased aruanded',
          'Kuni 3 projektiga'
        ] : [
          'Basic business consulting',
          'Email support',
          'Weekly reports',
          'Up to 3 projects'
        ];
      case t('proPlan'):
        return t('language') === 'et' ? [
          'Täielik ärikonsultatsioon',
          'Prioriteetne tugi',
          'Päevased aruanded',
          'Piiramatult projekte',
          'Personaalne nõustaja'
        ] : [
          'Full business consulting',
          'Priority support',
          'Daily reports',
          'Unlimited projects',
          'Personal advisor'
        ];
      case t('enterprisePlan'):
        return t('language') === 'et' ? [
          'Kõik profipaketi teenused',
          '24/7 tugi',
          'Kohandatud lahendused',
          'Meeskonna koolitus',
          'Strateegiline planeerimine'
        ] : [
          'All professional package services',
          '24/7 support',
          'Custom solutions',
          'Team training',
          'Strategic planning'
        ];
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('pricingTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('pricingSubtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${
                plan.popular 
                  ? 'border-primary shadow-elegant scale-105' 
                  : 'hover:shadow-soft'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {t('mostPopular')}
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {getFeatures(plan.name).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 shadow-elegant' 
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  <Link to="/contact">
                    {plan.buttonText}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We're here to help.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">
              Contact us for custom pricing
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;