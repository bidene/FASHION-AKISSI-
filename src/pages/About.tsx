import { CheckCircle, ArrowRight, Users, Award, Heart, Scissors, Phone } from 'lucide-react';
import boutique from '../assets/boutique.jpeg';
import yellowDress from '../assets/yellow_dress.jpg';
import whiteDress from '../assets/white_dress.jpg';
import armand from '../assets/armand.jpg';
import akissi from '../assets/akissi.jpg';

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
  { year: '2015', title: "Fondation d'AKISSI FASHION", desc: "Ouverture de la première boutique à Cotonou avec une vision claire : rendre la mode africaine accessible et premium." },
  { year: '2016', title: 'Première Collection', desc: "Lancement de notre ligne signature utilisant des tissus wax authentiques en collaboration avec des tisseurs locaux." },
  { year: '2017', title: 'Expansion Online', desc: "Lancement de notre présence digitale pour toucher les clients à travers tout le Bénin et au-delà." },
  { year: '2018', title: '+500 Clientes Fidèles', desc: "Franchise d'une communauté solide de femmes qui font confiance à AKISSI FASHION pour leurs occasions spéciales." },
  { year: '2019', title: 'Nouvelle Collection Premium', desc: "Introduction d'une gamme haut de gamme fusionnant élégance africaine et codes de la haute couture internationale." },
  { year: '2020', title: 'Résilience & Innovation', desc: "Adaptation avec succès aux défis mondiaux et lancement d'une ligne de prêt-à-porter confortable et chic." },
  { year: '2021', title: 'Ouverture Seconde Boutique', desc: "Inauguration d'un nouvel espace de vente moderne, marquant notre expansion physique au Bénin." },
  { year: '2022', title: 'Défilé International', desc: "Première participation majeure à un événement de mode international, propulsant AKISSI sur la scène régionale." },
  { year: '2023', title: 'Nouvelle Mode AKISSI Fashion', desc: "Inauguration de notre grande maison de mode dédiée à la création et à la personnalisation de vêtements sur-mesure, avec un savoir-faire unique et une qualité premium." },
  { year: '2024', title: 'Ligne Accessoires', desc: "Création d'une gamme complète de sacs et bijoux exclusifs faits main pour sublimer nos tenues." },
  { year: '2025', title: 'Mode Éco-responsable', desc: "Transition vers des matériaux durables et lancement de notre première grande collection upcyclée." },
  { year: '2026', title: 'Expansion Internationale', desc: "Ouverture de notre premier showroom à l'international pour faire rayonner la mode africaine." },
];

const team = [
  {
    name: 'Akissi K.',
    role: 'Fondatrice & Directrice Créative',
    bio: "Passionnée de mode depuis l'enfance, Akissi a transformé sa vision en une marque reconnue pour son authenticité et son élégance.",
    image: akissi,
  },
  {
    name: 'Armand A',
    role: 'Responsable Clientèle',
    bio: "Avec son sens du service et son sourire légendaire, Armand s'assure que chaque cliente repart comblée et fidèle à AKISSI FASHION.",
    image: armand,
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
            <h2 className="text-4xl font-bold mt-3 mb-6 leading-tight">
              <span className="text-gray-900">Akissi</span> <span className="text-rose-700">Fashion</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Fondée au Bénin, Akissi Fashion est née d'une passion pour le style urbain et le désir de sublimer chaque femme au quotidien.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Nous sélectionnons avec soin des pièces tendance auprès de fournisseurs afin de proposer des vêtements modernes, stylés et accessibles. Chaque article est choisi pour refléter les dernières tendances et répondre aux envies de nos clientes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Des tenues chic aux looks décontractés, notre mission est de rendre le prêt-à-porter féminin simple, accessible et toujours à la mode.
            </p>
            <button
              onClick={() => navigate('services')}
              className="bg-rose-700 hover:bg-rose-700 text-white px-7 py-3 rounded-full font-semibold flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-rose-200"
            >
              Découvrir nos collections <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <img
                src={yellowDress}
                alt="Collection"
                className="rounded-2xl object-cover aspect-[2/3] h-[400px] md:h-[485px] mx-auto shadow-md"
              />
              <div className="flex flex-col gap-4 mt-8">
                <img
                  src={boutique}
                  alt="Boutique Akissi Fashion"
                  className="rounded-2xl object-cover aspect-[5/4] shadow-md"
                />
                <img
                  src={whiteDress}
                  alt="Élégance"
                  className="rounded-2xl object-cover aspect-[3/4] object-[center_15%] shadow-md"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-rose-700 text-white px-6 py-4 rounded-2xl shadow-xl hidden md:block">
              <p className="text-3xl font-bold">10+</p>
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
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${member.name === 'Armand A' ? 'object-top' : ''
                      }`}
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
              className="bg-white text-rose-700 hover:bg-rose-50 px-8 py-4 rounded-full font-bold transition-all hover:shadow-lg hover:shadow-rose-950/20 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Nous Contacter
            </button>
            <button
              onClick={() => navigate('services')}
              className="border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2"
            >
              Voir nos Services
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
