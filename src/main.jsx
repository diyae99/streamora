import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BadgeCheck,
  Banknote,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  CreditCard,
  Flame,
  Headphones,
  Laptop,
  Menu,
  MessageCircle,
  Monitor,
  PlayCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  TabletSmartphone,
  Tv,
  Wallet,
  Wifi,
  X,
  Zap,
} from 'lucide-react';
import './styles.css';

const WHATSAPP_NUMBER = '212600000000';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Fonctionnalités', href: '#fonctionnalites' },
  { label: 'Appareils', href: '#appareils' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Avantages', href: '#avantages' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const trustBadges = [
  { label: 'Support 24/7', icon: Headphones },
  { label: 'Paiement sécurisé', icon: ShieldCheck },
  { label: 'Activation rapide', icon: Zap },
  { label: 'Multi-appareils', icon: TabletSmartphone },
];

const features = [
  {
    title: '20,000+ Programmes en direct',
    text: 'Une large sélection de chaînes généralistes, sportives et divertissement pour toute la famille.',
    icon: Tv,
  },
  {
    title: 'Qualité HD & 4K',
    text: 'Profitez des grands matchs avec une image nette sur écran TV, mobile ou ordinateur.',
    icon: Sparkles,
  },
  {
    title: 'Replay 7 jours',
    text: 'Rattrapez vos programmes importants lorsque votre planning ne laisse pas de place.',
    icon: Clock3,
  },
  {
    title: 'Bibliothèque VOD',
    text: 'Films, séries et contenus à la demande dans une interface simple à parcourir.',
    icon: PlayCircle,
  },
  {
    title: 'Support multi-appareils',
    text: 'Compatible avec Smart TV, box Android, iOS, PC et applications populaires.',
    icon: Laptop,
  },
  {
    title: 'Streaming stable sans coupure',
    text: 'Infrastructure optimisée pour les grands événements sportifs et les soirées football live.',
    icon: Wifi,
  },
];

const devices = [
  { title: 'Smart TV', icon: Tv },
  { title: 'Android TV / Box', icon: Monitor },
  { title: 'iPhone & iPad', icon: TabletSmartphone },
  { title: 'Android Mobile', icon: Smartphone },
  { title: 'Windows & Mac', icon: Laptop },
  { title: 'Fire TV Stick', icon: Monitor },
  { title: 'MAG / Formuler', icon: Tv },
  { title: 'Applications populaires', icon: PlayCircle },
];

const plans = [
  {
    name: 'Essai 24h',
    price: '0 DH',
    period: '',
    description: 'Testez la qualité avant de choisir votre accès.',
    features: ['Test gratuit 24h', 'Support WhatsApp', 'Activation rapide', 'Idéal pour vérifier la qualité'],
  },
  {
    name: 'Mensuel',
    price: '59 DH',
    period: '/ mois',
    description: 'Flexible pour suivre les prochains grands matchs.',
    features: ['20,000+ programmes', 'HD & 4K', '1 appareil à la fois', 'Support WhatsApp', 'Activation rapide'],
  },
  {
    name: '3 Mois',
    price: '149 DH',
    period: '/ 3 mois',
    description: 'Un excellent équilibre pour une saison sportive.',
    features: ['Meilleur rapport court terme', 'Replay 7 jours', 'VOD incluse', 'Support prioritaire', 'Économisez vs mensuel'],
  },
  {
    name: 'Annuel Premium',
    price: '299 DH',
    period: '/ an',
    description: 'Le choix premium pour une année complète.',
    popular: true,
    features: ['Meilleur choix', 'HD & 4K', 'Replay 7 jours', 'VOD premium', 'Support VIP', 'Activation rapide'],
  },
];

const reasons = [
  { title: 'Serveurs stables', text: 'Conçus pour garder une expérience fluide pendant les grands rendez-vous.', icon: Wifi, color: 'red' },
  { title: 'Support 24/7', text: 'Assistance rapide par WhatsApp pour l’installation et les questions courantes.', icon: Headphones, color: 'green' },
  { title: 'Paiement sécurisé', text: 'Des options simples, lisibles et sans collecte inutile dans cette interface.', icon: ShieldCheck, color: 'green' },
  { title: 'Installation assistée', text: 'Nous vous guidons selon votre appareil et votre application préférée.', icon: BadgeCheck, color: 'red' },
  { title: 'Sans engagement', text: 'Des forfaits clairs pour choisir la durée qui vous convient.', icon: CircleDollarSign, color: 'green' },
  { title: 'Garantie satisfaction 30 jours', text: 'Un accompagnement sérieux pour vous aider à profiter du service.', icon: Star, color: 'red' },
];

