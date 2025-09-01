# ETS Gérard - Site Web Plombier

Site web moderne et responsive pour ETS Gérard, entreprise de plomberie à Paris. Recréé en HTML/CSS/JavaScript avec GSAP pour des animations fluides et performantes.

## 🚀 Fonctionnalités

### Design & UX
- **Design moderne** avec dégradés et effets visuels
- **Responsive design** adapté mobile, tablette et desktop
- **Animations fluides** avec GSAP et ScrollTrigger
- **Navigation smooth** avec scroll progressif
- **Effets de parallaxe** sur la section hero

### Sections du site
- **Hero Section** : Présentation principale avec CTA
- **Services** : 6 services principaux avec animations
- **Pourquoi nous choisir** : Avantages de l'entreprise
- **À propos** : Histoire et statistiques
- **Tarifs** : 3 formules tarifaires
- **Zone d'intervention** : Paris et banlieue
- **Témoignages** : Avis clients
- **FAQ** : Questions fréquentes en accordéon
- **Contact** : Formulaire et informations

### Animations GSAP
- **Animations d'entrée** pour chaque section
- **Compteurs animés** pour les statistiques
- **Hover effects** sur les cartes et boutons
- **Scroll animations** déclenchées au scroll
- **Parallaxe** sur l'arrière-plan du hero
- **Barre de progression** en haut de page

### Fonctionnalités interactives
- **Menu mobile** avec animation hamburger
- **FAQ accordéon** avec animations GSAP
- **Validation de formulaire** avec feedback visuel
- **Smooth scroll** pour la navigation
- **Lazy loading** pour les images
- **Appel téléphonique** direct

## 📁 Structure des fichiers

```
ETS GERARD/
├── index.html          # Page principale
├── css/
│   └── style.css       # Styles CSS complets
├── js/
│   └── main.js         # JavaScript avec GSAP
└── README.md           # Documentation
```

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec variables CSS
- **JavaScript ES6+** : Fonctionnalités interactives
- **GSAP 3.12.5** : Animations professionnelles
- **ScrollTrigger** : Animations au scroll
- **Lucide Icons** : Icônes modernes
- **Google Fonts** : Police Poppins

## 🎨 Design System

### Couleurs
- **Primaire** : #3b82f6 (Bleu)
- **Secondaire** : #8b5cf6 (Violet)
- **Succès** : #10b981 (Vert)
- **Avertissement** : #f59e0b (Orange)
- **Danger** : #ef4444 (Rouge)

### Typographie
- **Police** : Poppins (Google Fonts)
- **Tailles** : 300, 400, 500, 600, 700, 800
- **Hiérarchie** : Titres, sous-titres, corps de texte

### Composants
- **Boutons** : Primary, Outline, White variants
- **Cartes** : Services, Témoignages, Tarifs
- **Formulaires** : Inputs, selects, textarea
- **Navigation** : Header fixe avec menu mobile

## 🚀 Installation et utilisation

1. **Télécharger** tous les fichiers
2. **Ouvrir** `index.html` dans un navigateur
3. **Ou** servir avec un serveur local :
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node.js
   npx serve .
   ```

## 📱 Responsive Design

### Breakpoints
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

### Adaptations
- **Menu hamburger** sur mobile
- **Grilles flexibles** qui s'adaptent
- **Tailles de police** responsives
- **Espacements** optimisés par écran

## ⚡ Performance

### Optimisations
- **GSAP** pour des animations performantes
- **Intersection Observer** pour le lazy loading
- **CSS variables** pour la réutilisabilité
- **Minification** recommandée pour la production

### Métriques
- **Temps de chargement** : < 3s
- **Animations** : 60fps
- **SEO** : Structure sémantique optimisée

## 🎯 Animations GSAP

### Types d'animations
1. **Fade In** : Apparition progressive
2. **Slide In** : Glissement depuis les côtés
3. **Scale In** : Agrandissement progressif
4. **Parallaxe** : Effet de profondeur
5. **Hover Effects** : Interactions au survol

### Triggers
- **ScrollTrigger** : Animations au scroll
- **Mouse Events** : Hover, click
- **Timeline** : Séquences d'animations

## 📞 Fonctionnalités de contact

### Formulaire de devis
- **Validation** en temps réel
- **Feedback visuel** pour les erreurs
- **Animation de succès** à l'envoi
- **Champs requis** : Nom, Email, Téléphone

### Appel direct
- **Bouton d'appel** : `tel:+33123456789`
- **Numéro visible** dans le header
- **Accessibilité** mobile optimisée

## 🔧 Personnalisation

### Modifier les couleurs
```css
:root {
    --primary-color: #votre-couleur;
    --secondary-color: #votre-couleur;
}
```

### Ajouter des sections
1. **HTML** : Ajouter la structure
2. **CSS** : Styliser la section
3. **JS** : Ajouter les animations GSAP

### Modifier les animations
```javascript
// Exemple d'animation personnalisée
gsap.fromTo('.votre-element', 
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8 }
);
```

## 📈 SEO et Accessibilité

### SEO
- **Meta tags** optimisés
- **Structure sémantique** HTML5
- **Images** avec alt text
- **Titres** hiérarchisés

### Accessibilité
- **Contraste** suffisant
- **Navigation** au clavier
- **Screen readers** compatibles
- **Focus** visible

## 🐛 Dépannage

### Problèmes courants
1. **GSAP non chargé** : Vérifier les CDN
2. **Animations lentes** : Vérifier la performance
3. **Menu mobile** : Vérifier les événements
4. **Formulaire** : Vérifier la validation

### Console
- **Erreurs** affichées dans la console
- **Performance** mesurée automatiquement
- **Debug** mode disponible

## 📝 Licence

Ce projet est créé pour ETS Gérard. Tous droits réservés.

## 🤝 Support

Pour toute question ou modification :
- **Email** : contact@ets-gerard.fr
- **Téléphone** : 01 23 45 67 89

---

**Développé avec ❤️ pour ETS Gérard**
