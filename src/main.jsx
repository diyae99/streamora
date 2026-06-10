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

const WHATSAPP_NUMBER = '212699904956';
const WHATSAPP_DISPLAY_NUMBER = '0699904956';

const translations = {
  fr: {
    dir: 'ltr',
    locale: 'fr',
    brand: 'Streamora',
    nav: [
      { label: 'Accueil', href: '#accueil' },
      { label: 'Fonctionnalités', href: '#fonctionnalites' },
      { label: 'Appareils', href: '#appareils' },
      { label: 'Tarifs', href: '#tarifs' },
      { label: 'Avantages', href: '#avantages' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
    headerTrial: 'Essai 24h Gratuit',
    headerStart: 'Commencer',
    mobileOpen: 'Ouvrir le menu',
    mobileClose: 'Fermer le menu',
    navAria: 'Navigation principale',
    whatsappAria: 'Contacter sur WhatsApp',
    heroBadge: 'Offre pensée pour les grands matchs',
    heroTitle: 'Streamora — Vos grands matchs et divertissements en direct',
    heroSubtitle: 'Une expérience stable, rapide et compatible avec Smart TV, Android, iOS, PC et applications populaires.',
    heroPrimaryCta: 'Commencer maintenant',
    heroTrialCta: 'Demander un essai 24h',
    heroPromoTitle: 'Offre spéciale football',
    heroPromoText: 'Activation rapide + support WhatsApp',
    visualBadgeTop: 'Football live',
    visualBadgeBottom: 'Soirée match',
    visualFast: 'Activation rapide',
    live: 'LIVE',
    quality: 'HD',
    visualTags: ['4K', 'Replay', 'VOD'],
    countdown: ['heures', 'minutes', 'secondes'],
    trustBadges: ['Support 24/7', 'Paiement sécurisé', 'Activation rapide'],
    featuresTitle: 'Tout ce dont vous avez besoin pour une expérience premium',
    features: [
      ['20,000+ Programmes en direct', 'Une large sélection de chaînes généralistes, sportives et divertissement pour toute la famille.'],
      ['Qualité HD & 4K', 'Profitez des grands matchs avec une image nette sur écran TV, mobile ou ordinateur.'],
      ['Replay 7 jours', 'Rattrapez vos programmes importants lorsque votre planning ne laisse pas de place.'],
      ['Bibliothèque VOD', 'Films, séries et contenus à la demande dans une interface simple à parcourir.'],
      ['Streaming stable sans coupure', 'Infrastructure optimisée pour les grands événements sportifs et les soirées football live.'],
    ],
    devicesTitle: 'Compatible avec tous vos appareils',
    devices: ['Smart TV', 'Android TV / Box', 'iPhone & iPad', 'Android Mobile', 'Windows & Mac', 'Fire TV Stick', 'MAG / Formuler', 'Applications populaires'],
    pricingTitle: 'Choisissez votre abonnement Streamora',
    pricingSubtitle: 'Des forfaits simples, transparents et sans frais cachés.',
    popular: 'Populaire',
    planCta: 'Choisir cette offre',
    plans: [
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
    ],
    promoEyebrow: 'Promotion spéciale limitée',
    promoTitle: 'Promotion spéciale limitée',
    promoText: 'Profitez d’une activation rapide et d’un support personnalisé pendant les grands événements sportifs.',
    promoCta: 'Profiter de l’offre',
    reasonsTitle: 'Pourquoi choisir Streamora ?',
    reasons: [
      ['Serveurs stables', 'Conçus pour garder une expérience fluide pendant les grands rendez-vous.'],
      ['Support 24/7', 'Assistance rapide par WhatsApp pour l’installation et les questions courantes.'],
      ['Paiement sécurisé', 'Des options simples, lisibles et sans collecte inutile dans cette interface.'],
      ['Installation assistée', 'Nous vous guidons selon votre appareil et votre application préférée.'],
      ['Sans engagement', 'Des forfaits clairs pour choisir la durée qui vous convient.'],
      ['Garantie satisfaction 30 jours', 'Un accompagnement sérieux pour vous aider à profiter du service.'],
    ],
    paymentEyebrow: 'Paiement',
    paymentTitle: 'Options de paiement sécurisées',
    paymentText: 'Interface de présentation uniquement. Aucun paiement réel n’est traité sur cette page.',
    paymentMethods: ['Carte bancaire', 'PayPal', 'Virement bancaire', 'Paiement local'],
    trialTitle: 'Prêt pour tester notre service ?',
    trialText: 'Demandez votre essai gratuit 24h et vérifiez la qualité avant de vous abonner.',
    trialCta: 'Demander un essai 24h maintenant',
    faqTitle: 'Questions fréquentes',
    faqs: [
      ['Comment recevoir mon accès Streamora ?', 'Après votre demande WhatsApp, notre équipe confirme votre offre et vous envoie les informations d’accès avec les étapes d’installation adaptées à votre appareil.'],
      ['Quels appareils sont compatibles ?', 'Le service fonctionne avec Smart TV, Android TV, box Android, iPhone, iPad, Android mobile, Windows, Mac, Fire TV Stick, MAG, Formuler et plusieurs applications populaires.'],
      ['Combien de temps prend l’activation ?', 'L’activation est généralement rapide après confirmation. Notre support vous accompagne pour lancer le service dans les meilleures conditions.'],
      ['Est-ce que je peux tester avant de payer ?', 'Oui, vous pouvez demander un essai gratuit 24h afin de vérifier la stabilité, la qualité d’image et la compatibilité avec votre appareil.'],
      ['Que faire si j’ai besoin d’aide pour l’installation ?', 'Contactez-nous sur WhatsApp. Nous vous guidons pas à pas selon votre TV, box, mobile, ordinateur ou application.'],
      ['Y a-t-il des frais cachés ?', 'Non. Les forfaits sont présentés clairement, sans frais cachés dans cette offre commerciale.'],
    ],
    footerDescription: 'Expérience premium, stable et compatible avec vos appareils du quotidien pour suivre football live, divertissements et événements sportifs internationaux.',
    legalNote: 'Service proposé dans le respect des droits et réglementations applicables. Le client doit s’assurer de l’usage légal du service dans son pays.',
    quickLinks: 'Liens rapides',
    footerContact: 'Contact / WhatsApp',
    footerContactText: 'Besoin d’aide pour choisir une offre ou installer votre application ? Notre support vous répond sur WhatsApp.',
    footerContactCta: 'Contacter WhatsApp',
    copyright: 'Tous droits réservés.',
    whatsapp: {
      trial: 'Bonjour, je veux demander un essai gratuit 24h.',
      start: 'Bonjour, je veux commencer avec Streamora.',
      heroStart: 'Bonjour, je veux commencer maintenant avec Streamora.',
      promo: 'Bonjour, je veux profiter de l’offre spéciale limitée.',
      trialNow: 'Bonjour, je veux demander un essai gratuit 24h maintenant.',
      contact: 'Bonjour, je veux contacter Streamora.',
      floating: 'Bonjour, je souhaite plus d’informations sur Streamora.',
      plan: (planName) => `Bonjour, je veux m’abonner à l’offre ${planName}.`,
    },
  },
  ar: {
    dir: 'rtl',
    locale: 'ar',
    brand: 'Streamora',
    nav: [
      { label: 'الرئيسية', href: '#accueil' },
      { label: 'المميزات', href: '#fonctionnalites' },
      { label: 'الأجهزة', href: '#appareils' },
      { label: 'الأسعار', href: '#tarifs' },
      { label: 'لماذا نحن', href: '#avantages' },
      { label: 'الأسئلة', href: '#faq' },
      { label: 'اتصل بنا', href: '#contact' },
    ],
    headerTrial: 'تجربة مجانية 24 ساعة',
    headerStart: 'ابدأ الآن',
    mobileOpen: 'فتح القائمة',
    mobileClose: 'إغلاق القائمة',
    navAria: 'التنقل الرئيسي',
    whatsappAria: 'تواصل عبر واتساب',
    heroBadge: 'عرض مصمم لمتابعة المباريات الكبرى',
    heroTitle: 'Streamora — مبارياتك الكبرى وترفيهك المباشر',
    heroSubtitle: 'تجربة مستقرة وسريعة ومتوافقة مع Smart TV وAndroid وiOS والكمبيوتر والتطبيقات الشائعة.',
    heroPrimaryCta: 'ابدأ الآن',
    heroTrialCta: 'اطلب تجربة 24 ساعة',
    heroPromoTitle: 'عرض خاص لكرة القدم',
    heroPromoText: 'تفعيل سريع + دعم عبر واتساب',
    visualBadgeTop: 'كرة قدم مباشرة',
    visualBadgeBottom: 'ليلة المباراة',
    visualFast: 'تفعيل سريع',
    live: 'مباشر',
    quality: 'HD',
    visualTags: ['4K', 'إعادة', 'VOD'],
    countdown: ['ساعات', 'دقائق', 'ثواني'],
    trustBadges: ['دعم 24/7', 'دفع آمن', 'تفعيل سريع'],
    featuresTitle: 'كل ما تحتاجه لتجربة مشاهدة مميزة',
    features: [
      ['20,000+ برنامج مباشر', 'اختيار واسع من القنوات العامة والرياضية والترفيهية المناسبة لكل أفراد العائلة.'],
      ['جودة HD و4K', 'استمتع بالمباريات الكبرى بصورة واضحة على التلفاز أو الهاتف أو الكمبيوتر.'],
      ['إعادة لمدة 7 أيام', 'شاهد برامجك المهمة لاحقا عندما لا يناسبك وقت العرض.'],
      ['مكتبة VOD', 'أفلام ومسلسلات ومحتوى حسب الطلب داخل واجهة سهلة التصفح.'],
      ['بث مستقر بدون انقطاع', 'بنية محسنة للأحداث الرياضية الكبرى وسهرات football live.'],
    ],
    devicesTitle: 'متوافق مع جميع أجهزتك',
    devices: ['Smart TV', 'Android TV / Box', 'iPhone وiPad', 'Android Mobile', 'Windows وMac', 'Fire TV Stick', 'MAG / Formuler', 'تطبيقات شائعة'],
    pricingTitle: 'اختر اشتراك Streamora المناسب لك',
    pricingSubtitle: 'باقات بسيطة وواضحة وبدون رسوم مخفية.',
    popular: 'الأكثر طلبا',
    planCta: 'اختر هذا العرض',
    plans: [
      {
        name: 'تجربة 24 ساعة',
        price: '0 DH',
        period: '',
        description: 'جرّب الجودة قبل اختيار وصولك.',
        features: ['تجربة مجانية 24 ساعة', 'دعم واتساب', 'تفعيل سريع', 'مثالي للتأكد من الجودة'],
      },
      {
        name: 'شهري',
        price: '59 DH',
        period: '/ شهر',
        description: 'مرن لمتابعة المباريات القادمة.',
        features: ['20,000+ برنامج', 'HD و4K', 'جهاز واحد في نفس الوقت', 'دعم واتساب', 'تفعيل سريع'],
      },
      {
        name: '3 أشهر',
        price: '149 DH',
        period: '/ 3 أشهر',
        description: 'توازن ممتاز لموسم رياضي.',
        features: ['أفضل قيمة قصيرة المدى', 'إعادة 7 أيام', 'VOD مدمج', 'دعم ذو أولوية', 'توفير مقارنة بالشهري'],
      },
      {
        name: 'سنوي Premium',
        price: '299 DH',
        period: '/ سنة',
        description: 'الخيار المميز لسنة كاملة.',
        popular: true,
        features: ['أفضل اختيار', 'HD و4K', 'إعادة 7 أيام', 'VOD Premium', 'دعم VIP', 'تفعيل سريع'],
      },
    ],
    promoEyebrow: 'عرض محدود خاص',
    promoTitle: 'عرض خاص لفترة محدودة',
    promoText: 'استفد من تفعيل سريع ودعم مخصص أثناء الأحداث الرياضية الكبرى.',
    promoCta: 'استفد من العرض',
    reasonsTitle: 'لماذا تختار Streamora؟',
    reasons: [
      ['خوادم مستقرة', 'مصممة للحفاظ على تجربة سلسة أثناء المواعيد الكبرى.'],
      ['دعم 24/7', 'مساعدة سريعة عبر واتساب للتثبيت والأسئلة اليومية.'],
      ['دفع آمن', 'خيارات بسيطة وواضحة بدون جمع بيانات غير ضرورية داخل هذه الواجهة.'],
      ['مساعدة في التثبيت', 'نرشدك حسب جهازك والتطبيق الذي تفضله.'],
      ['بدون التزام', 'باقات واضحة لاختيار المدة المناسبة لك.'],
      ['ضمان رضا 30 يوما', 'مرافقة جدية لمساعدتك على الاستفادة من الخدمة.'],
    ],
    paymentEyebrow: 'الدفع',
    paymentTitle: 'خيارات دفع آمنة',
    paymentText: 'هذه واجهة عرض فقط. لا تتم معالجة أي دفع حقيقي في هذه الصفحة.',
    paymentMethods: ['بطاقة بنكية', 'PayPal', 'تحويل بنكي', 'دفع محلي'],
    trialTitle: 'جاهز لتجربة الخدمة؟',
    trialText: 'اطلب تجربة مجانية 24 ساعة وتأكد من الجودة قبل الاشتراك.',
    trialCta: 'اطلب تجربة 24 ساعة الآن',
    faqTitle: 'الأسئلة الشائعة',
    faqs: [
      ['كيف أستلم وصول Streamora؟', 'بعد طلبك عبر واتساب، يؤكد فريقنا العرض ويرسل لك معلومات الوصول مع خطوات التثبيت المناسبة لجهازك.'],
      ['ما الأجهزة المتوافقة؟', 'الخدمة تعمل مع Smart TV وAndroid TV وAndroid Box وiPhone وiPad وAndroid Mobile وWindows وMac وFire TV Stick وMAG وFormuler وعدة تطبيقات شائعة.'],
      ['كم يستغرق التفعيل؟', 'عادة يتم التفعيل بسرعة بعد التأكيد. يساعدك الدعم على تشغيل الخدمة في أفضل الظروف.'],
      ['هل يمكنني التجربة قبل الدفع؟', 'نعم، يمكنك طلب تجربة مجانية 24 ساعة للتحقق من الاستقرار وجودة الصورة والتوافق مع جهازك.'],
      ['ماذا أفعل إذا احتجت مساعدة في التثبيت؟', 'تواصل معنا عبر واتساب. نرشدك خطوة بخطوة حسب التلفاز أو الجهاز أو الهاتف أو الكمبيوتر أو التطبيق.'],
      ['هل توجد رسوم مخفية؟', 'لا. الباقات معروضة بوضوح وبدون رسوم مخفية في هذا العرض التجاري.'],
    ],
    footerDescription: 'تجربة مميزة ومستقرة ومتوافقة مع أجهزتك اليومية لمتابعة football live والترفيه والأحداث الرياضية الدولية.',
    legalNote: 'تُقدم الخدمة مع احترام الحقوق والقوانين المعمول بها. يجب على العميل التأكد من الاستخدام القانوني للخدمة في بلده.',
    quickLinks: 'روابط سريعة',
    footerContact: 'التواصل / واتساب',
    footerContactText: 'تحتاج مساعدة لاختيار عرض أو تثبيت التطبيق؟ دعمنا يجيبك عبر واتساب.',
    footerContactCta: 'تواصل عبر واتساب',
    copyright: 'جميع الحقوق محفوظة.',
    whatsapp: {
      trial: 'مرحبا، أريد طلب تجربة مجانية لمدة 24 ساعة.',
      start: 'مرحبا، أريد البدء مع Streamora.',
      heroStart: 'مرحبا، أريد البدء الآن مع Streamora.',
      promo: 'مرحبا، أريد الاستفادة من العرض الخاص المحدود.',
      trialNow: 'مرحبا، أريد طلب تجربة مجانية لمدة 24 ساعة الآن.',
      contact: 'مرحبا، أريد التواصل مع Streamora.',
      floating: 'مرحبا، أريد المزيد من المعلومات حول Streamora.',
      plan: (planName) => `مرحبا، أريد الاشتراك في عرض ${planName}.`,
    },
  },
};

const featureIcons = [Tv, Sparkles, Clock3, PlayCircle, Wifi];
const deviceIcons = [Tv, Monitor, TabletSmartphone, Smartphone, Laptop, Monitor, Tv, PlayCircle];
const trustIcons = [Headphones, ShieldCheck, Zap];
const reasonIcons = [Wifi, Headphones, ShieldCheck, BadgeCheck, CircleDollarSign, Star];
const reasonColors = ['red', 'green', 'green', 'red', 'green', 'red'];
const paymentIcons = [CreditCard, Wallet, Banknote, CircleDollarSign];

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

  return {
    hours: Math.floor(remaining / 3600),
    minutes: Math.floor((remaining % 3600) / 60),
    seconds: remaining % 60,
  };
}

function Countdown({ labels, compact = false }) {
  const time = useCountdown();
  const entries = [
    [labels[0], time.hours],
    [labels[1], time.minutes],
    [labels[2], time.seconds],
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

function LanguageSwitch({ lang, setLang }) {
  return (
    <div className="inline-flex rounded-2xl border border-slate-200 bg-white p-1 shadow-sm" aria-label="Language switcher">
      {['fr', 'ar'].map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            onClick={() => setLang(code)}
            className={`rounded-xl px-3 py-2 text-xs font-black transition focus:outline-none focus:ring-4 focus:ring-primary/20 ${
              active ? 'bg-navy text-white shadow-sm' : 'text-muted hover:bg-soft hover:text-navy'
            }`}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

function SectionHeader({ lang, eyebrow, title, subtitle }) {
  return (
    <div className={`mx-auto mb-10 max-w-3xl ${lang === 'ar' ? 'text-right' : 'text-center'}`}>
      {eyebrow && <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-primary">{eyebrow}</p>}
      <h2 className="text-3xl font-black text-navy sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{subtitle}</p>}
    </div>
  );
}

function Header({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);
  const trialUrl = createWhatsAppUrl(t.whatsapp.trial);
  const startUrl = createWhatsAppUrl(t.whatsapp.start);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8" aria-label={t.navAria}>
        <a href="#accueil" className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-4 focus:ring-primary/20">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-white shadow-lift">
            <Tv size={21} aria-hidden="true" />
          </span>
          <span className="text-lg font-black text-navy">{t.brand}</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {t.nav.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-bold text-ink transition hover:text-primary focus:outline-none focus:ring-4 focus:ring-primary/20">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch lang={lang} setLang={setLang} />
          <a className="btn btn-green" href={trialUrl} target="_blank" rel="noreferrer">{t.headerTrial}</a>
          <a className="btn btn-red" href={startUrl} target="_blank" rel="noreferrer">{t.headerStart}</a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitch lang={lang} setLang={setLang} />
          <button
            className="inline-grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 text-navy"
            type="button"
            aria-label={open ? t.mobileClose : t.mobileOpen}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-soft lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {t.nav.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl px-3 py-3 text-sm font-bold text-ink hover:bg-soft hover:text-primary">
                {link.label}
              </a>
            ))}
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <a className="btn btn-green justify-center" href={trialUrl} target="_blank" rel="noreferrer">{t.headerTrial}</a>
              <a className="btn btn-red justify-center" href={startUrl} target="_blank" rel="noreferrer">{t.headerStart}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroVisual({ t }) {
  return (
    <div className="relative mx-auto w-full max-w-xl animate-float" dir="ltr">
      <div className="absolute -left-4 top-16 z-10 rounded-2xl bg-white px-4 py-3 shadow-soft ring-1 ring-slate-200">
        <p className="text-xs font-black uppercase tracking-[0.12em] text-muted">{t.visualBadgeTop}</p>
        <p className="text-sm font-black text-navy">{t.visualBadgeBottom}</p>
      </div>
      <div className="absolute -right-2 bottom-20 z-10 rounded-2xl bg-greenCta px-4 py-3 text-white shadow-soft">
        <p className="text-sm font-black">{t.visualFast}</p>
      </div>
      <div className="hero-screen overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-[#152c56] to-primary p-5 shadow-2xl">
        <div className="rounded-[1.4rem] bg-white/10 p-4 ring-1 ring-white/20">
          <div className="aspect-video rounded-[1.1rem] bg-white shadow-2xl">
            <div className="flex h-full flex-col justify-between rounded-[1.1rem] bg-[radial-gradient(circle_at_50%_45%,#ffffff_0_5%,transparent_6%),linear-gradient(135deg,#18a35e,#0d7d4d)] p-5">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-navy">{t.live}</span>
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-black text-white">{t.quality}</span>
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
            {t.visualTags.map((item) => (
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

function Hero({ lang, t }) {
  return (
    <section id="accueil" className="relative overflow-hidden bg-white pt-12 sm:pt-16 lg:pt-20">
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-red-50 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:pb-24">
        <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-black text-primary ring-1 ring-red-100">
            <Flame size={17} aria-hidden="true" />
            {t.heroBadge}
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-navy sm:text-5xl lg:text-6xl">{t.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{t.heroSubtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn btn-red btn-large" href={createWhatsAppUrl(t.whatsapp.heroStart)} target="_blank" rel="noreferrer">{t.heroPrimaryCta}</a>
            <a className="btn btn-green btn-large" href={createWhatsAppUrl(t.whatsapp.trial)} target="_blank" rel="noreferrer">{t.heroTrialCta}</a>
          </div>

          <div className="mt-8 grid max-w-2xl gap-3 rounded-[1.5rem] bg-gradient-to-r from-primary to-orange-500 p-4 text-white shadow-lift sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-white/80">{t.heroPromoTitle}</p>
              <p className="mt-1 text-xl font-black">{t.heroPromoText}</p>
            </div>
            <Countdown labels={t.countdown} compact />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {t.trustBadges.map((label, index) => {
              const Icon = trustIcons[index];
              return (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm">
                  <Icon className="mx-auto mb-2 text-greenCta" size={22} aria-hidden="true" />
                  <p className="text-sm font-black text-navy">{label}</p>
                </div>
              );
            })}
          </div>
        </div>
        <HeroVisual t={t} />
      </div>
    </section>
  );
}

function FeatureCards({ lang, t }) {
  return (
    <section id="fonctionnalites" className="section bg-soft">
      <SectionHeader lang={lang} title={t.featuresTitle} />
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {t.features.map(([title, text], index) => {
          const Icon = featureIcons[index];
          return (
            <article key={title} className={`group card ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              <div className="icon-box bg-red-50 text-primary group-hover:bg-primary group-hover:text-white">
                <Icon size={25} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-black text-navy">{title}</h3>
              <p className="mt-3 leading-7 text-muted">{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function DevicesSection({ lang, t }) {
  return (
    <section id="appareils" className="section bg-white">
      <SectionHeader lang={lang} title={t.devicesTitle} />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {t.devices.map((title, index) => {
          const Icon = deviceIcons[index];
          return (
            <article key={title} className="device-card">
              <Icon className="mx-auto text-primary" size={30} strokeWidth={1.8} aria-hidden="true" />
              <h3 className="mt-4 text-sm font-black text-navy sm:text-base">{title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function PricingSection({ lang, t }) {
  return (
    <section id="tarifs" className="section bg-soft">
      <SectionHeader lang={lang} title={t.pricingTitle} subtitle={t.pricingSubtitle} />
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {t.plans.map((plan) => (
          <article key={plan.name} className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''} ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            {plan.popular && <span className="popular-pill">{t.popular}</span>}
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
            <a className={`btn mt-7 w-full justify-center ${plan.popular ? 'btn-red' : 'btn-outline'}`} href={createWhatsAppUrl(t.whatsapp.plan(plan.name))} target="_blank" rel="noreferrer">
              {t.planCta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function PromotionBanner({ t }) {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-gradient-to-br from-primary via-red-600 to-orange-500 p-6 text-white shadow-lift sm:p-8 lg:grid-cols-[1fr_auto_auto] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-white/75">{t.promoEyebrow}</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">{t.promoTitle}</h2>
          <p className="mt-3 max-w-2xl leading-7 text-white/86">{t.promoText}</p>
        </div>
        <Countdown labels={t.countdown} />
        <a className="btn bg-white text-primary hover:-translate-y-0.5 hover:bg-red-50 focus:ring-white/40" href={createWhatsAppUrl(t.whatsapp.promo)} target="_blank" rel="noreferrer">
          {t.promoCta}
        </a>
      </div>
    </section>
  );
}

function WhyChooseUs({ lang, t }) {
  return (
    <section id="avantages" className="section bg-white">
      <SectionHeader lang={lang} title={t.reasonsTitle} />
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {t.reasons.map(([title, text], index) => {
          const Icon = reasonIcons[index];
          const color = reasonColors[index];
          return (
            <article key={title} className={`card ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              <div className={`icon-box ${color === 'green' ? 'bg-green-50 text-greenCta' : 'bg-red-50 text-primary'}`}>
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-black text-navy">{title}</h3>
              <p className="mt-3 leading-7 text-muted">{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function PaymentSection({ lang, t }) {
  return (
    <section className="bg-soft px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className={`mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-primary">{t.paymentEyebrow}</p>
            <h2 className="mt-2 text-3xl font-black text-navy">{t.paymentTitle}</h2>
          </div>
          <p className="max-w-xl leading-7 text-muted">{t.paymentText}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.paymentMethods.map((label, index) => {
            const Icon = paymentIcons[index];
            return (
              <div key={label} className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-green-50 text-greenCta">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <span className="font-black text-navy">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrialCta({ t }) {
  return (
    <section id="contact" className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto rounded-[2rem] bg-gradient-to-br from-navy via-primary to-red-500 px-6 py-12 text-center text-white shadow-lift sm:px-8 lg:max-w-7xl">
        <h2 className="text-3xl font-black sm:text-4xl">{t.trialTitle}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/84">{t.trialText}</p>
        <a className="btn mt-8 bg-white text-primary hover:-translate-y-0.5 hover:bg-red-50 focus:ring-white/40" href={createWhatsAppUrl(t.whatsapp.trialNow)} target="_blank" rel="noreferrer">
          {t.trialCta}
        </a>
      </div>
    </section>
  );
}

function FaqSection({ lang, t }) {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="section bg-white">
      <SectionHeader lang={lang} title={t.faqTitle} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {t.faqs.map(([question, answer], index) => {
          const isOpen = active === index;
          return (
            <article key={question} className="mb-3 rounded-3xl border border-slate-200 bg-white shadow-sm">
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-start font-black text-navy focus:outline-none focus:ring-4 focus:ring-primary/20"
                type="button"
                aria-expanded={isOpen}
                onClick={() => setActive(isOpen ? -1 : index)}
              >
                {question}
                <ChevronDown className={`shrink-0 transition ${isOpen ? 'rotate-180 text-primary' : 'text-muted'}`} size={20} aria-hidden="true" />
              </button>
              {isOpen && <p className="px-5 pb-5 text-start leading-7 text-muted">{answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Footer({ t }) {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary">
              <Tv size={21} aria-hidden="true" />
            </span>
            <span className="text-lg font-black">{t.brand}</span>
          </div>
          <p className="mt-4 max-w-md leading-7 text-white/70">{t.footerDescription}</p>
          <p className="mt-5 text-sm leading-6 text-white/60">{t.legalNote}</p>
        </div>
        <div>
          <h3 className="font-black">{t.quickLinks}</h3>
          <div className="mt-4 grid gap-3">
            {t.nav.slice(0, 6).map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-semibold text-white/70 hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black">{t.footerContact}</h3>
          <p className="mt-4 leading-7 text-white/70">{t.footerContactText}</p>
          <p className="mt-2 font-black text-white">{WHATSAPP_DISPLAY_NUMBER}</p>
          <a className="btn btn-green mt-5" href={createWhatsAppUrl(t.whatsapp.contact)} target="_blank" rel="noreferrer">
            {t.footerContactCta}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/55">
        © {year} {t.brand}. {t.copyright}
      </div>
    </footer>
  );
}

function FloatingWhatsApp({ t }) {
  return (
    <a
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-greenCta text-white shadow-2xl transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-300 sm:h-16 sm:w-16"
      href={createWhatsAppUrl(t.whatsapp.floating)}
      target="_blank"
      rel="noreferrer"
      aria-label={t.whatsappAria}
    >
      <MessageCircle size={28} aria-hidden="true" />
    </a>
  );
}

function App() {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'fr';
    return localStorage.getItem('streamora-lang') === 'ar' ? 'ar' : 'fr';
  });
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = t.locale;
    document.documentElement.dir = t.dir;
    localStorage.setItem('streamora-lang', lang);
  }, [lang, t.dir, t.locale]);

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero lang={lang} t={t} />
        <FeatureCards lang={lang} t={t} />
        <DevicesSection lang={lang} t={t} />
        <PricingSection lang={lang} t={t} />
        <PromotionBanner t={t} />
        <WhyChooseUs lang={lang} t={t} />
        <PaymentSection lang={lang} t={t} />
        <TrialCta t={t} />
        <FaqSection lang={lang} t={t} />
      </main>
      <Footer t={t} />
      <FloatingWhatsApp t={t} />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
