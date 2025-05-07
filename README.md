# Portfolio John Doe - CV en ligne avec React.js et Tailwind CSS

Ce projet est un site portfolio pour un développeur web full stack nommé "John Doe". Le site a été développé avec React.js et Tailwind CSS dans le cadre d'un exercice de formation du Centre Européen de Formation (CEF).

## Prérequis :

Pour faire fonctionner ce projet, vous aurez besoin de :

- [Node.js](https://nodejs.org/) (version 14.x ou supérieure)
- [npm](https://www.npmjs.com/) (version 6.x ou supérieure) ou [yarn](https://yarnpkg.com/) (version 1.22.x ou supérieure)
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Éditeur de code (VSCode recommandé)

## Installation :

Suivez ces étapes pour installer et exécuter le projet sur votre machine locale :

1. **Clonez ce dépôt sur votre machine locale :**
   ```bash
   git clone https://github.com/votre-username/portfolio-john-doe.git
   cd portfolio-john-doe
   ```

2. **Installez les dépendances :**
   ```bash
   # Avec npm
   npm install

   # Ou avec yarn
   yarn install
   ```

3. **Générez les fichiers CSS de Tailwind :**
   ```bash
   # Avec npm
   npm run build:css

   # Ou avec yarn
   yarn build:css
   ```

## Lancement du projet

Pour démarrer l'application en mode développement :

```bash
# Avec npm
npm start

# Ou avec yarn
yarn start
```

Ouvrez ensuite votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000) pour voir l'application.

## Technologies utilisées

- **React.js** - Bibliothèque JavaScript pour construire l'interface utilisateur
- **React Router** - Gestion du routage dans l'application
- **Tailwind CSS** - Framework CSS utilitaire
- **React Icons** - Bibliothèque d'icônes pour React
- **React Helmet** - Gestion des métadonnées pour le SEO
- **API GitHub** - Pour afficher les informations de profil GitHub

## 📁 Structure du projet

```
portfolio-john-doe/
├── public/                   # Ressources statiques
│   ├── images/               # Images du site
│   ├── favicon.ico           # Favicon du site
│   └── index.html            # Fichier HTML principal
├── src/
│   ├── components/           # Composants réutilisables
│   │   ├── Footer.js         # Pied de page
│   │   ├── GitHubProfile.js  # Composant d'affichage du profil GitHub
│   │   └── Header.js         # En-tête et barre de navigation
│   ├── pages/                # Pages de l'application
│   │   ├── Blog.js           # Page du blog
│   │   ├── Contact.js        # Page de contact
│   │   ├── Home.js           # Page d'accueil
│   │   ├── Legal.js          # Page des mentions légales
│   │   ├── Portfolio.js      # Page des réalisations
│   │   └── Services.js       # Page des services
│   ├── App.js                # Composant principal
│   ├── index.js              # Point d'entrée
│   ├── index.css             # CSS compilé
│   └── tailwind.css          # Directives Tailwind
├── tailwind.config.js        # Configuration de Tailwind CSS
├── postcss.config.js         # Configuration de PostCSS
├── package.json              # Dépendances et scripts
└── README.md                 # Documentation du projet
```

##  Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter :

- `npm start` ou `yarn start` - Lance l'application en mode développement
- `npm run build` ou `yarn build` - Compile l'application pour la production
- `npm run build:css` ou `yarn build:css` - Génère les fichiers CSS de Tailwind
- `npm run test` ou `yarn test` - Lance les tests
- `npm run eject` ou `yarn eject` - Éjecte la configuration (attention, irréversible)


##  Validation du code

Pour valider votre code HTML et CSS, utilisez les outils du W3C :
- [Validateur HTML](https://validator.w3.org/)
- [Validateur CSS](https://jigsaw.w3.org/css-validator/)

Les captures d'écran des résultats de validation sont disponibles dans le dossier `public/validation-screenshots`.


## 📄 Licence

Ce projet est réalisé dans le cadre d'une formation et ne peut pas être utilisé à des fins commerciales sans autorisation préalable.

## Crédits

- Images : [Pixabay](https://pixabay.com/)
- Icônes : [React Icons](https://react-icons.github.io/react-icons/)
- Police : [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans) (Google Fonts)
- Inspiration et maquettes : Centre Européen de Formation



## Lien vers le site : 
https://nssh5r-5173.csb.app/