import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const navigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate('home')}
          className="flex items-center gap-2.5 group"
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${scrolled ? 'bg-rose-700 shadow-md' : 'bg-white/20 backdrop-blur-md border border-white/40'
            }`}>
            <ShoppingBag className={`w-5 h-5 text-white`} />
          </div>
          <span className={`font-extrabold text-xl tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'
            }`}>
            AKISSI <span className={scrolled ? 'text-rose-700' : 'text-rose-400'}>FASHION</span>
          </span>
        </button>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => navigate(link.id)}
              className={`text-[13px] font-bold tracking-widest uppercase transition-all relative group ${scrolled
                ? currentPage === link.id ? 'text-rose-700' : 'text-gray-600 hover:text-rose-700'
                : currentPage === link.id ? 'text-rose-400' : 'text-white hover:text-rose-300'
                }`}
            >
              {link.label}
              <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-rose-600 transition-all duration-300 ${currentPage === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
            </button>
          ))}
          <button
            onClick={() => navigate('contact')}
            className="ml-4 bg-rose-700 hover:bg-rose-800 text-white px-7 py-2.5 rounded-full text-[12px] font-bold tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-rose-900/20 active:scale-95"
          >
            Commander
          </button>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <nav className="bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => navigate(link.id)}
              className={`text-left py-3 px-2 text-[13px] font-bold uppercase tracking-widest border-b border-gray-50 transition-colors ${currentPage === link.id ? 'text-rose-700' : 'text-gray-600 hover:text-rose-700'
                }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => navigate('contact')}
            className="mt-4 bg-rose-700 text-white py-4 rounded-full text-[12px] font-bold uppercase tracking-widest shadow-md active:scale-95 transition-transform"
          >
            Commander
          </button>
        </nav>
      </div>
    </header>
  );
}
