# Stramify

Landing page React + Vite + Tailwind CSS pour Stramify, une solution TV en ligne au Maroc avec essai 24h via WhatsApp, activation rapide et assistance d’installation.

## Installation

```bash
npm install
```

## Lancer le projet en local

```bash
npm run dev
```

Vite affichera une URL locale, par exemple :

```bash
http://127.0.0.1:5173/
```

## Build de production

```bash
npm run build
```

Le dossier de sortie est `dist`.

## Déployer sur Vercel

1. Poussez le projet sur GitHub.
2. Connectez-vous à Vercel.
3. Cliquez sur `Add New Project`.
4. Importez le dépôt GitHub du projet.
5. Vérifiez la configuration :
   - Framework Preset : `Vite`
   - Build Command : `npm run build`
   - Output Directory : `dist`
   - Install Command : `npm install`
6. Cliquez sur `Deploy`.

## Personnalisation

Le numéro WhatsApp est défini dans `src/main.jsx` :

```js
const WHATSAPP_NUMBER = "212699904956";
```

Les contenus principaux sont organisés dans des tableaux d’objets pour faciliter les modifications : navigation, fonctionnalités, appareils, tarifs, avantages et FAQ.
