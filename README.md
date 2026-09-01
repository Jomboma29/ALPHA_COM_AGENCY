# Site vitrine — Alpha Communication Agency

## Comment voir le site
1. Décompresse le dossier `site`.
2. Ouvre `index.html` directement dans ton navigateur (double-clic).
   - Pour un rendu optimal (polices, animations), tu peux aussi le lancer via un petit serveur local, par exemple avec `python3 -m http.server` depuis le dossier `site`, puis ouvrir `http://localhost:8000`.

## À personnaliser avant mise en ligne
- **Contact** : dans `js/script.js`, tout en bas, remplace le numéro WhatsApp et l'adresse e-mail par les vôtres.
- **Réseaux sociaux** : dans `index.html`, section `<footer>`, remplace les liens `#` par vos vrais profils Instagram / TikTok / WhatsApp.
- **Textes "À propos"** : section `#about` dans `index.html` — adapte le texte de présentation des 3 fondateurs si besoin.

## Structure
```
site/
  index.html        → structure de la page
  css/style.css      → tous les styles et animations
  js/data.js         → liste des catégories du portfolio (générée automatiquement)
  js/script.js        → logique : filtres, lightbox, animations
  assets/img/<slug>/     → visuels par catégorie
  assets/video/<slug>/   → vidéos par catégorie (compressées pour le web)
  assets/poster/<slug>/  → miniatures des vidéos
```

## Ajouter une nouvelle réalisation
1. Crée un sous-dossier dans `assets/img/` ou `assets/video/` avec un nom court (ex: `nouveau-client`).
2. Dépose les fichiers dedans.
3. Ajoute une entrée dans `js/data.js` en suivant le même format que les autres (slug, title, sub, type: "event" ou "brand", images, videos).

## Prochaine étape
Une section "Logos & filtres Snapchat" est prévue — envoie ces fichiers quand ils sont prêts et je les intègre au même système de classement.
