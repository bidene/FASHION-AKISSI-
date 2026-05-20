import { useState, useEffect } from 'react';
import { ArrowRight, Star, ChevronLeft, ChevronRight, Quote, Phone, MessageCircle, Sparkles, Shield, Truck, RefreshCw } from 'lucide-react';
import Stats from '../components/Stats';
import lookImg from '../assets/look.jpg';
import accessoiresImg from '../assets/accessoires_bijoux.jpg';
import surMesureImg from '../assets/sur_mesure.jpg';
import soireeMariageImg from '../assets/soiree_mariage.jpg';
import chemiseFuchsiaImg from '../assets/chemise_fuchsia.jpg';
import pantalonRougeImg from '../assets/pantalon_rouge.jpg';
import sandalesSplashImg from '../assets/sandales_splash.jpg';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const heroSlides = [
  {
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tag: 'Nouvelle Collection 2025',
    title: 'Élégance\nAfricaine',
    subtitle: 'Robes, ensembles et tenues qui subliment votre beauté naturelle.',
  },
  {
    image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tag: 'Prêt-à-Porter Premium',
    title: 'Mode\net Modernité',
    subtitle: 'Des créations uniques mêlant tradition africaine et tendances contemporaines.',
  },
  {
    image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tag: 'Collections Exclusives',
    title: 'Votre Style\nVotre Identité',
    subtitle: 'Chaque pièce est sélectionnée avec soin pour vous offrir le meilleur.',
  },
];

const collections = [
  {
    title: 'Robes de Soirée',
    count: '24 articles',
    image: soireeMariageImg,
  },
  {
    title: 'Ensembles Africains',
    count: '18 articles',
    image: 'https://images.pexels.com/photos/3622623/pexels-photo-3622623.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Look Élégant',
    count: '32 articles',
    image: lookImg,
  },
  {
    title: 'Accessoires',
    count: '45 articles',
    image: accessoiresImg,
  },
];

const featured = [
  {
    name: 'Sandales Cuir Premium',
    image: sandalesSplashImg,
    tag: 'Nouveau',
    isContain: true,
  },
  {
    name: 'Ensemble Bogolan',
    image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Best-seller',
  },
  {
    name: 'Pantalon Large Plissé',
    image: pantalonRougeImg,
    tag: 'Promo',
  },
  {
    name: 'Chemise Satinée Fuchsia',
    image: chemiseFuchsiaImg,
    tag: 'Exclusif',
  },
];

