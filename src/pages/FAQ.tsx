import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  ChevronDown,
  ChevronUp,
  Search,
  HelpCircle,
  Phone,
  Mail,
  MessageSquare
} from 'lucide-react';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      title: t('language') === 'et' ? 'Üldised küsimused' : 'General Questions',
      faqs: [
        {
          question: t('language') === 'et' ? 'Kui tihti tuleks muru niita?' : 'How often should I mow my lawn?',
          answer: t('language') === 'et' 
            ? 'Muru niitmise sagedus sõltub aastaaegast ja muru kasvukiirusest. Kevadel ja suvel soovitame niita 1-2 korda nädalas, sügis-talvel harvemini. Oluline on järgida 1/3 reeglit - ära lõika rohkem kui 1/3 muru kõrgusest.'
            : 'Lawn mowing frequency depends on the season and grass growth rate. In spring and summer, we recommend mowing 1-2 times per week, less frequently in fall and winter. Important to follow the 1/3 rule - never cut more than 1/3 of the grass height.'
        },
        {
          question: t('language') === 'et' ? 'Millal on parim aeg muru külvamiseks?' : 'When is the best time to seed a lawn?',
          answer: t('language') === 'et' 
            ? 'Parim aeg muru külvamiseks on kevadel (aprill-mai) või sügise alguses (august-september). Need perioodid pakuvad optimaalseid tingimusi - sobivat temperatuuri ja niiskust. Vältige kuuma suveperioodi ja külma talveaega.'
            : 'The best time for lawn seeding is in spring (April-May) or early fall (August-September). These periods provide optimal conditions - suitable temperature and moisture. Avoid hot summer periods and cold winter months.'
        },
        {
          question: t('language') === 'et' ? 'Kuidas võidelda umbrohuga?' : 'How to fight weeds?',
          answer: t('language') === 'et' 
            ? 'Umbrohuga võitlemiseks on mitu meetodit: 1) Tiheda ja terve muru säilitamine, 2) Õigeaegne väetamine, 3) Käsitsi rohimine, 4) Looduslikud meetodid (äädik, sool), 5) Vajadusel professionaalsed umbrohutõrjevahendid.'
            : 'There are several methods to fight weeds: 1) Maintaining thick and healthy grass, 2) Timely fertilization, 3) Hand weeding, 4) Natural methods (vinegar, salt), 5) Professional herbicides when necessary.'
        }
      ]
    },
    {
      title: t('language') === 'et' ? 'Teenused ja hinnad' : 'Services and Pricing',
      faqs: [
        {
          question: t('language') === 'et' ? 'Millised teenused te pakute?' : 'What services do you offer?',
          answer: t('language') === 'et' 
            ? 'Pakume laia valikut muruhoolduse teenuseid: regulaarne muruniitmine, hekipiiramise, aiakoristus, muru külv ja väetamine, maastikuarhitektuur, irrigatsioonisüsteemide paigaldus, hooajaline hooldus ja palju muud.'
            : 'We offer a wide range of lawn care services: regular lawn mowing, hedge trimming, garden cleanup, lawn seeding and fertilization, landscape design, irrigation system installation, seasonal maintenance, and much more.'
        },
        {
          question: t('language') === 'et' ? 'Kuidas hinnad kujunevad?' : 'How are prices calculated?',
          answer: t('language') === 'et' 
            ? 'Hinnad sõltuvad mitmest tegurist: ala suurus, teenuse liik, töö keerukus, asukoht ja sagedus. Pakume tasuta hinnapakkumisi. Regulaarklientidel on soodustused. Täpsema hinnakirja saate meie veebilehelt või võttes meiega ühendust.'
            : 'Prices depend on several factors: area size, service type, work complexity, location, and frequency. We offer free quotes. Regular customers get discounts. For detailed pricing, check our website or contact us.'
        },
        {
          question: t('language') === 'et' ? 'Kas pakute hooajalist hooldust?' : 'Do you offer seasonal maintenance?',
          answer: t('language') === 'et' 
            ? 'Jah, pakume täielikku hooajalist hooldust: kevadine muru ettevalmistus, suvine hooldus ja kastmine, sügisene puhastus ja talveks ettevalmistus. Saate valida kas üksikute teenuste või täieliku hoolduspaketi vahel.'
            : 'Yes, we offer complete seasonal maintenance: spring lawn preparation, summer care and watering, fall cleanup and winter preparation. You can choose between individual services or complete maintenance packages.'
        }
      ]
    },
    {
      title: t('language') === 'et' ? 'Muruhoolduse nipid' : 'Lawn Care Tips',
      faqs: [
        {
          question: t('language') === 'et' ? 'Kuidas hoida muru rohelist suvel?' : 'How to keep lawn green in summer?',
          answer: t('language') === 'et' 
            ? 'Suvine muru hoidmiseks: 1) Kastke sügavalt, kuid harvem, 2) Niitke kõrgemalt (7-10cm), 3) Kastke hommikul või õhtul, 4) Kasutage mulši, 5) Vältige liikumist kuival murul, 6) Väetage sobiva suvise väetisega.'
            : 'To keep lawn green in summer: 1) Water deeply but less frequently, 2) Mow higher (7-10cm), 3) Water in morning or evening, 4) Use mulch, 5) Avoid traffic on dry grass, 6) Fertilize with appropriate summer fertilizer.'
        },
        {
          question: t('language') === 'et' ? 'Mis on muru õhutamine ja millal seda teha?' : 'What is lawn aeration and when to do it?',
          answer: t('language') === 'et' 
            ? 'Muru õhutamine on protsess, kus mulda tehakse väikesi auke, et parandada õhu, vee ja toitainete liikumist juurte juurde. Seda tuleks teha 1-2 korda aastas, ideaalselt kevadel või sügise alguses. Märgid, et õhutamine on vajalik: muru on tihe, vesi ei imendu hästi, muru kasvab halvasti.'
            : 'Lawn aeration is a process where small holes are made in the soil to improve air, water, and nutrient movement to the roots. This should be done 1-2 times per year, ideally in spring or early fall. Signs that aeration is needed: soil is compact, water doesn\'t absorb well, grass grows poorly.'
        },
        {
          question: t('language') === 'et' ? 'Millal ja kuidas väetada muru?' : 'When and how to fertilize the lawn?',
          answer: t('language') === 'et' 
            ? 'Väetamine: 1) Kevadel (aprill-mai) lämmastikurikas väetis, 2) Suvel vähese lämmastikuga väetis, 3) Sügise alguses (august-september) kaalium- ja fosforirikas väetis. Järgige alati tootja juhiseid. Äge üle-väetage. Parim aeg on peale vihma või kastmist.'
            : 'Fertilization: 1) Spring (April-May) nitrogen-rich fertilizer, 2) Summer low-nitrogen fertilizer, 3) Early fall (August-September) potassium and phosphorus-rich fertilizer. Always follow manufacturer instructions. Don\'t over-fertilize. Best time is after rain or watering.'
        }
      ]
    },
    {
      title: t('language') === 'et' ? 'Probleemid ja lahendused' : 'Problems and Solutions',
      faqs: [
        {
          question: t('language') === 'et' ? 'Muru on kollane ja kuiv. Mis toimub?' : 'My lawn is yellow and dry. What\'s happening?',
          answer: t('language') === 'et' 
            ? 'Kollane ja kuiv muru võib olla tingitud: 1) Vähesest kastmisest, 2) Üle-väetamisest, 3) Haigustest või kahjuritest, 4) Pinnavee puudusest, 5) Liigset kuumusest. Kontrollige kastmist, vähendage väetamist, parandage drenaaži ja vajadusel konsulteerige spetsialistiga.'
            : 'Yellow and dry lawn can be caused by: 1) Insufficient watering, 2) Over-fertilization, 3) Diseases or pests, 4) Poor drainage, 5) Excessive heat. Check watering, reduce fertilization, improve drainage and consult a specialist if needed.'
        },
        {
          question: t('language') === 'et' ? 'Murus on paljad laigud. Kuidas parandada?' : 'There are bare spots in my lawn. How to fix?',
          answer: t('language') === 'et' 
            ? 'Paljad laigud parandamiseks: 1) Tehke kindlaks põhjus (liigne liiklus, haigused, kahjurid), 2) Parandage mullaprobleemid, 3) Kõrrendage piirkond, 4) Külvake uusi seemneid, 5) Väetage kerglelt, 6) Hoidke niisket, 7) Vältige liikumist parandamise ajal.'
            : 'To fix bare spots: 1) Identify the cause (excessive traffic, diseases, pests), 2) Fix soil problems, 3) Rake the area, 4) Seed new grass, 5) Fertilize lightly, 6) Keep moist, 7) Avoid traffic during repair.'
        },
        {
          question: t('language') === 'et' ? 'Kuidas eemaldada samblat murult?' : 'How to remove moss from lawn?',
          answer: t('language') === 'et' 
            ? 'Sambla eemaldamiseks: 1) Parandage drenaaži, 2) Vähendage varjutust, 3) Kontrollige mulla pH-d, 4) Õhutage muru regulaarselt, 5) Väetage sobivalt, 6) Eemaldage sambel mehaaniliselt, 7) Külvake uusi seemneid. Sambel kasvab tavaliselt niisketes, varjulistes ja happelis mullatingimustes.'
            : 'To remove moss: 1) Improve drainage, 2) Reduce shade, 3) Check soil pH, 4) Aerate lawn regularly, 5) Fertilize appropriately, 6) Remove moss mechanically, 7) Seed new grass. Moss typically grows in moist, shaded, and acidic soil conditions.'
        }
      ]
    },
    {
      title: t('language') === 'et' ? 'Lepingu ja tellimise küsimused' : 'Contract and Ordering Questions',
      faqs: [
        {
          question: t('language') === 'et' ? 'Kuidas tellida teenust?' : 'How to order a service?',
          answer: t('language') === 'et' 
            ? 'Teenuse tellimiseks: 1) Võtke meiega ühendust telefonil, e-maili või veebilehe kaudu, 2) Lepime kokku tasuta ülevaatuse, 3) Teeme hinnapakkumise, 4) Sõlmime lepingu, 5) Alustame töödega kokkulepitud ajal. Pakume ka kiireid hädaabiteenuseid.'
            : 'To order a service: 1) Contact us by phone, email, or website, 2) Schedule free assessment, 3) We provide a quote, 4) Sign contract, 5) Start work at agreed time. We also offer rapid emergency services.'
        },
        {
          question: t('language') === 'et' ? 'Kas pakute tasuta hinnapakkumist?' : 'Do you offer free quotes?',
          answer: t('language') === 'et' 
            ? 'Jah, pakume tasuta hinnapakkumisi kõikidele teenustele. Meie spetsialist tuleb kohale, hindab olukorra ja teeb detailse hinnapakkumise. Hinnapakkumine on kehtiv 30 päeva. Ei ole varjatud tasusid - kõik kulud on selgelt välja toodud.'
            : 'Yes, we offer free quotes for all services. Our specialist will visit, assess the situation, and provide a detailed quote. The quote is valid for 30 days. No hidden fees - all costs are clearly stated.'
        },
        {
          question: t('language') === 'et' ? 'Millised on maksetingimused?' : 'What are the payment terms?',
          answer: t('language') === 'et' 
            ? 'Maksetingimused: 1) Väiksemad tööd - makse töö lõpus, 2) Suuremad projektid - osak payment süsteem, 3) Regulaarsed teenused - igakuine arve, 4) Võimalik tasuda sularaha, pangaülekande või kaardiga, 5) Maksetähtaeg 14 päeva arve saamisest.'
            : 'Payment terms: 1) Smaller jobs - payment after completion, 2) Larger projects - partial payment system, 3) Regular services - monthly invoice, 4) Payment possible by cash, bank transfer, or card, 5) Payment deadline 14 days from invoice.'
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('language') === 'et' ? 'Korduma kippuvad küsimused' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('language') === 'et' 
              ? 'Leiate vastused kõige sagedamini esitatud küsimustele muruhoolduse kohta'
              : 'Find answers to the most frequently asked questions about lawn care'}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder={t('language') === 'et' ? 'Otsi küsimust...' : 'Search questions...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-primary" />
                {category.title}
              </h2>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  return (
                    <Card key={faqIndex} className="hover:shadow-soft transition-all duration-300">
                      <CardHeader 
                        className="cursor-pointer"
                        onClick={() => toggleFAQ(globalIndex)}
                      >
                        <CardTitle className="flex items-center justify-between text-lg">
                          <span>{faq.question}</span>
                          {openFAQ === globalIndex ? (
                            <ChevronUp className="h-5 w-5 text-primary" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-primary" />
                          )}
                        </CardTitle>
                      </CardHeader>
                      
                      {openFAQ === globalIndex && (
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {t('language') === 'et' ? 'Küsimust ei leitud' : 'No questions found'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('language') === 'et' 
                ? 'Proovige teisi otsingusõnu või võtke meiega otse ühendust'
                : 'Try different search terms or contact us directly'}
            </p>
            <Button onClick={() => setSearchTerm('')} variant="outline">
              {t('language') === 'et' ? 'Tühjenda otsing' : 'Clear Search'}
            </Button>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16">
          <Card className="bg-gradient-primary text-white">
            <CardContent className="text-center py-12">
              <MessageSquare className="h-16 w-16 mx-auto mb-6 text-white" />
              <h2 className="text-2xl font-bold mb-4">
                {t('language') === 'et' ? 'Ei leidnud vastust?' : 'Didn\'t find your answer?'}
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                {t('language') === 'et' 
                  ? 'Meie sõbralik klienditeenindus on valmis aitama kõigi teie küsimustega'
                  : 'Our friendly customer service is ready to help with all your questions'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg" className="shadow-elegant">
                  <Link to="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    {t('language') === 'et' ? 'Saada sõnum' : 'Send Message'}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  <a href="tel:+372123456">
                    <Phone className="mr-2 h-5 w-5" />
                    {t('language') === 'et' ? 'Helista kohe' : 'Call Now'}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 