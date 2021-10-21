export interface Class {
  wikiUrl: string;
  id: string;
  _gid: number;
  _sid: number[];
  _code: number;
  names: Welcome9Names;
  exists: Exists;
  hexagon: number[];
  class: string;
  nationality: string;
  hullType: string;
  thumbnail: string;
  rarity: string;
  stars: number;
  stats: Stats;
  slots: Slot[];
  enhanceValue: EnhanceValue;
  scrapValue: ScrapValue;
  skills: Skill[];
  limitBreaks: string[][];
  fleetTech: FleetTech;
  construction: Construction;
  obtainedFrom: ObtainedFrom;
  misc: Misc;
  skins: Skin[];
  gallery: Gallery[];
}

export interface Construction {
  constructionTime: string;
  availableIn: AvailableIn;
}

export interface AvailableIn {
  light: boolean;
  heavy: boolean;
  aviation: boolean;
  limited: string;
  exchange: boolean;
}

export interface EnhanceValue {
  firepower: number;
  torpedo: number;
  aviation: number;
  reload: number;
}

export interface Exists {
  en: boolean;
  cn: boolean;
  jp: boolean;
  kr: boolean;
}

export interface FleetTech {
  statsBonus: StatsBonus;
  techPoints: TechPoints;
}

export interface StatsBonus {
  collection: Collection;
  maxLevel: Collection;
}

export interface Collection {
  applicable: string[];
  bonus: string;
  stat: string;
}

export interface TechPoints {
  collection: number;
  maxLimitBreak: number;
  maxLevel: number;
  total: number;
}

export interface Gallery {
  description: string;
  url: string;
}

export interface Misc {
  artist: Artist;
  voice: Voice;
}

export interface Artist {
  name: string;
  urls: Urls;
}

export interface Urls {
  Wiki: string;
  Twitter: string;
  Link: string;
}

export interface Voice {
  name: string;
  url: string;
}

export interface Welcome9Names {
  en: string;
  code: string;
  cn: string;
  jp: string;
  kr: string;
}

export interface ObtainedFrom {
  obtainedFrom: string;
  fromMaps: any[];
}

export interface ScrapValue {
  coin: number;
  oil: number;
  medal: number;
}

export interface Skill {
  icon: string;
  names: SkillNames;
  description: string;
  color: string;
}

export interface SkillNames {
  en: string;
  cn: string;
  jp: string;
}

export interface Skin {
  name: string;
  image: string;
  background: string;
  chibi: string;
  info: Info;
  bg: string;
}

export interface Info {
  live2dModel: boolean;
  obtainedFrom: string;
  enClient?: string;
  cnClient?: string;
  jpClient?: string;
  cost?: number;
}

export interface Slot {
  maxEfficiency: number;
  minEfficiency: number;
  type: string;
  max: number;
}

export interface Stats {
  baseStats: BaseStats;
  level100: BaseStats;
  level120: BaseStats;
  level125: BaseStats;
}

export interface BaseStats {
  health: string;
  armor: string;
  reload: string;
  luck: string;
  firepower: string;
  torpedo: string;
  evasion: string;
  speed: string;
  antiair: string;
  aviation: string;
  oilConsumption: string;
  accuracy: string;
  antisubmarineWarfare: string;
}
