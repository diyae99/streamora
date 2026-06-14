import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BadgeCheck,
  Check,
  ChevronDown,
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
  Wifi,
  X,
  Zap,
} from 'lucide-react';
import './styles.css';

const BRAND = 'Stramify';
const SITE_URL = 'https://stramify.com';
const WHATSAPP_NUMBER = '212699904956';
const WHATSAPP_DISPLAY_NUMBER = '+212 699 904 956';
const DEFAULT_WHATSAPP_MESSAGE = 'Bonjour Stramify, je souhaite bénéficier de l’essai 24h gratuit.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const routeHrefs = {
  home: '/',
  pricing: '/tarifs',
  installation: '/installation',
  faq: '/faq',
  contact: '/contact',
  abonnement: '/abonnement-tv-maroc',
  iptvMaroc: '/iptv-maroc',
  iptvTanger: '/iptv-tanger',
  iptvCasablanca: '/iptv-casablanca',
  iptvRabat: '/iptv-rabat',
  iptvMarrakech: '/iptv-marrakech',
  privacy: '/politique-de-confidentialite',
  terms: '/conditions-utilisation',
  refund: '/politique-remboursement',
};

const translations = {
  fr: {
    dir: 'ltr',
    locale: 'fr',
    ogLocale: 'fr_MA',
    nav: {
      home: 'Accueil',
      pricing: 'Tarifs',
      installation: 'Installation',
      faq: 'FAQ',
      cities: 'Villes',
      contact: 'Contact',
      cta: 'Essai 24h gratuit',
      open: 'Ouvrir le menu',
      close: 'Fermer le menu',
    },
    seoTitle: 'Stramify | Abonnement TV Maroc 4K – Essai 24h',
    seoDescription: 'Découvrez Stramify, une solution TV en ligne au Maroc compatible Smart TV, Android TV, Firestick, mobile et PC. Essai 24h via WhatsApp, activation rapide et support 24/7.',
    heroBadge: 'Solution TV en ligne au Maroc',
    heroTitle: 'Abonnement TV en ligne au Maroc en HD & 4K',
    heroSubtitle: 'Profitez d’une expérience TV simple, stable et compatible avec Smart TV, Android TV, Firestick, mobile et PC. Essai 24h gratuit via WhatsApp.',
    heroPrimary: 'Essai 24h gratuit',
    heroSecondary: 'Voir les forfaits',
    heroPromoTitle: 'Activation rapide',
    heroPromoText: 'Support WhatsApp 24/7 pour vous guider',
    visualAlt: 'Stramify abonnement TV en ligne au Maroc compatible Smart TV',
    visualLabels: ['Smart TV', 'Replay', 'Support'],
    countdown: ['heures', 'minutes', 'secondes'],
    badges: ['Essai 24h', 'Activation rapide', 'Support WhatsApp 24/7', 'Compatible Smart TV'],
    featuresTitle: 'Une solution TV en ligne pensée pour les utilisateurs au Maroc',
    features: [
      ['Catalogue selon disponibilité', 'Accédez à des contenus TV et divertissement selon votre forfait, votre pays et les droits de diffusion disponibles.'],
      ['Qualité HD / Full HD / 4K', 'La qualité dépend de votre connexion Internet, de votre appareil et de la compatibilité du service choisi.'],
      ['Assistance d’installation', 'Notre support vous accompagne pour configurer votre Smart TV, Android TV, Firestick, mobile ou PC.'],
      ['Activation rapide', 'Après confirmation sur WhatsApp, l’activation est traitée rapidement avec des instructions claires.'],
      ['Expérience stable', 'Stramify privilégie une approche professionnelle, simple et adaptée aux usages quotidiens.'],
    ],
    devicesTitle: 'Compatible avec vos appareils du quotidien',
    devices: ['Smart TV', 'Android TV / Box', 'Firestick', 'iPhone & iPad', 'Android Mobile', 'Windows & Mac'],
    pricingTitle: 'Forfaits Stramify',
    pricingSubtitle: 'Des offres simples pour choisir selon votre usage, votre connexion et vos appareils.',
    pricingNote: 'Le choix du forfait dépend du nombre d’appareils, de votre connexion Internet et de vos besoins d’utilisation.',
    popular: 'Le plus demandé',
    planCta: 'Demander cette offre',
    promoTitle: 'Essai 24h via WhatsApp',
    promoText: 'Vérifiez la compatibilité et la qualité avant de choisir votre forfait annuel.',
    promoCta: 'Demander l’essai',
    whyTitle: 'Pourquoi choisir Stramify ?',
    reasons: [
      ['Support 24/7', 'Une équipe disponible sur WhatsApp pour l’essai, l’activation, le choix du forfait et l’installation.'],
      ['Configuration guidée', 'Des étapes simples selon votre appareil, sans jargon inutile et sans promesse trompeuse.'],
      ['Paiement clair', 'Des tarifs annuels lisibles, avec des offres expliquées avant l’activation.'],
      ['Usage responsable', 'Les contenus et chaînes peuvent varier selon le fournisseur, le pays et les droits de diffusion.'],
      ['Accompagnement rapide', 'Vous recevez une réponse claire pour démarrer dans de bonnes conditions.'],
      ['Compatibilité large', 'Smart TV, Android TV, Firestick, mobile et PC selon votre configuration.'],
    ],
    trialTitle: 'Prêt à tester Stramify ?',
    trialText: 'Demandez votre essai 24h gratuit via WhatsApp et vérifiez la compatibilité avec votre appareil.',
    trialCta: 'Essai 24h gratuit',
    faqTitle: 'Questions fréquentes',
    footerDescription: 'Stramify est une solution TV en ligne au Maroc avec essai 24h via WhatsApp, activation rapide et assistance d’installation.',
    legalNotice: 'Stramify fournit une assistance de configuration et un accès à des services TV selon les offres disponibles. Les contenus et chaînes peuvent varier selon le fournisseur, le pays et les droits de diffusion.',
    copyright: 'Tous droits réservés.',
    faqAllCta: 'Voir toutes les questions',
    footerQuick: 'Liens rapides',
    footerInfo: 'Informations',
    cityLinks: [
      { label: 'Tanger', href: routeHrefs.iptvTanger },
      { label: 'Casablanca', href: routeHrefs.iptvCasablanca },
      { label: 'Rabat', href: routeHrefs.iptvRabat },
      { label: 'Marrakech', href: routeHrefs.iptvMarrakech },
    ],
    footerLinks: [
      { label: 'Accueil', href: routeHrefs.home },
      { label: 'Tarifs', href: routeHrefs.pricing },
      { label: 'Installation', href: routeHrefs.installation },
      { label: 'FAQ', href: routeHrefs.faq },
      { label: 'Contact', href: routeHrefs.contact },
      { label: 'Abonnement TV Maroc', href: routeHrefs.abonnement },
      { label: 'IPTV Maroc', href: routeHrefs.iptvMaroc },
      { label: 'IPTV Tanger', href: routeHrefs.iptvTanger },
      { label: 'IPTV Casablanca', href: routeHrefs.iptvCasablanca },
      { label: 'IPTV Rabat', href: routeHrefs.iptvRabat },
      { label: 'IPTV Marrakech', href: routeHrefs.iptvMarrakech },
      { label: 'Politique de confidentialité', href: routeHrefs.privacy },
      { label: 'Conditions d’utilisation', href: routeHrefs.terms },
      { label: 'Politique de remboursement', href: routeHrefs.refund },
    ],
    internalLinks: [
      { label: 'Tarifs', href: routeHrefs.pricing },
      { label: 'Installation', href: routeHrefs.installation },
      { label: 'FAQ', href: routeHrefs.faq },
      { label: 'Contact', href: routeHrefs.contact },
    ],
    contactWhatsApp: 'Contacter WhatsApp',
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
  },
  ar: {
    dir: 'rtl',
    locale: 'ar',
    ogLocale: 'ar_MA',
    nav: {
      home: 'الرئيسية',
      pricing: 'الأسعار',
      installation: 'التثبيت',
      faq: 'الأسئلة',
      cities: 'المدن',
      contact: 'اتصل بنا',
      cta: 'تجربة مجانية 24 ساعة',
      open: 'فتح القائمة',
      close: 'إغلاق القائمة',
    },
    seoTitle: 'Stramify | اشتراك مشاهدة في المغرب مع تجربة 24 ساعة',
    seoDescription: 'Stramify حل مشاهدة عبر الإنترنت في المغرب متوافق مع Smart TV وAndroid TV وFirestick والهاتف والكمبيوتر. تجربة 24 ساعة عبر واتساب وتفعيل سريع.',
    heroBadge: 'حل مشاهدة عبر الإنترنت في المغرب',
    heroTitle: 'اشتراك مشاهدة عبر الإنترنت في المغرب بجودة HD و4K',
    heroSubtitle: 'استمتع بتجربة بسيطة ومستقرة ومتوافقة مع Smart TV وAndroid TV وFirestick والهاتف والكمبيوتر. تجربة مجانية 24 ساعة عبر واتساب.',
    heroPrimary: 'تجربة مجانية 24 ساعة',
    heroSecondary: 'عرض الأسعار',
    heroPromoTitle: 'تفعيل سريع',
    heroPromoText: 'دعم واتساب 24/7 لمساعدتك',
    visualAlt: 'Stramify اشتراك مشاهدة عبر الإنترنت في المغرب متوافق مع Smart TV',
    visualLabels: ['Smart TV', 'إعادة', 'الدعم'],
    countdown: ['ساعات', 'دقائق', 'ثواني'],
    badges: ['تجربة 24 ساعة', 'تفعيل سريع', 'دعم واتساب 24/7', 'متوافق مع Smart TV'],
    featuresTitle: 'حل مشاهدة منظم وواضح للمستخدمين في المغرب',
    features: [
      ['كتالوج حسب التوفر', 'تختلف المحتويات حسب العرض والبلد والحقوق المتاحة من المورد.'],
      ['جودة HD / Full HD / 4K', 'تعتمد الجودة على سرعة الإنترنت والجهاز وتوافق الخدمة المختارة.'],
      ['مساعدة في التثبيت', 'نساعدك في إعداد Smart TV وAndroid TV وFirestick والهاتف والكمبيوتر.'],
      ['تفعيل سريع', 'بعد التأكيد عبر واتساب، يتم تجهيز الوصول وإرسال التعليمات بوضوح.'],
      ['تجربة مستقرة', 'يعتمد Stramify أسلوبا مهنيا وبسيطا ومناسبا للاستخدام اليومي.'],
    ],
    devicesTitle: 'متوافق مع أجهزتك اليومية',
    devices: ['Smart TV', 'Android TV / Box', 'Firestick', 'iPhone وiPad', 'Android Mobile', 'Windows وMac'],
    pricingTitle: 'باقات Stramify',
    pricingSubtitle: 'قارن بين باقات Stramify حسب عدد الأجهزة، سرعة الاتصال واحتياجاتك في الاستعمال والدعم.',
    pricingNote: 'اختيار الباقة يعتمد على عدد الأجهزة وسرعة الإنترنت واحتياجات الاستخدام.',
    popular: 'الأكثر طلبا',
    planCta: 'اطلب هذا العرض',
    promoTitle: 'تجربة 24 ساعة عبر واتساب',
    promoText: 'تحقق من التوافق والجودة قبل اختيار الباقة السنوية.',
    promoCta: 'اطلب التجربة',
    whyTitle: 'لماذا تختار Stramify؟',
    reasons: [
      ['دعم 24/7', 'فريق متاح عبر واتساب للتجربة والتفعيل واختيار الباقة والتثبيت.'],
      ['إعداد موجه', 'خطوات بسيطة حسب جهازك وبدون وعود مبالغ فيها.'],
      ['دفع واضح', 'أسعار سنوية واضحة مع شرح العروض قبل التفعيل.'],
      ['استخدام مسؤول', 'قد تختلف المحتويات والقنوات حسب المورد والبلد وحقوق البث.'],
      ['مرافقة سريعة', 'تحصل على إجابة واضحة للبدء في ظروف جيدة.'],
      ['توافق واسع', 'Smart TV وAndroid TV وFirestick والهاتف والكمبيوتر حسب الإعداد.'],
    ],
    trialTitle: 'هل أنت جاهز لتجربة Stramify؟',
    trialText: 'اطلب تجربة مجانية 24 ساعة عبر واتساب وتحقق من التوافق مع جهازك.',
    trialCta: 'تجربة مجانية 24 ساعة',
    faqTitle: 'الأسئلة الشائعة',
    footerDescription: 'Stramify حل مشاهدة عبر الإنترنت في المغرب مع تجربة 24 ساعة عبر واتساب وتفعيل سريع ومساعدة في التثبيت.',
    legalNotice: 'يوفر Stramify مساعدة في الإعداد ووصولا إلى خدمات TV حسب العروض المتاحة. قد تختلف المحتويات والقنوات حسب المورد والبلد وحقوق البث.',
    copyright: 'جميع الحقوق محفوظة.',
    faqAllCta: 'عرض كل الأسئلة',
    footerQuick: 'روابط سريعة',
    footerInfo: 'معلومات',
    cityLinks: [
      { label: 'طنجة', href: routeHrefs.iptvTanger },
      { label: 'الدار البيضاء', href: routeHrefs.iptvCasablanca },
      { label: 'الرباط', href: routeHrefs.iptvRabat },
      { label: 'مراكش', href: routeHrefs.iptvMarrakech },
    ],
    footerLinks: [
      { label: 'الرئيسية', href: routeHrefs.home },
      { label: 'الأسعار', href: routeHrefs.pricing },
      { label: 'التثبيت', href: routeHrefs.installation },
      { label: 'الأسئلة', href: routeHrefs.faq },
      { label: 'اتصل بنا', href: routeHrefs.contact },
      { label: 'اشتراك TV المغرب', href: routeHrefs.abonnement },
      { label: 'IPTV المغرب', href: routeHrefs.iptvMaroc },
      { label: 'IPTV طنجة', href: routeHrefs.iptvTanger },
      { label: 'IPTV الدار البيضاء', href: routeHrefs.iptvCasablanca },
      { label: 'IPTV الرباط', href: routeHrefs.iptvRabat },
      { label: 'IPTV مراكش', href: routeHrefs.iptvMarrakech },
      { label: 'سياسة الخصوصية', href: routeHrefs.privacy },
      { label: 'شروط الاستخدام', href: routeHrefs.terms },
      { label: 'سياسة الاسترجاع', href: routeHrefs.refund },
    ],
    internalLinks: [
      { label: 'الأسعار', href: routeHrefs.pricing },
      { label: 'التثبيت', href: routeHrefs.installation },
      { label: 'الأسئلة', href: routeHrefs.faq },
      { label: 'اتصل بنا', href: routeHrefs.contact },
    ],
    contactWhatsApp: 'تواصل عبر WhatsApp',
    whatsappMessage: 'مرحبا Stramify، أريد الاستفادة من تجربة 24 ساعة المجانية.',
  },
};