const testimonials = [
  {
    name: 'Aminata K.',
    city: 'Cotonou',
    rating: 5,
    text: "AKISSI FASHION m'a fourni la plus belle robe de ma vie pour mon mariage. La qualité est exceptionnelle et le service client est au top !",
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Fatoumata D.',
    city: 'Porto-Novo',
    rating: 5,
    text: "Je commande régulièrement chez AKISSI FASHION. Les tissus sont de qualité premium et les coupes sont parfaites. Je recommande vivement !",
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Bintou M.',
    city: 'Abomey-Calavi',
    rating: 5,
    text: "Un service professionnel et des créations magnifiques. AKISSI FASHION comprend vraiment la mode africaine moderne. Bravo !",
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

const perks = [
  { icon: Truck, title: 'Livraison Rapide', desc: 'Livraison à domicile sur tout le Bénin' },
  { icon: Shield, title: 'Qualité Garantie', desc: 'Tissus premium sélectionnés avec soin' },
  { icon: RefreshCw, title: 'Échange Facile', desc: 'Retour ou échange sous 7 jours' },
  { icon: Sparkles, title: 'Créations Uniques', desc: 'Pièces exclusives et tendance' },
];

export default function Home({ onNavigate }: HomeProps) {
  const [slide, setSlide] = useState(0);
  const [tIndex, setTIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  const openWhatsAppOrder = (itemName: string) => {
    const phone = '2290190685918';
    const message = `Bonjour AKISSI FASHION ! Je souhaite commander : ${itemName}.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              <span className="inline-block bg-rose-700/90 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 animate-pulse">
                {heroSlides[slide].tag}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 whitespace-pre-line drop-shadow-2xl">
                {heroSlides[slide].title}
              </h1>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                {heroSlides[slide].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('services')}
                  className="bg-rose-700 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/30 hover:-translate-y-0.5"
                >
                  Voir nos Collections <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => openWhatsAppOrder('une tenue')}
                  className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  Commander
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`transition-all duration-300 rounded-full ${i === slide ? 'w-8 h-2 bg-rose-500' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
        <button
          onClick={() => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setSlide((s) => (s + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </section>

      {/* PERKS */}
      <section className="bg-gray-950 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p) => (
            <div key={p.title} className="flex items-center gap-4 text-gray-300 group">
              <div className="w-10 h-10 rounded-full bg-rose-900/40 group-hover:bg-rose-700 flex items-center justify-center transition-colors flex-shrink-0">
                <p.icon className="w-5 h-5 text-rose-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{p.title}</p>
                <p className="text-gray-500 text-xs">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-rose-700 text-xs font-bold uppercase tracking-widest">Nos Univers</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Explorez Nos Collections</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Découvrez des tenues soigneusement sélectionnées pour chaque occasion, mêlant les richesses de la mode africaine aux tendances mondiales.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {collections.map((col, i) => (
              <div
                key={i}
                onClick={() => navigate('services')}
                className="relative overflow-hidden rounded-2xl cursor-pointer group aspect-[3/4]"
              >
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-lg leading-tight">{col.title}</p>
                  <p className="text-rose-300 text-sm mt-1">{col.count}</p>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/0 group-hover:bg-rose-700 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS ANIMATED */}
      <Stats />

      {/* FEATURED */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="text-rose-700 text-xs font-bold uppercase tracking-widest">Sélection</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">Articles Phares</h2>
            </div>
            <button
              onClick={() => navigate('services')}
              className="hidden md:flex items-center gap-2 text-rose-700 hover:text-rose-700 font-semibold text-sm group"
            >
              Voir tout <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item, i) => (
              <div
                key={i}
                onClick={() => openWhatsAppOrder(item.name)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[3/4] bg-white flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${item.isContain ? 'object-contain p-1' : 'object-cover'
                      }`}
                  />
                  <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${item.tag === 'Promo' ? 'bg-rose-700 text-white' :
                    item.tag === 'Best-seller' ? 'bg-amber-500 text-white' :
                      item.tag === 'Nouveau' ? 'bg-emerald-500 text-white' :
                        'bg-gray-900 text-white'
                    }`}>
                    {item.tag}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openWhatsAppOrder(item.name);
                    }}
                    className="absolute bottom-3 left-3 right-3 bg-rose-700 hover:bg-rose-800 active:scale-95 text-white py-2 rounded-xl text-sm font-semibold transition-all duration-300"
                  >
                    Commander
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 md:hidden">
            <button
              onClick={() => navigate('services')}
              className="bg-rose-700 text-white px-8 py-3 rounded-full font-semibold text-sm"
            >
              Voir tout
            </button>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="relative py-28 overflow-hidden">
        <img
          src={surMesureImg}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-rose-950/75" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Commandez Maintenant
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Votre Tenue Idéale à Portée de Main
          </h2>
          <p className="text-white/75 text-lg mb-10">
            Contactez-nous par téléphone ou WhatsApp pour passer votre commande. Livraison rapide partout au Bénin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+2290197566819"
              className="flex items-center gap-2 bg-white text-rose-700 hover:bg-rose-50 px-7 py-4 rounded-full font-bold transition-colors"
            >
              <Phone className="w-5 h-5" />
              Appeler
            </a>
            <a
              href="https://wa.me/2290190685918"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-4 rounded-full font-bold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-rose-700 text-xs font-bold uppercase tracking-widest">Avis Clients</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Ce Que Disent Nos Clients</h2>
          </div>
          <div className="relative">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${i === tIndex ? 'opacity-100 translate-y-0' : 'opacity-0 absolute inset-0 translate-y-4 pointer-events-none'
                  }`}
              >
                <div className="bg-gray-50 rounded-3xl p-10 md:p-14 text-center">
                  <Quote className="w-10 h-10 text-rose-200 mx-auto mb-6" />
                  <p className="text-gray-700 text-xl md:text-2xl leading-relaxed italic mb-8 font-light">
                    "{t.text}"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-rose-200"
                    />
                    <div className="text-left">
                      <p className="font-bold text-gray-900">{t.name}</p>
                      <p className="text-gray-500 text-sm">{t.city}</p>
                      <div className="flex gap-0.5 mt-1">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTIndex(i)}
                className={`transition-all rounded-full ${i === tIndex ? 'w-8 h-2 bg-rose-700' : 'w-2 h-2 bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
