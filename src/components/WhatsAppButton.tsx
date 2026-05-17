import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');

  const defaultMsg = "Bonjour AKISSI FASHION ! Je souhaite obtenir des informations sur vos collections.";

  const sendMessage = () => {
    const text = msg.trim() || defaultMsg;
    window.open(`https://wa.me/2290190685918?text=${encodeURIComponent(text)}`, '_blank');
    setOpen(false);
    setMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Chat popup */}
      <div className={`transition-all duration-300 origin-bottom-right ${open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
        }`}>
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-80">
          {/* Header */}
          <div className="bg-green-500 p-5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">AKISSI FASHION</h4>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-green-200 animate-pulse" />
                <span className="text-green-100 text-xs">En ligne maintenant</span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5">
            <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 mb-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                Bonjour ! Comment puis-je vous aider aujourd'hui ? Nous répondons en quelques minutes.
              </p>
              <p className="text-gray-400 text-xs mt-2">AKISSI FASHION</p>
            </div>

            <div className="space-y-2 mb-4">
              {['Commander une tenue', 'Demande sur mesure', 'Disponibilité & Prix'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setMsg(suggestion)}
                  className={`w-full text-left text-xs px-3 py-2 rounded-full border transition-all ${msg === suggestion
                    ? 'bg-green-500 text-white border-green-500'
                    : 'border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-600'
                    }`}
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Votre message..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1 border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
              />
              <button
                onClick={sendMessage}
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-colors flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${open ? 'bg-gray-700 hover:bg-gray-800' : 'bg-green-500 hover:bg-green-600 hover:scale-110'
          }`}
        aria-label="WhatsApp"
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
        {!open && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-rose-500 rounded-full border-2 border-white animate-bounce" />
        )}
      </button>
    </div>
  );
}
