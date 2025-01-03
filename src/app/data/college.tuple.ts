// exemple : 2020;GRENOBLE;ARDECHE;ANNONAY;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;712;168;80;88;0;193;07100

export type DataCollege = [
    rentree_scolaire: number,
    denomination_principale: string,
    patronyme: string,
    secteur: "PUBLIC" | "PRIVE",
    rep: boolean,
    rep_plus: boolean,
    nombre_eleves_total: number,
    code_postal: string // ou number ?
]