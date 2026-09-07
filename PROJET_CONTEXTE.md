# CONTEXTE DU PROJET — Alpha Communication Agency (à lire en premier dans la nouvelle conversation)

Ce fichier résume tout ce qu'il faut savoir pour reprendre le travail sur ce site sans perdre le fil.
Colle ce zip dans la nouvelle conversation et demande à Claude de lire ce fichier avant de continuer.

## Qui est le client
Edson, à Douala, Cameroun. Il lance une agence de communication, **Alpha Communication Agency**,
avec 2 amis. Il communique en français, n'aime pas les tirets (—) dans les phrases, préfère des
réponses directes sans détours.

## Le projet
Un site vitrine one-page en HTML/CSS/JS pur (pas de framework), qui présente l'agence, ses services,
et un portfolio filtrable de leurs réalisations passées (affiches, vidéos, logos, filtres Snapchat).

## Où en est le site
Tout le dossier `site/` dans ce zip est la version la plus à jour. Il fonctionne déjà, il faut
continuer à l'enrichir (le client a encore des logos à envoyer) et à ajuster selon ses retours.

### Structure des fichiers
```
site/
  index.html              → structure de la page (nav, hero, services, portfolio, about, contact, footer, lightbox)
  css/style.css           → tous les styles et animations
  js/data.js              → les catégories du portfolio (généré, voir plus bas)
  js/script.js            → logique : rendu du portfolio, filtres, lightbox avec zoom/swipe, animations
  assets/img/<slug>/      → visuels par catégorie, en .jpg optimisés web
  assets/video/<slug>/    → vidéos par catégorie, compressées (854px large, crf 27)
  assets/poster/<slug>/   → miniatures extraites des vidéos
  README.md               → notice technique pour le client (non-développeur)
```

## Identité visuelle (déjà appliquée, ne pas revenir en arrière sans demande explicite)
Le client a fourni son vrai logo (image d'un alpha stylisé en dégradé cyan/or sur fond noir avec
une flèche montante). Toute la direction artistique a été recalée dessus :
- **Couleurs** : noir profond `#07080A`, blanc cassé `#F5F6F5`, cyan `#22D6C4` / `#6FF0DF`, or `#F2A93B` / `#FFC873`. Plus de bordeaux (ancienne palette abandonnée).
- **Typo** : Poppins (display, gras/800) + Inter (texte courant). Plus de police serif élégante (Fraunces/Oswald abandonnées).
- **Logo** intégré dans la nav et le footer (`assets/img/brand/alpha-logo-nav.png` et `alpha-logo-full.jpg`).
- **Hero** : glyphe "α" géant en filigrane dégradé cyan/or en fond, faisceaux animés recolorés, image du client (clé dorée + puzzle) en arrière-plan avec voile sombre (`assets/img/hero/hero-key.jpg`).

## Règle stricte : jamais de tiret cadratin (—)
Le client l'a explicitement demandé. Aucun texte visible du site (titres, sous-titres `sub` dans
data.js, paragraphes) ne doit contenir de "—". Utiliser des virgules, deux-points, ou reformuler.
Cette règle s'applique aussi à mes réponses en français dans le chat.

## Contacts et réseaux (déjà intégrés, vraies infos)
- WhatsApp : +237 6 72 09 32 43 → lien `https://wa.me/237672093243`
- E-mail : alphacommunicationagency@gmail.com
- Facebook : https://www.facebook.com/profile.php?id=61593520453728&mibextid=wwXIfr
- Instagram : https://www.instagram.com/alpha_communication_agency?igsi=YjE4d2V6NHF0czR0&utm_source=qr
- TikTok : https://www.tiktok.com/@alpha_com_agency?_r=1&_t=ZN-99BlPpJF6zW
- LinkedIn : volontairement PAS intégré pour l'instant (demande explicite du client, "laisse d'abord LinkedIn")
Ces liens sont dans `index.html` (footer) et `js/script.js` (boutons WhatsApp/e-mail de la section contact).

