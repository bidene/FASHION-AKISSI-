import { useState } from 'react';
import { ArrowRight, Filter, Phone, MessageCircle, ChevronRight, Share2 } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const categories = ['Tout', 'Femme', 'Accessoires', 'Sur Mesure'];

const services = [
  {
    id: 'pret-a-porter-femme',
    category: 'Femme',
    title: 'Prêt-à-Porter Femme',
    desc: "Notre collection femme regroupe des robes, ensembles, blouses et pantalons taillés dans les plus beaux tissus africains et internationaux. Du casual chic au glamour de soirée.",
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Robes longues et courtes', 'Ensembles tailleur', 'Tenues de soirée', 'Looks décontractés'],
    priceFrom: '15 000 FCFA',
  },
  {
    id: 'wax-bogolan',
    category: 'Femme',
    title: 'Collections Wax & Bogolan',
    desc: "Célébrez votre identité africaine avec nos créations wax, bogolan et kente. Des pièces authentiques qui allient fierté culturelle et modernité stylistique.",
    image: 'https://images.pexels.com/photos/3622623/pexels-photo-3622623.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Tissus wax authentiques', 'Bogolan artisanal', 'Kente premium', 'Coupes modernes'],
    priceFrom: '20 000 FCFA',
  },
  {
    id: 'soiree-mariage',
    category: 'Femme',
    title: 'Tenues de Soirée & Mariages',
    desc: "Pour les grands événements de votre vie, AKISSI FASHION crée des tenues inoubliables. Mariages, baptêmes, anniversaires — chaque occasion mérite une tenue d'exception.",
    image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Robes de mariée', 'Tenues de demoiselles', 'Robes de cocktail', 'Ensembles cérémonie'],
    priceFrom: '45 000 FCFA',
    badge: 'Populaire',
  },
  {
    id: 'accessoires',
    category: 'Accessoires',
    title: 'Accessoires & Bijoux',
    desc: "Complétez votre look avec notre sélection d'accessoires mode : sacs, bijoux, foulards, ceintures et chaussures pour sublimer chaque tenue.",
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Sacs à main', 'Bijoux fantaisie', 'Foulards & voiles', 'Ceintures & chaussures'],
    priceFrom: '3 000 FCFA',
  },
  {
    id: 'sur-mesure',
    category: 'Sur Mesure',
    title: 'Confection Sur Mesure',
    desc: "Vous avez une vision précise ? Notre équipe de couturières réalise votre tenue sur mesure, selon vos mensurations et vos goûts. Une pièce unique, rien que pour vous.",
    image: 'https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Prise de mesures à domicile', 'Choix des tissus sur catalogue', 'Délai 7-14 jours', 'Retouches incluses'],
    priceFrom: '25 000 FCFA',
    badge: 'Premium',
  },
  {
    id: 'location',
    category: 'Femme',
    title: 'Location de Tenues',
    desc: "Pour une occasion unique sans engagement d'achat, louez une de nos magnifiques tenues de soirée. Service disponible avec essayage et retouches inclus.",
    image: 'https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Tenues de soirée', 'Accessoires inclus', 'Nettoyage compris', 'Réservation à l\'avance'],
    priceFrom: '10 000 FCFA / jour',
  },
];

const process = [
  { step: '01', title: 'Contactez-nous', desc: "Appelez ou envoyez un message WhatsApp pour nous faire part de vos besoins." },
  { step: '02', title: 'Consultation', desc: "Nous discutons de votre style, occasion et budget pour vous proposer les meilleures options." },
  { step: '03', title: 'Sélection', desc: "Choisissez parmi notre catalogue ou venez en boutique pour toucher et voir les tissus." },
  { step: '04', title: 'Livraison', desc: "Recevez votre commande rapidement avec notre service de livraison à domicile." },
];

export default function Services({ onNavigate }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState('Tout');
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const handleShare = (e: React.MouseEvent, service: typeof services[0]) => {
    e.stopPropagation();
    const shareData = {
      title: `AKISSI FASHION - ${service.title}`,
      text: `Regardez ce magnifique article : ${service.title} chez AKISSI FASHION !`,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(() => { });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papier !');
    }
  };

  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filtered = activeCategory === 'Tout'
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 to-gray-950/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-rose-400 text-xs font-bold uppercase tracking-widest">Notre Offre</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2">Nos Services</h1>
            <p className="text-gray-300 mt-3 max-w-lg">
              Collections, confection sur mesure, location et bien plus — tout ce dont vous avez besoin pour être magnifique.
            </p>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter */}
          <div className="flex items-center gap-4 mb-12 flex-wrap">
            <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                  ? 'bg-rose-700 text-white shadow-md shadow-rose-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {service.badge && (
                    <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full ${service.badge === 'Premium' ? 'bg-amber-500 text-white' : 'bg-rose-700 text-white'
                      }`}>
                      {service.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Partage flottant */}
                  <button
                    onClick={(e) => handleShare(e, service)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-rose-700 hover:border-rose-700 z-10"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-rose-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">{service.category}</span>
                  <h3 className="font-bold text-gray-900 text-xl mt-1 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{service.desc}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">À partir de</p>
                      <p className="font-bold text-rose-700">{service.priceFrom}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => handleShare(e, service)}
                        className="p-2 text-gray-400 hover:text-rose-700 transition-colors"
                        title="Partager"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="text-sm font-bold text-rose-700 hover:text-rose-800 flex items-center gap-1 group/btn">
                        Voir plus <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-rose-700 text-xs font-bold uppercase tracking-widest">Simple & Rapide</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Comment Commander ?</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200" />
            {process.map((p) => (
              <div key={p.step} className="text-center relative">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-rose-200 flex flex-col items-center justify-center mx-auto mb-5 shadow-sm relative z-10">
                  <span className="text-xs text-rose-400 font-bold">{p.step}</span>
                  <div className="w-3 h-3 rounded-full bg-rose-700 mt-1" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('contact')}
              className="bg-rose-700 hover:bg-rose-700 text-white px-10 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-rose-200"
            >
              Passer une commande
            </button>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-14 bg-gray-950 relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-bold">Besoin d'une Tenue Urgente ?</h3>
            <p className="text-gray-400 mt-1">Contactez-nous maintenant — nous faisons le maximum pour vous satisfaire.</p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a
              href="tel:+2290197566819"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              Appeler
            </a>
            <a
              href="https://wa.me/2290190685918"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE MODAL */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors text-xl font-light"
              >
                ×
              </button>
              <div className="absolute bottom-5 left-6 flex items-end justify-between right-6">
                <div>
                  <span className="text-xs font-bold text-rose-300 uppercase tracking-wider">{selectedService.category}</span>
                  <h2 className="text-white text-2xl font-bold mt-1">{selectedService.title}</h2>
                </div>
                <button
                  onClick={(e) => handleShare(e, selectedService)}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-rose-700 transition-colors"
                  title="Partager"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 leading-relaxed mb-6">{selectedService.desc}</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {selectedService.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between p-4 bg-rose-50 rounded-2xl mb-6">
                <div>
                  <p className="text-xs text-rose-400 uppercase font-bold tracking-wider">Prix à partir de</p>
                  <p className="text-rose-700 text-2xl font-bold">{selectedService.priceFrom}</p>
                </div>
                {selectedService.badge && (
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${selectedService.badge === 'Premium' ? 'bg-amber-500 text-white' : 'bg-rose-700 text-white'
                    }`}>
                    {selectedService.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/2290190685918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Commander via WhatsApp
                </a>
                <a
                  href="tel:+2290197566819"
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-full font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Appeler
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
