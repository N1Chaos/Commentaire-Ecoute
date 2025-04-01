// Définir les définitions des mots
const wordDefinitions = {
        "musique occidentale de tradition écrite": {
            "definition": "Style musical savant européen caractérisé par son système de notation et son évolution historique à travers les périodes stylistiques majeures."
        },
        "musique du Moyen-Age": {
            "definition": "Style (Ve-XVe siècles) marqué par le chant grégorien, l'organum, les troubadours et l'émergence de la polyphonie. Instruments typiques : vièle, harpe, flûte à bec."
        },
        "musique de la Renaissance": {
            "definition": "Style (XVe-XVIe siècles) caractérisé par la polyphonie vocale complexe et le développement des instruments comme le luth et le clavecin."
        },
        "style baroque": {
            "definition": "Style (1600-1750) marqué par la basse continue, l'opéra, les formes concertantes et les grands maîtres comme Bach et Haendel."
        },
        "style classique": {
            "definition": "Style (1750-1800) caractérisé par la clarté formelle, l'équilibre et les compositeurs comme Mozart et Haydn."
        },
        "style romantique": {
            "definition": "Style (1800-1900) privilégiant l'expression des émotions, les formes libres et les grands virtuoses comme Chopin et Liszt."
        },
        "musique moderne": {
            "definition": "Style (début XXe siècle) marqué par la rupture avec le système tonal et l'émergence de nouvelles techniques compositionnelles."
        },
        "musique contemporaine": {
            "definition": "Style actuel (après 1945) explorant des approches innovantes comme la musique concrète ou minimaliste."
        },

    
            "musiques traditionnelles / folk": {
                "definition": "Style musical transmis oralement, propre à une culture ou région, utilisant souvent des instruments locaux caractéristiques."
            },
            "musique celtique": {
                "definition": "Style musical des pays celtes utilisant harpe, cornemuse et violon, avec des mélodies caractéristiques."
            },
            "flamenco": {
                "definition": "Style andalou associant chant passionné, danse expressive et guitare rythmique."
            },
            "fado": {
                "definition": "Style chanté portugais exprimant la nostalgie, accompagné de la guitare portugaise."
            },
            "gnawa": {
                "definition": "Style marocain aux rythmes hypnotiques, mêlant traditions africaines et soufies."
            },
            "blues traditionnel": {
                "definition": "Style afro-américain né dans le Delta du Mississippi, basé sur des structures simples et une expressivité vocale intense."
            },
            "musique africaine": {
                "definition": "Style diversifié caractérisé par des polyphonies et des polyrythmies complexes."
            },
        
                "musiques populaires modernes": {
                    "definition": "Styles musicaux apparus principalement au XXe siècle, caractérisé par :\n1. Une large diffusion médiatique (radio, disques, streaming)\n2. Une production souvent industrielle\n3. Une forte association avec la culture de masse\n4. L'utilisation d'instruments amplifiés/électroniques\n\nPrincipales caractéristiques :\n- Structures souvent simples et répétitives\n- Importance du rythme et de la mélodie\n- Forte connexion avec les mouvements sociaux et générationnels\n- Évolution rapide influencée par la technologie."
                },
                "jazz": {
                    "definition": "Style musical né aux États-Unis combinant improvisation, syncopes et harmonies sophistiquées."
                },
                "rock": {
                    "definition": "Style apparu dans les années 1950 centré sur les guitares électriques et une énergie rythmique puissante."
                },
                "reggae": {
                    "definition": "Style jamaïcain au tempo modéré, marqué par l'accentuation du contretemps et des textes engagés."
                },
                "rap": {
                    "definition": "Style vocal parlé-rythmé, utilisant à l'origine des samples en boucle comme accompagnement, élément central de la culture hip-hop."
                },
                "musiques du monde": {
        "definition": "Catégorie regroupant les traditions musicales non-occidentales et les fusions interculturelles, caractérisées par : une transmission souvent orale ou maître-élève, l'utilisation d'instruments traditionnels spécifiques, des systèmes musicaux différents de la théorie occidentale (échelles, rythmes), des fonctions sociales/cérémonielles importantes."
},
                    "samba": {
                        "definition": "Style brésilien énergique associé au carnaval, basé sur des percussions complexes."
                    },
                    "raga": {
                        "definition": "Style mélodique de la musique indienne lié à des moments précis et des émotions spécifiques."
                    },
                    "musique arabo-andalouse": {
                        "definition": "Style résultant d'un métissage entre musique arabe venue de l'Orient, musique afro-berbère du Maghreb et musique pratiquée dans la Péninsule Ibérique avant le VIIIe siècle, utilisant des modes spécifiques."
                    },
                    "chants pygmées": {
                        "definition": "Style vocal africain caractérisé par des polyphonies complexes et l'utilisation du yodel."
                    },
                    "musiques rituelles ou spirituelles": {
        "definition": "Pratiques musicales sacrées ou cérémonielles remplissant une fonction médiatrice entre le profane et le sacré. Elles ont pour vocation d'établir une communication avec les entités spirituelles (invocations, prières chantées), de faciliter les transitions ritualisées (rites de passage, cycles calendaires), de transmettre des connaissances religieuses par la mise en musique des textes sacrés, d'induire des états de conscience modifiés (transe, extase, méditation)."
},
                        "chamanisme": {
                            "definition": "Style musical utilisé dans les pratiques spirituelles pour induire des états de transe."
                        },
                        "gospel": {
                            "definition": "Style religieux afro-américain marqué par son intensité émotionnelle et ses harmonies vocales riches."
                        },
                        "qawwali": {
                            "definition": "Style soufi visant à provoquer l'extase mystique par la répétition rythmique et mélodique."
                        },
                            "musique de tradition orale": {
                                "definition": "Style transmis sans support écrit, par imitation et mémoire collective."
                            },
                            "musique de tradition écrite": {
                                "definition": "Pratique musicale fondée sur un système de notation précis permettant la fixation et la transmission des œuvres."},
                            "musique savante": {
                                "definition": "Style composé et noté, relevant d'une démarche artistique élaborée."
                            },
                                "musique populaire": {
                                  "definition": "Musique transmise principalement par voie orale au sein d'une communauté, associée à des pratiques collectives et quotidiennes, se distinguant de la musique savante par son mode de transmission et son ancrage dans une culture."
                                },
                                "cas hybrides": {
                                  "definition": "Pratiques musicales combinant des éléments de transmission orale et écrite, créant un continuum entre culture savante et populaire. Ces formes émergent lorsque des traditions orales sont notées, lorsque des musiques écrites intègrent des pratiques improvisées, ou lorsque des musiciens formés à l'écrit revisitent des répertoires traditionnels. Exemples typiques : le jazz (improvisation orale sur structures harmoniques écrites), le flamenco (phrases mélodiques transmises oralement mais styles codifiés par écrit), ou certaines musiques baroques (partitions écrites avec ornementation improvisée)."
                                },
    // Cordes frottées
    "violon": {
        definition: "Instrument à cordes frottées, le plus petit et aigu de sa famille. Joué avec un archet ou en pizzicato.",
        image: "images/violon.jpg",
        audio: "audio/violon.mp3"
    },
    "violon alto": {
        definition: "Instrument à cordes frottées, légèrement plus grand que le violon, avec un son plus chaud et grave.",
        image: "images/alto.jpg",
        audio: "audio/alto.mp3"
    },
    "violoncelle": {
        definition: "Instrument à cordes frottées joué assis, tenu entre les jambes. Tessiture entre l'alto et la contrebasse.",
        image: "images/violoncelle.jpg",
        audio: "audio/violoncelle.mp3"
    },
    "contrebasse": {
        definition: "Le plus grand et le plus grave des instruments à cordes frottées, utilisé en classique et en jazz.",
        image: "images/contrebasse.jpg",
        audio: "audio/contrebasse.mp3"
    },
    "archet": {
        definition: "Baguette en bois avec crins de cheval tendus, utilisée pour frotter les cordes des instruments.",
        image: "images/archet.jpg",
        audio: "audio/archet.mp3"
    },

    // Cordes pincées
    "guitare": {
        definition: "Instrument à cordes pincées, avec caisse de résonance et manche fretté. Existe en versions classique, folk et électrique.",
        image: "images/guitare.jpg",
        audio: "audio/guitare.mp3"
    },
    "harpe": {
        definition: "Grand instrument à cordes pincées, joué verticalement. Utilisé en musique classique et celtique.",
        image: "images/harpe.jpg",
        audio: "audio/harpe.mp3"
    },
    "clavecin": {
        definition: "Instrument à clavier et cordes pincées, très utilisé à l'époque baroque.",
        image: "images/clavecin.jpg",
        audio: "audio/clavecin.mp3"
    },
    "guitare électrique": {
        definition: "Guitare sans caisse de résonance, nécessitant un amplificateur. Utilisée en rock, blues et jazz.",
        image: "images/guitare-electrique.jpg",
        audio: "audio/guitare-electrique.mp3"
    },
    "basse électrique": {
        definition: "Version grave de la guitare électrique, souvent à 4 cordes. Essentielle dans les groupes modernes.",
        image: "images/basse-electrique.jpg",
        audio: "audio/basse-electrique.mp3"
    },

    // Cordes frappées
    "piano": {
        definition: "Instrument à clavier où les cordes sont frappées par des marteaux. Existe en versions acoustique et numérique.",
        image: "images/piano.jpg",
        audio: "audio/piano.mp3"
    },

    // Bois
    "flûte traversière": {
        definition: "Instrument à vent en métal (originellement en bois), sans anche. Son clair et brillant.",
        image: "images/flute-traversiere.jpg",
        audio: "audio/flute-traversiere.mp3"
    },
    "flûte à bec": {
        definition: "Petite flûte droite avec un bec, souvent utilisée pour l'apprentissage musical.",
        image: "images/flute-a-bec.jpg",
        audio: "audio/flute-a-bec.mp3"
    },
    "clarinette": {
        definition: "Instrument à anche simple, au son chaud et expressif. Utilisée en classique et jazz.",
        image: "images/clarinette.jpg",
        audio: "audio/clarinette.mp3"
    },
    "cor de basset": {
        definition: "Variété de clarinette alto, plus grave, utilisée notamment par Mozart.",
        image: "images/cor-de-basset.jpg",
        audio: "audio/cor-de-basset.mp3"
    },
    "saxophone": {
        definition: "Instrument en métal à anche simple, inventé par Adolphe Sax. Très présent en jazz.",
        image: "images/saxophone.jpg",
        audio: "audio/saxophone.mp3"
    },

    // Cuivres
    "trompette": {
        definition: "Instrument à vent aigu, à pistons. Son brillant et puissant.",
        image: "images/trompette.jpg",
        audio: "audio/trompette.mp3"
    },
    "cor": {
        definition: "Instrument à vent avec large pavillon, son chaud et rond. Utilisé en orchestre.",
        image: "images/cor.jpg",
        audio: "audio/cor.mp3"
    },
    "trombone": {
        definition: "Instrument à coulisse, permettant des glissandos. Son puissant et noble.",
        image: "images/trombone.jpg",
        audio: "audio/trombone.mp3"
    },
    "tuba": {
        definition: "Le plus grave des cuivres, avec un son profond et rond.",
        image: "images/tuba.jpg",
        audio: "audio/tuba.mp3"
    },

    // Percussions (catégories générales)
    "percussions": {
        definition: "Famille d'instruments dont le son est produit en frappant, secouant ou grattant.",
        image: "images/percussions.jpg",
        audio: "audio/percussions.mp3"
    },
    "percussions à peau": {
        definition: "Percussions dont le son est produit par la vibration d'une membrane tendue.",
        image: "images/percussions-peau.jpg",
        audio: "audio/percussions-peau.mp3"
    },
    "percussions en bois": {
        definition: "Percussions faites en bois.",
        image: "images/percussions-bois.jpg",
        audio: "audio/percussions-bois.mp3"
    },
    "percussions métalliques": {
        definition: "Percussions faites en métal, comme les cymbales ou le triangle.",
        image: "images/percussions-metal.jpg",
        audio: "audio/percussions-metal.mp3"
    },

    // Percussions à hauteur indéterminée
    "batterie": {
        definition: "Ensemble de percussions (toms, cymbales, grosse caisse) joué avec des baguettes.",
        image: "images/batterie.jpg",
        audio: "audio/batterie.mp3"
    },
    "caisse claire": {
        definition: "Tambour avec timbre (fil métallique vibrant), utilisé en orchestre et batterie.",
        image: "images/caisse-claire.jpg",
        audio: "audio/caisse-claire.mp3"
    },
    "grosse caisse": {
        definition: "Tambour très grave, utilisé pour marquer les temps forts.",
        image: "images/grosse-caisse.jpg",
        audio: "audio/grosse-caisse.mp3"
    },
    "tom": {
        definition: "Tambour sans timbre, de différentes tailles, composant de la batterie.",
        image: "images/tom.jpg",
        audio: "audio/tom.mp3"
    },
    "cymbales": {
        definition: "Disques métalliques frappés ou entrechoqués pour produire un son vibrant.",
        image: "images/cymbales.jpg",
        audio: "audio/cymbales.mp3"
    },
    "charlestone": {
        definition: "Paire de cymbales actionnée par une pédale, composant de la batterie.",
        image: "images/charlestone.jpg",
        audio: "audio/charlestone.mp3"
    },
    "tambourin": {
        definition: "Petit cadre avec des cymbalettes ou une peau, secoué ou frappé.",
        image: "images/tambourin.jpg",
        audio: "audio/tambourin.mp3"
    },
    "triangle": {
        definition: "Tige métallique en forme de triangle, frappée avec une baguette.",
        image: "images/triangle.jpg",
        audio: "audio/triangle.mp3"
    },
    "woodblock": {
        definition: "Bloc de bois creux frappé avec une baguette, son sec et percussif.",
        image: "images/woodblock.jpg",
        audio: "audio/woodblock.mp3"
    },
    "claves": {
        definition: "Bâtons de bois dur entrechoqués pour produire un son claquant.",
        image: "images/claves.jpg",
        audio: "audio/claves.mp3"
    },
    "guiro": {
        definition: "Instrument à rainures frottées avec une baguette, son gratté caractéristique.",
        image: "images/guiro.jpg",
        audio: "audio/guiro.mp3"
    },
    "congas": {
        definition: "Tambours cubains hauts et étroits, joués à mains nues.",
        image: "images/congas.jpg",
        audio: "audio/congas.mp3"
    },
    "bongos": {
        definition: "Petits tambours jumelés, d'origine cubaine, joués avec les doigts.",
        image: "images/bongos.jpg",
        audio: "audio/bongos.mp3"
    },
    "djembe": {
        definition: "Tambour africain en forme de calice, joué à mains nues.",
        image: "images/djembe.jpg",
        audio: "audio/djembe.mp3"
    },
    "timbales latines": {
        definition: "Petits tambours à peau fine, utilisés dans la musique latine.",
        image: "images/timbales-latines.jpg",
        audio: "audio/timbales-latines.mp3"
    },
    "shaker": {
        definition: "Petit instrument secoué, rempli de granulés pour produire un son continu.",
        image: "images/shaker.jpg",
        audio: "audio/shaker.mp3"
    },
    "maracas": {
        definition: "Instrument de percussion secoué, constitué d'une sphère creuse remplie de graines.",
        image: "images/maracas.jpg",
        audio: "audio/maracas.mp3"
    },
    "tambour de basque": {
        definition: "Cadre circulaire avec une peau et des cymbalettes, joué en le secouant ou en frappant la peau.",
        image: "images/tambour-basque.jpg",
        audio: "audio/tambour-basque.mp3"
    },
    
    "tam-tam": {
        definition: "Grand disque métallique suspendu, sans note définie, produisant un son complexe et étalé.",
        image: "images/tam-tam.jpg",
        audio: "audio/tam-tam.mp3"
    },

    // Percussions à hauteur déterminée
    "timbales": {
        definition: "Tambours accordables, utilisés en orchestre pour des notes précises.",
        image: "images/timbales.jpg",
        audio: "audio/timbales.mp3"
    },
    "xylophone": {
        definition: "Instrument à lames de bois frappées, son sec et clair.",
        image: "images/xylophone.jpg",
        audio: "audio/xylophone.mp3"
    },
    "marimba": {
        definition: "Cousin grave du xylophone, avec des lames en bois et des résonateurs.",
        image: "images/marimba.jpg",
        audio: "audio/marimba.mp3"
    },
    "vibraphone": {
        definition: "Instrument à lames métalliques avec motorisation pour un effet vibrato.",
        image: "images/vibraphone.jpg",
        audio: "audio/vibraphone.mp3"
    },
    "glockenspiel": {
        definition: "Petit instrument à lames métalliques, son cristallin et aigu.",
        image: "images/glockenspiel.jpg",
        audio: "audio/glockenspiel.mp3"
    },
    "cloches tubulaires": {
        definition: "Série de tubes métalliques accordés, frappés avec un maillet.",
        image: "images/cloches-tubulaires.jpg",
        audio: "audio/cloches-tubulaires.mp3"
    },
    "célesta": {
        definition: "Instrument à clavier et lames métalliques, son proche du carillon.",
        image: "images/celesta.jpg",
        audio: "audio/celesta.mp3"
    },
    "gong": {
        definition: "Grand disque métallique suspendu, frappé pour produire un son à hauteur déterminé profond et résonnant.",
        image: "images/gong.jpg",
        audio: "audio/gong.mp3"
    },

    // Catégories générales (vents)
    "bois": {
        definition: "Famille d'instruments à vent traditionnellement en bois (flûtes, clarinettes, etc.).",
        image: "images/bois.jpg",
        audio: "audio/bois.mp3"
    },
    "cuivres": {
        definition: "Famille d'instruments à vent en métal, où le son est produit par la vibration des lèvres (trompette, trombone, etc.).",
        image: "images/cuivres.jpg",
        audio: "audio/cuivres.mp3"
    },

    "soprano colorature": {
        definition: "Type de soprano avec un large ambitus et une grande agilité vocale.",
        audio: "audio/soprano-colorature.mp3"  // Chemin du fichier audio
    },
    "soprano": {
        definition: "Registre le plus aigu des voix féminines.",
        image: "images/soprano.jpg", // Chemin de l'image
        audio: "audio/soprano.mp3"  // Chemin du fichier audio
    },
    "mezzo-soprano": {
        definition: "Registre moyen des voix féminines.",
        image: "images/mezzo-soprano.jpg", // Chemin de l'image
        audio: "audio/mezzo-soprano.mp3"  // Chemin du fichier audio
    },
    "alto": {
        definition: "Registre le plus grave des voix féminines, dans le cadre d'une ensemble vocal."
        // Pas d'image ni d'audio pour cette définition
    },
    "contralto": {
        definition: "Registre le plus grave des voix féminines solistes."
        // Pas d'image ni d'audio pour cette définition
    },
    "haute-contre": {
        definition: "Ténor qui utilise sa voix de tête pour certains aigus ou ténor léger.",
        audio: "audio/contretenor.mp3"  // Chemin du fichier audio
    },
    "contreténor": {
        definition: "Chanteur utilisant sa voix de tête, produisant une tessiture similaire à celle d'une soprano.",
        image: "images/contretenor.jpg", // Chemin de l'image
        audio: "audio/contretenor.mp3"  // Chemin du fichier audio
    },
    "ténor": {
        definition: "Registre le plus aigu des voix masculines.",
        image: "images/tenor.jpg", // Chemin de l'image
        audio: "audio/tenor.mp3"  // Chemin du fichier audio
    },
    "baryton": {
        definition: "Registre moyen des voix masculines.",
        image: "images/baryton.jpg", // Chemin de l'image
        audio: "audio/baryton.mp3"  // Chemin du fichier audio
    },
    "basse": {
        definition: "Registre le plus grave des voix masculines.",
        image: "images/basse.jpg", // Chemin de l'image
        audio: "audio/basse.mp3"  // Chemin du fichier audio
    },
    "basse profonde": {
        definition: "Basse avec une tessiture très grave, capable de produire des sons très bas.",
        audio: "audio/basse-profonde.mp3"  // Chemin du fichier audio
    },
    "aigu": {
        definition: "Un registre vocal élevé, souvent utilisé pour désigner des sons de haute fréquence, comme ceux produits par un soprano."
        // Pas d'image ni d'audio pour cette définition
    },
    "médium": {
        definition: "Le registre vocal intermédiaire, ni trop aigu, ni trop grave. Il est souvent utilisé par des voix comme les mezzo-sopranos."
        // Pas d'image ni d'audio pour cette définition
    },
    "grave": {
        definition: "Un registre vocal grave, souvent utilisé par des voix de basse ou des voix masculines plus profondes."
        // Pas d'image ni d'audio pour cette définition
    },
    "ambitus": {
        definition: "Étendue des notes qu'un chanteur peut produire, du plus grave au plus aigu."
        // Pas d'image ni d'audio pour cette définition
    },
    "tessiture": {
        definition: "Étendue des notes qu'un chanteur peut produire confortablement, du plus grave au plus aigu."
        // Pas d'image ni d'audio pour cette définition
    },
    "registre": {
        definition: "Partie de tessiture d’une voix avec les mêmes caractéristiques sonores."
        // Pas d'image ni d'audio pour cette définition
    },
    "registre naturel": {
        definition: "Ou registre de poitrine, ou voix de poitrine, utilisé principalement par les hommes."
        // Pas d'image ni d'audio pour cette définition
    },
    "registre aigu": {
        definition: "Ou voix de fausset ou falsetto (utilisé par les contreténors), ou voix de tête (pour les voix féminines)."
        // Pas d'image ni d'audio pour cette définition
    },
    "voix mixte": {
        definition: "Registre intermédiaire, permet d’éviter la coupure entre les registres graves et aigus."
        // Pas d'image ni d'audio pour cette définition
    },
    "abdomen": {
        definition: "Partie inférieure du tronc, impliquée dans la respiration abdominale, technique importante pour le soutien vocal."
        // Pas d'image ni d'audio pour cette définition
    },
    "bronches": {
        definition: "Voies aériennes principales menant aux poumons."
        // Pas d'image ni d'audio pour cette définition
    },
    "cavités de résonance": {
        definition: "Espaces au-dessus du larynx, incluant la gorge et la bouche, qui sont utilisés pour la résonance vocale et modulent le son produit."
        // Pas d'image ni d'audio pour cette définition
    },
    "cordes vocales": {
        definition: "Muscles tendus dans le larynx qui vibrent pour produire des sons lorsqu'ils sont comprimées par l'air provenant des poumons.",
        image: "images/cordes-vocales.jpg", // Chemin de l'image
        audio: "audio/cordes-vocales.mp3"  // Chemin du fichier audio
    },
    "côtes": {
        definition: "Os qui protègent les organes vitaux dans la poitrine, dont le rôle est important dans la respiration."
        // Pas d'image ni d'audio pour cette définition
    },
    "diaphragme": {
        definition: "Muscle principal utilisé dans la respiration, situé sous les poumons, qui permet d'inhaler et d'exhaler et dont le contrôle est important dans le chant.",
        image: "images/diaphragme.jpg", // Chemin de l'image
        audio: "audio/diaphragme.mp3"  // Chemin du fichier audio
    },
    "résonateurs": {
        definition: "Cavités (bouche, gorge, nez, sinus) permettant l'amplification et la modulation des sons produits par les cordes vocales, donnant ainsi à la voix son timbre unique."
        // Pas d'image ni d'audio pour cette définition
    },
    "fosses nasales": {
        definition: "Passages dans le nez par lesquels l'air est inhalé avant de passer dans les poumons, et qui contribuent à la résonance du son vocal."
        // Pas d'image ni d'audio pour cette définition
    },
    "glotte": {
        definition: "Espace entre les cordes vocales dans le larynx, par lequel l'air passe pour produire des sons."
        // Pas d'image ni d'audio pour cette définition
    },
    "larynx": {
        definition: "Organe situé dans la gorge qui contient les cordes vocales. Il est crucial dans la production de la voix.",
        image: "images/larynx.jpg", // Chemin de l'image
        audio: "audio/larynx.mp3"  // Chemin du fichier audio
    },
    "oreille": {
        definition: "L'organe de l'audition qui permet de percevoir les sons et de maintenir un contrôle précis de la hauteur et de la justesse de la voix."
        // Pas d'image ni d'audio pour cette définition
    },
    "pharynx": {
        definition: "La zone derrière la bouche et le nez qui mène à l'œsophage et aux voies respiratoires. Il joue un rôle dans la résonance vocale."
        // Pas d'image ni d'audio pour cette définition
    },
    "poumons": {
        definition: "Organes responsables de l'échange de gaz (oxygène et dioxyde de carbone).",
        image: "images/poumons.jpg", // Chemin de l'image
        audio: "audio/poumons.mp3"  // Chemin du fichier audio
    },
    "physiologie": {
        definition: "La science qui étudie le fonctionnement des systèmes du corps humain, y compris la respiration et la production vocale."
        // Pas d'image ni d'audio pour cette définition
    },
    "sternum": {
        definition: "Os du thorax auquel les côtes sont attachées. Il protège le cœur et les poumons et est un point de référence pour la respiration."
        // Pas d'image ni d'audio pour cette définition
    },
    "thorax": {
        definition: "Partie du tronc qui contient les poumons et le cœur."
        // Pas d'image ni d'audio pour cette définition
    },
    "trachée": {
        definition: "Tube qui mène de la gorge aux poumons, permettant le passage de l'air pour la respiration et la production vocale."
        // Pas d'image ni d'audio pour cette définition
    },
    "voies aériennes": {
        definition: "Passages par lesquels l'air entre et sort des poumons, incluant la trachée et les bronches."
        // Pas d'image ni d'audio pour cette définition
    },
    "voile du palais": {
        definition: "Partie postérieure du palais qui peut être levée pour fermer ou ouvrir les cavités nasales, affectant la résonance du son."
        // Pas d'image ni d'audio pour cette définition
    },
    "a cappella": {
        definition: "Chanter sans accompagnement instrumental."
        // Pas d'image ni d'audio pour cette définition
    },
    "décomposition du son": {
        definition: "Façon dont un son vocal est formé par la vibration des cordes vocales et modulé par les cavités de résonance."
        // Pas d'image ni d'audio pour cette définition
    },
    "intonation": {
        definition: "Manière dont les variations de hauteur et de tonalité sont utilisées pour exprimer des émotions ou des significations."
        // Pas d'image ni d'audio pour cette définition
    },
    "mélisme": {
        definition: "Art de chanter plusieurs notes sur une seule syllabe, souvent utilisé dans les chants classiques et la musique religieuse."
        // Pas d'image ni d'audio pour cette définition
    },
    "onomatopées": {
        definition: "Mots qui imitent le son qu'ils représentent (buzz, clang...)."
        // Pas d'image ni d'audio pour cette définition
    },
    "phénomène vibratoire": {
        definition: "Processus par lequel les cordes vocales vibrent pour produire du son. La fréquence de cette vibration détermine la hauteur du son."
        // Pas d'image ni d'audio pour cette définition
    },
    "résonance": {
        definition: "Effet de modulation et d'amplification du son émis par les cordes vocales, produit par les résonateurs."
        // Pas d'image ni d'audio pour cette définition
    },
    "soutien": {
        definition: "Engagement de la respiration abdominale et du diaphragme pour maintenir la constance du son."
        // Pas d'image ni d'audio pour cette définition
    },
    "terminaison du son": {
        definition: "Manière dont un chanteur contrôle l'extinction d'une note ou d'une phrase musicale."
        // Pas d'image ni d'audio pour cette définition
    },
    "timbre": {
        definition: "Qualité ou 'couleur' de la voix, qui permet de la distinguer d'une autre, même si elles chantent la même note."
        // Pas d'image ni d'audio pour cette définition
    },
    "voile": {
        definition: "La partie postérieure du palais qui peut être levée pour fermer ou ouvrir les cavités nasales, affectant la résonance du son vocal."
        // Pas d'image ni d'audio pour cette définition
    },
    "attaque du son": {
        definition: "Moment et manière dont un chanteur initie un son ; cela peut influencer la qualité, la précision et le caractère de la voix. L'attaque du son peut être : \n- douce (ou légère) : les cordes vocales commencent à vibrer avant que l'air ne soit pleinement expulsé, ce qui produit un son fluide et doux ; souvent utilisé pour un effet plus délicat ou lyrique.\n- dure (ou coup de glotte) : les cordes vocales se ferment fermement avant de s'ouvrir brusquement sous la pression de l'air, produisant un son net et précis ; utile pour des effets dramatiques.\n- équilibrée : l'air et les cordes vocales se synchronisent de manière optimale pour un son clair et soutenu sans tension excessive."
        // Pas d'image ni d'audio pour cette définition
    },
    "vocalise": {
        definition: "Exercice vocal consistant à chanter des notes sur des voyelles sans paroles, utilisé pour échauffer la voix."
        // Pas d'image ni d'audio pour cette définition
    },
    "échauffement": {
        definition: "Exercices effectués pour préparer la voix."
        // Pas d'image ni d'audio pour cette définition
    },
    "gestion du souffle": {
        definition: "Maîtrise et optimisation de l'utilisation de l'air pendant l'émission vocale. Elle est essentielle pour produire un son stable, puissant et contrôlé, tout en évitant la fatigue vocale."
        // Pas d'image ni d'audio pour cette définition
    },
    "inspiration": {
        definition: "Processus de prise de l'air dans les poumons."
        // Pas d'image ni d'audio pour cette définition
    },
    "expiration": {
        definition: "Processus d'expulsion de l'air contenu dans les poumons."
        // Pas d'image ni d'audio pour cette définition
    },
    "physiologie": {
        definition: "Science qui étudie le fonctionnement des systèmes du corps humain, y compris la respiration et la production vocale."
        // Pas d'image ni d'audio pour cette définition
    },
    "forme à thèmes": {
        "definition": "Basée sur le développement et la variation de thèmes mélodiques."
    },
    "forme bipartite": {
        "definition": "Deux sections distinctes, souvent notées A et B."
    },
    "forme continue": {
        "definition": "Forme dans laquelle aucune section n'est clairement définie."
    },
    "forme ouverte": {
        "definition": "Sans section clairement délimitée, elle permet une grande liberté dans l'organisation des idées musicales et l'improvisation. Fréquente en musique contemporaine, où l'interprète ou le compositeur ont une grande marge de manœuvre."
    },
    "forme par argument": {
        "definition": "Basée sur le développement logique d'idées thématiques."
    },
    "forme strophique": {
        "definition": "Chaque strophe de texte est chantée sur la même mélodie."
    },
    "break": {
        "definition": "Section d'une composition où un instrument ou un groupe joue seul."
    },
    "cellule": {
        "definition": "Petit motif musical répété ou développé."
    },
    "citation": {
        "definition": "Extrait musical préexistant dans une nouvelle composition ; pour créer un effet de reconnaissance ou d’hommage."
    },
    "couplet": {
        "definition": "Section qui alterne avec le refrain."
    },
    "développement": {
        "definition": "Section où les thèmes sont transformés, combinés ou explorés."
    },
    "élément": {
        "definition": "Composant de base, comme une mélodie, un rythme, une harmonie ou un timbre."
    },
    "exposition": {
        "definition": "Première section, dans laquelle les thèmes principaux sont présentés."
    },
    "partie": {
        "definition": "Section souvent définie par son caractère ou sa fonction ; par exemple, les parties d’une chanson (couplet, refrain, pont)."
    },
    "phrase": {
        "definition": "Unité mélodique ou harmonique complète qui forme une idée musicale."
    },
    "refrain": {
        "definition": "Section répétée, avec les mêmes paroles et mélodie."
    },
    "strophe": {
        "definition": "Une section d’une chanson où les paroles changent, mais la musique reste la même."
    },
    "ABA": {
        "definition": "Forme musicale en trois parties : une première section (A), une section contrastée (B), puis un retour à la première section (A)."
    },
    "antienne": {
        "definition": "Court chant liturgique, souvent répété avant et après un psaume."
    },
    "cyclique": {
        "definition": "Forme où des thèmes ou motifs réapparaissent tout au long d'une œuvre, créant une unité."
    },
    "da capo": {
        "definition": "Indication pour répéter une section depuis le début (littéralement 'depuis le début')."
    },
    "fugue": {
        "definition": "Forme contrapuntique où un thème (sujet) est introduit puis repris par différentes voix ou instruments. Typique de la musique baroque."
    },
    "ground / chaconne / passacaille": {
        "definition": "Formes basées sur une basse répétée."
    },
    "marche": {
        "definition": "Composition au rythme régulier, souvent utilisée pour accompagner des défilés."
    },
    "petit rondo (ABA C ABA)": {
        "definition": "Variante du rondo."
    },
    "reprise": {
        "definition": "Retour d’une section musicale après une autre partie."
    },
    "rondeau": {
        "definition": "Forme avec alternance entre refrain et couplets ; en musique française instrumentale et vocale, des périodes médiévale à baroque."
    },
    "rondo": {
        "definition": "Comme le rondeau ; souvent utilisé pour les mouvements vifs et joyeux, dans la sonate et la symphonie comme pièce finale."
    },
    "thème et variations": {
        "definition": "Structure où le thème initial est suivi de plusieurs variations (mélodie, rythme, harmonie, etc.)."
    },
    "variation": {
        "definition": "Transformation de certains aspects d’un thème (mélodie, rythme, harmonie, texture, etc.), tout en gardant des éléments reconnaissables avec l’idée originale."
    },
    "basse obstinée": {
        "definition": "Ligne de basse répétée tout au long d'une composition, servant de fondation harmonique."
    },
    "boucle": {
        "definition": "Motif répété ; dans les musiques modernes."
    },
    "leitmotiv": {
        "definition": "Thème récurrent associé à un personnage, une idée ou une émotion dans une œuvre."
    },
    "motif": {
        "definition": "Court élément mélodique ou rythmique répété ou développé dans une composition."
    },
    "ostinato mélodique, rythmique ou mélodico-rythmique": {
        "definition": "Motif répété tout au long d'une composition."
    },
    "récurrence": {
        "definition": "Retour répété d’un élément musical (thème, motif, harmonie). Crée une cohésion dans une œuvre."
    },
    "répétition": {
        "definition": "Réutilisation d’une section ou d’un motif musical."
    },
    "sample": {
        "definition": "Extrait sonore préenregistré, réutilisé dans une nouvelle composition."
    },
    "sujet": {
        "definition": "Thème principal d'une œuvre contrapuntique, notamment d'une fugue."
    },
    "contraste": {
        "definition": "Élément opposé (dynamique, tempo, texture) pour créer de la variété."
    },
    "dialogue": {
        "definition": "Interaction musicale entre deux voix ou instruments, on parle souvent de 'question-réponse'."
    },
    "échelle": {
        "definition": "Série de notes ascendantes ou descendantes, souvent utilisée comme base pour une mélodie ou une improvisation."
    },
    "lamento": {
        "definition": "Pièce musicale exprimant la tristesse ou le deuil, souvent basée sur une basse descendante."
    },
    "mouvement": {
        "definition": "Section autonome d'une œuvre plus large, comme une symphonie ou une sonate."
    },
    "programme": {
        "definition": "Idée extra-musicale, poème ou histoire, qui sert de fil conducteur à une composition."
    },
    "réponse": {
        "definition": "Dans le cadre d'une fugue, la réponse est la version du sujet après qu'il ait été présenté une première fois. Elle est souvent transposée et modifiée pour s’adapter à la tonalité du passage. Souvent transposée à une quarte ou une quinte."
    },
    "rupture": {
        "definition": "Changement soudain ou marqué dans une œuvre musicale, au niveau du tempo, de la tonalité, de la texture ou du style."
    },
    "scherzo": {
        "definition": "Composition sans forme fixe, autonome ou mouvement d'une sonate, d'une symphonie, etc. ; caractère vif et brillant."
    },
    "ternaire (ABA)": {
        "definition": "Structure musicale en trois parties."
    },
    "canon": {
        "definition": "Forme contrapuntique où une mélodie est imitée par une ou plusieurs voix à intervalles réguliers."
    },
    "canzone": {
        "definition": "Souvent de style léger et mélodique."
    },
    "chaconne": {
        "definition": "Forme basée sur la répétition d'une progression harmonique ou d'un motif de basse."
    },
    "contre-sujet": {
        "definition": "Mélodie secondaire dans une fugue, jouée en contrepoint avec le sujet principal."
    },
    "contrepoint": {
        "definition": "Technique musicale où plusieurs mélodies indépendantes sont combinées harmonieusement."
    },
    "développement": {
        "definition": "Le développement est une section où le sujet et les contre-sujets sont transformés, fragmentés, combinés ou explorés de manière créative. Après l’exposition (où toutes les voix ont présenté le sujet et la réponse), le développement explore les possibilités du matériel thématique. Il peut inclure des modulations (changements de tonalité), des strettes (entrées rapprochées du sujet) ou des inversions (le sujet joué à l’envers) et prépare le retour à la tonalité principale pour la conclusion."
    },
    "fantaisie": {
        "definition": "Forme libre, souvent improvisée, sans structure prédéfinie."
    },
    "fugato": {
        "definition": "Passage d'une composition qui imite le style d'une fugue sans en être une."
    },
    "fuguette": {
        "definition": "Petite fugue, souvent moins complexe qu'une fugue complète."
    },
    "fughetta": {
        "definition": "Petite fugue, souvent moins développée qu'une fugue complète."
    },
    "imitation": {
        "definition": "Technique contrapuntique où une voix ou un instrument reprend un motif ou un thème (sujet) déjà exposé par une autre voix, souvent à un intervalle différent (généralement quarte ou quinte). Cela crée un dialogue entre les voix, tout en maintenant une cohésion thématique. L'imitation est dite réelle quand la transposition est exacte, tonale quand la réponse est légèrement modifiée pour rester dans la tonalité principale."
    },
    "motet": {
        "definition": "Composition vocale polyphonique a cappella, souvent religieuse."
    },
    "réponse / comes": {
        "definition": "Imitation du sujet dans une autre voix, souvent transposée."
    },
    "ricercare": {
        "definition": "Forme contrapuntique ancienne, précurseur de la fugue."
    },
    "sujet / thème / dux": {
        "definition": "Thème principal d'une fugue, exposé au début et développé tout au long de la composition."
    },
    "air": {
        "definition": "Mélodie principale ou section mélodique dans une composition, souvent chantée."
    },
    "aléatoire": {
        "definition": "Certains éléments sont laissés au hasard ou à l'interprétation de l'exécutant."
    },
    "aria": {
        "definition": "Pièce vocale soliste dans un opéra ou une cantate, souvent de forme ABA."
    },
    "contraste": {
        "definition": "Élément opposé (dynamique, tempo, texture) pour créer de la variété."
    },
    "dialogue": {
        "definition": "Interaction musicale entre deux voix ou instruments, on parle souvent de 'question-réponse'."
    },
    "échelle": {
        "definition": "Série de notes ascendantes ou descendantes, souvent utilisée comme base pour une mélodie ou une improvisation."
    },
    "lamento": {
        "definition": "Pièce musicale exprimant la tristesse ou le deuil, souvent basée sur une basse descendante."
    },
    "mouvement": {
        "definition": "Section autonome d'une œuvre plus large, comme une symphonie ou une sonate."
    },
    "programme": {
        "definition": "Idée extra-musicale, poème ou histoire, qui sert de fil conducteur à une composition."
    },
    "réponse": {
        "definition": "Dans le cadre d'une fugue, la réponse est la version du sujet après qu'il ait été présenté une première fois. Elle est souvent transposée et modifiée pour s’adapter à la tonalité du passage. Souvent transposée à une quarte ou une quinte."
    },
    "rupture": {
        "definition": "Changement soudain ou marqué dans une œuvre musicale, au niveau du tempo, de la tonalité, de la texture ou du style."
    },
    "scherzo": {
        "definition": "Composition sans forme fixe, autonome ou mouvement d'une sonate, d'une symphonie, etc. ; caractère vif et brillant."
    },
    "ternaire": {
        "definition": "Structure musicale en trois parties. Exemple : ABA"
    },
    "grille": {
        "definition": "En jazz, séquence d'accords répétée qui sert de base à l'improvisation."
    },
    "improvisation": {
        "definition": "Art, action de composer et d'exécuter simultanément."
    },
    "sarabande": {
        "definition": "Danse noble et grave, à trois temps (3/4 ou 3/2), de forme binaire, dont chaque phase débutait sur un temps fort, qui se dansait par couples et qui fut introduite à la cour de France au XVIIe siècle. Au XVIIIe, elle est un des éléments fondamentaux de la suite classique située entre la courante et la gigue."
    },
    "gavotte": {
        "definition": "Danse française, à deux temps, d'origine populaire, très en vogue aux dix-septième et dix-huitième siècles."
    },
    "timbre": {
        "definition": "Caractéristique d'un son qui permet de distinguer deux sons de même hauteur et intensité, mais produits par des sources différentes."
    },
    "timbre instrumental": {
        "definition": "Qualité sonore propre à chaque instrument, déterminée par sa construction et sa manière d'être joué."
    },
    "timbre vocal": {
        "definition": "Caractéristique unique de la voix d'une personne, influencée par des facteurs physiologiques."
    },
    "couleur": {
        "definition": "Terme souvent utilisé pour décrire le timbre d'un son ou d'une musique, en référence à sa richesse et ses nuances."
    },
    "texture": {
        "definition": "Manière dont les éléments musicaux (mélodie, harmonie, rythme) sont tissés ensemble pour créer une 'trame' sonore."
    },
    "spectre sonore": {
        "definition": "Ensemble des fréquences (fondamentale et harmoniques) qui caractérisent un son."
    },
    "harmoniques": {
        "definition": "Fréquences multiples de la fréquence fondamentale, qui enrichissent le timbre d'un son."
    },
    "densité": {
        "definition": "Quantité d'éléments sonores présents dans une texture musicale."
    },
    "fondamental": {
        "definition": "Fréquence la plus basse d'un son, qui détermine sa hauteur perçue."
    },
    "formant": {
        "definition": "Renforcement de certaines fréquences dans le spectre sonore, influençant le timbre."
    },
    "enveloppe du son": {
        "definition": "Description de l'évolution d'un son dans le temps, divisée en attaque, decay, sustain et release."
    },
    "enveloppe sonore": {
        "definition": "Façon dont un son évolue dans le temps, influençant sa perception."
    },
    "bruit": {
        "definition": "Son complexe et non périodique, souvent perçu comme désagréable."
    },
    "résonance": {
        "definition": "Amplification naturelle d'un son due à la vibration d'un objet ou d'une cavité."
    },
    "vibration": {
        "definition": "Mouvement oscillatoire qui produit un son."
    },
    "fréquence": {
        "definition": "Nombre de vibrations par seconde d'un son, mesuré en hertz (Hz)."
    },
    "hauteur": {
        "definition": "Caractéristique d'un son qui permet de le classer comme grave ou aigu, déterminée par la fréquence."
    },
    "ultrason": {
        "definition": "Son dont la fréquence est trop élevée pour être perçue par l'oreille humaine (au-dessus de 20 000 Hz)."
    },
    "son": {
        "definition": "Vibration acoustique perçue par l'oreille."
    },
    "synthèse sonore": {
        "definition": "Création de sons artificiels en manipulant des ondes sonores, des harmoniques et des enveloppes."
    },
    "son de synthèse": {
        "definition": "Son généré électroniquement, souvent à l'aide de synthétiseurs."
    },
    "mixage": {
        "definition": "Processus de combinaison et d'équilibrage des pistes sonores pour créer une version finale."
    },
    "panoramique": {
        "definition": "Répartition du son entre les canaux gauche et droit dans un mixage stéréo."
    },
    "espace": {
        "definition": "Répartition des sons dans un environnement acoustique ou dans un mixage."
    },
    "strate": {
        "definition": "Couche sonore dans une composition (mélodie, harmonie, rythme)."
    },
    "sourdine": {
        "definition": "Dispositif utilisé pour atténuer le son d'un instrument, modifiant son timbre."
    },
    "effet": {
        "definition": "Modification du son pour créer une ambiance ou une texture particulière."
    },
    "distorsion": {
        "definition": "Altération du signal sonore pour créer un effet de saturation."
    },
    "rétrograde": {
        "definition": "Technique où une mélodie ou un motif est joué à l'envers."
    },
    "stéréo": {
        "definition": "Technique de diffusion sonore utilisant deux canaux (gauche et droit) pour créer une impression d'espace."
    },
    "réverbération": {
        "definition": "Persistence du son après sa production, due à la réflexion des ondes dans un espace."
    },
    "écho": {
        "definition": "Répétition d'un son due à la réflexion des ondes sonores sur une surface."
    },
    "filtrage": {
        "definition": "Processus de modification du spectre sonore en atténuant ou en amplifiant certaines fréquences."
    },
    "arrangement": {
        "definition": "Adaptation d'une œuvre musicale pour un ensemble différent de l'original."
    },
    "basse continue": {
        "definition": "Technique d'accompagnement baroque utilisant une ligne de basse enrichie d'accords improvisés."
    },
    "instrumentation": {
        "definition": "Art de choisir et de combiner les instruments pour une composition."
    },
    "orchestration": {
        "definition": "Art d'arranger une composition pour un orchestre."
    },
    "réduction": {
        "definition": "Arrangement d'une œuvre orchestrale pour un ensemble plus petit, souvent pour piano."
    },
    "transcription": {
        "definition": "Adaptation d'une œuvre musicale pour un instrument ou un ensemble différent."
    }
};

