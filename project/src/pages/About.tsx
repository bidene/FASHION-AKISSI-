import { CheckCircle, ArrowRight, Users, Award, Heart, Scissors } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const values = [
  {
    icon: Heart,
    title: 'Passion du Beau',
    desc: "Chaque création est pensée avec amour. Nous mettons notre cœur dans la sélection de chaque pièce pour vous offrir le meilleur de la mode africaine.",
  },
  {
    icon: Award,
    title: 'Excellence & Qualité',
    desc: "Seuls les meilleurs tissus et finitions sont retenus. Notre exigence de qualité est non négociable car vous méritez ce qu'il y a de mieux.",
  },
  {
    icon: Users,
    title: 'Service Personnalisé',
    desc: "Nous prenons le temps de comprendre votre style, votre morphologie et vos préférences pour vous proposer des tenues qui vous correspondent vraiment.",
  },
  {
    icon: Scissors,
    title: 'Savoir-Faire Local',
    desc: "Fiers de nos racines béninoises, nous travaillons avec des artisans locaux talentueux pour créer des pièces qui honorent notre héritage culturel.",
  },
];

const milestones = [
  { year: '2018', title: "Fondation d'AKISSI FASHION", desc: "Ouverture de la première boutique à Cotonou avec une vision claire : rendre la mode africaine accessible et premium." },
  { year: '2019', title: 'Première Collection Wax', desc: "Lancement de notre ligne signature utilisant des tissus wax authentiques en collaboration avec des tisseurs locaux." },
  { year: '2021', title: 'Expansion Online', desc: "Lancement de notre présence digitale pour toucher les clients à travers tout le Bénin et au-delà." },
  { year: '2023', title: '+500 Clientes Fidèles', desc: "Franchise d'une communauté solide de femmes qui font confiance à AKISSI FASHION pour leurs occasions spéciales." },
  { year: '2025', title: 'Nouvelle Collection Premium', desc: "Introduction d'une gamme haut de gamme fusionnant élégance africaine et codes de la haute couture internationale." },
];

const team = [
  {
    name: 'Akissi Kouamé',
    role: 'Fondatrice & Directrice Créative',
    bio: "Passionnée de mode depuis l'enfance, Akissi a transformé sa vision en une marque reconnue pour son authenticité et son élégance.",
    image: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Mireille Adjovi',
    role: 'Styliste & Conseillère Mode',
    bio: "Formée à Dakar et Abidjan, Mireille apporte son expertise des tendances africaines et internationales à notre équipe.",
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Serge Houinsou',
    role: 'Responsable Clientèle',
    bio: "Avec son sens du service et son sourire légendaire, Serge s'assure que chaque cliente repart comblée et fidèle à AKISSI FASHION.",
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function About({ onNavigate }: AboutProps) {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3622623/pexels-photo-3622623.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="À propos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 to-gray-950/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-rose-400 text-xs font-bold uppercase tracking-widest">Notre Histoire</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2">À Propos de Nous</h1>
            <p className="text-gray-300 mt-3 max-w-lg">
              Née d'une passion pour la mode africaine, AKISSI FASHION célèbre l'élégance et l'identité culturelle.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-rose-700 text-xs font-bold uppercase tracking-widest">Notre Mission</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              La Mode Africaine,<br />Réinventée pour Vous
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              AKISSI FASHION est née d'un rêve simple : rendre la mode africaine accessible, moderne et premium. Fondée à Cotonou au Bénin, notre boutique de prêt-à-porter propose des créations qui mêlent harmonieusement les riches traditions textiles africaines aux tendances contemporaines.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Chaque pièce de notre collection est soigneusement sélectionnée ou créée pour refléter l'authenticité de notre héritage tout en répondant aux exigences du style moderne. Nous croyons que chaque femme mérite de se sentir magnifique et confiante dans ce qu'elle porte.
            </p>
            <ul className="space-y-3 mb-8">
              {['Tissus wax, bogolan et kente authentiques', 'Coupes adaptées à toutes les morphologies', 'Collections renouvelées chaque saison', 'Prix accessibles sans compromis sur la qualité'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate('services')}
              className="bg-rose-700 hover:bg-rose-700 text-white px-7 py-3 rounded-full font-semibold flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-rose-200"
            >
              Découvrir nos collections <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Collection"
                className="rounded-2xl object-cover aspect-[3/4]"
              />
              <div className="flex flex-col gap-4 mt-8">
                <img
                  src="https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Mode"
                  className="rounded-2xl object-cover aspect-square"
                />
                <img
                  src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Élégance"
                  className="rounded-2xl object-cover aspect-square"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-rose-700 text-white px-6 py-4 rounded-2xl shadow-xl hidden md:block">
              <p className="text-3xl font-bold">7+</p>
              <p className="text-rose-200 text-sm">Années d'expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-rose-700 text-xs font-bold uppercase tracking-widest">Ce Qui Nous Anime</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Nos Valeurs</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 group-hover:bg-rose-700 flex items-center justify-center mb-5 transition-colors">
                  <v.icon className="w-6 h-6 text-rose-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-rose-700 text-xs font-bold uppercase tracking-widest">Évolution</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Notre Parcours</h2>
          </div>
          <div className="relative">
            <div className="absolute left-16 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 md:-translate-x-0.5" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className={`flex gap-8 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`hidden md:flex w-1/2 ${i % 2 === 0 ? 'justify-end pr-10' : 'justify-start pl-10'}`}>
                    <div className={`bg-white border rounded-2xl p-6 shadow-sm max-w-xs ${i % 2 === 0 ? 'text-right' : ''}`}>
                      <h3 className="font-bold text-gray-900 mb-2">{m.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="relative flex flex-col items-center z-10">
                    <div className="w-14 h-14 rounded-full bg-rose-700 flex items-center justify-center shadow-lg shadow-rose-200 flex-shrink-0">
                      <span className="text-white text-xs font-bold">{m.year}</span>
                    </div>
                  </div>
                  <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pl-10' : 'md:pr-10 md:hidden'}`}>
                    <div className="bg-white border rounded-2xl p-6 shadow-sm md:hidden">
                      <h3 className="font-bold text-gray-900 mb-2">{m.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                    <div className="hidden md:block">
                      {i % 2 !== 0 && (
                        <div className="bg-white border rounded-2xl p-6 shadow-sm max-w-xs">
                          <h3 className="font-bold text-gray-900 mb-2">{m.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-rose-700 text-xs font-bold uppercase tracking-widest">Les Visages</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Notre Équipe</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                  <p className="text-rose-700 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-700">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Prête à Trouver Votre Tenue Idéale ?
          </h2>
          <p className="text-rose-200 text-lg mb-8">
            Contactez-nous dès maintenant et laissez-nous vous guider vers le look parfait.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('contact')}
              className="bg-white text-rose-700 hover:bg-rose-50 px-8 py-4 rounded-full font-bold transition-colors"
            >
              Nous Contacter
            </button>
            <button
              onClick={() => navigate('services')}
              className="border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-full font-bold transition-colors"
            >
              Voir nos Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