const paymentMethods = [
  { label: 'Carte bancaire', icon: CreditCard },
  { label: 'PayPal', icon: Wallet },
  { label: 'Virement bancaire', icon: Banknote },
  { label: 'Paiement local', icon: CircleDollarSign },
];

const faqs = [
  {
    question: 'Comment recevoir mon accès Streamora ?',
    answer: 'Après votre demande WhatsApp, notre équipe confirme votre offre et vous envoie les informations d’accès avec les étapes d’installation adaptées à votre appareil.',
  },
  {
    question: 'Quels appareils sont compatibles ?',
    answer: 'Le service fonctionne avec Smart TV, Android TV, box Android, iPhone, iPad, Android mobile, Windows, Mac, Fire TV Stick, MAG, Formuler et plusieurs applications populaires.',
  },
  {
    question: 'Combien de temps prend l’activation ?',
    answer: 'L’activation est généralement rapide après confirmation. Notre support vous accompagne pour lancer le service dans les meilleures conditions.',
  },
  {
    question: 'Est-ce que je peux tester avant de payer ?',
    answer: 'Oui, vous pouvez demander un essai gratuit 24h afin de vérifier la stabilité, la qualité d’image et la compatibilité avec votre appareil.',
  },
  {
    question: 'Que faire si j’ai besoin d’aide pour l’installation ?',
    answer: 'Contactez-nous sur WhatsApp. Nous vous guidons pas à pas selon votre TV, box, mobile, ordinateur ou application.',
  },
  {
    question: 'Y a-t-il des frais cachés ?',
    answer: 'Non. Les forfaits sont présentés clairement, sans frais cachés dans cette offre commerciale.',
  },
];

function createWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function useCountdown(initialSeconds = 4 * 60 * 60) {
  const [remaining, setRemaining] = useState(initialSeconds);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemaining((value) => (value <= 1 ? initialSeconds : value - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [initialSeconds]);

  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  return { hours, minutes, seconds };
}

function Countdown({ compact = false }) {
  const time = useCountdown();
  const entries = [
    ['heures', time.hours],
    ['minutes', time.minutes],
    ['secondes', time.seconds],
  ];

  return (
    <div className={compact ? 'flex gap-2' : 'grid grid-cols-3 gap-3'}>
      {entries.map(([label, value]) => (
        <div key={label} className="rounded-2xl bg-white/95 px-3 py-3 text-center shadow-sm ring-1 ring-black/5">
          <strong className="block text-xl font-black text-navy sm:text-2xl">{String(value).padStart(2, '0')}</strong>
          <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-muted">{label}</span>
        </div>
      ))}
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-primary">{eyebrow}</p>}
      <h2 className="text-3xl font-black text-navy sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{subtitle}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const trialUrl = createWhatsAppUrl('Bonjour, je veux demander un essai gratuit 24h.');
  const startUrl = createWhatsAppUrl('Bonjour, je veux commencer avec Streamora.');

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <a href="#accueil" className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-4 focus:ring-primary/20">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-white shadow-lift">
            <Tv size={21} aria-hidden="true" />
          </span>
          <span className="text-lg font-black text-navy">Streamora</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-bold text-ink transition hover:text-primary focus:outline-none focus:ring-4 focus:ring-primary/20">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="btn btn-green" href={trialUrl} target="_blank" rel="noreferrer">Essai 24h Gratuit</a>
          <a className="btn btn-red" href={startUrl} target="_blank" rel="noreferrer">Commencer</a>
        </div>

        <button
          className="inline-grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 text-navy lg:hidden"
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-soft lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl px-3 py-3 text-sm font-bold text-ink hover:bg-soft hover:text-primary">
                {link.label}
              </a>
            ))}
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <a className="btn btn-green justify-center" href={trialUrl} target="_blank" rel="noreferrer">Essai 24h Gratuit</a>
              <a className="btn btn-red justify-center" href={startUrl} target="_blank" rel="noreferrer">Commencer</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl animate-float">
      <div className="absolute -left-4 top-16 z-10 rounded-2xl bg-white px-4 py-3 shadow-soft ring-1 ring-slate-200">
        <p className="text-xs font-black uppercase tracking-[0.12em] text-muted">Football live</p>
        <p className="text-sm font-black text-navy">Soirée match</p>
      </div>
      <div className="absolute -right-2 bottom-20 z-10 rounded-2xl bg-greenCta px-4 py-3 text-white shadow-soft">
        <p className="text-sm font-black">Activation rapide</p>
      </div>
      <div className="hero-screen overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-[#152c56] to-primary p-5 shadow-2xl">
        <div className="rounded-[1.4rem] bg-white/10 p-4 ring-1 ring-white/20">
          <div className="aspect-video rounded-[1.1rem] bg-white shadow-2xl">
            <div className="flex h-full flex-col justify-between rounded-[1.1rem] bg-[radial-gradient(circle_at_50%_45%,#ffffff_0_5%,transparent_6%),linear-gradient(135deg,#18a35e,#0d7d4d)] p-5">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-navy">LIVE</span>
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-black text-white">HD</span>
              </div>
              <div className="grid place-items-center">
                <div className="grid h-20 w-20 place-items-center rounded-full border-4 border-white/90 bg-white/20">
                  <PlayCircle className="text-white" size={42} aria-hidden="true" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-10 rounded-xl bg-white/80" />
                <div className="h-10 rounded-xl bg-white/60" />
                <div className="h-10 rounded-xl bg-white/80" />
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {['4K', 'Replay', 'VOD'].map((item) => (
              <div key={item} className="rounded-2xl bg-white/12 px-3 py-4 text-center text-sm font-black text-white ring-1 ring-white/15">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-white pt-12 sm:pt-16 lg:pt-20">
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-red-50 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:pb-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-black text-primary ring-1 ring-red-100">
            <Flame size={17} aria-hidden="true" />
            Offre pensée pour les grands matchs
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-navy sm:text-5xl lg:text-6xl">
            Streamora — Vos grands matchs et divertissements en direct
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Une expérience stable, rapide et compatible avec Smart TV, Android, iOS, PC et applications populaires.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn btn-red btn-large" href={createWhatsAppUrl('Bonjour, je veux commencer maintenant avec Streamora.')} target="_blank" rel="noreferrer">
              Commencer maintenant
            </a>
            <a className="btn btn-green btn-large" href={createWhatsAppUrl('Bonjour, je veux demander un essai gratuit 24h.')} target="_blank" rel="noreferrer">
              Demander un essai 24h
            </a>
          </div>

          <div className="mt-8 grid max-w-2xl gap-3 rounded-[1.5rem] bg-gradient-to-r from-primary to-orange-500 p-4 text-white shadow-lift sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-white/80">Offre spéciale football</p>
              <p className="mt-1 text-xl font-black">Activation rapide + support WhatsApp</p>
            </div>
            <Countdown compact />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustBadges.map(({ label, icon: Icon }) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm">
                <Icon className="mx-auto mb-2 text-greenCta" size={22} aria-hidden="true" />
                <p className="text-sm font-black text-navy">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function FeatureCards() {
  return (
    <section id="fonctionnalites" className="section bg-soft">
      <SectionHeader title="Tout ce dont vous avez besoin pour une expérience premium" />
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {features.map(({ title, text, icon: Icon }) => (
          <article key={title} className="group card">
            <div className="icon-box bg-red-50 text-primary group-hover:bg-primary group-hover:text-white">
              <Icon size={25} aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-xl font-black text-navy">{title}</h3>
            <p className="mt-3 leading-7 text-muted">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DevicesSection() {
  return (
    <section id="appareils" className="section bg-white">
      <SectionHeader title="Compatible avec tous vos appareils" />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {devices.map(({ title, icon: Icon }) => (
          <article key={title} className="device-card">
            <Icon className="mx-auto text-primary" size={30} strokeWidth={1.8} aria-hidden="true" />
            <h3 className="mt-4 text-sm font-black text-navy sm:text-base">{title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="tarifs" className="section bg-soft">
      <SectionHeader
        title="Choisissez votre abonnement Streamora"
        subtitle="Des forfaits simples, transparents et sans frais cachés."
      />
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {plans.map((plan) => (
          <article key={plan.name} className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''}`}>
            {plan.popular && <span className="popular-pill">Populaire</span>}
            <h3 className="text-2xl font-black text-navy">{plan.name}</h3>
            <p className="mt-3 min-h-12 text-sm leading-6 text-muted">{plan.description}</p>
            <div className="mt-6 flex items-end gap-1">
              <strong className="text-4xl font-black text-navy">{plan.price}</strong>
              {plan.period && <span className="pb-1 text-sm font-bold text-muted">{plan.period}</span>}
            </div>
            <ul className="mt-6 space-y-3">
              {plan.features.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-semibold text-ink">
                  <Check className="mt-0.5 shrink-0 text-greenCta" size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              className={`btn mt-7 w-full justify-center ${plan.popular ? 'btn-red' : 'btn-outline'}`}
              href={createWhatsAppUrl(`Bonjour, je veux m’abonner à l’offre ${plan.name}.`)}
              target="_blank"
              rel="noreferrer"
            >
              Choisir cette offre
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function PromotionBanner() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-gradient-to-br from-primary via-red-600 to-orange-500 p-6 text-white shadow-lift sm:p-8 lg:grid-cols-[1fr_auto_auto] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-white/75">Promotion spéciale limitée</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Promotion spéciale limitée</h2>
          <p className="mt-3 max-w-2xl leading-7 text-white/86">
            Profitez d’une activation rapide et d’un support personnalisé pendant les grands événements sportifs.
          </p>
        </div>
        <Countdown />
        <a className="btn bg-white text-primary hover:-translate-y-0.5 hover:bg-red-50 focus:ring-white/40" href={createWhatsAppUrl('Bonjour, je veux profiter de l’offre spéciale limitée.')} target="_blank" rel="noreferrer">
          Profiter de l’offre
        </a>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="avantages" className="section bg-white">
      <SectionHeader title="Pourquoi choisir Streamora ?" />
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {reasons.map(({ title, text, icon: Icon, color }) => (
          <article key={title} className="card">
            <div className={`icon-box ${color === 'green' ? 'bg-green-50 text-greenCta' : 'bg-red-50 text-primary'}`}>
              <Icon size={24} aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-xl font-black text-navy">{title}</h3>
            <p className="mt-3 leading-7 text-muted">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PaymentSection() {
  return (
    <section className="bg-soft px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-primary">Paiement</p>
            <h2 className="mt-2 text-3xl font-black text-navy">Options de paiement sécurisées</h2>
          </div>
          <p className="max-w-xl leading-7 text-muted">Interface de présentation uniquement. Aucun paiement réel n’est traité sur cette page.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {paymentMethods.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-green-50 text-greenCta">
                <Icon size={24} aria-hidden="true" />
              </span>
              <span className="font-black text-navy">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrialCta() {
  return (
    <section id="contact" className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto rounded-[2rem] bg-gradient-to-br from-navy via-primary to-red-500 px-6 py-12 text-center text-white shadow-lift sm:px-8 lg:max-w-7xl">
        <h2 className="text-3xl font-black sm:text-4xl">Prêt pour tester notre service ?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/84">
          Demandez votre essai gratuit 24h et vérifiez la qualité avant de vous abonner.
        </p>
        <a className="btn mt-8 bg-white text-primary hover:-translate-y-0.5 hover:bg-red-50 focus:ring-white/40" href={createWhatsAppUrl('Bonjour, je veux demander un essai gratuit 24h maintenant.')} target="_blank" rel="noreferrer">
          Demander un essai 24h maintenant
        </a>
      </div>
    </section>
  );
}

function FaqSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="section bg-white">
      <SectionHeader title="Questions fréquentes" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {faqs.map((faq, index) => {
          const isOpen = active === index;
          return (
            <article key={faq.question} className="mb-3 rounded-3xl border border-slate-200 bg-white shadow-sm">
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-black text-navy focus:outline-none focus:ring-4 focus:ring-primary/20"
                type="button"
                aria-expanded={isOpen}
                onClick={() => setActive(isOpen ? -1 : index)}
              >
                {faq.question}
                <ChevronDown className={`shrink-0 transition ${isOpen ? 'rotate-180 text-primary' : 'text-muted'}`} size={20} aria-hidden="true" />
              </button>
              {isOpen && <p className="px-5 pb-5 leading-7 text-muted">{faq.answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary">
              <Tv size={21} aria-hidden="true" />
            </span>
            <span className="text-lg font-black">Streamora</span>
          </div>
          <p className="mt-4 max-w-md leading-7 text-white/70">
            Expérience premium, stable et compatible avec vos appareils du quotidien pour suivre football live, divertissements et événements sportifs internationaux.
          </p>
          <p className="mt-5 text-sm leading-6 text-white/60">
            Service proposé dans le respect des droits et réglementations applicables. Le client doit s’assurer de l’usage légal du service dans son pays.
          </p>
        </div>
        <div>
          <h3 className="font-black">Liens rapides</h3>
          <div className="mt-4 grid gap-3">
            {navLinks.slice(0, 6).map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-semibold text-white/70 hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black">Contact / WhatsApp</h3>
          <p className="mt-4 leading-7 text-white/70">Besoin d’aide pour choisir une offre ou installer votre application ? Notre support vous répond sur WhatsApp.</p>
          <a className="btn btn-green mt-5" href={createWhatsAppUrl('Bonjour, je veux contacter Streamora.')} target="_blank" rel="noreferrer">
            Contacter WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/55">
        © {year} Streamora. Tous droits réservés.
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-greenCta text-white shadow-2xl transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-300 sm:h-16 sm:w-16"
      href={createWhatsAppUrl('Bonjour, je souhaite plus d’informations sur Streamora.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle size={28} aria-hidden="true" />
    </a>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureCards />
        <DevicesSection />
        <PricingSection />
        <PromotionBanner />
        <WhyChooseUs />
        <PaymentSection />
        <TrialCta />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