const pricingPlans = {
  fr: [
    {
      name: 'Stramify Start',
      price: '200 DH',
      period: '/ an',
      tag: 'Pour commencer',
      features: ['1 appareil', 'Qualité HD / Full HD selon connexion', 'Activation rapide via WhatsApp', 'Support installation', 'Accès 12 mois'],
    },
    {
      name: 'Stramify Plus',
      price: '300 DH',
      period: '/ an',
      tag: 'Le plus demandé',
      highlighted: true,
      features: ['Jusqu’à 2 appareils', 'Qualité Full HD / 4K selon compatibilité', 'Replay selon disponibilité', 'Assistance prioritaire', 'Accès 12 mois'],
    },
    {
      name: 'Stramify Premium',
      price: '500 DH',
      period: '/ an',
      tag: 'Expérience complète',
      features: ['Offre complète', 'Qualité optimale selon appareil', 'Support prioritaire', 'Configuration personnalisée', 'Accès 12 mois'],
    },
  ],
  ar: [
    {
      name: 'Stramify Start',
      price: '200 DH',
      period: '/ السنة',
      tag: 'مناسب للبدء',
      features: ['جهاز واحد', 'جودة HD / Full HD حسب الاتصال', 'تفعيل سريع عبر WhatsApp', 'دعم في التثبيت', 'اشتراك لمدة 12 شهراً'],
    },
    {
      name: 'Stramify Plus',
      price: '300 DH',
      period: '/ السنة',
      tag: 'الأكثر طلباً',
      highlighted: true,
      features: ['حتى جهازين', 'جودة Full HD / 4K حسب التوافق', 'Replay حسب التوفر', 'دعم سريع', 'اشتراك لمدة 12 شهراً'],
    },
    {
      name: 'Stramify Premium',
      price: '500 DH',
      period: '/ السنة',
      tag: 'التجربة الكاملة',
      features: ['عرض كامل', 'جودة ممتازة حسب الجهاز', 'دعم أولوية', 'إعداد مخصص', 'اشتراك لمدة 12 شهراً'],
    },
  ],
};

const faqItems = {
  fr: [
    ['Comment profiter de l’essai 24h gratuit ?', 'Cliquez sur un bouton WhatsApp, envoyez le message prérempli et notre support vous répond avec les étapes de test selon votre appareil.'],
    ['Comment activer mon abonnement ?', 'Après le choix du forfait et la confirmation, Stramify prépare l’accès et vous envoie les instructions d’activation sur WhatsApp.'],
    ['Quels appareils sont compatibles ?', 'Le service est compatible avec Smart TV, Android TV, Firestick, téléphone Android, iPhone, iPad et PC selon la configuration disponible.'],
    ['Quelle connexion Internet est recommandée ?', 'Une connexion stable est recommandée. La qualité HD, Full HD ou 4K dépend de votre débit, de votre appareil et de la compatibilité.'],
    ['Puis-je utiliser plusieurs appareils ?', 'Oui selon le forfait choisi. Stramify Start est prévu pour 1 appareil, Stramify Plus jusqu’à 2 appareils et Premium pour une expérience plus complète.'],
    ['Comment se fait le paiement ?', 'Le support vous confirme le forfait, les étapes et les moyens disponibles avant activation. Les tarifs sont présentés clairement.'],
    ['Combien de temps prend l’installation ?', 'L’installation est généralement rapide si l’appareil est prêt et connecté à Internet. Le support vous guide étape par étape.'],
    ['Que faire si le service ne fonctionne pas ?', 'Contactez le support WhatsApp. Nous vérifions la connexion, l’application, l’appareil et la configuration pour vous aider.'],
    ['Les chaînes et contenus sont-ils toujours les mêmes ?', 'Non. Les contenus et chaînes peuvent varier selon le fournisseur, le pays, les droits de diffusion et la disponibilité technique.'],
    ['Comment contacter le support ?', `Vous pouvez contacter Stramify sur WhatsApp au ${WHATSAPP_DISPLAY_NUMBER} pour l’essai 24h, l’activation, les tarifs et l’installation.`],
  ],
  ar: [
    ['كيف أستفيد من تجربة 24 ساعة المجانية؟', 'اضغط على زر WhatsApp وأرسل الرسالة الجاهزة، وسيجيبك فريق الدعم بخطوات التجربة المناسبة لجهازك.'],
    ['كيف يتم تفعيل الاشتراك؟', 'بعد اختيار الباقة والتأكيد، يقوم فريق Stramify بتجهيز الوصول وإرسال تعليمات التفعيل عبر WhatsApp.'],
    ['ما هي الأجهزة المتوافقة؟', 'الخدمة متوافقة مع Smart TV وAndroid TV وFirestick وهاتف Android وiPhone وiPad والكمبيوتر حسب الإعداد المتوفر.'],
    ['ما هي سرعة الإنترنت المناسبة؟', 'ننصح باتصال مستقر. جودة HD أو Full HD أو 4K تعتمد على سرعة الاتصال والجهاز والتوافق.'],
    ['هل يمكن استعمال الاشتراك على أكثر من جهاز؟', 'نعم حسب الباقة المختارة. Stramify Start لجهاز واحد، وStramify Plus حتى جهازين، وPremium لتجربة أكثر اكتمالاً.'],
    ['كيف يتم الدفع؟', 'يؤكد لك فريق الدعم الباقة والخطوات والوسائل المتاحة قبل التفعيل. الأسعار معروضة بوضوح.'],
    ['كم يستغرق التثبيت؟', 'عادة يكون التثبيت سريعاً إذا كان الجهاز جاهزاً ومتصلًا بالإنترنت. الدعم يرافقك خطوة بخطوة.'],
    ['ماذا أفعل إذا لم يشتغل الاشتراك؟', 'تواصل مع الدعم عبر WhatsApp. نراجع الاتصال والتطبيق والجهاز والإعدادات لمساعدتك.'],
    ['هل القنوات والمحتوى ثابتة دائماً؟', 'لا. قد تختلف القنوات والمحتويات حسب المورد والبلد وحقوق البث والتوفر التقني.'],
    ['كيف أتواصل مع الدعم؟', `يمكنك التواصل مع Stramify عبر WhatsApp على الرقم ${WHATSAPP_DISPLAY_NUMBER} بخصوص التجربة، التفعيل، الأسعار والتثبيت.`],
  ],
};

