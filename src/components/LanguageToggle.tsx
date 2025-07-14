import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
      <Button
        variant={language === 'et' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('et')}
        className="h-8 px-3 text-sm font-medium transition-smooth"
      >
        EST
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="h-8 px-3 text-sm font-medium transition-smooth"
      >
        ENG
      </Button>
    </div>
  );
};