// Fonction pour gérer la sélection des mots
const words = document.querySelectorAll('.selectable');
const definitionContainer = document.getElementById('definition-container');
const definitionTitle = document.getElementById('definition-title');
const definitionText = document.getElementById('definition-text');
const definitionImage = document.getElementById('definition-image');
const definitionAudio = document.getElementById('definition-audio');
const definitionAudioSource = document.getElementById('definition-audio-source');

// Redimensionnement du conteneur
let isResizing = false;
let startX, startY, startWidth, startHeight;

definitionContainer.addEventListener('mousedown', (e) => {
    const rect = definitionContainer.getBoundingClientRect();
    const handleSize = 20; // Taille de la zone de redimensionnement

    if (
        e.clientX >= rect.left &&
        e.clientX <= rect.left + handleSize &&
        e.clientY >= rect.bottom - handleSize &&
        e.clientY <= rect.bottom
    ) {
        isResizing = true;
        startX = e.clientX;
        startY = e.clientY;
        startWidth = parseFloat(getComputedStyle(definitionContainer).width);
        startHeight = parseFloat(getComputedStyle(definitionContainer).height);
        e.preventDefault();
    }
});

document.addEventListener('mousemove', (e) => {
    if (isResizing) {
        const newWidth = startWidth - (e.clientX - startX); // Réduire la largeur vers la gauche
        const newHeight = startHeight + (e.clientY - startY); // Augmenter la hauteur vers le bas
        definitionContainer.style.width = `${Math.max(250, Math.min(newWidth, 600))}px`;
        definitionContainer.style.height = `${Math.max(200, Math.min(newHeight, 800))}px`;
    }
});

