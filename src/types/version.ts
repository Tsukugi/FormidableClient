export interface Version {
  ships: Equipments;
  equipments: Equipments;
  chapters: Barrages;
  barrages: Barrages;
  voicelines: Barrages;
  'version-number': number;
}

export interface Barrages {
  'version-number': number;
}

export interface Equipments {
  'version-number': number;
  'last-data-refresh-date': number;
  hash: string;
  'number-of-ships'?: number;
}