const installationContent = {
  fr: {
    title: 'Guide d’installation Stramify',
    subtitle: 'Ce guide vous aide à préparer votre appareil avant l’activation. Les étapes peuvent varier selon le modèle, l’application compatible et votre connexion Internet.',
    sections: [
      ['Installation sur Smart TV', 'Ouvrez le store ou l’espace applications de votre Smart TV, installez une application compatible recommandée par le support, puis saisissez les informations reçues après activation. Si vous hésitez, envoyez une photo du modèle de votre TV sur WhatsApp.'],
      ['Installation sur Android TV', 'Vérifiez que votre box Android TV est connectée à Internet, installez une application de lecture TV compatible, puis suivez les identifiants fournis par Stramify. Le support peut vous guider étape par étape.'],
      ['Installation sur Firestick', 'Connectez votre Firestick au Wi-Fi, préparez l’espace application et contactez le support pour recevoir la méthode adaptée à votre appareil. Nous évitons les manipulations inutiles et privilégions une configuration simple.'],
      ['Installation sur téléphone Android', 'Installez une application compatible depuis une source officielle lorsque possible, ouvrez-la, puis renseignez les accès fournis. Une connexion stable est recommandée pour une lecture fluide.'],
      ['Installation sur iPhone/iPad', 'Sur iOS, utilisez une application compatible disponible dans l’App Store lorsque possible. Le support Stramify vous indique les champs à remplir et les bonnes pratiques de connexion.'],
      ['Installation sur PC', 'Sur ordinateur, vous pouvez utiliser une solution compatible ou un lecteur adapté. Notre support vous explique la configuration selon Windows, Mac et votre niveau de confort technique.'],
    ],
  },
  ar: {
    title: 'دليل تثبيت Stramify',
    subtitle: 'يساعدك هذا الدليل على تجهيز جهازك قبل التفعيل. قد تختلف الخطوات حسب نوع الجهاز، التطبيق المتوافق وسرعة الاتصال.',
    sections: [
      ['التثبيت على Smart TV', 'افتح متجر التطبيقات أو مساحة التطبيقات في التلفاز الذكي، ثم ثبّت تطبيقاً متوافقاً حسب توجيهات الدعم، وبعدها أدخل معلومات الوصول التي تتوصل بها بعد التفعيل. إذا لم تكن متأكداً من نوع التلفاز، أرسل صورة الموديل عبر WhatsApp.'],
      ['التثبيت على Android TV', 'تأكد أن جهاز Android TV متصل بالإنترنت، ثم ثبّت تطبيق قراءة TV متوافقاً واتبع معلومات الدخول التي يوفرها Stramify. يمكن للدعم مرافقتك خطوة بخطوة.'],
      ['التثبيت على Firestick', 'صل جهاز Firestick بشبكة Wi-Fi، جهّز مساحة التطبيقات، ثم تواصل مع الدعم للحصول على الطريقة المناسبة لجهازك. نفضل خطوات بسيطة وواضحة بدون إعدادات معقدة.'],
      ['التثبيت على هاتف Android', 'ثبّت تطبيقاً متوافقاً من مصدر رسمي عندما يكون ذلك ممكناً، افتحه، ثم أدخل معلومات الوصول التي توصلت بها. ننصح باتصال مستقر لتجربة مشاهدة أفضل.'],
      ['التثبيت على iPhone / iPad', 'على iOS، استعمل تطبيقاً متوافقاً متاحاً في App Store عندما يكون ذلك ممكناً. يوضح لك دعم Stramify الخانات التي يجب ملؤها وأفضل طريقة للاتصال.'],
      ['التثبيت على الكمبيوتر', 'على الكمبيوتر يمكنك استعمال حل متوافق أو قارئ مناسب. يشرح لك الدعم طريقة الإعداد حسب Windows أو Mac وحسب مستوى راحتك مع الخطوات التقنية.'],
    ],
  },
};

const contactContent = {
  fr: {
    title: 'Contact Stramify',
    text: 'Notre support vous répond sur WhatsApp pour l’essai 24h, l’activation, le choix du forfait et l’installation.',
    cards: [
      ['Essai 24h', 'Demandez un test avant de choisir un forfait.'],
      ['Activation', 'Recevez les étapes adaptées à votre appareil.'],
      ['Installation', 'Obtenez une aide claire sur WhatsApp.'],
    ],
  },
  ar: {
    title: 'اتصل بنا',
    text: 'فريق الدعم يجيبك عبر WhatsApp لمساعدتك في تجربة 24 ساعة، اختيار الباقة، التفعيل والتثبيت.',
    cards: [
      ['تجربة 24 ساعة', 'اطلب تجربة قبل اختيار الباقة المناسبة.'],
      ['التفعيل', 'توصل بالخطوات المناسبة لجهازك.'],
      ['التثبيت', 'احصل على مساعدة واضحة عبر WhatsApp.'],
    ],
  },
};

const featureIcons = [Tv, Sparkles, Headphones, Zap, Wifi];
const deviceIcons = [Tv, Monitor, PlayCircle, TabletSmartphone, Smartphone, Laptop];
const reasonIcons = [Headphones, BadgeCheck, CreditCard, ShieldCheck, Clock3, Star];

function createWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

function navigateTo(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function Link({ href, children, className, onClick }) {
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        if (href.startsWith('/')) {
          event.preventDefault();
          navigateTo(href);
        }
        onClick?.();
      }}
    >
      {children}
    </a>
  );
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

function Countdown({ labels }) {
  const time = useCountdown();
  const entries = [
    [labels[0], time.hours],
    [labels[1], time.minutes],
    [labels[2], time.seconds],
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {entries.map(([label, value]) => (
        <div key={label} className="rounded-2xl bg-white/95 px-3 py-3 text-center shadow-sm ring-1 ring-black/5">
          <strong className="block text-xl font-black text-navy sm:text-2xl">{String(value).padStart(2, '0')}</strong>
          <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-muted">{label}</span>
        </div>
      ))}
    </div>
  );
}

