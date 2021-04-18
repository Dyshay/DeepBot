export enum SortCra{
'Fleche Magique' = 161,
'Tir Critique' = 162,
'Fleche Glacée' = 163,
'Fleche Empoisonnée' = 164,
'Fleche Enflamée' = 165,
'Tir Puissant' = 166,
'Fleche d"Expiation' = 167,
'Oeil de Taupe' = 168,
'Fleche de Recul' = 169,
'Fleche d"Immobilisation' = 170,
'Fleche Punitive' = 171,
'Tir Eloigné' = 172,
'Fleche Harcelante' = 173,
'Feche Cinglante' = 174,
'Fleche Destructrice' = 175,
'Fleche Persecutrice' = 176,
'Fleche Ralentissante' = 177,
'Fleche Absorbante' = 178,
'Fleche Explosive' = 179,
'Maitrise de L"arc' = 180,
}
export namespace SortCra {
  export function values() {
    return Object.keys(SortCra).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
export enum SortFeca {
'Armure incandescante' = 1,
'Aveuglement' = 2,
'Attaque naturelle' = 3,
'Renvoi de Sort' = 4,
'Trêve' = 5,
'Armure Terrestre' = 6,
'Bouclier Féca' = 7,
'Retour du Bâton' = 8,
'Attaque Nuageuse' = 9,
'Glyphe Enflamée' = 10,
'Teleportation' = 11,
'Glyphe D"aveuglement' = 12,
'Glyphe de Silence' = 13,
'Armure Venteuse' = 14,
'Glyphe D"immobilisation' = 15,
'Science du Bâton' = 16,
'Glyphe Aggresif' = 17,
'Armure Aqueuse' = 18,
'Bulle' = 19,
'Immunité' = 20,
}
export namespace SortFeca {
  export function values() {
    return Object.keys(SortFeca).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
export enum SortOsamodas {
'Griffe Spectrale' = 21,
'Déplacement Félin' = 22,
'Cris de L"ours' = 23,
'Corbeau' = 24,
'Soin Animal' = 25,
'Bénédiction Animal' = 26,
'Piqure Motivante' = 27,
'Crapaud' = 28,
'Crocs du Mulou' = 29,
'Fouet' = 30,
'Invocation de Dragonet' = 31,
'Resistance Naturelle' = 32,
'Griffe Cinglante' = 33,
'Invocation de Tofu' = 34,
'Invocation de Bouftou' = 35,
'Frappe du Craqueuleur' = 36,
'Invocation de prespic' = 37,
'Invocation de Sanglier' = 38,
'Invocation de Bwork Mage' = 39,
'Invocation de Craqueleur' = 40
}
export namespace SortOsamodas {
  export function values() {
    return Object.keys(SortOsamodas).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}

export enum SortEnutrof {
'Sac Animé' = 41,
'Chance' = 42,
'Lancer de Pelle' = 43,
'Roulage de Pelle' = 44,
'Clé Réductrice' = 45,
'Désinvocation' = 46,
'Boîte de Pandore' = 47,
'Remblai' = 48,
'Pelle Fantomatique' = 49,
'Maladresse' = 50,
'Lancer de Pièces' = 51,
'Cupidité' = 52,
'Force de l"âge' = 53,
'Maladresse de Masse' = 54,
'Accélération' = 55,
'Pelle de Jugement' = 56,
'Pelle Animée' = 57,
'Pelle Massacrante' = 58,
'Corruption' = 59,
'Coffre Animé' = 60
}
export namespace SortEnutrof {
  export function values() {
    return Object.keys(SortEnutrof).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}

export enum SortSram {
'Sournoiserie' = 61,
'Concentration de chakra' = 62,
'Coup sournois' = 63,
'Repérage' = 64,
'Piège sournois' = 65,
'Poison insidieux' = 66,
'Peur' = 67,
'Fourvoiement' = 68,
'Piege d"immobilisation' = 69,
'Arnaque' = 70,
'Piège empoisonné' = 71,
'Invisibilité' = 72,
'Piège répulsif' = 73,
'Double' = 74,
'Pulsion de Chakra' = 75,
'Attaque Mortelle' = 76,
'Piège de Silence' = 77,
'Invisibilité d"autrui' = 78,
'Piège de Masse' = 79,
'Piège Mortel' = 80
}
export namespace SortSram {
  export function values() {
    return Object.keys(SortSram).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
export enum SortXelor {
'Ralentissement' = 81,
'Contre' = 82,
'Aiguille' = 83,
'Gélure' = 84,
'Flou' = 85,
'Aiguille chercheuse' = 86,
'Démotivation' = 87,
'Téléportation' = 88,
'Dévouement' = 89,
'Fuite' = 90,
'Frappe du Xelor' = 91,
'Rayon Obscure' = 92,
'Flétrissement' = 93,
'Protection Aveuglante' = 94,
'Horloge' = 95,
'Poussière Temporelle' = 96,
'Cadran du Xelor' = 97,
'Vol du temps' = 98,
'Momification' = 99,
'Sablier du Xelor' = 100
}
export namespace SortXelor {
  export function values() {
    return Object.keys(SortXelor).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
export enum SortEcaflip {
'Roulette' = 101,
'Pile ou Face' = 102,
'Chance d"Ecaflip' = 103,
'Tréfle' = 104,
'Bond du félin' = 105,
'Roue de la fortune' = 106,
'Topkaj' = 107,
'Esprit Félin' = 108,
'Bluff' = 109,
'Griffe joueuse' = 110,
'Contrecoup' = 111,
'Griffe de ' = 112,
'Perception' = 113,
'Rekop' = 114,
'Odorat' = 115,
'Langue Rapeuse' = 116,
'Griffe Invocatrice' = 117,
'Reflexes' = 118,
'Tout ou rien' = 119,
'Destin d"Ecaflip' = 120
}
export namespace SortEcaflip {
  export function values() {
    return Object.keys(SortEcaflip).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
export enum SortEniripsa {
'Mot Curatif' = 121,
'Mot Blessant' = 122,
'Mot drainant' = 123,
'Mot Soignant' = 124,
'Mot Interdit' = 125,
'Mot Stimulant' = 126,
'Mot de Prevention' = 127,
'Mot de Frayeur' = 128,
'Mot D"amitié' = 129,
'Mot Revitalisant' = 130,
'Mot de Regeneration' = 131,
'Mot D"epine' = 132,
'Mot de Jouvence' = 133,
'Mot Vampirique' = 134,
'Mot de Sacrifice' = 135,
'Mot D"immobilisation' = 136,
'Mot D"Envol' = 137,
'Mot de Silence' = 138,
'Mot D"altruisme' = 139,
'Mot de Reconstitution' = 140
}
export namespace SortEniripsa {
  export function values() {
    return Object.keys(SortEniripsa).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
export enum SortIop {
'Pression' = 141,
'Bond' = 142,
'Intimidation' = 143,
'Compulsion' = 144,
'Epée Divine' = 145,
'Epée du Destin' = 146,
'Guide de Bravoure' = 147,
'Amplification' = 148,
'Mutilation' = 149,
'Couper' = 150,
'Souffle' = 151,
'Epée de Jugement' = 152,
'Puissance' = 153,
'Epée Destructrice'= 154,
'Vitalité' = 155,
'Tempete de Puissance' = 156,
'Epée Celeste' = 157,
'Concentration' = 158,
'Colère de Iop' = 159,
'Epée de Iop' = 160
}
export namespace SortIop {
  export function values() {
    return Object.keys(SortIop).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
export enum SortSadida {
'Tremblement' = 181,
'La Folle' = 182,
'Ronce' = 183,
'Feu de Brousse' = 184,
'Herbe Folle' = 185,
'Arbre' = 186,
'La Surpuissante' = 187,
'Ronce Insolente' = 188,
'La sacrifié' = 189,
'La Gonflable' = 190,
'Ronce Multiples' = 191,
'Ronce Apaisante' = 192,
'La Bloqueuse' = 193,
'Ronce Agressive' = 194,
'Larme' = 195,
'Vent Empoisonné' = 196,
'Puissance Sylvestre' = 197,
'Sacrifice Poupesque' = 198,
'Connaissance des Poupées' = 199,
'Poison Paralysant' = 200
}
export namespace SortSadida {
  export function values() {
    return Object.keys(SortSadida).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
export enum SortSacrieur {
'Chatiment Forcé' = 431,
'Pied du Sacrieur' = 432,
'Chatiment Osé' = 433,
'Attirance' = 434,
'Transfert de Vie' = 435,
'Assaut' = 436,
'Chatiment Agile' = 437,
'Transposition' = 438,
'Dissolution' = 439,
'Sacrifice' = 440,
'Chatiment Vitalesque' = 441,
'Absorption' = 442,
'Chatiment Spirituel' = 443,
'Dérobade' = 444,
'Coopération' = 445,
'Puition' = 446,
'Furie' = 447,
'Epée Volante' = 448,
'Détour' = 449,
'Folie Sanguinaire' = 450
}
export namespace SortSacrieur {
  export function values() {
    return Object.keys(SortSacrieur).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
export enum SortPandawa {
'Picole' = 686,
'Poing Enflamé' = 687,
'Vulnérabilité Incandescante' = 688,
'Epouvante' = 689,
'Souffle Alcolisé' = 690,
'Vulnérabilité Aqueuse' = 691,
'Gueule de Bois' = 692,
'Karcham' = 693,
'Vulnérabilité Venteuse' = 694,
'Stabilisation' = 695,
'Chamrak' = 696,
'Vulnérabilité Terrestre' = 697,
'Souillure' = 698,
'Lait de Bambou' = 699,
'Vague a Lames' = 700,
'Colere de Zatoishwan' = 701,
'Flasque Explosive' = 702,
'Pandatak' = 703,
'Pandanlku' = 704,
'Lien Spiriteux' = 705
}
export namespace SortPandawa {
  export function values() {
    return Object.keys(SortPandawa).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
