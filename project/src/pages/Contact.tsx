import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle, Instagram, Facebook } from 'lucide-react';

const faqs = [
  {
    q: 'Livrez-vous partout au Bénin ?',
    a: "Oui ! Nous livrons dans tout le Bénin. Les délais varient selon votre localisation : 24-48h pour Cotonou et ses environs, 2-5 jours pour les villes éloignées.",
  },
  {
    q: 'Comment se passe une commande sur mesure ?',
    a: "Contactez-nous par WhatsApp ou téléphone. Nous prenons vos mesures (en boutique ou à domicile), vous choisissez le tissu, et votre pièce est prête en 7 à 14 jours.",
  },
  {
    q: 'Quels sont vos modes de paiement ?',
    a: "Nous acceptons les paiements en espèces, par MTN Mobile Money, Moov Money et virement bancaire. Le paiement à la livraison est disponible à Cotonou.",
  },
  {
    q: 'Puis-je retourner un article ?',
    a: "Oui, les échanges et retours sont acceptés dans les 7 jours suivant la réception, à condition que l'article n'ait pas été utilisé et soit dans son état original.",
  },
  {
    q: 'Organisez-vous des séances de stylisme ?',
    a: "Absolument ! Nos stylistes peuvent vous accompagner pour choisir des tenues adaptées à votre morphologie, votre occasion et vos envies. Contactez-nous pour fixer un rendez-vous.",
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const whatsappMessage = `Bonjour AKISSI FASHION !
Je m'appelle : ${form.name || '[votre nom]'}
Mon téléphone : ${form.phone || '[votre téléphone]'}
Sujet : ${form.subject || '[votre sujet]'}

Message :
${form.message || '[votre message]'}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      window.open(`https://wa.me/2290190685918?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    }, 1000);
  };

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-72 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 to-gray-950/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-rose-400 text-xs font-bold uppercase tracking-widest">Nous Joindre</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2">Contactez-nous</h1>
            <p className="text-gray-300 mt-3 max-w-lg">
              Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Phone */}
            <a
              href="tel:+2290197566819"
              className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-rose-100 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-rose-50 group-hover:bg-rose-700 flex items-center justify-center mb-5 transition-colors">
                <Phone className="w-6 h-6 text-rose-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Téléphone</h3>
              <p className="text-gray-500 text-sm mb-3">Appelez-nous directement</p>
              <p className="text-rose-700 font-bold text-lg">+229 01 97 56 68 19</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2290190685918"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-50 group-hover:bg-green-500 flex items-center justify-center mb-5 transition-colors">
                <MessageCircle className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">WhatsApp</h3>
              <p className="text-gray-500 text-sm mb-3">Message instantané</p>
              <p className="text-green-600 font-bold text-lg">+229 01 90 68 59 18</p>
            </a>

            {/* Location */}
            <div className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center mb-5 transition-colors">
                <MapPin className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Localisation</h3>
              <p className="text-gray-500 text-sm mb-3">Venez nous rendre visite</p>
              <p className="text-blue-600 font-bold">Cotonou, Bénin</p>
            </div>
          </div>

          {/* Form + Info */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Envoyez-nous un Message</h2>
              <p className="text-gray-500 mb-8">Remplissez le formulaire et nous vous répondrons très rapidement.</p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-5" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Message envoyé !</h3>
                  <p className="text-gray-600 mb-6">Merci pour votre message. Nous vous contacterons très rapidement.</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://wa.me/2290190685918?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Continuer sur WhatsApp
                    </a>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', subject: '', message: '' }); }}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      Nouveau message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Nom complet *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all"
                        placeholder="+229 XX XX XX XX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Sujet *</label>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all"
                    >
                      <option value="">Choisissez un sujet</option>
                      <option>Commande d'une tenue</option>
                      <option>Confection sur mesure</option>
                      <option>Demande de prix</option>
                      <option>Location de tenue</option>
                      <option>Autre demande</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all resize-none"
                      placeholder="Décrivez votre besoin en détail..."
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={sending}
                      className="flex-1 bg-rose-700 hover:bg-rose-700 disabled:bg-rose-400 text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-rose-200"
                    >
                      {sending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Envoyer le message
                        </>
                      )}
                    </button>
                    <a
                      href={`https://wa.me/2290190685918?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full font-semibold transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Direct
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hours */}
              <div className="bg-gray-50 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-rose-700" />
                  </div>
                  <h3 className="font-bold text-gray-900">Horaires d'Ouverture</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  {[
                    { day: 'Lundi — Vendredi', hours: '8h00 – 20h00' },
                    { day: 'Samedi', hours: '9h00 – 21h00' },
                    { day: 'Dimanche', hours: '10h00 – 18h00' },
                  ].map((h) => (
                    <li key={h.day} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                      <span className="text-gray-600">{h.day}</span>
                      <span className="font-semibold text-gray-900">{h.hours}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-600 text-xs font-semibold">WhatsApp disponible 24h/7j</span>
                </div>
              </div>

              {/* Social */}
              <div className="bg-gray-50 rounded-3xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Suivez-nous</h3>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 rounded-2xl text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-2xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                </div>
              </div>

              {/* Quick actions */}
              <div className="bg-rose-700 rounded-3xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Commande Express</h3>
                <p className="text-rose-200 text-sm mb-5">Pour une réponse immédiate, contactez-nous directement sur WhatsApp.</p>
                <a
                  href="https://wa.me/2290190685918?text=Bonjour%20Akissi%20Fashion%20!%20Je%20souhaite%20passer%20une%20commande."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-rose-700 text-center py-3 rounded-full font-bold text-sm hover:bg-rose-50 transition-colors"
                >
                  Ouvrir WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-rose-700 text-xs font-bold uppercase tracking-widest">Où Nous Trouver</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Notre Localisation</h2>
            <p className="text-gray-500 mt-2">AKISSI FASHION — Cotonou, Bénin</p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: '450px' }}>
            <iframe
              title="AKISSI FASHION - Cotonou, Bénin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.717141384353!2d2.3660566!3d6.3920477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102357027fb231d9%3A0x45f4bff84b746437!2sAkissi%20Fashion%20(pr%C3%AAt-%C3%A0-porter)!5e0!3m2!1sfr!2sbj!4v1715893300000!5m2!1sfr!2sbj"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="contrast-125"
            ></iframe>
            {/* Popup overlay on map */}
            <div className="absolute top-5 left-5 bg-white rounded-2xl shadow-xl p-5 max-w-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-700 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">AKISSI FASHION</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Cotonou, Bénin</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-600 text-xs font-medium">Ouvert maintenant</span>
                  </div>
                  <div className="mt-3 space-y-1">
                    <a
                      href="tel:+2290190685918"
                      className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-rose-700 transition-colors"
                    >
                      <Phone className="w-3 h-3" />
                      +229 01 90 68 59 18
                    </a>
                    <a
                      href="https://wa.me/2290190685918"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <MessageCircle className="w-3 h-3" />
                      +229 01 90 68 59 18
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-rose-700 text-xs font-bold uppercase tracking-widest">Questions Fréquentes</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">FAQ</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-rose-200 shadow-md' : 'border-gray-100'
                  }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold transition-all ${openFaq === i ? 'bg-rose-700 text-white rotate-45' : 'bg-gray-100 text-gray-600'
                    }`}>
                    +
                  </span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === i ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