function setMetaTag(attribute, key, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setLinkTag(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

function pageUrl(path) {
  return `${SITE_URL}${path === '/' ? '/' : path}`;
}

function updateSeo({ title, description, path, ogLocale, faqs = [], breadcrumbs = [] }) {
  const url = pageUrl(path);
  document.title = title;
  setMetaTag('name', 'description', description);
  setMetaTag('name', 'robots', 'index, follow');
  setMetaTag('property', 'og:type', 'website');
  setMetaTag('property', 'og:site_name', BRAND);
  setMetaTag('property', 'og:title', title);
  setMetaTag('property', 'og:description', description);
  setMetaTag('property', 'og:url', url);
  setMetaTag('property', 'og:locale', ogLocale);
  setMetaTag('name', 'twitter:card', 'summary');
  setMetaTag('name', 'twitter:title', title);
  setMetaTag('name', 'twitter:description', description);
  setLinkTag('canonical', url);

  const graph = [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: BRAND,
      url: SITE_URL,
      description: 'Abonnement TV en ligne au Maroc avec essai 24h via WhatsApp, activation rapide et assistance d’installation.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: WHATSAPP_DISPLAY_NUMBER,
        contactType: 'customer support',
        availableLanguage: ['French', 'Arabic'],
        url: WHATSAPP_URL,
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: BRAND,
      url: SITE_URL,
      areaServed: 'Morocco',
      telephone: WHATSAPP_DISPLAY_NUMBER,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: WHATSAPP_DISPLAY_NUMBER,
        contactType: 'customer support',
        url: WHATSAPP_URL,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BRAND,
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ];

  if (faqs.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqs.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    });
  }

  if (breadcrumbs.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: pageUrl(item.path),
      })),
    });
  }

  let script = document.getElementById('stramify-jsonld');
  if (!script) {
    script = document.createElement('script');
    script.id = 'stramify-jsonld';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

function LanguageSwitch({ lang, setLang }) {
  return (
    <div className="inline-flex rounded-2xl border border-slate-200 bg-white p-1 shadow-sm" aria-label="Language switcher">
      {['fr', 'ar'].map((code) => (
        <button
          key={code}
          type="button"
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className={`rounded-xl px-3 py-2 text-xs font-black transition focus:outline-none focus:ring-4 focus:ring-primary/20 ${
            lang === code ? 'bg-navy text-white shadow-sm' : 'text-muted hover:bg-soft hover:text-navy'
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Header({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.pricing, href: '/tarifs' },
    { label: t.nav.installation, href: '/installation' },
    { label: t.nav.faq, href: '/faq' },
    { label: t.nav.contact, href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <Link href="/" className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-4 focus:ring-primary/20">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-white shadow-lift">
            <Tv size={21} aria-hidden="true" />
          </span>
          <span className="text-lg font-black text-navy">{BRAND}</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.slice(0, 4).map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-bold text-ink transition hover:text-primary focus:outline-none focus:ring-4 focus:ring-primary/20">
              {link.label}
            </Link>
          ))}
          <div className="group relative">
            <button className="inline-flex items-center gap-1 text-sm font-bold text-ink transition hover:text-primary focus:outline-none focus:ring-4 focus:ring-primary/20" type="button">
              {t.nav.cities}
              <ChevronDown size={16} aria-hidden="true" />
            </button>
            <div className="invisible absolute start-0 top-full z-20 mt-3 min-w-48 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-soft transition group-hover:visible group-hover:opacity-100">
              {t.cityLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block rounded-xl px-3 py-2 text-sm font-bold text-ink hover:bg-soft hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/contact" className="text-sm font-bold text-ink transition hover:text-primary focus:outline-none focus:ring-4 focus:ring-primary/20">
            {t.nav.contact}
          </Link>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch lang={lang} setLang={setLang} />
          <a className="btn btn-green" href={createWhatsAppUrl(t.whatsappMessage)} target="_blank" rel="noreferrer">{t.nav.cta}</a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitch lang={lang} setLang={setLang} />
          <button
            className="inline-grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 text-navy"
            type="button"
            aria-label={open ? t.nav.close : t.nav.open}
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
            {[...navLinks, ...t.cityLinks].map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl px-3 py-3 text-sm font-bold text-ink hover:bg-soft hover:text-primary">
                {link.label}
              </Link>
            ))}
            <a className="btn btn-green mt-3 justify-center" href={createWhatsAppUrl(t.whatsappMessage)} target="_blank" rel="noreferrer">{t.nav.cta}</a>
          </div>
        </div>
      )}
    </header>
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

function HeroVisual({ t }) {
  return (
    <div className="relative mx-auto w-full max-w-xl animate-float" dir="ltr" role="img" aria-label={t.visualAlt}>
      <div className="absolute -left-4 top-16 z-10 rounded-2xl bg-white px-4 py-3 shadow-soft ring-1 ring-slate-200">
        <p className="text-xs font-black uppercase tracking-[0.12em] text-muted">Smart TV</p>
        <p className="text-sm font-black text-navy">HD / 4K</p>
      </div>
      <div className="absolute -right-2 bottom-20 z-10 rounded-2xl bg-greenCta px-4 py-3 text-white shadow-soft">
        <p className="text-sm font-black">WhatsApp 24/7</p>
      </div>
      <div className="hero-screen overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-[#152c56] to-primary p-5 shadow-2xl">
        <div className="rounded-[1.4rem] bg-white/10 p-4 ring-1 ring-white/20">
          <div className="aspect-video rounded-[1.1rem] bg-white shadow-2xl">
            <div className="flex h-full flex-col justify-between rounded-[1.1rem] bg-[radial-gradient(circle_at_50%_45%,#ffffff_0_5%,transparent_6%),linear-gradient(135deg,#18a35e,#0d7d4d)] p-5">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-navy">TV</span>
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-black text-white">4K</span>
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
            {t.visualLabels.map((item) => (
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

function HomePage({ lang, t }) {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-12 sm:pt-16 lg:pt-20">
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
              <a className="btn btn-red btn-large" href={createWhatsAppUrl(t.whatsappMessage)} target="_blank" rel="noreferrer">{t.heroPrimary}</a>
              <Link className="btn btn-green btn-large" href="/tarifs">{t.heroSecondary}</Link>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 rounded-[1.5rem] bg-gradient-to-r from-primary to-orange-500 p-4 text-white shadow-lift sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.14em] text-white/80">{t.heroPromoTitle}</p>
                <p className="mt-1 text-xl font-black">{t.heroPromoText}</p>
              </div>
              <Countdown labels={t.countdown} />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {t.badges.map((label) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm">
                  <Check className="mx-auto mb-2 text-greenCta" size={22} aria-hidden="true" />
                  <p className="text-sm font-black text-navy">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <HeroVisual t={t} />
        </div>
      </section>
      <FeatureSection lang={lang} t={t} />
      <DevicesSection lang={lang} t={t} />
      <PricingSection lang={lang} t={t} />
      <PromoSection t={t} />
      <WhySection lang={lang} t={t} />
      <TrialSection t={t} />
      <FaqPreview lang={lang} t={t} />
    </>
  );
}

function FeatureSection({ lang, t }) {
  return (
    <section className="section bg-soft">
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
    <section className="section bg-white">
      <SectionHeader lang={lang} title={t.devicesTitle} />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
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
  const plans = pricingPlans[lang];

  return (
    <section id="tarifs" className="section bg-soft">
      <SectionHeader lang={lang} title={t.pricingTitle} subtitle={t.pricingSubtitle} />
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {plans.map((plan) => (
          <article key={plan.name} className={`pricing-card ${plan.highlighted ? 'pricing-card-popular' : ''} ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            <span className={plan.highlighted ? 'popular-pill' : 'mb-4 inline-flex w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-black uppercase tracking-[0.1em] text-primary'}>
              {plan.highlighted ? t.popular : plan.tag}
            </span>
            <h3 className="text-2xl font-black text-navy">{plan.name}</h3>
            <div className="mt-6 flex items-end gap-1">
              <strong className="text-4xl font-black text-navy">{plan.price}</strong>
              <span className="pb-1 text-sm font-bold text-muted">{plan.period}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {plan.features.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-semibold text-ink">
                  <Check className="mt-0.5 shrink-0 text-greenCta" size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a className={`btn mt-7 w-full justify-center ${plan.highlighted ? 'btn-red' : 'btn-outline'}`} href={createWhatsAppUrl(t.whatsappMessage)} target="_blank" rel="noreferrer">
              {t.planCta}
            </a>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-7 max-w-3xl px-4 text-center leading-7 text-muted sm:px-6 lg:px-8">{t.pricingNote}</p>
    </section>
  );
}

function PromoSection({ t }) {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-gradient-to-br from-primary via-red-600 to-orange-500 p-6 text-white shadow-lift sm:p-8 lg:grid-cols-[1fr_auto_auto] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-white/75">{t.promoTitle}</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">{t.promoTitle}</h2>
          <p className="mt-3 max-w-2xl leading-7 text-white/86">{t.promoText}</p>
        </div>
        <Countdown labels={t.countdown} />
        <a className="btn bg-white text-primary hover:-translate-y-0.5 hover:bg-red-50 focus:ring-white/40" href={createWhatsAppUrl(t.whatsappMessage)} target="_blank" rel="noreferrer">
          {t.promoCta}
        </a>
      </div>
    </section>
  );
}

function WhySection({ lang, t }) {
  return (
    <section className="section bg-white">
      <SectionHeader lang={lang} title={t.whyTitle} />
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {t.reasons.map(([title, text], index) => {
          const Icon = reasonIcons[index];
          return (
            <article key={title} className={`card ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              <div className={index % 2 ? 'icon-box bg-green-50 text-greenCta' : 'icon-box bg-red-50 text-primary'}>
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

function TrialSection({ t }) {
  return (
    <section id="contact" className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto rounded-[2rem] bg-gradient-to-br from-navy via-primary to-red-500 px-6 py-12 text-center text-white shadow-lift sm:px-8 lg:max-w-7xl">
        <h2 className="text-3xl font-black sm:text-4xl">{t.trialTitle}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/84">{t.trialText}</p>
        <a className="btn mt-8 bg-white text-primary hover:-translate-y-0.5 hover:bg-red-50 focus:ring-white/40" href={createWhatsAppUrl(t.whatsappMessage)} target="_blank" rel="noreferrer">
          {t.trialCta}
        </a>
      </div>
    </section>
  );
}

function FaqPreview({ lang, t }) {
  return (
    <section className="section bg-white">
      <SectionHeader lang={lang} title={t.faqTitle} />
      <FaqList items={faqItems[lang].slice(0, 6)} dir={t.dir} />
      <div className="mt-8 text-center">
        <Link href="/faq" className="btn btn-outline">{t.faqAllCta}</Link>
      </div>
    </section>
  );
}

function FaqList({ items, dir }) {
  const [active, setActive] = useState(0);
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8" dir={dir}>
      {items.map(([question, answer], index) => {
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
  );
}

function SeoPage({ page, lang, t }) {
  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className={`mx-auto max-w-4xl ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={t.dir}>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-primary">{page.eyebrow}</p>
          <h1 className="text-4xl font-black leading-tight text-navy sm:text-5xl">{page.h1}</h1>
          <p className="mt-6 text-lg leading-8 text-muted">{page.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn btn-red btn-large" href={createWhatsAppUrl(t.whatsappMessage)} target="_blank" rel="noreferrer">{t.trialCta}</a>
            <Link className="btn btn-green btn-large" href="/tarifs">{t.heroSecondary}</Link>
          </div>
        </div>
      </section>
      <section className="bg-soft px-4 py-14 sm:px-6 lg:px-8">
        <article className={`prose-like mx-auto max-w-4xl rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={t.dir}>
          {page.sections.map(([title, paragraphs]) => (
            <div key={title} className="mb-8 last:mb-0">
              <h2 className="text-2xl font-black text-navy">{title}</h2>
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 50)} className="mt-4 leading-8 text-muted">{paragraph}</p>
              ))}
            </div>
          ))}
        </article>
      </section>
      <InternalLinks t={t} />
    </>
  );
}

function InternalLinks({ t }) {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-wrap gap-3" dir={t.dir}>
        {t.internalLinks.map(({ label, href }) => (
          <Link key={href} href={href} className="btn btn-outline">{label}</Link>
        ))}
      </div>
    </section>
  );
}

function InstallationPage({ lang, t }) {
  const content = installationContent[lang];

  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className={`mx-auto max-w-4xl ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={t.dir}>
          <h1 className="text-4xl font-black text-navy sm:text-5xl">{content.title}</h1>
          <p className="mt-6 text-lg leading-8 text-muted">{content.subtitle}</p>
        </div>
      </section>
      <section className="bg-soft px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {content.sections.map(([title, text]) => (
            <article key={title} className={`card ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={t.dir}>
              <h2 className="text-2xl font-black text-navy">{title}</h2>
              <p className="mt-4 leading-8 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <TrialSection t={t} />
      <InternalLinks t={t} />
    </>
  );
}

function ContactPage({ lang, t }) {
  const content = contactContent[lang];

  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className={`mx-auto max-w-4xl ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={t.dir}>
          <h1 className="text-4xl font-black text-navy sm:text-5xl">{content.title}</h1>
          <p className="mt-6 text-lg leading-8 text-muted">{content.text}</p>
          <p className="mt-4 text-2xl font-black text-navy">{WHATSAPP_DISPLAY_NUMBER}</p>
          <a className="btn btn-green btn-large mt-8" href={createWhatsAppUrl(t.whatsappMessage)} target="_blank" rel="noreferrer">{t.contactWhatsApp}</a>
        </div>
      </section>
      <section className="bg-soft px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {content.cards.map(([title, text]) => (
            <article key={title} className={`card ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={t.dir}>
              <h2 className="text-xl font-black text-navy">{title}</h2>
              <p className="mt-3 leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <InternalLinks t={t} />
    </>
  );
}

function TarifsPage({ lang, t, page }) {
  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className={`mx-auto max-w-4xl ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={t.dir}>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-primary">{page.eyebrow}</p>
          <h1 className="text-4xl font-black text-navy sm:text-5xl">{page.h1}</h1>
          <p className="mt-6 text-lg leading-8 text-muted">{page.intro}</p>
        </div>
      </section>
      <PricingSection lang={lang} t={t} />
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <article className={`prose-like mx-auto max-w-4xl rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={t.dir}>
          {page.sections.map(([title, paragraphs]) => (
            <div key={title} className="mb-8 last:mb-0">
              <h2 className="text-2xl font-black text-navy">{title}</h2>
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 50)} className="mt-4 leading-8 text-muted">{paragraph}</p>
              ))}
            </div>
          ))}
        </article>
      </section>
      <InternalLinks t={t} />
    </>
  );
}

function FaqPage({ lang, t }) {
  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className={`mx-auto max-w-4xl ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={t.dir}>
          <h1 className="text-4xl font-black text-navy sm:text-5xl">{lang === 'ar' ? 'الأسئلة الشائعة حول Stramify' : 'FAQ Stramify'}</h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            {lang === 'ar'
              ? 'إجابات واضحة حول تجربة 24 ساعة، التفعيل، الأجهزة المتوافقة، سرعة الإنترنت، الدفع والدعم عبر WhatsApp.'
              : 'Retrouvez les réponses aux questions fréquentes sur l’essai 24h, l’activation, les appareils compatibles, la connexion Internet et le support.'}
          </p>
        </div>
      </section>
      <section className="section bg-soft">
        <FaqList items={faqItems[lang]} dir={t.dir} />
      </section>
      <TrialSection t={t} />
    </>
  );
}

function Footer({ t }) {
  return (
    <footer className="bg-navy text-white" dir={t.dir}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary">
              <Tv size={21} aria-hidden="true" />
            </span>
            <span className="text-lg font-black">{BRAND}</span>
          </div>
          <p className="mt-4 max-w-md leading-7 text-white/70">{t.footerDescription}</p>
          <p className="mt-4 font-black">{WHATSAPP_DISPLAY_NUMBER}</p>
          <p className="mt-5 text-sm leading-6 text-white/60">{t.legalNotice}</p>
        </div>
        <div>
          <h3 className="font-black">{t.footerQuick}</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {t.footerLinks.slice(0, 10).map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-semibold text-white/70 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black">{t.footerInfo}</h3>
          <div className="mt-4 grid gap-3">
            {t.footerLinks.slice(10).map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-semibold text-white/70 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <a className="btn btn-green mt-5" href={createWhatsAppUrl(t.whatsappMessage)} target="_blank" rel="noreferrer">{t.trialCta}</a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/55">
        © 2026 {BRAND}. {t.copyright}
      </div>
    </footer>
  );
}

function FloatingWhatsApp({ t }) {
  return (
    <a
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-greenCta px-4 py-3 text-sm font-black text-white shadow-2xl transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-300 sm:bottom-5 sm:right-5"
      href={createWhatsAppUrl(t.whatsappMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label={`${t.trialCta} WhatsApp`}
    >
      <MessageCircle size={22} aria-hidden="true" />
      <span>{t.trialCta}</span>
    </a>
  );
}

const seoPages = {
  '/abonnement-tv-maroc': {
    h1: 'Abonnement TV en ligne au Maroc',
    title: 'Abonnement TV Maroc | Stramify essai 24h',
    description: 'Découvrez une solution TV en ligne au Maroc avec essai 24h, activation rapide, support WhatsApp et compatibilité Smart TV, Android TV, Firestick, mobile et PC.',
    eyebrow: 'Guide Maroc',
    intro: 'Stramify accompagne les utilisateurs au Maroc qui recherchent une solution TV en ligne simple, claire et compatible avec leurs appareils du quotidien.',
    sections: [
      ['Une solution TV adaptée au Maroc', [
        'Un abonnement TV en ligne au Maroc doit être simple à comprendre avant d’être activé. Stramify met l’accent sur un accompagnement clair, un essai 24h via WhatsApp et une configuration adaptée aux appareils les plus utilisés au quotidien. L’objectif n’est pas de promettre un accès exagéré à des catalogues précis, mais de proposer une expérience TV organisée, compatible et expliquée avant le choix du forfait.',
        'Les utilisateurs marocains regardent souvent leurs contenus depuis une Smart TV dans le salon, une box Android TV, un Firestick, un téléphone ou un PC. Le service doit donc être flexible, mais aussi prudent dans sa présentation. Les contenus accessibles peuvent varier selon le fournisseur, le pays, le forfait choisi et les droits de diffusion disponibles.',
      ]],
      ['Activation, support et compatibilité', [
        'L’activation rapide via WhatsApp permet de réduire les blocages techniques. Vous contactez le support, vous indiquez votre appareil et vous recevez les instructions adaptées. Cette approche aide les familles, les étudiants, les professionnels et les utilisateurs moins techniques à démarrer sans perdre de temps dans des réglages compliqués.',
        'La qualité HD, Full HD ou 4K dépend de votre connexion Internet, du modèle d’appareil et de la compatibilité de l’application utilisée. Stramify recommande de tester d’abord avec l’essai 24h gratuit afin de vérifier la stabilité, la fluidité et la simplicité d’utilisation avant de choisir un forfait annuel.',
      ]],
      ['Bien choisir son forfait', [
        'Le bon forfait dépend principalement du nombre d’appareils, de la qualité souhaitée, de votre connexion et de votre besoin d’assistance. Une personne seule peut privilégier Stramify Start, tandis qu’un foyer avec plusieurs usages peut préférer Stramify Plus ou Premium. Pour comparer les offres, consultez la page tarifs, puis demandez conseil sur WhatsApp.',
      ]],
    ],
  },
  '/iptv-maroc': {
    h1: 'IPTV Maroc : solution TV en ligne claire et accompagnée',
    title: 'IPTV Maroc | Solution TV en ligne Stramify',
    description: 'Stramify présente une alternative TV en ligne pour les recherches IPTV Maroc, avec essai 24h, activation WhatsApp et assistance d’installation.',
    eyebrow: 'Recherche IPTV Maroc',
    intro: 'Le terme IPTV Maroc est souvent utilisé par les internautes pour chercher une solution TV en ligne. Stramify préfère une approche professionnelle, transparente et centrée sur la compatibilité.',
    sections: [
      ['Comprendre la recherche IPTV Maroc', [
        'Beaucoup d’utilisateurs tapent IPTV Maroc lorsqu’ils veulent regarder la TV via Internet sur Smart TV, Android TV, Firestick, mobile ou ordinateur. Cette recherche peut couvrir des besoins très différents : installation, comparaison des forfaits, qualité d’image, support ou essai avant engagement. Stramify répond à ce besoin avec un vocabulaire plus clair : solution TV en ligne compatible et accompagnée.',
        'Il est important de rester prudent. Les contenus et chaînes peuvent varier selon les fournisseurs, les droits de diffusion, le pays et la disponibilité technique. Stramify ne présente pas de promesse liée à des chaînes protégées ou à des catalogues illimités. L’objectif est d’aider l’utilisateur à configurer une solution adaptée et à vérifier la qualité avant de payer.',
      ]],
      ['Une expérience centrée sur l’assistance', [
        'Le support WhatsApp est au cœur du parcours. Vous demandez l’essai 24h, vous expliquez votre appareil, puis vous recevez des instructions simples. Cette méthode évite les erreurs fréquentes lors de l’installation et permet de savoir rapidement si votre connexion Internet et votre matériel sont adaptés.',
        'Pour une Smart TV récente, l’installation peut être très rapide. Sur une box Android ou un Firestick, quelques étapes supplémentaires peuvent être nécessaires. Sur mobile ou PC, le support vous oriente selon votre niveau de confort et votre objectif d’utilisation.',
      ]],
      ['Comparer avant de choisir', [
        'Avant de sélectionner un forfait, vérifiez le nombre d’appareils, la qualité attendue et votre besoin d’accompagnement. La page tarifs détaille Stramify Start, Plus et Premium. La page installation explique les principaux appareils, tandis que la FAQ répond aux questions sur paiement, activation et compatibilité.',
      ]],
    ],
  },
  '/iptv-4k-maroc': {
    h1: 'IPTV 4K Maroc : regarder en HD, Full HD ou 4K selon compatibilité',
    title: 'IPTV 4K Maroc | Qualité HD et 4K avec Stramify',
    description: 'Informations sur la qualité HD, Full HD et 4K pour une solution TV en ligne au Maroc compatible Smart TV, Android TV, Firestick et PC.',
    eyebrow: 'Qualité image',
    intro: 'La qualité 4K attire beaucoup d’utilisateurs, mais elle dépend toujours de plusieurs facteurs : connexion, appareil, application compatible et disponibilité technique.',
    sections: [
      ['La 4K dépend de votre environnement', [
        'Un service TV en ligne peut proposer une excellente qualité, mais l’expérience réelle dépend de votre installation. Pour profiter d’une image HD, Full HD ou 4K, il faut une connexion stable, un appareil compatible et une configuration propre. Une Smart TV récente avec une bonne connexion fibre offrira généralement de meilleurs résultats qu’un appareil ancien connecté à un Wi-Fi instable.',
        'Stramify présente la qualité de manière responsable. Nous parlons de qualité HD, Full HD ou 4K selon connexion et appareil, car il serait trompeur de garantir le même rendu partout. L’essai 24h via WhatsApp sert précisément à vérifier ce point avant de choisir un forfait annuel.',
      ]],
      ['Conseils pour une lecture plus stable', [
        'Pour améliorer la stabilité, privilégiez une connexion filaire lorsque c’est possible, placez le routeur près de la TV ou utilisez un réseau Wi-Fi fiable. Fermez les applications inutiles sur votre appareil et évitez de lancer plusieurs téléchargements pendant la lecture. Ces détails simples peuvent améliorer la fluidité, surtout pendant les grands événements.',
        'Le support Stramify peut aussi vous aider à vérifier l’application utilisée, la qualité sélectionnée et le comportement de votre appareil. L’objectif est d’obtenir une expérience confortable, pas de promettre une qualité irréaliste dans toutes les situations.',
      ]],
      ['Choisir le forfait adapté', [
        'Si la qualité d’image est votre priorité, comparez Stramify Plus et Premium. Le choix dépend aussi du nombre d’appareils et de votre besoin de configuration personnalisée. La page tarifs donne les détails, et la page installation vous aide à préparer Smart TV, Android TV, Firestick, téléphone ou PC.',
      ]],
    ],
  },
  '/iptv-tanger': {
    h1: 'Abonnement TV en ligne à Tanger',
    title: 'IPTV Tanger | Abonnement TV en ligne Stramify',
    description: 'Solution TV en ligne à Tanger avec essai 24h via WhatsApp, activation rapide et support pour Smart TV, Android TV, Firestick, mobile et PC.',
    eyebrow: 'Tanger',
    intro: 'À Tanger, les usages TV varient entre appartements modernes, maisons familiales et utilisateurs mobiles. Stramify accompagne cette diversité avec un service simple à tester.',
    sections: [
      ['Pour les foyers et appartements à Tanger', [
        'Tanger est une ville connectée, avec des foyers qui utilisent de plus en plus Smart TV, Android TV et Firestick pour accéder à leurs contenus depuis Internet. Dans un appartement du centre, une maison familiale ou un logement proche des zones résidentielles, le besoin reste souvent le même : une solution TV claire, rapide à installer et compatible avec l’appareil déjà disponible.',
        'Stramify propose un essai 24h via WhatsApp pour vérifier la fluidité avant de choisir un forfait. Cette étape est utile à Tanger, où la qualité de connexion peut varier entre fibre, ADSL, 4G ou partage Wi-Fi. Le support vous aide à identifier l’appareil, l’application compatible et les réglages à privilégier.',
      ]],
      ['Support rapide et installation guidée', [
        'L’installation peut être simple sur Smart TV, mais certains modèles demandent des étapes différentes. Sur Android TV ou Firestick, il faut parfois préparer l’application, vérifier la connexion et saisir correctement les accès. Le support Stramify vous accompagne sans promesses exagérées et avec des consignes adaptées à votre situation.',
        'Les contenus accessibles peuvent varier selon l’offre, le fournisseur, le pays et les droits de diffusion. Stramify préfère expliquer cette réalité plutôt que d’utiliser un discours agressif. Vous savez ainsi ce que vous testez et vous choisissez un forfait selon vos besoins réels.',
      ]],
      ['Comparer les offres depuis Tanger', [
        'Pour une utilisation simple sur un appareil, Stramify Start peut suffire. Pour un foyer qui souhaite plus de confort ou plusieurs usages, Plus ou Premium peuvent être plus adaptés. Consultez les tarifs, le guide d’installation et la FAQ avant de contacter le support WhatsApp.',
      ]],
    ],
  },
  '/iptv-casablanca': {
    h1: 'Abonnement TV en ligne à Casablanca',
    title: 'IPTV Casablanca | Stramify TV en ligne',
    description: 'Abonnement TV en ligne à Casablanca pour familles, appartements et utilisateurs connectés, avec essai 24h, support WhatsApp et activation rapide.',
    eyebrow: 'Casablanca',
    intro: 'À Casablanca, les usages TV sont urbains, rapides et souvent partagés entre plusieurs membres du foyer. Stramify aide à choisir une configuration adaptée.',
    sections: [
      ['Une solution pour les usages urbains', [
        'Casablanca rassemble des profils très différents : familles en appartement, jeunes actifs, colocations, utilisateurs fibre, 4G ou Wi-Fi partagé. Une solution TV en ligne doit donc rester simple, compatible et facile à tester. Stramify permet de vérifier votre appareil et votre connexion avec un essai 24h gratuit via WhatsApp.',
        'Dans les appartements casablancais, la Smart TV est souvent l’écran principal du salon, tandis que le mobile ou le PC sert de solution complémentaire. Le support Stramify vous aide à choisir la méthode d’installation selon votre appareil, sans imposer un parcours technique compliqué.',
      ]],
      ['Familles, fibre et compatibilité', [
        'La qualité dépend fortement de la stabilité de votre connexion Internet. Une connexion fibre peut offrir une meilleure expérience, mais un Wi-Fi saturé dans un immeuble peut réduire la fluidité. C’est pourquoi l’essai 24h est utile : il permet de tester les conditions réelles de votre logement à Casablanca avant l’abonnement annuel.',
        'Stramify évite les promesses irréalistes. Les contenus et chaînes peuvent varier selon les offres disponibles, les fournisseurs et les droits de diffusion. Notre rôle est de vous accompagner dans la configuration, la compatibilité et le choix du forfait le plus raisonnable.',
      ]],
      ['Choisir son forfait à Casablanca', [
        'Pour un usage individuel, Start peut être suffisant. Pour une famille ou un logement où deux appareils sont parfois utilisés, Plus peut être plus confortable. Premium s’adresse aux utilisateurs qui veulent une assistance plus personnalisée. Les pages tarifs, installation et FAQ détaillent les choix possibles.',
      ]],
    ],
  },
  '/iptv-rabat': {
    h1: 'Abonnement TV en ligne à Rabat',
    title: 'IPTV Rabat | Abonnement TV en ligne Stramify',
    description: 'Solution TV en ligne à Rabat avec support WhatsApp, activation rapide, guide d’installation et compatibilité Smart TV, Android TV, Firestick et PC.',
    eyebrow: 'Rabat',
    intro: 'À Rabat, Stramify accompagne les foyers qui cherchent une expérience TV stable, responsable et facile à configurer.',
    sections: [
      ['Divertissement stable à domicile', [
        'Rabat compte de nombreux foyers qui privilégient une expérience TV calme, stable et pratique. Que vous soyez en appartement, en maison familiale ou dans un logement étudiant, la priorité est souvent la même : démarrer rapidement, comprendre le forfait et obtenir de l’aide si l’installation bloque. Stramify structure ce parcours autour de WhatsApp.',
        'L’essai 24h permet de tester la compatibilité réelle avec votre Smart TV, Android TV, Firestick, téléphone ou PC. Cette étape évite de choisir un forfait sans savoir si votre connexion, votre appareil et l’application compatible donnent le résultat attendu.',
      ]],
      ['Assistance et configuration', [
        'Le support Stramify vous guide dans les étapes essentielles : vérifier le modèle d’appareil, préparer l’application compatible, saisir les informations d’accès et ajuster les réglages de base. Cette méthode est particulièrement utile pour les utilisateurs qui veulent éviter les manipulations complexes.',
        'Nous restons prudents sur les contenus. Les chaînes et catalogues peuvent varier selon le fournisseur, le pays et les droits de diffusion. Stramify ne vend pas une promesse exagérée, mais un accompagnement clair pour accéder à une solution TV selon les offres disponibles.',
      ]],
      ['Une offre lisible pour Rabat', [
        'La page tarifs présente trois forfaits annuels : Start, Plus et Premium. Le bon choix dépend du nombre d’appareils, de la qualité recherchée et de votre besoin de support. Pour toute hésitation, le contact WhatsApp reste le moyen le plus rapide d’obtenir une recommandation.',
      ]],
    ],
  },
  '/iptv-marrakech': {
    h1: 'Abonnement TV en ligne à Marrakech',
    title: 'IPTV Marrakech | Stramify TV en ligne',
    description: 'Abonnement TV en ligne à Marrakech pour maisons, appartements, riads et familles, avec essai 24h, activation WhatsApp et installation guidée.',
    eyebrow: 'Marrakech',
    intro: 'À Marrakech, les usages TV concernent aussi bien les familles, les appartements modernes, les riads que les utilisateurs qui veulent une installation simple.',
    sections: [
      ['Maison, appartement ou riad', [
        'Marrakech présente des environnements variés : maison familiale, appartement récent, riad, résidence secondaire ou logement partagé. Cette diversité rend la compatibilité importante. Une Smart TV connectée, une box Android TV, un Firestick, un téléphone ou un PC peuvent fonctionner, mais chaque installation mérite d’être vérifiée avant l’abonnement.',
        'Stramify propose un essai 24h via WhatsApp pour tester la qualité réelle depuis votre connexion. Cette approche aide à éviter les mauvaises surprises, surtout lorsque le Wi-Fi traverse plusieurs murs, que la connexion est partagée ou que l’appareil est ancien.',
      ]],
      ['Installation accompagnée', [
        'Le support vous demande le type d’appareil, puis vous oriente vers les étapes adaptées. Sur Smart TV, la configuration peut être rapide. Sur Firestick ou Android TV, quelques réglages peuvent être nécessaires. Sur mobile ou PC, le support peut vous proposer un parcours plus simple selon votre niveau technique.',
        'Les contenus disponibles dépendent toujours du fournisseur, du pays, du forfait et des droits. Stramify garde un discours clair : l’objectif est de vous aider à configurer une solution TV en ligne et à choisir l’offre qui correspond à votre usage.',
      ]],
      ['Forfaits adaptés aux besoins', [
        'Pour un usage occasionnel dans un appartement ou un riad, Start peut convenir. Pour une famille ou un usage plus régulier, Plus ou Premium peut offrir plus de confort. La page tarifs explique les différences, et la FAQ répond aux questions avant contact.',
      ]],
    ],
  },
  '/tarifs': {
    h1: 'Tarifs Stramify',
    title: 'Tarifs Stramify | Abonnement TV Maroc',
    description: 'Comparez Stramify Start, Plus et Premium. Forfaits annuels, essai 24h via WhatsApp, activation rapide et assistance installation.',
    eyebrow: 'Tarifs',
    intro: 'Comparez les forfaits Stramify selon votre nombre d’appareils, votre connexion Internet et vos besoins d’assistance.',
    sections: [
      ['Comment comparer les offres', [
        'Le prix ne doit pas être le seul critère. Pour choisir un abonnement TV en ligne, vérifiez d’abord le nombre d’appareils, la qualité attendue et votre besoin de support. Une personne qui veut tester sur une seule Smart TV n’a pas forcément les mêmes besoins qu’un foyer qui utilise plusieurs écrans.',
        'Stramify Start convient pour démarrer simplement. Stramify Plus répond aux usages les plus demandés avec jusqu’à deux appareils et une qualité selon compatibilité. Stramify Premium privilégie l’accompagnement plus complet, la configuration personnalisée et le support prioritaire.',
      ]],
      ['Pourquoi demander l’essai 24h', [
        'L’essai 24h via WhatsApp est recommandé avant le choix final. Il permet de vérifier votre connexion, votre appareil et le confort d’utilisation. La qualité HD, Full HD ou 4K dépend de votre environnement technique. Cette vérification est plus honnête qu’une promesse générale qui ne tiendrait pas compte de votre installation réelle.',
        'Après le test, le support peut vous orienter vers le forfait le plus cohérent. Les contenus disponibles peuvent varier selon les offres et les droits. Cette transparence aide à choisir avec plus de confiance.',
      ]],
    ],
  },
  '/comparatif-offres': {
    h1: 'Comparatif des offres Stramify',
    title: 'Comparatif offres Stramify | Start Plus Premium',
    description: 'Comparez les offres Stramify Start, Plus et Premium pour choisir un abonnement TV en ligne adapté à votre usage au Maroc.',
    eyebrow: 'Comparatif',
    intro: 'Ce comparatif explique les différences entre les forfaits Stramify sans promesse exagérée.',
    sections: [
      ['Start, Plus ou Premium', [
        'Stramify Start est pensé pour les utilisateurs qui veulent une solution simple sur un appareil. Il permet de découvrir le service avec une activation rapide et un support d’installation. C’est un choix lisible pour un usage personnel ou une première configuration.',
        'Stramify Plus est le plus demandé, car il correspond à de nombreux foyers qui souhaitent plus de souplesse. Il peut convenir lorsque deux appareils sont concernés ou lorsque l’utilisateur souhaite une qualité plus élevée selon compatibilité. Premium s’adresse aux profils qui veulent une configuration plus personnalisée et un accompagnement prioritaire.',
      ]],
      ['Choisir selon votre usage réel', [
        'Votre connexion Internet, votre appareil et votre manière de regarder influencent beaucoup le résultat. Une Smart TV récente, une connexion stable et une installation propre donnent généralement une meilleure expérience. Le support WhatsApp peut vous aider à comparer avant de payer.',
        'Le comparatif doit rester pratique : nombre d’appareils, assistance, qualité selon compatibilité et accès 12 mois. Les contenus peuvent varier selon les offres disponibles et les droits de diffusion, ce qui doit être compris avant l’activation.',
      ]],
    ],
  },
};

const seoPagesAr = {
  '/abonnement-tv-maroc': {
    h1: 'اشتراك TV عبر الإنترنت في المغرب',
    title: 'اشتراك TV المغرب | Stramify تجربة 24 ساعة',
    description: 'اكتشف Stramify، حل مشاهدة عبر الإنترنت في المغرب مع تجربة 24 ساعة، تفعيل سريع، دعم WhatsApp وتوافق مع Smart TV وAndroid TV وFirestick والهاتف والكمبيوتر.',
    eyebrow: 'دليل المغرب',
    intro: 'يرافق Stramify المستخدمين في المغرب الذين يبحثون عن حل مشاهدة عبر الإنترنت واضح وسهل ومتوافق مع الأجهزة اليومية.',
    sections: [
      ['حل مناسب للمستخدمين في المغرب', [
        'اختيار اشتراك مشاهدة في المغرب يجب أن يكون واضحاً قبل التفعيل. لذلك يركز Stramify على تجربة 24 ساعة عبر WhatsApp، شرح بسيط للخطوات، ومساعدة في التثبيت حسب الجهاز الذي تستعمله في المنزل أو العمل.',
        'قد يشاهد المستخدم من Smart TV في الصالون، أو من Android TV، أو Firestick، أو الهاتف، أو الكمبيوتر. لهذا يجب أن تكون التجربة مرنة، مع توضيح أن المحتويات والقنوات قد تختلف حسب المورد والبلد والحقوق المتاحة والعرض المختار.',
      ]],
      ['التفعيل والدعم والتوافق', [
        'التفعيل عبر WhatsApp يساعد على تقليل الأخطاء التقنية. تخبر الدعم بنوع الجهاز، ثم تتوصل بتعليمات مناسبة وواضحة. هذه الطريقة مفيدة للعائلات والطلاب والمستخدمين الذين يريدون بدء التجربة بدون إعدادات معقدة.',
        'جودة HD أو Full HD أو 4K تعتمد على سرعة الإنترنت والجهاز والتوافق. لذلك ننصح بتجربة 24 ساعة قبل اختيار الباقة السنوية حتى تتحقق من الاستقرار وسهولة الاستعمال.',
      ]],
      ['اختيار الباقة المناسبة', [
        'الباقة المناسبة تعتمد على عدد الأجهزة وسرعة الاتصال وحاجتك للدعم. يمكن لمستخدم واحد اختيار Stramify Start، بينما قد تفضل العائلة Stramify Plus أو Stramify Premium. راجع صفحة الأسعار ثم تواصل عبر WhatsApp إذا احتجت نصيحة مباشرة.',
      ]],
    ],
  },
  '/iptv-maroc': {
    h1: 'IPTV المغرب: حل مشاهدة عبر الإنترنت مع دعم واضح',
    title: 'IPTV المغرب | Stramify حل مشاهدة عبر الإنترنت',
    description: 'Stramify يقدم حلاً منظماً للباحثين عن IPTV المغرب مع تجربة 24 ساعة، تفعيل عبر WhatsApp ومساعدة في التثبيت.',
    eyebrow: 'IPTV المغرب',
    intro: 'يستعمل كثير من المستخدمين عبارة IPTV المغرب عند البحث عن مشاهدة TV عبر الإنترنت. يفضل Stramify تقديم تجربة مهنية وشفافة تركز على التوافق والدعم.',
    sections: [
      ['فهم البحث عن IPTV المغرب', [
        'عندما يبحث المستخدم عن IPTV المغرب فهو غالباً يريد تشغيل خدمة TV عبر الإنترنت على Smart TV أو Android TV أو Firestick أو الهاتف أو الكمبيوتر. هذا البحث قد يعني مقارنة الأسعار، معرفة طريقة التثبيت، التأكد من الجودة، أو طلب تجربة قبل الاشتراك.',
        'يتعامل Stramify مع هذا الطلب بطريقة واضحة ومسؤولة. لا نقدم وعوداً مبالغاً فيها حول قنوات أو كتالوجات محددة، لأن المحتوى قد يتغير حسب المورد والبلد والحقوق والتوفر التقني.',
      ]],
      ['تجربة مبنية على المساعدة', [
        'الدعم عبر WhatsApp جزء أساسي من التجربة. تطلب تجربة 24 ساعة، ترسل نوع جهازك، ثم تتوصل بخطوات مبسطة. هذه الطريقة تساعد على تجنب أخطاء التثبيت وتوضح هل اتصالك وجهازك مناسبان أم لا.',
        'على Smart TV الحديثة يمكن أن تكون الخطوات سريعة. على Android TV أو Firestick قد تحتاج إلى بعض الإعدادات. أما على الهاتف أو الكمبيوتر فيوجهك الدعم حسب مستوى راحتك مع الخطوات التقنية.',
      ]],
      ['قارن قبل الاختيار', [
        'قبل اختيار الباقة، تحقق من عدد الأجهزة والجودة المطلوبة وحاجتك للمساعدة. صفحة الأسعار تشرح Stramify Start وStramify Plus وStramify Premium، وصفحة التثبيت تشرح الأجهزة الرئيسية، أما صفحة الأسئلة الشائعة فتجيب عن الأسئلة المتكررة.',
      ]],
    ],
  },
  '/iptv-4k-maroc': {
    h1: 'IPTV 4K المغرب: جودة HD وFull HD و4K حسب التوافق',
    title: 'IPTV 4K المغرب | جودة مشاهدة مع Stramify',
    description: 'معلومات حول جودة HD وFull HD و4K لحل مشاهدة عبر الإنترنت في المغرب متوافق مع Smart TV وAndroid TV وFirestick والكمبيوتر.',
    eyebrow: 'جودة الصورة',
    intro: 'جودة 4K تهم كثيراً من المستخدمين، لكنها تعتمد دائماً على الاتصال والجهاز والتطبيق المتوافق والتوفر التقني.',
    sections: [
      ['الجودة تعتمد على بيئة الاستعمال', [
        'قد يوفر حل المشاهدة عبر الإنترنت جودة جيدة، لكن النتيجة الفعلية ترتبط بسرعة الإنترنت والجهاز والتطبيق وطريقة الاتصال. تلفاز Smart TV حديث مع اتصال مستقر يعطي غالباً تجربة أفضل من جهاز قديم أو Wi-Fi ضعيف.',
        'لهذا يستعمل Stramify صياغة مسؤولة: جودة HD أو Full HD أو 4K حسب الاتصال والجهاز والتوافق. تجربة 24 ساعة عبر WhatsApp تساعدك على التحقق قبل الاشتراك السنوي.',
      ]],
      ['نصائح لتجربة أكثر استقراراً', [
        'استعمل اتصالاً سلكياً إذا كان ممكناً، أو ضع جهاز التوجيه قريباً من التلفاز، وتجنب التحميلات الثقيلة أثناء المشاهدة. هذه التفاصيل الصغيرة قد تحسن الاستقرار خصوصاً أثناء الأحداث الرياضية الكبرى.',
        'يمكن لدعم Stramify مساعدتك في مراجعة التطبيق والإعدادات وسلوك الجهاز. الهدف هو تجربة مريحة وواقعية، وليس تقديم وعود لا تراعي ظروف اتصالك.',
      ]],
      ['اختيار الباقة حسب الجودة', [
        'إذا كانت جودة الصورة أولوية لديك، قارن بين Stramify Plus وStramify Premium. القرار يعتمد أيضاً على عدد الأجهزة وحاجتك إلى إعداد مخصص. صفحة الأسعار والتثبيت تساعدك على الاختيار.',
      ]],
    ],
  },
  '/iptv-tanger': {
    h1: 'اشتراك TV عبر الإنترنت في طنجة',
    title: 'IPTV طنجة | Stramify اشتراك مشاهدة عبر الإنترنت',
    description: 'حل مشاهدة عبر الإنترنت في طنجة مع تجربة 24 ساعة عبر WhatsApp، تفعيل سريع ودعم Smart TV وAndroid TV وFirestick والهاتف والكمبيوتر.',
    eyebrow: 'طنجة',
    intro: 'في طنجة تختلف طريقة المشاهدة بين الشقق الحديثة والمنازل العائلية والمستخدمين المتنقلين. يساعدك Stramify على اختبار الخدمة بسهولة قبل الاختيار.',
    sections: [
      ['للمنازل والشقق في طنجة', [
        'طنجة مدينة متصلة، ويستعمل كثير من سكانها Smart TV وAndroid TV وFirestick للوصول إلى تجربة مشاهدة عبر الإنترنت. سواء كنت في شقة وسط المدينة أو منزل عائلي أو حي سكني جديد، فأنت تحتاج إلى حل واضح وسريع التثبيت.',
        'يوفر Stramify تجربة 24 ساعة عبر WhatsApp للتحقق من الاستقرار قبل اختيار الباقة. هذه الخطوة مفيدة لأن جودة الاتصال قد تختلف بين الألياف وADSL و4G وشبكات Wi-Fi المشتركة.',
      ]],
      ['دعم سريع وتثبيت موجه', [
        'قد يكون التثبيت بسيطاً على Smart TV، لكن بعض النماذج تحتاج خطوات مختلفة. على Android TV أو Firestick يجب أحياناً تجهيز التطبيق والتحقق من الاتصال وإدخال بيانات الوصول بشكل صحيح.',
        'يقدم Stramify إرشادات هادئة وواضحة بدون وعود مبالغ فيها. كما نوضح أن المحتويات قد تختلف حسب العرض والمورد والبلد والحقوق، حتى تختار وأنت تعرف ما الذي تختبره.',
      ]],
      ['مقارنة العروض من طنجة', [
        'للاستعمال على جهاز واحد قد تكفي باقة Stramify Start. إذا كان البيت يحتاج مرونة أكثر، يمكن أن تكون Plus أو Premium أنسب. راجع الأسعار ودليل التثبيت والأسئلة الشائعة قبل التواصل عبر WhatsApp.',
      ]],
    ],
  },
  '/iptv-casablanca': {
    h1: 'اشتراك TV عبر الإنترنت في الدار البيضاء',
    title: 'IPTV الدار البيضاء | Stramify TV عبر الإنترنت',
    description: 'اشتراك مشاهدة عبر الإنترنت في الدار البيضاء للعائلات والشقق والمستخدمين المتصلين مع تجربة 24 ساعة ودعم WhatsApp وتفعيل سريع.',
    eyebrow: 'الدار البيضاء',
    intro: 'في الدار البيضاء تكون الاستعمالات سريعة ومشتركة بين أفراد البيت. يساعد Stramify على اختيار إعداد مناسب وواضح.',
    sections: [
      ['حل مناسب للاستعمال الحضري', [
        'تجمع الدار البيضاء عائلات في شقق، شباباً عاملين، ومستخدمين يعتمدون على الألياف أو 4G أو Wi-Fi مشترك. لذلك يجب أن يكون حل المشاهدة عبر الإنترنت بسيطاً ومتوافقاً وسهل الاختبار.',
        'غالباً تكون Smart TV الشاشة الأساسية في الصالون، بينما يستعمل الهاتف أو الكمبيوتر كحل إضافي. يساعدك دعم Stramify في اختيار طريقة التثبيت حسب جهازك بدون تعقيد.',
      ]],
      ['العائلة والاتصال والتوافق', [
        'تؤثر سرعة الاتصال واستقراره كثيراً على التجربة. قد تكون الألياف ممتازة، لكن Wi-Fi مزدحم داخل عمارة قد يقلل الانسيابية. تجربة 24 ساعة تساعدك على اختبار الظروف الحقيقية داخل منزلك في الدار البيضاء.',
        'يحافظ Stramify على خطاب واضح ومسؤول. قد تختلف المحتويات والقنوات حسب العروض والموردين والحقوق. دورنا هو المساعدة في الإعداد والتوافق واختيار الباقة الأنسب.',
      ]],
      ['اختيار الباقة في الدار البيضاء', [
        'للاستعمال الفردي قد تكون Start مناسبة. لعائلة أو منزل يستعمل جهازين أحياناً، قد تكون Plus أكثر راحة. Premium موجه لمن يريد مرافقة أكثر تخصيصاً. صفحات الأسعار والتثبيت والأسئلة الشائعة توضح التفاصيل.',
      ]],
    ],
  },
  '/iptv-rabat': {
    h1: 'اشتراك TV عبر الإنترنت في الرباط',
    title: 'IPTV الرباط | Stramify اشتراك مشاهدة',
    description: 'حل مشاهدة عبر الإنترنت في الرباط مع دعم WhatsApp، تفعيل سريع، دليل تثبيت وتوافق مع Smart TV وAndroid TV وFirestick والكمبيوتر.',
    eyebrow: 'الرباط',
    intro: 'في الرباط يرافق Stramify الأسر التي تبحث عن تجربة مشاهدة مستقرة ومسؤولة وسهلة الإعداد.',
    sections: [
      ['ترفيه منزلي مستقر', [
        'يفضل كثير من سكان الرباط تجربة مشاهدة هادئة ومستقرة داخل المنزل. سواء كنت في شقة أو منزل عائلي أو سكن طالب، يبقى الهدف هو البدء بسرعة وفهم الباقة والحصول على مساعدة عند الحاجة.',
        'تجربة 24 ساعة تساعدك على اختبار التوافق مع Smart TV وAndroid TV وFirestick والهاتف أو الكمبيوتر. هذه الخطوة تمنع اختيار باقة قبل معرفة نتيجة الاتصال والجهاز في الواقع.',
      ]],
      ['المساعدة والإعداد', [
        'يوجهك دعم Stramify في الخطوات الأساسية: معرفة نوع الجهاز، تجهيز تطبيق متوافق، إدخال معلومات الوصول وضبط الإعدادات البسيطة. هذه الطريقة مناسبة للمستخدمين الذين لا يريدون خطوات تقنية معقدة.',
        'نبقى واضحين بخصوص المحتوى. القنوات والكتالوجات قد تختلف حسب المورد والبلد وحقوق البث. Stramify يقدم مرافقة منظمة وليس وعوداً مبالغاً فيها.',
      ]],
      ['عرض واضح للمستخدمين في الرباط', [
        'تعرض صفحة الأسعار ثلاث باقات سنوية: Stramify Start وStramify Plus وStramify Premium. الاختيار يعتمد على عدد الأجهزة والجودة المطلوبة وحاجتك للدعم. WhatsApp هو الطريق الأسرع للاستشارة.',
      ]],
    ],
  },
  '/iptv-marrakech': {
    h1: 'اشتراك TV عبر الإنترنت في مراكش',
    title: 'IPTV مراكش | Stramify TV عبر الإنترنت',
    description: 'اشتراك مشاهدة عبر الإنترنت في مراكش للمنازل والشقق والرياضات والعائلات مع تجربة 24 ساعة وتفعيل WhatsApp وتثبيت موجه.',
    eyebrow: 'مراكش',
    intro: 'في مراكش تشمل الاستعمالات العائلات والشقق والرياضات والمستخدمين الذين يريدون تثبيتاً بسيطاً وواضحاً.',
    sections: [
      ['منزل أو شقة أو رياض', [
        'تتميز مراكش ببيئات مختلفة: منزل عائلي، شقة حديثة، رياض، سكن ثانوي أو منزل مشترك. لذلك يصبح التوافق مهماً. يمكن أن يعمل الحل على Smart TV أو Android TV أو Firestick أو الهاتف أو الكمبيوتر، لكن الأفضل اختبار كل حالة قبل الاشتراك.',
        'يوفر Stramify تجربة 24 ساعة عبر WhatsApp لاختبار الجودة من اتصالك الحقيقي. هذا مهم عندما يمر Wi-Fi عبر عدة جدران أو يكون الاتصال مشتركاً أو الجهاز قديماً.',
      ]],
      ['تثبيت بمساعدة واضحة', [
        'يسألك الدعم عن نوع الجهاز ثم يوجهك إلى الخطوات المناسبة. على Smart TV قد تكون العملية سريعة، وعلى Firestick أو Android TV قد تحتاج إلى بعض الإعدادات، أما على الهاتف والكمبيوتر فيتم تبسيط الخطوات حسب الحاجة.',
        'المحتويات المتاحة تعتمد على المورد والبلد والباقة والحقوق. لهذا يقدم Stramify شرحاً واضحاً يساعدك على اختيار العرض المناسب دون مبالغة.',
      ]],
      ['باقات حسب الحاجة', [
        'للاستعمال الخفيف في شقة أو رياض قد تكفي Start. للعائلة أو الاستعمال المنتظم يمكن أن تكون Plus أو Premium أكثر راحة. صفحة الأسعار والأسئلة الشائعة تساعدانك قبل التواصل.',
      ]],
    ],
  },
  '/tarifs': {
    h1: 'أسعار Stramify',
    title: 'أسعار Stramify | اشتراك TV المغرب',
    description: 'قارن بين Stramify Start وPlus وPremium. باقات سنوية، تجربة 24 ساعة عبر WhatsApp، تفعيل سريع ومساعدة في التثبيت.',
    eyebrow: 'الأسعار',
    intro: 'قارن بين باقات Stramify حسب عدد الأجهزة، سرعة الاتصال واحتياجاتك في الاستعمال والدعم.',
    sections: [
      ['كيف تقارن بين العروض', [
        'لا يجب أن يكون السعر هو المعيار الوحيد. قبل اختيار اشتراك مشاهدة عبر الإنترنت، راجع عدد الأجهزة والجودة المطلوبة وحاجتك للدعم. مستخدم يريد جهازاً واحداً لا يملك نفس احتياجات عائلة تستعمل أكثر من شاشة.',
        'Stramify Start مناسب للبداية. Stramify Plus هو الأكثر طلباً لأنه يوفر مرونة أكبر حسب التوافق. Stramify Premium يركز على تجربة أكثر اكتمالاً وإعداد مخصص ودعم أولوية.',
      ]],
      ['لماذا تطلب تجربة 24 ساعة', [
        'تجربة 24 ساعة عبر WhatsApp تساعد على اختبار الاتصال والجهاز وسهولة الاستعمال قبل الاختيار النهائي. جودة HD أو Full HD أو 4K تعتمد على الظروف التقنية لديك.',
        'بعد التجربة يمكن للدعم اقتراح الباقة الأنسب. المحتويات المتاحة قد تختلف حسب العروض والحقوق، والوضوح في هذه النقطة يساعدك على اتخاذ قرار بثقة.',
      ]],
    ],
  },
  '/comparatif-offres': {
    h1: 'مقارنة عروض Stramify',
    title: 'مقارنة عروض Stramify | Start Plus Premium',
    description: 'قارن بين عروض Stramify Start وPlus وPremium لاختيار اشتراك مشاهدة مناسب لاستعمالك في المغرب.',
    eyebrow: 'مقارنة',
    intro: 'هذه الصفحة تشرح الفرق بين باقات Stramify بطريقة عملية وواضحة.',
    sections: [
      ['Start أو Plus أو Premium', [
        'Stramify Start مناسب لمن يريد حلاً بسيطاً على جهاز واحد مع تفعيل سريع ودعم في التثبيت. إنه اختيار واضح للاستعمال الشخصي أو أول تجربة.',
        'Stramify Plus هو الأكثر طلباً لأنه يناسب كثيراً من الأسر التي تريد مرونة أكبر حتى جهازين وجودة حسب التوافق. أما Stramify Premium فهو للمستخدم الذي يريد مرافقة مخصصة ودعماً أولوياً.',
      ]],
      ['اختر حسب استعمالك الحقيقي', [
        'سرعة الإنترنت ونوع الجهاز وطريقة المشاهدة تؤثر كثيراً على النتيجة. Smart TV حديثة واتصال مستقر وإعداد صحيح تعطي غالباً تجربة أفضل. لذلك يساعدك الدعم عبر WhatsApp على المقارنة قبل الدفع.',
        'المقارنة العملية تعتمد على عدد الأجهزة، المساعدة، الجودة حسب التوافق ومدة الوصول 12 شهراً. قد تختلف المحتويات حسب العروض والحقوق المتاحة، ويجب فهم ذلك قبل التفعيل.',
      ]],
    ],
  },
};

const legalPages = {
  '/politique-de-confidentialite': {
    h1: 'Politique de confidentialité',
    title: 'Politique de confidentialité | Stramify',
    description: 'Politique de confidentialité Stramify.',
    eyebrow: 'Confidentialité',
    intro: 'Cette page présente les principes généraux de confidentialité appliqués par Stramify.',
    sections: [['Données de contact', ['Les informations transmises via WhatsApp servent uniquement à répondre aux demandes d’essai, d’activation, d’installation et de support. Stramify recommande de ne pas envoyer d’informations sensibles inutiles.']]],
  },
  '/conditions-utilisation': {
    h1: 'Conditions d’utilisation',
    title: 'Conditions d’utilisation | Stramify',
    description: 'Conditions d’utilisation Stramify.',
    eyebrow: 'Conditions',
    intro: 'En utilisant Stramify, le client accepte de vérifier la compatibilité de son appareil et l’usage légal du service dans son pays.',
    sections: [['Usage responsable', ['Les contenus et chaînes peuvent varier selon le fournisseur, le pays et les droits de diffusion. L’utilisateur doit respecter les règles applicables dans son territoire.']]],
  },
  '/politique-remboursement': {
    h1: 'Politique de remboursement',
    title: 'Politique de remboursement | Stramify',
    description: 'Politique de remboursement Stramify.',
    eyebrow: 'Remboursement',
    intro: 'Stramify recommande l’essai 24h afin de vérifier la compatibilité avant tout choix de forfait.',
    sections: [['Avant l’abonnement', ['Le support aide à tester la qualité, la connexion et l’installation. Les demandes particulières sont traitées au cas par cas via WhatsApp.']]],
  },
};

const legalPagesAr = {
  '/politique-de-confidentialite': {
    h1: 'سياسة الخصوصية',
    title: 'سياسة الخصوصية | Stramify',
    description: 'سياسة الخصوصية الخاصة بـ Stramify.',
    eyebrow: 'الخصوصية',
    intro: 'توضح هذه الصفحة المبادئ العامة التي يعتمدها Stramify لحماية بيانات التواصل.',
    sections: [['بيانات التواصل', ['تستعمل المعلومات المرسلة عبر WhatsApp فقط للرد على طلبات التجربة والتفعيل والتثبيت والدعم. ننصح بعدم إرسال معلومات حساسة غير ضرورية.']]],
  },
  '/conditions-utilisation': {
    h1: 'شروط الاستخدام',
    title: 'شروط الاستخدام | Stramify',
    description: 'شروط استخدام Stramify.',
    eyebrow: 'الشروط',
    intro: 'باستخدام Stramify، يوافق العميل على التحقق من توافق جهازه واستعمال الخدمة بشكل قانوني في بلده.',
    sections: [['استعمال مسؤول', ['قد تختلف المحتويات والقنوات حسب المورد والبلد وحقوق البث. يجب على المستخدم احترام القواعد المطبقة في منطقته.']]],
  },
  '/politique-remboursement': {
    h1: 'سياسة الاسترجاع',
    title: 'سياسة الاسترجاع | Stramify',
    description: 'سياسة الاسترجاع الخاصة بـ Stramify.',
    eyebrow: 'الاسترجاع',
    intro: 'ينصح Stramify بتجربة 24 ساعة للتحقق من التوافق قبل اختيار أي باقة.',
    sections: [['قبل الاشتراك', ['يساعدك الدعم على اختبار الجودة والاتصال والتثبيت. تتم معالجة الطلبات الخاصة حالة بحالة عبر WhatsApp.']]],
  },
};

function getRoute(path, lang) {
  const pages = lang === 'ar' ? seoPagesAr : seoPages;
  const legal = lang === 'ar' ? legalPagesAr : legalPages;
  const routeMeta = {
    fr: {
      installation: {
        title: 'Guide d’installation Stramify',
        description: 'Guide d’installation Stramify sur Smart TV, Android TV, Firestick, téléphone Android, iPhone, iPad et PC.',
      },
      faq: {
        title: 'FAQ Stramify | Questions fréquentes',
        description: 'Réponses aux questions fréquentes Stramify : essai 24h, activation, appareils compatibles, paiement, installation et support.',
      },
      contact: {
        title: 'Contact Stramify | WhatsApp support',
        description: 'Contactez Stramify sur WhatsApp pour l’essai 24h, l’activation, le choix du forfait et l’installation.',
      },
    },
    ar: {
      installation: {
        title: 'دليل تثبيت Stramify',
        description: 'دليل تثبيت Stramify على Smart TV وAndroid TV وFirestick وهاتف Android وiPhone وiPad والكمبيوتر.',
      },
      faq: {
        title: 'الأسئلة الشائعة | Stramify',
        description: 'إجابات حول تجربة 24 ساعة، التفعيل، الأجهزة المتوافقة، الدفع، التثبيت والدعم عبر WhatsApp.',
      },
      contact: {
        title: 'اتصل بنا | دعم Stramify عبر WhatsApp',
        description: 'تواصل مع Stramify عبر WhatsApp للتجربة، التفعيل، اختيار الباقة والتثبيت.',
      },
    },
  }[lang];

  if (path === '/') return { type: 'home' };
  if (path === '/tarifs') return { type: 'pricing', page: pages['/tarifs'] };
  if (path === '/installation') return { type: 'installation', ...routeMeta.installation };
  if (path === '/faq') return { type: 'faq', ...routeMeta.faq };
  if (path === '/contact') return { type: 'contact', ...routeMeta.contact };
  if (pages[path]) return { type: 'seo', page: pages[path] };
  if (legal[path]) return { type: 'seo', page: legal[path] };
  return { type: 'seo', page: pages['/abonnement-tv-maroc'] };
}

function App() {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'fr';
    return localStorage.getItem('stramify-lang') === 'ar' ? 'ar' : 'fr';
  });
  const [path, setPath] = useState(() => window.location.pathname);
  const t = translations[lang];
  const route = useMemo(() => getRoute(path, lang), [path, lang]);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    document.documentElement.lang = t.locale;
    document.documentElement.dir = t.dir;
    document.body.dir = t.dir;
    localStorage.setItem('stramify-lang', lang);

    if (route.type === 'home') {
      updateSeo({ title: t.seoTitle, description: t.seoDescription, path: '/', ogLocale: t.ogLocale, faqs: faqItems[lang].slice(0, 6) });
    } else if (route.type === 'installation') {
      updateSeo({ title: route.title, description: route.description, path, ogLocale: t.ogLocale, breadcrumbs: [{ name: t.nav.home, path: '/' }, { name: t.nav.installation, path }] });
    } else if (route.type === 'faq') {
      updateSeo({ title: route.title, description: route.description, path, ogLocale: t.ogLocale, faqs: faqItems[lang], breadcrumbs: [{ name: t.nav.home, path: '/' }, { name: t.nav.faq, path }] });
    } else if (route.type === 'contact') {
      updateSeo({ title: route.title, description: route.description, path, ogLocale: t.ogLocale, breadcrumbs: [{ name: t.nav.home, path: '/' }, { name: t.nav.contact, path }] });
    } else if (route.type === 'pricing') {
      updateSeo({ title: route.page.title, description: route.page.description, path, ogLocale: t.ogLocale, breadcrumbs: [{ name: t.nav.home, path: '/' }, { name: t.nav.pricing, path }] });
    } else {
      updateSeo({ title: route.page.title, description: route.page.description, path, ogLocale: t.ogLocale, breadcrumbs: [{ name: t.nav.home, path: '/' }, { name: route.page.h1, path }] });
    }
  }, [lang, path, route, t]);

  const content = useMemo(() => {
    if (route.type === 'home') return <HomePage lang={lang} t={t} />;
    if (route.type === 'installation') return <InstallationPage lang={lang} t={t} />;
    if (route.type === 'faq') return <FaqPage lang={lang} t={t} />;
    if (route.type === 'contact') return <ContactPage lang={lang} t={t} />;
    if (route.type === 'pricing') return <TarifsPage lang={lang} t={t} page={route.page} />;
    return <SeoPage page={route.page} lang={lang} t={t} />;
  }, [lang, route, t]);

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <main dir={t.dir}>{content}</main>
      <Footer t={t} />
      <FloatingWhatsApp t={t} />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