## Comment fonctionne le portfolio (`js/data.js`)
Chaque catégorie est un objet :
```json
{
  "slug": "nom-court-unique",
  "title": "Titre affiché",
  "sub": "Sous-titre affiché (jamais de tiret cadratin)",
  "type": "event" | "brand" | "logo" | "snap",
  "images": ["fichier1.jpg", "fichier2.jpg"],
  "videos": ["fichier.mp4"]
}
```
- `type: "event"` = événements (soirées, concours étudiants, campagnes campus). Tag cyan.
- `type: "brand"` = marques et clients (produits, services, publicités). Tag or.
- `type: "logo"` = propositions de logo pour un client (peut contenir plusieurs variantes/planches). Tag blanc. Affichage en mode "contain" (jamais rogné).
- `type: "snap"` = filtres Snapchat, regroupés dans UNE seule fiche "Filtres Snapchat" (slug `filtres-snapchat`) contenant toutes les images. Tag jaune. Affichage en mode "contain".
- Le fichier correspondant doit exister physiquement dans `assets/img/<slug>/` (et `assets/video/<slug>/` s'il y a des vidéos).
- Les catégories `logo` et `snap` utilisent `object-fit: contain` (jamais de recadrage) car le client
  a explicitement demandé de voir l'intégralité du visuel dans la grille, pas seulement au clic.

## Comment ajouter du nouveau contenu (le client va encore envoyer des logos)
1. Identifier le client/événement concerné à partir de l'image envoyée.
2. Si plusieurs propositions/variantes pour un même client : les regrouper dans UNE SEULE entrée
   (un seul slug), toutes les images dans `images: []`. Voir l'exemple `manuea-logo` (6 variantes)
   ou `new-wave-street-culture` (4 variantes) dans data.js.
3. Optimiser l'image (max 1200px de large, JPEG qualité ~85-90) et la déposer dans
   `assets/img/<slug>/nom-fichier.jpg`.
4. Ajouter l'entrée dans `js/data.js` (garder le tableau trié par slug si possible, sinon peu importe).
5. Vérifier avec `node --check js/data.js` que le JSON est valide.
6. Ne jamais utiliser de tiret cadratin dans `title` ou `sub`.

## Fonctionnalités déjà en place à ne pas perdre
- Filtres du portfolio : Tout / Événements / Marques & Clients / Vidéo / Logos / Filtres Snapchat.
- Les cartes services (Design graphique, Vidéo, Réseaux sociaux) ont un aperçu visuel en bas à
  droite et sont cliquables (elles filtrent et scrollent vers le portfolio).
- Lightbox (`#lightbox`) : navigation par flèches ET par swipe tactile ET zoom à la molette/pincement
  sur ordinateur (zoom centré sur le curseur, pan en cliquant-glissant une fois zoomé, double-clic
  pour zoomer/dézoomer rapidement).
- Toutes les images/vidéos du portfolio sont déjà compressées pour le web, ne pas re-uploader les
  fichiers originaux tels quels sans compression.

## Ce qui reste en attente (annoncé par le client, pas encore reçu)
- D'autres logos à trier et ajouter (le client a dit "j'ai atteint la limite de pièces jointes",
  c'est pour ça qu'il envoie ce zip dans une nouvelle conversation).
- Possible ajout futur : contenu supplémentaire pour la section "Filtres Snapchat".

## Ce zip fait partie d'un lot de 4 fichiers
À cause de la taille, le projet a été envoyé en 4 zips séparés :
1. `alpha-site-1-code-et-images.zip` (celui-ci) : tout le code + toutes les images + les miniatures vidéo
2. `alpha-site-2-videos-partie1.zip`
3. `alpha-site-2-videos-partie2.zip`
4. `alpha-site-2-videos-partie3.zip`

Pour reconstituer le site complet :
1. Extraire ce zip-ci en premier, ça donne un dossier `site_code_images/` avec `index.html`, `css/`,
   `js/`, `assets/img/`, `assets/poster/`.
2. Renommer ce dossier en `site/` (ou l'utiliser tel quel en adaptant les chemins).
3. Extraire les 3 zips vidéo, chacun contient un dossier `assets/video/<slug>/...`.
4. Fusionner le contenu de leurs dossiers `assets/video/` dans `site/assets/video/` (créer ce
   dossier s'il n'existe pas). Les vidéos sont déjà réparties par catégorie (slug), il suffit de
   copier chaque sous-dossier au bon endroit.
5. Le site fonctionne aussi sans les vidéos remises en place (les images et logos s'affichent
   normalement), donc si l'utilisateur n'a pas encore renvoyé les 3 zips vidéo, on peut travailler
   sur le reste en attendant.

## Pour tester le rendu
```
cd site
python3 -m http.server 8000
```
puis ouvrir `http://localhost:8000` dans un navigateur (les animations et la police Google Fonts
ont besoin d'une connexion internet côté utilisateur final, mais pas côté serveur local).

## Style de travail avec ce client
- Toujours faire les modifications une par une "pas à pas" quand il le demande, sans renvoyer de
  zip à chaque étape : il valide verbalement, puis demande le rendu final groupé à la fin.
- Il n'est pas développeur : donner des instructions simples pour ouvrir/tester le site (pas de
  jargon technique superflu).
- Toujours vérifier `node --check` sur les fichiers JS après modification.