document.addEventListener('mouseup', () => {
    isResizing = false;
});

// Gestion de la sélection des mots
words.forEach(word => {
    word.addEventListener('click', () => {
        word.classList.toggle('selected'); // Toggling de la classe 'selected'

        if (word.classList.contains('selected')) {
            const wordData = wordDefinitions[word.textContent];
            if (wordData) {
                // Afficher la définition
                definitionTitle.textContent = word.textContent;
                definitionText.innerHTML = wordData.definition.replace(/\n/g, '<br>');

                // Gérer l'image
                if (wordData.image) {
                    definitionImage.src = wordData.image;
                    definitionImage.style.display = 'block';
                } else {
                    definitionImage.style.display = 'none';
                }

                // Gérer l'audio
                if (wordData.audio) {
                    definitionAudioSource.src = wordData.audio;
                    definitionAudio.style.display = 'block';
                    definitionAudio.load();
                } else {
                    definitionAudio.style.display = 'none';
                }
            }
            definitionContainer.style.display = 'block'; // Afficher le cadre de définition
        } else {
            definitionContainer.style.display = 'none'; // Masquer le cadre
        }
    });
});

// Fonction pour annuler la sélection
function clearSelection() {
    if (confirm('Êtes-vous sûr de vouloir annuler toutes vos sélections ?')) {
        words.forEach(word => word.classList.remove('selected'));
        definitionContainer.style.display = 'none';
    }
}

// Fonction pour retourner les mots sélectionnés
function returnWords() {
    const selectedWordsOnPage = Array.from(document.querySelectorAll('.selected')).map(el => el.textContent);
    let selectedWords = JSON.parse(localStorage.getItem('selectedWords')) || [];
    selectedWordsOnPage.forEach(word => {
        if (!selectedWords.includes(word)) selectedWords.push(word);
    });
    localStorage.setItem('selectedWords', JSON.stringify(selectedWords));
    window.location.href = "../index.html";
}

// Fonction pour fermer le cadre de définition
function closeDefinition() {
    definitionContainer.style.display = 'none';
}

// Fonction pour retourner à la page d'accueil
function goToHomePage() {
    window.location.href = "../index.html";
}