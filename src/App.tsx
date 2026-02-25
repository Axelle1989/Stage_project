import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  ArrowRight, 
  Phone, 
  Mail, 
  Linkedin, 
  Facebook, 
  Instagram,
  Building2,
  Users,
  HardHat,
  Award,
  Calendar,
  Newspaper,
  ShoppingBag,
  Factory
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

type Page = 'home' | 'about' | 'news' | 'clients' | 'products' | 'contact' | 'history' | 'team' | 'values' | 'specs' | 'latest-news' | 'communiques' | 'events' | 'entreprises' | 'particuliers' | 'partenaires' | 'fabrication' | 'products-list' | 'sales' | 'join-team';

// --- Components ---

const Navbar = ({ onNavigate, currentPage }: { onNavigate: (page: Page) => void, currentPage: Page }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Qui sommes-nous ?', 
      id: 'about' as Page,
      dropdown: [
        { name: 'Histoire', id: 'history' as Page },
        { name: 'Équipe', id: 'team' as Page },
        { name: 'Valeurs et Missions', id: 'values' as Page },
        { name: 'Spécificités', id: 'specs' as Page }
      ]
    },
    { 
      name: 'Actualités', 
      id: 'news' as Page,
      dropdown: [
        { name: 'Dernières nouvelles', id: 'latest-news' as Page },
        { name: 'Communiqués', id: 'communiques' as Page },
        { name: 'Événements', id: 'events' as Page }
      ]
    },
    { 
      name: 'Nos Clients', 
      id: 'clients' as Page,
      dropdown: [
        { name: 'Entreprises', id: 'entreprises' as Page },
        { name: 'Particuliers', id: 'particuliers' as Page },
        { name: 'Partenaires', id: 'partenaires' as Page }
      ]
    },
    { 
      name: 'Produits & Services', 
      id: 'products' as Page,
      dropdown: [
        { name: 'Fabrication', id: 'fabrication' as Page },
        { name: 'Nos produits', id: 'products-list' as Page },
        { name: 'Vente du ciment', id: 'sales' as Page }
      ]
    },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || currentPage !== 'home' ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
          <div className="bg-white p-1 rounded shadow-sm">
             <img 
               src="https://picsum.photos/seed/nocibe-logo/200/80" 
               alt="NOCIBÉ Logo" 
               className="h-10 w-auto object-contain"
               referrerPolicy="no-referrer"
             />
          </div>
          <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled || currentPage !== 'home' ? 'text-nocibe-blue' : 'text-white'}`}>
            NOCIBÉ
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <button 
                onClick={() => onNavigate(link.id)}
                className={`flex items-center gap-1 font-medium text-sm uppercase tracking-wider transition-colors ${scrolled || currentPage !== 'home' ? 'text-slate-700 hover:text-nocibe-blue' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-100 overflow-hidden">
                {link.dropdown.map((item) => (
                  <button key={item.name} onClick={() => onNavigate(item.id)} className="w-full text-left block px-6 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-nocibe-blue transition-colors border-b border-slate-50 last:border-0">
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button 
            onClick={() => onNavigate('contact')}
            className={`font-medium text-sm uppercase tracking-wider transition-colors ${scrolled || currentPage !== 'home' ? 'text-slate-700 hover:text-nocibe-blue' : 'text-white/90 hover:text-white'}`}
          >
            Contact
          </button>
          <button className={`p-2 rounded-full transition-colors ${scrolled || currentPage !== 'home' ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : 'bg-white/10 text-white hover:bg-white/20'}`}>
            <Search size={18} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} className={scrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-white'} /> : <Menu size={28} className={scrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white lg:hidden flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="bg-nocibe-blue p-1 rounded shadow-sm">
                   <img 
                     src="data:image/png;base64,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" 
                     alt="NOCIBÉ Logo" 
                     className="h-8 w-auto invert brightness-0"
                     referrerPolicy="no-referrer"
                   />
                </div>
                <span className="font-bold text-xl tracking-tight text-nocibe-blue">NOCIBÉ</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 text-slate-900">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col gap-4">
                    <span className="text-xs font-bold text-nocibe-accent uppercase tracking-[0.2em]">{link.name}</span>
                    <div className="grid grid-cols-1 gap-3 pl-2 border-l-2 border-slate-100">
                      {link.dropdown.map((item) => (
                        <button 
                          key={item.name} 
                          onClick={() => { onNavigate(item.id); setIsOpen(false); }} 
                          className="text-left text-xl font-display font-bold text-slate-800 hover:text-nocibe-blue transition-colors"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <button 
                  onClick={() => { onNavigate('contact'); setIsOpen(false); }} 
                  className="text-left text-2xl font-display font-bold text-slate-900 border-t border-slate-100 pt-6"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="p-8 bg-slate-50 border-t border-slate-100">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-slate-500 font-medium">Besoin d'aide ?</p>
                <a href="tel:+2290147816778" className="flex items-center gap-3 text-nocibe-blue font-bold text-lg">
                  <Phone size={20} />
                  +229 01 47 81 67 78
                </a>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onNavigate }: { onNavigate?: (page: Page) => void }) => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/cement-factory/1920/1080?grayscale" 
          alt="NOCIBÉ Factory" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-nocibe-accent text-white text-xs font-bold uppercase tracking-widest mb-6">
              L'excellence Industrielle au Bénin
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-8">
              Construire l'avenir du Bénin, <br />
              <span className="italic font-normal text-white/90">une fondation à la fois.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
              La Nouvelle Cimenterie du Bénin (NOCIBÉ) incarne l'excellence industrielle au service du développement national. Nous allions modernité, fiabilité et engagement local.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate?.('products-list')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-nocibe-blue font-bold rounded-lg shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group"
              >
                Découvrir nos produits
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate?.('sales')}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all"
              >
                Acheter du ciment
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-md border-t border-white/10 py-6 md:py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: 'Capacité annuelle', value: '1.5M Tonnes', icon: Building2 },
              { label: 'Collaborateurs', value: '500+', icon: Users },
              { label: 'Projets majeurs', value: '120+', icon: HardHat },
              { label: 'Années d\'expertise', value: '15+', icon: Award },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-4 md:border-r border-white/10 md:last:border-0">
                <div className="p-2 md:p-3 rounded-xl bg-white/10 text-white shrink-0">
                  <stat.icon size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="text-lg md:text-2xl font-bold text-white leading-none mb-1">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider leading-tight">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DGMessage = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/3 relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/dg-portrait/600/800" 
                alt="Directeur Général" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-nocibe-blue p-8 rounded-2xl shadow-xl text-white hidden md:block">
              <div className="text-sm font-bold uppercase tracking-widest opacity-60 mb-1">Directeur Général</div>
              <div className="text-xl font-display italic">"Bâtir avec intégrité"</div>
            </div>
          </motion.div>

          <div className="lg:w-2/3">
            <h2 className="text-sm font-bold text-nocibe-accent uppercase tracking-[0.2em] mb-4">Mot du Dirigeant</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Un engagement inébranlable pour le développement du Bénin
            </h3>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Chers partenaires, clients et collaborateurs, depuis sa création, la <span className="text-nocibe-blue font-semibold">NOCIBÉ</span> s’est engagée à bâtir une industrie moderne et performante au service du développement du Bénin.
              </p>
              <p>
                Notre ambition est claire : fournir un ciment de qualité exceptionnelle tout en plaçant l’innovation, la sécurité et la satisfaction client au cœur de nos priorités. Grâce à l’engagement de nos équipes et à la confiance de nos partenaires, nous construisons chaque jour des fondations solides pour l’avenir de notre nation.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-px bg-slate-300"></div>
              <p className="font-display italic text-xl text-slate-900">Le Directeur Général</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NewsSection = () => {
  const news = [
    {
      title: "Nouvelle ligne de production",
      category: "Industrie",
      date: "15 Fév 2026",
      image: "https://picsum.photos/seed/news1/800/600",
      description: "Une nouvelle ligne de production automatisée vient d’être installée pour augmenter notre capacité de 20%."
    },
    {
      title: "Communiqués officiels",
      category: "Institutionnel",
      date: "10 Fév 2026",
      image: "https://picsum.photos/seed/news2/800/600",
      description: "NOCIBE publie de nouveaux communiqués officiels concernant ses engagements RSE pour l'année 2026."
    },
    {
      title: "Journée Portes Ouvertes",
      category: "Événement",
      date: "05 Fév 2026",
      image: "https://picsum.photos/seed/news3/800/600",
      description: "Découvrez nos coulisses lors de notre prochaine journée portes ouvertes destinée aux étudiants en ingénierie."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold text-nocibe-accent uppercase tracking-[0.2em] mb-4">Actualités</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900">Dernières Nouvelles</h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-nocibe-blue font-bold hover:underline">
            Voir tout le blog <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {news.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest text-nocibe-blue">
                  {item.category}
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                <Calendar size={14} />
                {item.date}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-nocibe-blue transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-600 leading-relaxed mb-4 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-nocibe-blue font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Lire la suite <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">Ils nous font confiance</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {[1, 2, 3, 4, 5].map((i) => (
            <img 
              key={i} 
              src={`https://picsum.photos/seed/partner-${i}/150/60?grayscale`} 
              alt={`Partenaire ${i}`} 
              className="h-8 md:h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = ({ onNavigate }: { onNavigate?: (page: Page) => void }) => {
  return (
    <section className="py-24 bg-nocibe-blue relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
          Prêt à bâtir vos projets avec nous ?
        </h2>
        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Que vous soyez une entreprise de BTP ou un particulier, nous avons les solutions adaptées à vos besoins de construction.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <button 
            onClick={() => onNavigate?.('sales')}
            className="w-full sm:w-auto px-10 py-5 bg-nocibe-accent text-white font-bold rounded-xl shadow-2xl hover:bg-orange-600 transition-all transform hover:-translate-y-1"
          >
            Passer une commande
          </button>
          <button 
            onClick={() => onNavigate?.('join-team')}
            className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
          >
            Rejoindre l'équipe
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onNavigate }: { onNavigate?: (page: Page) => void }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-white p-1 rounded">
                <img 
                  src="data:image/png;base64,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|
                  src="https://picsum.photos/seed/nocibe-logo-footer/100/40" 
                  alt="NOCIBÉ" 
                  className="h-6 w-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">NOCIBÉ</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 text-slate-400">
              La Nouvelle Cimenterie du Bénin est le partenaire privilégié des grands chantiers nationaux, garantissant durabilité et performance.
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-nocibe-blue hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm">
              {['Qui sommes-nous ?', 'Produits & Services', 'Nos Clients', 'Actualités', 'Carrières'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <Phone size={18} className="text-nocibe-accent shrink-0" />
                <span>+229 01 47 81 67 78</span>
              </li>
              <li className="flex gap-4">
                <Mail size={18} className="text-nocibe-accent shrink-0" />
                <span>contact@nocibe-benin.com</span>
              </li>
              <li className="flex gap-4">
                <Building2 size={18} className="text-nocibe-accent shrink-0" />
                <span>Siège Social, Cotonou, Bénin</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-6 italic">Restez informé de nos derniers projets et innovations.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-slate-800 border-0 rounded-lg px-4 py-3 text-sm w-full focus:ring-2 focus:ring-nocibe-blue outline-none"
              />
              <button className="bg-nocibe-blue text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 uppercase tracking-widest">
          <p>© 2026 Nouvelle Cimenterie du Bénin. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const HomePage = ({ onNavigate }: { onNavigate?: (page: Page) => void }) => (
  <>
    <Hero onNavigate={onNavigate} />
    <Partners />
    <DGMessage />
    <NewsSection />
    <CTA onNavigate={onNavigate} />
  </>
);

const AboutPage = ({ onNavigate }: { onNavigate?: (page: Page) => void }) => {
  const sections = [
    {
      title: "Histoire",
      icon: Newspaper,
      description: "Les origines et l’évolution d’un acteur majeur du ciment au Bénin. De la première pierre à l'excellence industrielle.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Équipe",
      icon: Users,
      description: "Découvrez les professionnels, ingénieurs et techniciens qui bâtissent NOCIBÉ chaque jour avec passion.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Valeurs & Missions",
      icon: Award,
      description: "Les principes d'intégrité, de sécurité et d'innovation qui guident nos actions et notre engagement sociétal.",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Spécificité",
      icon: Building2,
      description: "Ce qui fait notre particularité : une technologie de pointe et un ciment adapté aux climats tropicaux.",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Bien construit, <span className="text-nocibe-blue italic font-normal">c'est nous !</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Découvrez l'identité, l’histoire, les valeurs et les ambitions de la Nouvelle Cimenterie du Bénin. Un engagement pour la qualité et le développement durable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 md:p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl ${section.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <section.icon size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                {section.description}
              </p>
              <button className="flex items-center gap-2 text-nocibe-blue font-bold group-hover:gap-3 transition-all">
                En savoir plus <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-24 py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-display font-bold mb-8">Notre Vision 2030</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Nous aspirons à devenir le leader incontesté de la construction durable en Afrique de l'Ouest, en intégrant des processus de production à faible empreinte carbone et en soutenant les infrastructures de demain.
              </p>
              <ul className="space-y-4">
                {['Innovation technologique', 'Responsabilité environnementale', 'Développement des talents locaux'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-nocibe-accent"></div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://picsum.photos/seed/vision/800/450" 
                  alt="Vision NOCIBÉ" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Partners />
      <CTA />
    </div>
  );
};

const NewsPage = () => {
  const newsItems = [
    {
      title: "Dernières nouvelles",
      image: "https://picsum.photos/seed/news-main/1200/600",
      description: "Une nouvelle ligne de production vient d’être installée pour répondre à la demande croissante et améliorer notre efficacité énergétique.",
      date: "18 Fév 2026",
      category: "Industrie"
    },
    {
      title: "Communiqués",
      image: "https://picsum.photos/seed/communique/1200/600",
      description: "NOCIBÉ publie de nouveaux communiqués officiels pour informer ses partenaires sur les résultats du dernier trimestre.",
      date: "12 Fév 2026",
      category: "Institutionnel"
    },
    {
      title: "Événements",
      image: "https://picsum.photos/seed/event/1200/600",
      description: "Découvrez les prochains événements organisés par la NOCIBÉ, incluant des séminaires sur la construction durable.",
      date: "05 Fév 2026",
      category: "Événement"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Notre <span className="text-nocibe-blue italic font-normal">actualité</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Restez informé des dernières avancées technologiques, des communiqués officiels et des événements marquants de la Nouvelle Cimenterie du Bénin.
          </p>
        </motion.div>

        <div className="space-y-16">
          {newsItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="lg:w-3/5 relative group overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-nocibe-blue shadow-lg">
                  {item.category}
                </div>
              </div>
              <div className="lg:w-2/5">
                <div className="flex items-center gap-3 text-slate-400 text-sm mb-4">
                  <Calendar size={16} />
                  {item.date}
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">{item.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {item.description}
                </p>
                <button className="px-8 py-4 bg-nocibe-blue text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2 group">
                  Lire l'article complet
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Partners />
      <CTA />
    </div>
  );
};

const ClientsPage = () => {
  const clientTypes = [
    {
      title: "Entreprises",
      image: "https://picsum.photos/seed/enterprise/800/600",
      description: "Solutions adaptées pour les entreprises de BTP, les industries et les grands projets d'infrastructure nationale.",
      icon: Building2,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Partenaires",
      image: "https://picsum.photos/seed/partners-client/800/600",
      description: "Nos partenariats stratégiques avec des acteurs clés du secteur pour une synergie d'expertise et de croissance.",
      icon: Award,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Particuliers",
      image: "https://picsum.photos/seed/individual/800/600",
      description: "Produits de qualité supérieure pour les besoins des particuliers, les rénovations et les petites constructions.",
      icon: Users,
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Nos <span className="text-nocibe-blue italic font-normal">clients</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            NOCIBÉ accompagne une diversité d'acteurs dans la réalisation de leurs projets de construction, en offrant des solutions sur mesure and une qualité de ciment inégalée.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {clientTypes.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={client.image} 
                  alt={client.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute bottom-6 left-6 w-14 h-14 rounded-2xl ${client.color} flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                  <client.icon size={28} />
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{client.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {client.description}
                </p>
                <button className="w-full py-4 bg-slate-50 text-nocibe-blue font-bold rounded-xl group-hover:bg-nocibe-blue group-hover:text-white transition-all">
                  En savoir plus
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Partners />
      <CTA />
    </div>
  );
};

const ProductsPage = () => {
  const products = [
    {
      title: "Fabrication",
      image: "https://picsum.photos/seed/fabrication/800/600",
      description: "Découvrez notre processus industriel moderne, conforme aux normes internationales. Une technologie de pointe pour une qualité constante.",
      icon: Factory,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Nos produits",
      image: "https://picsum.photos/seed/products-list/800/600",
      description: "Explorez notre gamme complète de ciments adaptés à tous vos projets, du gros œuvre aux finitions les plus délicates.",
      icon: Building2,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Vente du ciment",
      image: "https://picsum.photos/seed/sales/800/600",
      description: "Commandez facilement nos produits au meilleur prix. Livraison rapide disponible sur l'ensemble du territoire national.",
      icon: ShoppingBag,
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Nos <span className="text-nocibe-blue italic font-normal">produits et services</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            NOCIBÉ propose des solutions innovantes et durables pour accompagner tous vos projets de construction, de la conception à la réalisation finale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute bottom-6 left-6 w-14 h-14 rounded-2xl ${product.color} flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                  <product.icon size={28} />
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{product.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {product.description}
                </p>
                <button className="w-full py-4 bg-slate-50 text-nocibe-blue font-bold rounded-xl group-hover:bg-nocibe-blue group-hover:text-white transition-all">
                  En savoir plus
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Partners />
      <CTA />
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Contactez-<span className="text-nocibe-blue italic font-normal">nous</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Nous serions ravis de répondre à vos questions ou de discuter de vos besoins. Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Votre nom" 
                    className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email professionnel</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="votre@email.com" 
                    className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Comment pouvons-nous vous aider ?" 
                  className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  placeholder="Détaillez votre demande..." 
                  className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full py-5 bg-nocibe-blue text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
                Envoyer le message
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Phone, title: "Téléphone", detail: "+229 01 47 81 67 78" },
              { icon: Mail, title: "Email", detail: "contact@nocibe-benin.com" },
              { icon: Building2, title: "Siège", detail: "Cotonou, Bénin" }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm text-nocibe-blue">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Partners />
      <CTA />
    </div>
  );
};

const HistoryPage = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Histoire de <span className="text-nocibe-blue italic font-normal">NOCIBÉ</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Découvrez le parcours d'un leader industriel qui façonne l'avenir du Bénin depuis plus d'une décennie.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 bg-slate-50 p-10 lg:p-20 rounded-[3rem] shadow-sm border border-slate-100">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-display font-bold text-nocibe-blue mb-8">Une ambition nationale</h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Fondée en 2014, la Nouvelle Cimenterie du Bénin (NOCIBÉ) est devenue un acteur majeur de l'industrie cimentière au Bénin. Grâce à une technologie moderne et à un processus conforme aux normes internationales, nous contribuons au développement des infrastructures nationales.
              </p>
              <p>
                Depuis sa création, NOCIBÉ s'engage à offrir un ciment de haute qualité tout en favorisant l'emploi local et la croissance économique du pays. Le projet est porté par Latfallah Layousse, un homme d'affaires sénégalais d'origine libanaise, qui a investi près de 300 milliards de FCFA. L'usine, située à Massè (commune d'Adja-Ouèrè), a été inaugurée sous le gouvernement de Boni Yayi.
              </p>
              <p>
                La Nouvelle Cimenterie du Bénin (NOCIBÉ) est une filiale de la plus grande cimenterie du Sénégal, Les Ciments du Sahel. Elle a été implantée au Bénin à Massè, dans le département du Plateau en 2009 et emploie actuellement environ 800 personnes pour faire tourner l’usine.
              </p>
              <p>
                Avec une production d’environ un million cinq cent mille tonnes par an (1 500 000 tonnes/an), elle est la plus grande usine du Bénin dans son secteur et positionne ainsi le pays en tant que plateforme de production et d’exportation du système cimentier.
              </p>
              <p>
                L’usine produit plusieurs types de ciments en exploitant les carrières disponibles, et toutes les transformations de matières se font sur place. NOCIBÉ se veut une entreprise respectueuse de la nature et écologique en évitant la pollution de l’air et des cours d’eau en effectuant des recyclages de matières.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://picsum.photos/seed/nocibe-history/800/1000" 
                  alt="Usine NOCIBÉ" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-nocibe-accent p-6 rounded-2xl shadow-xl text-white">
                <div className="text-3xl font-bold mb-1">2014</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-80">Année de Fondation</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Partners />
      <CTA />
    </div>
  );
};

const TeamPage = () => {
  const team = [
    { name: "Direction Générale", role: "Leadership Stratégique", image: "https://picsum.photos/seed/team1/400/500" },
    { name: "Département Technique", role: "Ingénierie & Production", image: "https://picsum.photos/seed/team2/400/500" },
    { name: "Département Commercial", role: "Ventes & Relation Client", image: "https://picsum.photos/seed/team3/400/500" },
    { name: "Ressources Humaines", role: "Gestion des Talents", image: "https://picsum.photos/seed/team4/400/500" },
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Notre <span className="text-nocibe-blue italic font-normal">Équipe</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Découvrez les professionnels, ingénieurs et techniciens qui bâtissent NOCIBÉ chaque jour avec passion et expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-lg relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nocibe-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <button className="w-full py-3 bg-white text-nocibe-blue font-bold rounded-xl shadow-lg">
                    Voir le profil
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-nocibe-accent font-medium uppercase tracking-wider text-xs">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Partners />
      <CTA />
    </div>
  );
};

const ValuesPage = () => {
  const values = [
    { title: "Qualité", desc: "Produire un ciment fiable et conforme aux normes internationales les plus strictes.", icon: Award },
    { title: "Innovation", desc: "Investir continuellement dans les technologies modernes pour une efficacité optimale.", icon: Factory },
    { title: "Responsabilité", desc: "Sécurité, respect de l’environnement et éthique du travail au cœur de nos actions.", icon: HardHat },
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Valeurs & <span className="text-nocibe-blue italic font-normal">Missions</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Notre engagement repose sur des piliers solides pour garantir l'excellence et la durabilité de nos projets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-blue-50 text-nocibe-blue rounded-2xl flex items-center justify-center mb-8">
                <v.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{v.title}</h3>
              <p className="text-slate-600 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center bg-slate-900 rounded-[3rem] p-10 lg:p-20 text-white overflow-hidden relative mb-24">
          <div className="relative z-10">
            <h2 className="text-4xl font-display font-bold mb-8">Notre Mission</h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              Fournir un ciment de qualité supérieure, durable et conforme aux standards internationaux, tout en soutenant activement le développement des infrastructures du Bénin.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-nocibe-accent rounded-xl flex items-center justify-center shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Impact Social</h4>
                  <p className="text-slate-400 text-sm">Avec plus de 600 emplois directs et indirects, NOCIBÉ participe activement au développement économique du Bénin. Nous soutenons la formation des jeunes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-nocibe-blue rounded-xl flex items-center justify-center shrink-0">
                  <Factory size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Capacité & Performance</h4>
                  <p className="text-slate-400 text-sm">Grâce à une capacité de production annuelle de plus de 1 500 000 tonnes de ciment, NOCIBÉ assure un approvisionnement régulier.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/nocibe-mission/800/800" 
                alt="Mission NOCIBÉ" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-[3rem] p-10 lg:p-20 border border-emerald-100">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-display font-bold text-emerald-900 mb-8">Engagement Environnemental</h2>
            <ul className="grid md:grid-cols-2 gap-6">
              {[
                "Réduction des émissions de CO₂",
                "Utilisation rationnelle des ressources",
                "Technologies à basse consommation",
                "Recyclage des déchets industriels"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-emerald-800 font-medium">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Partners />
      <CTA />
    </div>
  );
};

const SpecsPage = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Nos <span className="text-nocibe-blue italic font-normal">Spécificités</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Ce qui fait notre particularité : une technologie de pointe et un ciment adapté aux défis de notre environnement.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Performance", desc: "Ciment Portland de haute performance pour structures durables.", icon: Award },
              { title: "Adaptabilité", desc: "Production adaptée aux environnements humides et côtiers.", icon: Building2 },
              { title: "Modernité", desc: "Processus industriel moderne et certifié aux normes internationales.", icon: Factory },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-slate-50 text-nocibe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Partners />
      <CTA />
    </div>
  );
};

const LatestNewsPage = () => {
  const news = [
    {
      title: "Nouvelle ligne de production opérationnelle",
      image: "https://picsum.photos/seed/news-line/1200/600",
      desc: "La NOCIBÉ a mis en service une nouvelle ligne de production dotée d'équipements modernes afin d’accroître sa capacité et répondre à la demande croissante du marché béninois.",
      date: "20 Fév 2026"
    },
    {
      title: "Renforcement des mesures environnementales",
      image: "https://picsum.photos/seed/news-eco/1200/600",
      desc: "Un nouveau plan écologique a été adopté afin de réduire l’empreinte carbone et améliorer la gestion des déchets industriels.",
      date: "15 Fév 2026"
    },
    {
      title: "Recrutement de nouveaux techniciens",
      image: "https://picsum.photos/seed/news-tech/1200/600",
      desc: "La NOCIBÉ renforce son équipe avec l’arrivée de nouveaux ingénieurs spécialisés dans la maintenance industrielle et la sécurité des installations.",
      date: "10 Fév 2026"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Dernières <span className="text-nocibe-blue italic font-normal">nouvelles</span>
          </h1>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {news.map((item, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="p-10">
                <div className="text-nocibe-accent font-bold text-sm mb-4 uppercase tracking-widest">{item.date}</div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">{item.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <Partners />
      <CTA />
    </div>
  );
};

const CommuniquesPage = () => {
  const communiques = [
    { title: "Communiqué n°001 — Nouveaux tarifs 2025", desc: "Le conseil d'administration annonce la mise à jour des tarifs du ciment à compter du 1er mars 2025.", date: "18 Fév 2026" },
    { title: "Maintenance annuelle des installations", desc: "Une opération technique majeure aura lieu dans nos usines du 15 au 22 février pour garantir la fiabilité de notre production.", date: "12 Fév 2026" },
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Communiqués <span className="text-nocibe-blue italic font-normal">Officiels</span>
          </h1>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {communiques.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-3 text-nocibe-accent font-bold text-xs mb-4 uppercase tracking-widest">
                <Newspaper size={16} />
                {c.date}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-nocibe-blue transition-colors">📌 {c.title}</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">{c.desc}</p>
              <button className="text-nocibe-blue font-bold flex items-center gap-2 hover:underline">
                Lire plus <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>
      <Partners />
      <CTA />
    </div>
  );
};

const EventsPage = () => {
  const events = [
    {
      title: "Journée portes ouvertes – Avril 2026",
      image: "https://picsum.photos/seed/event-open/1200/600",
      desc: "La NOCIBÉ organise une journée portes ouvertes pour faire découvrir aux visiteurs le fonctionnement de son usine ainsi que ses innovations technologiques.",
      date: "Avril 2026"
    },
    {
      title: "Formation interne sur la sécurité industrielle",
      image: "https://picsum.photos/seed/event-safety/1200/600",
      desc: "Un séminaire de formation destiné aux employés afin de renforcer les normes de sécurité et de prévention des risques sur le site.",
      date: "Mars 2026"
    },
    {
      title: "Conférence sur le développement durable",
      image: "https://picsum.photos/seed/event-eco/1200/600",
      desc: "La NOCIBÉ participera à une conférence réunissant plusieurs acteurs industriels pour discuter des solutions écologiques appliquées au secteur cimentier.",
      date: "Mai 2026"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Événements <span className="text-nocibe-blue italic font-normal">à venir</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {events.map((e, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img src={e.image} alt={e.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <div className="bg-blue-50 text-nocibe-blue inline-block px-3 py-1 rounded-lg text-xs font-bold mb-4 uppercase tracking-widest">{e.date}</div>
                <h2 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-nocibe-blue transition-colors">{e.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Partners />
      <CTA />
    </div>
  );
};

const EntreprisesPage = ({ onNavigate }: { onNavigate: (page: Page) => void }) => {
  const items = [
    { title: "BTP & Génie civil", desc: "Fourniture de ciment pour routes, ponts, immeubles et infrastructures publiques.", icon: Building2 },
    { title: "Industries", desc: "Solutions adaptées aux besoins industriels et aux productions à grande échelle.", icon: Factory },
    { title: "Grands projets", desc: "Accompagnement technique, logistique et livraison sur mesure.", icon: HardHat },
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Nos clients <span className="text-nocibe-blue italic font-normal">entreprises</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            NOCIBÉ accompagne les entreprises, industries et grands chantiers avec des solutions fiables, durables et compétitives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-blue-50 text-nocibe-blue rounded-2xl flex items-center justify-center mb-6">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => onNavigate('contact')}
            className="px-10 py-5 bg-nocibe-blue text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1"
          >
            Demander un devis
          </button>
        </div>
      </section>
      <Partners />
      <CTA />
    </div>
  );
};

const ParticuliersPage = () => {
  const items = [
    { title: "Maisons individuelles", desc: "Ciment de qualité pour fondations, murs et dalles.", icon: Building2 },
    { title: "Rénovation", desc: "Solutions fiables pour travaux de réparation et d’aménagement.", icon: HardHat },
    { title: "Petits chantiers", desc: "Achat facile et quantités adaptées à vos besoins.", icon: ShoppingBag },
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Nos clients <span className="text-nocibe-blue italic font-normal">particuliers</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            NOCIBÉ met à la disposition des particuliers des produits fiables pour toutes vos constructions et rénovations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-orange-50 text-nocibe-accent rounded-2xl flex items-center justify-center mb-6">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-10 py-5 bg-nocibe-accent text-white font-bold rounded-xl shadow-lg hover:bg-orange-600 transition-all transform hover:-translate-y-1">
            Acheter du ciment
          </button>
        </div>
      </section>
      <Partners />
      <CTA />
    </div>
  );
};

const PartenairesPage = ({ onNavigate }: { onNavigate: (page: Page) => void }) => {
  const items = [
    { title: "Distributeurs", desc: "Réseau national de distribution pour une disponibilité continue du ciment.", icon: ShoppingBag },
    { title: "Partenaires techniques", desc: "Experts en ingénierie, logistique et innovation industrielle.", icon: Factory },
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Nos <span className="text-nocibe-blue italic font-normal">partenaires</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            NOCIBÉ travaille avec des partenaires stratégiques pour garantir qualité, innovation et performance durable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => onNavigate('contact')}
            className="px-10 py-5 bg-nocibe-blue text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1"
          >
            Devenir partenaire
          </button>
        </div>
      </section>
      <Partners />
      <CTA />
    </div>
  );
};

const FabricationPage = () => {
  const steps = [
    { title: "1. Extraction des matières premières", desc: "Calcaire, argile et autres matériaux sont prélevés directement des carrières." },
    { title: "2. Broyage et homogénéisation", desc: "Les matières sont finement broyées afin d'obtenir un mélange homogène." },
    { title: "3. Cuisson à 1450°C", desc: "Le mélange passe dans un four rotatif pour former le clinker." },
    { title: "4. Refroidissement du clinker", desc: "Un refroidissement rapide permet de conserver les propriétés chimiques." },
    { title: "5. Ajout du gypse et finition", desc: "Le clinker est broyé avec du gypse pour obtenir le ciment final." },
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Processus de <span className="text-nocibe-blue italic font-normal">fabrication</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Découvrez comment nous transformons les ressources naturelles en un ciment de classe mondiale grâce à une technologie de pointe.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-nocibe-blue text-white rounded-full flex items-center justify-center font-bold shrink-0 shadow-lg">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="sticky top-40">
            <div className="bg-blue-50 p-10 rounded-[2.5rem] border border-blue-100 shadow-inner mb-8">
              <h3 className="text-2xl font-display font-bold text-nocibe-blue mb-4 flex items-center gap-3">
                <span className="text-3xl">💡</span> Le saviez-vous ?
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed italic">
                "Le clinker est l’élément principal de tous les ciments modernes. Sa qualité influence directement la résistance du béton."
              </p>
            </div>
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/factory-process/800/450" alt="Usine" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Environnement", desc: "Réduction des émissions de CO₂ et optimisation énergétique.", icon: Factory },
            { title: "Qualité", desc: "Contrôles stricts à chaque étape de production.", icon: Award },
            { title: "Sécurité", desc: "Formation continue et équipements conformes aux normes.", icon: HardHat },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center">
              <div className="w-12 h-12 bg-white text-nocibe-blue rounded-xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <item.icon size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 text-center">Questions Fréquentes</h2>
          <div className="space-y-4">
            {[
              { q: "Quels matériaux composent le ciment ?", a: "Principalement le clinker, le gypse et parfois des ajouts minéraux." },
              { q: "Quelle est la température du four ?", a: "Entre 1400°C et 1450°C selon le type de ciment." },
              { q: "Le ciment est-il recyclable ?", a: "Oui, les déchets de béton peuvent être recyclés en granulats." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm cursor-pointer">
                <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                  {faq.q}
                  <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Partners />
      <CTA />
    </div>
  );
};

const ProductsListPage = () => {
  const products = [
    { title: "CEM I 42.5R", desc: "Béton courant, fondations, structures", price: "FCFA / sac", image: "https://picsum.photos/seed/ciment1/400/300" },
    { title: "CEM II/A-L 42.5N", desc: "Béton préfabriqué, grands volumes", price: "FCFA / sac", image: "https://picsum.photos/seed/ciment2/400/300" },
    { title: "CEM II/B-L 32.5N", desc: "Béton durable, structures massives", price: "FCFA / sac", image: "https://picsum.photos/seed/ciment3/400/300" },
    { title: "CEM II/A-M", desc: "Zones agressives, durabilité", price: "FCFA / sac", image: "https://picsum.photos/seed/ciment4/400/300" },
    { title: "CEM II/B-M", desc: "Terrains contenant des sulfates", price: "FCFA / sac", image: "https://picsum.photos/seed/ciment5/400/300" },
    { title: "Spécial Démoulage", desc: "Démoulage rapide, travaux urgents", price: "FCFA / sac", image: "https://picsum.photos/seed/ciment6/400/300" },
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Notre gamme de <span className="text-nocibe-blue italic font-normal">ciments</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Une variété de solutions adaptées à chaque type de construction, garantissant performance et durabilité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold text-nocibe-blue shadow-lg">
                  {p.price}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{p.title}</h3>
                <p className="text-slate-600 mb-8">{p.desc}</p>
                <button className="w-full py-4 bg-slate-50 text-nocibe-blue font-bold rounded-xl group-hover:bg-nocibe-blue group-hover:text-white transition-all">
                  Détails techniques
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Partners />
      <CTA />
    </div>
  );
};

const JoinTeamPage = ({ onNavigate }: { onNavigate?: (page: Page) => void }) => {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Rejoignez <span className="text-nocibe-blue italic font-normal">notre équipe</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Vous souhaitez participer à l'aventure NOCIBÉ ? Envoyez-nous votre candidature spontanée ou répondez à nos offres.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-slate-100"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Nom</label>
                  <input type="text" placeholder="Votre nom" className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Prénom</label>
                  <input type="text" placeholder="Votre prénom" className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</label>
                  <input type="email" placeholder="votre@email.com" className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Téléphone</label>
                  <input type="tel" placeholder="+229 ..." className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Poste souhaité</label>
                <input type="text" placeholder="Ex: Ingénieur Civil, Comptable..." className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all" required />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message / Motivation</label>
                <textarea rows={4} placeholder="Parlez-nous de vous..." className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all resize-none"></textarea>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Curriculum Vitae (CV)</label>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-nocibe-blue transition-colors cursor-pointer group">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors">
                    <ArrowRight size={24} className="text-slate-400 group-hover:text-nocibe-blue rotate-90" />
                  </div>
                  <p className="text-sm text-slate-600 font-medium">Cliquez pour télécharger ou glissez votre fichier</p>
                  <p className="text-xs text-slate-400 mt-1">PDF, DOCX (Max. 5MB)</p>
                  <input type="file" className="hidden" />
                </div>
              </div>

              <button type="submit" className="w-full py-5 bg-nocibe-blue text-white font-bold rounded-xl shadow-xl hover:bg-blue-700 transition-all transform hover:-translate-y-1">
                Envoyer ma candidature
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      
      <div className="container mx-auto px-6 mt-16 flex flex-col sm:flex-row justify-center gap-4">
        <button 
          onClick={() => onNavigate?.('sales')}
          className="px-8 py-4 bg-nocibe-accent text-white font-bold rounded-xl shadow-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2"
        >
          Acheter du ciment
          <ArrowRight size={18} />
        </button>
        <button 
          onClick={() => onNavigate?.('home')}
          className="px-8 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all"
        >
          Retour à l'accueil
        </button>
      </div>
      
      <Partners />
      <CTA />
    </div>
  );
};

const SalesPage = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Achat de <span className="text-nocibe-blue italic font-normal">ciment</span>
          </h1>
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm max-w-2xl mx-auto">
            <p className="text-lg text-slate-700 mb-4">
              <strong>Fini les déplacements</strong> pour acheter votre ciment ou tenter de nous joindre.
            </p>
            <p className="text-slate-600 mb-4">
              NOCIBÉ Bénin vous simplifie la vie : commandez en ligne, à tout moment.
            </p>
            <p className="text-nocibe-blue font-bold italic">
              Livraison rapide et fiable dans toutes les régions du pays.
            </p>
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Nom</label>
                  <input type="text" placeholder="Ex: TOUFICK" className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Prénom</label>
                  <input type="text" placeholder="Ex: Alexis" className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</label>
                <input type="email" placeholder="alexis@gmail.com" className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Téléphone</label>
                <input type="tel" placeholder="+229 01 45 78 96" className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all" required />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Nombre de sacs</label>
                  <input type="number" min="1" className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Catégorie</label>
                  <select className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all" required>
                    <option value="">Sélectionner</option>
                    <option value="CEM I 42.5R">CEM I 42.5R</option>
                    <option value="CEM II/A-L 42.5N">CEM II/A-L 42.5N</option>
                    <option value="CEM II/B-L 32.5N">CEM II/B-L 32.5N</option>
                    <option value="CEM II/A-M">CEM II/A-M</option>
                    <option value="CEM II/B-M">CEM II/B-M</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Date de livraison</label>
                <input type="date" className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Adresse de livraison</label>
                <input type="text" placeholder="Votre adresse complète" className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-nocibe-blue outline-none transition-all" required />
              </div>
              <button type="submit" className="w-full py-5 bg-nocibe-blue text-white font-bold rounded-xl shadow-xl hover:bg-blue-700 transition-all transform hover:-translate-y-1">
                Confirmer la commande
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      <Partners />
      <CTA />
    </div>
  );
};

// --- Main App ---

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} />;
      case 'about': return <AboutPage onNavigate={setCurrentPage} />;
      case 'news': return <NewsPage onNavigate={setCurrentPage} />;
      case 'clients': return <ClientsPage onNavigate={setCurrentPage} />;
      case 'products': return <ProductsPage onNavigate={setCurrentPage} />;
      case 'contact': return <ContactPage />;
      case 'history': return <HistoryPage onNavigate={setCurrentPage} />;
      case 'team': return <TeamPage onNavigate={setCurrentPage} />;
      case 'values': return <ValuesPage onNavigate={setCurrentPage} />;
      case 'specs': return <SpecsPage onNavigate={setCurrentPage} />;
      case 'latest-news': return <LatestNewsPage onNavigate={setCurrentPage} />;
      case 'communiques': return <CommuniquesPage onNavigate={setCurrentPage} />;
      case 'events': return <EventsPage onNavigate={setCurrentPage} />;
      case 'entreprises': return <EntreprisesPage onNavigate={setCurrentPage} />;
      case 'particuliers': return <ParticuliersPage onNavigate={setCurrentPage} />;
      case 'partenaires': return <PartenairesPage onNavigate={setCurrentPage} />;
      case 'fabrication': return <FabricationPage onNavigate={setCurrentPage} />;
      case 'products-list': return <ProductsListPage onNavigate={setCurrentPage} />;
      case 'sales': return <SalesPage onNavigate={setCurrentPage} />;
      case 'join-team': return <JoinTeamPage onNavigate={setCurrentPage} />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
