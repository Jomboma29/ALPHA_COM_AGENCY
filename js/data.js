const CATEGORIES = [
  {
    "slug": "gracevision",
    "title": "Gracevision",
    "sub": "Cabinet d'optique médical",
    "type": "brand",
    "images": [
      "IMG_6764.jpg"
    ],
    "videos": []
  },
  {
    "slug": "global-services",
    "title": "Global Services",
    "sub": "Casque DOQAUS Focus.5",
    "type": "brand",
    "images": [
      "IMG_7394.jpg"
    ],
    "videos": []
  },
  {
    "slug": "horizon-feminin",
    "title": "Horizon Féminin",
    "sub": "Ubuntu Golden Gala 2K25",
    "type": "event",
    "images": [
      "IMG_0453.jpg",
      "IMG_0552.jpg",
      "IMG_0558.jpg",
      "IMG_6417.jpg"
    ],
    "videos": []
  },
  {
    "slug": "faire-part-ollo-ollo",
    "title": "Faire-part, Famille OLLO OLLO",
    "sub": "Faire-part et programme, culte de commémoration des disparus",
    "type": "event",
    "images": [
      "faire-part-ollo-ollo-01.jpg",
      "faire-part-ollo-ollo-02.jpg"
    ],
    "videos": []
  },
  {
    "slug": "new-wave-street-deal-saturday",
    "title": "New Wave Street Culture, Street Deal Saturday",
    "sub": "Affiche de campagne, marché hebdomadaire",
    "type": "brand",
    "images": [
      "new-wave-street-deal-saturday-01.jpg"
    ],
    "videos": []
  },
  {
    "slug": "new-wave-street-deal-saturday-video",
    "title": "New Wave Street Culture, Street Deal Saturday",
    "sub": "Affiche de campagne, marché hebdomadaire",
    "type": "brand",
    "images": [],
    "videos": [
      "Timeline_1.mp4"
    ]
  },
  {
    "slug": "invitation-cocktail-edson",
    "title": "Invitation Cocktail",
    "sub": "Invitation personnelle pour une cérémonie de graduation",
    "type": "event",
    "images": [
      "invitation-cocktail-edson-01.jpg"
    ],
    "videos": []
  },
  {
    "slug": "surprises-gifts-by-neneh",
    "title": "Surprises & Gifts by Neneh",
    "sub": "Grille tarifaire, bouquets et paniers cadeaux",
    "type": "brand",
    "images": [
      "surprises-gifts-by-neneh-01.jpg"
    ],
    "videos": []
  },
  {
    "slug": "invitation-paule-andree",
    "title": "Invitation, Paule Andrée",
    "sub": "Invitation d'anniversaire",
    "type": "event",
    "images": [
      "invitation-paule-andree-01.jpg"
    ],
    "videos": []
  },
  {
    "slug": "ambassadrice-sjd-monica",
    "title": "Ambassadrice SJD Awards 2026, Monica",
    "sub": "Affiche de campagne, concours étudiant",
    "type": "event",
    "images": [
      "ambassadrice-sjd-monica-01.jpg"
    ],
    "videos": []
  },
  {
    "slug": "africa-book-office",
    "title": "Africa Book Office",
    "sub": "Papeterie & fournitures scolaires, 2 propositions",
    "type": "logo",
    "images": [
      "IMG_6408.jpg",
      "IMG_6380.jpg"
    ],
    "videos": []
  },
  {
    "slug": "african-fellowship",
    "title": "African Fellowship 2026",
    "sub": "Célébration des cultures africaines",
    "type": "event",
    "images": [
      "IMG_0351.jpg"
    ],
    "videos": []
  },
  {
    "slug": "ahmad-jamil",
    "title": "AJ, Ahmad Jamil",
    "sub": "Marque personnelle",
    "type": "logo",
    "images": [
      "IMG_6414.jpg"
    ],
    "videos": []
  },
  {
    "slug": "all-in-one",
    "title": "All in One",
    "sub": "La réf de tous vos besoins",
    "type": "brand",
    "images": [
      "IMG_0555.jpg"
    ],
    "videos": []
  },
  {
    "slug": "ashlys-bakery",
    "title": "Ashly's Bakery",
    "sub": "Pâtisserie artisanale",
    "type": "brand",
    "images": [
      "IMG_6751.jpg"
    ],
    "videos": []
  },
  {
    "slug": "cardafit",
    "title": "CardaFit",
    "sub": "Coaching sportif personnalisé",
    "type": "brand",
    "images": [
      "IMG_6747.jpg"
    ],
    "videos": []
  },
  {
    "slug": "dbt-sonik",
    "title": "dBT Sonik",
    "sub": "Identité sonore",
    "type": "logo",
    "images": [
      "IMG_0001.jpg"
    ],
    "videos": []
  },
  {
    "slug": "digital-college",
    "title": "Digital College",
    "sub": "Campagne Tracklist ISDMI/ISMID",
    "type": "brand",
    "images": [
      "IMG_6750.jpg"
    ],
    "videos": []
  },
  {
    "slug": "do-brasil",
    "title": "Do Brasil",
    "sub": "Noël à SJP 2025, Welcome to Rio",
    "type": "event",
    "images": [
      "IMG_6760.jpg"
    ],
    "videos": []
  },
  {
    "slug": "edson-print",
    "title": "Edson Print",
    "sub": "Studio créatif, visuels de soutenance",
    "type": "brand",
    "images": [
      "IMG_1806.jpg"
    ],
    "videos": []
  },
  {
    "slug": "election-ubuntu",
    "title": "Élection Ubuntu",
    "sub": "SJP Community",
    "type": "event",
    "images": [
      "IMG_3025.jpg"
    ],
    "videos": []
  },
  {
    "slug": "fashion-week",
    "title": "Fashion Week à SJD",
    "sub": "Association des Étudiants SJD",
    "type": "event",
    "images": [
      "IMG_0549.jpg"
    ],
    "videos": []
  },
  {
    "slug": "snap-stalwart-parrainage",
    "title": "Stalwart University Institute",
    "sub": "Filtre Snapchat, Soirée de Parrainage",
    "type": "snap",
    "images": [
      "IMG_8114.jpg"
    ],
    "videos": []
  },
  {
    "slug": "snap-octobre-rose",
    "title": "Octobre Rose",
    "sub": "Filtre Snapchat, Club Environnement et Santé, La Catho",
    "type": "snap",
    "images": [
      "IMG_6752.jpg"
    ],
    "videos": []
  },
  {
    "slug": "snap-altis-amadou",
    "title": "ALTIS, Amadou Tidiane Wone",
    "sub": "Filtre Snapchat, campagne présidence institut de droit des affaires",
    "type": "snap",
    "images": [
      "IMG_6757.jpg"
    ],
    "videos": []
  },
  {
    "slug": "snap-rhit-nova",
    "title": "RHIT, Je vote pour Nova",
    "sub": "Filtre Snapchat, campagne étudiante",
    "type": "snap",
    "images": [
      "IMG_6522.jpg"
    ],
    "videos": []
  },
  {
    "slug": "snap-vieux-carre",
    "title": "Le Vieux Carré",
    "sub": "Filtre Snapchat, Byblos Akwa",
    "type": "snap",
    "images": [
      "IMG_9984.jpg"
    ],
    "videos": []
  },
  {
    "slug": "snap-bal-fmsp-ue",
    "title": "AE-CTO FMSP-UE, Bal de Fin d'Année",
    "sub": "Filtre Snapchat, événement étudiant",
    "type": "snap",
    "images": [
      "IMG_9985.jpg"
    ],
    "videos": []
  },
  {
    "slug": "snap-keyce-paris",
    "title": "Il Était Une Fois à Paris",
    "sub": "Filtre Snapchat, KEYCE & Digital Collège Douala",
    "type": "snap",
    "images": [
      "IMG_9986.jpg"
    ],
    "videos": []
  },
  {
    "slug": "snap-eid-al-adha",
    "title": "Eid-Al-Adha Mubarak",
    "sub": "Filtre Snapchat",
    "type": "snap",
    "images": [
      "IMG_9992.jpg"
    ],
    "videos": []
  },
  {
    "slug": "snap-sammuf",
    "title": "SAMMUF, 1ère Édition",
    "sub": "Filtre Snapchat, Total Nkolbong",
    "type": "snap",
    "images": [
      "IMG_9994.jpg"
    ],
    "videos": []
  },
  {
    "slug": "snap-fairfest",
    "title": "Fairfest",
    "sub": "Filtre Snapchat, Casino Bonapriso",
    "type": "snap",
    "images": [
      "IMG_9995.jpg"
    ],
    "videos": []
  },
  {
    "slug": "snap-road-to-kribi",
    "title": "Road to Kribi",
    "sub": "Filtre Snapchat, KEYCE Informatique & IA ISKIIA",
    "type": "snap",
    "images": [
      "IMG_0004.jpg"
    ],
    "videos": []
  },
  {
    "slug": "snap-promnight-2024",
    "title": "Promnight 2024",
    "sub": "Filtre Snapchat, The Golden Hall Bonapriso",
    "type": "snap",
    "images": [
      "IMG_0005.jpg"
    ],
    "videos": []
  },
  {
    "slug": "snap-mafias-supremacy",
    "title": "Mafia's Supremacy",
    "sub": "Filtre Snapchat, CTO d'Ubuntu, Olympia Bonanjo",
    "type": "snap",
    "images": [
      "IMG_0003.jpg"
    ],
    "videos": []
  },
  {
    "slug": "formation-design",
    "title": "Formation Design Graphique",
    "sub": "AE SJD, Photoshop & Illustrator",
    "type": "event",
    "images": [
      "IMG_3028.jpg"
    ],
    "videos": []
  },
  {
    "slug": "global-services-video",
    "title": "Global Services",
    "sub": "Casque DOQAUS Focus.5",
    "type": "brand",
    "images": [],
    "videos": [
      "casque_fin_global.mp4"
    ]
  },
  {
    "slug": "gracevision-video",
    "title": "Gracevision",
    "sub": "Cabinet d'optique médical",
    "type": "brand",
    "images": [],
    "videos": [
      "Grace_vision_1.mp4",
      "Grace_vision_2.mp4",
      "Grace_vision_3.mp4"
    ]
  },
  {
    "slug": "grandma-huile",
    "title": "Grand Ma",
    "sub": "Huile de palme 100% naturelle",
    "type": "brand",
    "images": [
      "IMG_0449.jpg"
    ],
    "videos": []
  },
  {
    "slug": "holly-party",
    "title": "Holly Party",
    "sub": "The End of Summer, Cassi Lounge",
    "type": "event",
    "images": [
      "IMG_0562.jpg"
    ],
    "videos": []
  },
  {
    "slug": "dorva-cosmetics",
    "title": "DORVA Cosmetics",
    "sub": "Marque de cosmétiques, 4 propositions de logo",
    "type": "logo",
    "images": [
      "dorva-01.jpg",
      "dorva-02.jpg",
      "dorva-03.jpg",
      "dorva-04.jpg",
      "dorva-05.jpg",
      "dorva-06.jpg"
    ],
    "videos": []
  },
  {
    "slug": "intra-niveaux",
    "title": "Intra Niveaux",
    "sub": "Compétition sportive universitaire",
    "type": "logo",
    "images": [
      "IMG_6581.jpg"
    ],
    "videos": []
  },
  {
    "slug": "jeune237",
    "title": "JEUNE 237",
    "sub": "Mouvement citoyen étudiant",
    "type": "event",
    "images": [
      "IMG_8123.jpg"
    ],
    "videos": []
  },
  {
    "slug": "kh-beauty",
    "title": "KH Beauty",
    "sub": "Le maquillage, un art à porter",
    "type": "brand",
    "images": [
      "IMG_8062.jpg"
    ],
    "videos": []
  },
  {
    "slug": "manuea-logo",
    "title": "MANUÉA",
    "sub": "Vêtements africains, propositions de logo",
    "type": "logo",
    "images": [
      "IMG_9976.jpg",
      "IMG_9979.jpg",
      "IMG_9977.jpg",
      "IMG_9978.jpg",
      "IMG_9975.jpg",
      "IMG_9980.jpg"
    ],
    "videos": []
  },
  {
    "slug": "match-communautes",
    "title": "Match des Communautés",
    "sub": "African Fellowship, AE SJD",
    "type": "event",
    "images": [
      "IMG_0458.jpg"
    ],
    "videos": []
  },
  {
    "slug": "mboa-cast",
    "title": "Mboa Cast",
    "sub": "Podcast, les coulisses de la création",
    "type": "brand",
    "images": [
      "IMG_3034.jpg"
    ],
    "videos": []
  },
  {
    "slug": "mervy-events",
    "title": "Mervy Event's",
    "sub": "Bouquets & compositions florales",
    "type": "brand",
    "images": [
      "IMG_6429.jpg"
    ],
    "videos": []
  },
  {
    "slug": "messe-rentree",
    "title": "Messe de la Rentrée",
    "sub": "La Catho Saint-Jérôme",
    "type": "event",
    "images": [
      "IMG_4211.jpg"
    ],
    "videos": []
  },
  {
    "slug": "miss-master",
    "title": "Concours Miss/Master",
    "sub": "UCAC-ICAM 2023/2024",
    "type": "event",
    "images": [
      "IMG_6583.jpg",
      "IMG_6629.jpg"
    ],
    "videos": []
  },
  {
    "slug": "new-wave-street-culture",
    "title": "New Wave Street Culture",
    "sub": "Boutique streetwear, 2 propositions colorimétriques",
    "type": "logo",
    "images": [
      "IMG_0040.jpg",
      "IMG_0037.jpg",
      "IMG_0039.jpg",
      "IMG_0036.jpg"
    ],
    "videos": []
  },
  {
    "slug": "nicole-edmond",
    "title": "Nicole & Edmond",
    "sub": "Save the Date, faire-part de mariage",
    "type": "event",
    "images": [
      "IMG_6758.jpg"
    ],
    "videos": []
  },
  {
    "slug": "njoh-exchange",
    "title": "Njoh Exchange",
    "sub": "Transfert d'argent international",
    "type": "brand",
    "images": [
      "IMG_0561.jpg"
    ],
    "videos": []
  },
  {
    "slug": "nkwa",
    "title": "Nkwa",
    "sub": "Fintech, mynkwa.com",
    "type": "brand",
    "images": [
      "IMG_3544.jpg"
    ],
    "videos": []
  },
  {
    "slug": "noel-sjd",
    "title": "Noël à SJD",
    "sub": "La Catho Saint-Jérôme",
    "type": "event",
    "images": [
      "IMG_0553.jpg",
      "IMG_6519.jpg"
    ],
    "videos": []
  },
  {
    "slug": "octobre-rose",
    "title": "Octobre Rose",
    "sub": "La Catho, lutte contre le cancer du sein",
    "type": "event",
    "images": [
      "IMG_6761.jpg"
    ],
    "videos": []
  },
  {
    "slug": "parrainage-stalwart",
    "title": "Soirée de Parrainage",
    "sub": "Stalwart University Institute",
    "type": "event",
    "images": [
      "IMG_8115.jpg",
      "IMG_8121.jpg"
    ],
    "videos": []
  },
  {
    "slug": "play-kmer",
    "title": "Play Kmer",
    "sub": "Abonnements streaming & IA",
    "type": "brand",
    "images": [
      "IMG_1538.jpg",
      "IMG_3038.jpg",
      "IMG_6418.jpg",
      "IMG_6452.jpg",
      "IMG_6463.jpg",
      "play-kmer-01.jpg",
      "play-kmer-02.jpg"
    ],
    "videos": []
  },
  {
    "slug": "bags-addicts",
    "title": "Bags Addicts",
    "sub": "Vente de sacs, 2 vidéos",
    "type": "brand",
    "images": [],
    "videos": [
      "0223.mp4",
      "pub_M_Masso_2.mp4"
    ]
  },
  {
    "slug": "postgrad-2026",
    "title": "PostGrad",
    "sub": "Événement de graduation 2026",
    "type": "event",
    "images": [],
    "videos": [
      "PostGrad_2026.mp4"
    ]
  },
  {
    "slug": "naga-lounge-bonamoussadi",
    "title": "Naga Lounge Bonamoussadi",
    "sub": "Dégustation",
    "type": "brand",
    "images": [],
    "videos": [
      "Degustation.mp4"
    ]
  },
  {
    "slug": "bal-la-catho-saint-jerome",
    "title": "Bal La Catho Saint Jérôme",
    "sub": "Événement étudiant",
    "type": "event",
    "images": [],
    "videos": [
      "0520.mp4"
    ]
  },
  {
    "slug": "production-keva",
    "title": "Keva Resto & Lounge",
    "sub": "Bonapriso, Douala",
    "type": "brand",
    "images": [],
    "videos": [
      "KEVA.mp4"
    ]
  },
  {
    "slug": "evenement-la-position",
    "title": "Événement La Position",
    "sub": "Couverture vidéo de l'événement, 3 vidéos",
    "type": "event",
    "images": [],
    "videos": [
      "gang_bang.mp4",
      "Recap_La_Position_1_a.mp4",
      "La_Position_1_b.mp4"
    ]
  },
  {
    "slug": "labo-hyrus",
    "title": "Hurus Labo",
    "sub": "Feu Rouge Bessengue",
    "type": "brand",
    "images": [],
    "videos": [
      "labo_hyrus.mp4"
    ]
  },
  {
    "slug": "bal-ucac-icam",
    "title": "Bal UCAC-ICAM",
    "sub": "Événement étudiant",
    "type": "event",
    "images": [],
    "videos": [
      "teaser_ARIS.mp4"
    ]
  },
  {
    "slug": "production-v-buseo",
    "title": "BUSEO",
    "sub": "Présentation du site internet",
    "type": "brand",
    "images": [],
    "videos": [
      "v_buseo.mp4"
    ]
  },
  {
    "slug": "production-video-axel",
    "title": "Teaser Bal de Fin d'Année",
    "sub": "Teaser événementiel",
    "type": "event",
    "images": [],
    "videos": [
      "vide_o_Axel.mp4"
    ]
  },
  {
    "slug": "promnight-logo",
    "title": "Promnight 2024",
    "sub": "Identité visuelle de soirée",
    "type": "logo",
    "images": [
      "IMG_6385.jpg"
    ],
    "videos": []
  },
  {
    "slug": "send-bk-services",
    "title": "Send BK Services",
    "sub": "Logistique & livraison",
    "type": "logo",
    "images": [
      "IMG_6586.jpg"
    ],
    "videos": []
  },
  {
    "slug": "silure-braise",
    "title": "Silure Braisé",
    "sub": "@DS, élever avec soin, distribuer avec passion",
    "type": "brand",
    "images": [
      "IMG_6755.jpg"
    ],
    "videos": []
  },
  {
    "slug": "sjd-awards",
    "title": "SJD Awards 2025/2026",
    "sub": "L'Association des Étudiants présente",
    "type": "event",
    "images": [
      "IMG_0557.jpg",
      "IMG_1843.jpg"
    ],
    "videos": []
  },
  {
    "slug": "street-unpacking",
    "title": "Street Unpacking",
    "sub": "New Wave Street Culture, Joël Kooh",
    "type": "event",
    "images": [
      "IMG_0556.jpg",
      "IMG_6759.jpg"
    ],
    "videos": []
  },
  {
    "slug": "ubuntu-casino-logo",
    "title": "Ubuntu 2K25, Casino Night",
    "sub": "Identité visuelle de soirée",
    "type": "logo",
    "images": [
      "IMG_6428.jpg"
    ],
    "videos": []
  },
  {
    "slug": "ubuntu-gala",
    "title": "Ubuntu Golden Gala 2K25",
    "sub": "Get ready to shine",
    "type": "event",
    "images": [
      "IMG_0563.jpg"
    ],
    "videos": []
  },
  {
    "slug": "university-showdown",
    "title": "University Showdown",
    "sub": "La Catho vs College de Paris",
    "type": "event",
    "images": [
      "IMG_0456.jpg",
      "IMG_0559.jpg",
      "IMG_6434.jpg",
      "IMG_6446.jpg",
      "IMG_6520.jpg"
    ],
    "videos": []
  },
  {
    "slug": "vice-city",
    "title": "The Vice City",
    "sub": "Music · Chill · Drink",
    "type": "event",
    "images": [
      "IMG_0448.jpg",
      "IMG_6464.jpg"
    ],
    "videos": []
  },
  {
    "slug": "vice-city-logo",
    "title": "The Vice City",
    "sub": "Identité de bar lounge",
    "type": "logo",
    "images": [
      "IMG_5327.jpg"
    ],
    "videos": []
  },
  {
    "slug": "vinted-cameroun",
    "title": "Vinted Cameroun",
    "sub": "Vendez vos articles en toute confiance",
    "type": "brand",
    "images": [
      "IMG_0551.jpg"
    ],
    "videos": []
  },
  {
    "slug": "wistem",
    "title": "WiSTEM",
    "sub": "Priorité à votre bien-être, Yoga",
    "type": "event",
    "images": [
      "IMG_6467.jpg"
    ],
    "videos": []
  }
];
