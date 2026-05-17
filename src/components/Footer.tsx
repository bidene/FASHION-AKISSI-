import { ShoppingBag, Phone, MessageCircle, MapPin, Instagram, Facebook, Heart } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Top band */}
      <div className="bg-rose-700 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white font-semibold text-sm tracking-wider uppercase">
            Livraison disponible — Commandez dès maintenant
          </p>
          <div className="flex items-center gap-4">
            <a
              href="tel:+2290197566819"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              +229 01 97 56 68 19
            </a>
            <a
              href="https://wa.me/2290190685918"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-9 h-9 rounded-full bg-rose-700 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl text-white tracking-wider">
              AKISSI <span className="text-rose-500">FASHION</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Votre boutique de prêt-à-porter premium. Style, élégance et modernité pour sublimer votre quotidien.
          </p>
          <div className="flex gap-3">
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-rose-700 flex items-center justify-center transition-colors"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-rose-700 flex items-center justify-center transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-rose-700 flex items-center justify-center transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/2290190685918"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 after:block after:w-8 after:h-0.5 after:bg-rose-500 after:mt-2">
            Navigation
          </h3>
          <ul className="space-y-3">
            {[
              { id: 'home', label: 'Accueil' },
              { id: 'about', label: 'À Propos' },
              { id: 'services', label: 'Nos Services' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => navigate(item.id)}
                  className="text-gray-400 hover:text-rose-400 text-sm transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-0.5 bg-rose-500 transition-all duration-200" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 after:block after:w-8 after:h-0.5 after:bg-rose-500 after:mt-2">
            Nos Collections
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {['Robes & Tenues de soirée', 'Ensembles Africains', 'Prêt-à-porter Femme', 'Accessoires Mode'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500/60 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 after:block after:w-8 after:h-0.5 after:bg-rose-500 after:mt-2">
            Contactez-nous
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Téléphone</p>
                <a href="tel:+2290197566819" className="text-gray-300 hover:text-white text-sm transition-colors">
                  +229 01 97 56 68 19
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/2290190685918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  +229 01 90 68 59 18
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Localisation</p>
                <p className="text-gray-300 text-sm">Bénin, Cotonou</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} AKISSI FASHION. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Fait avec <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> à Cotonou, Bénin
          </p>
        </div>
      </div>
    </footer>
  );
}
