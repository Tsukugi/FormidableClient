export interface Hull {
  wikiUrl: string;
  id: string;
  _gid: number;
  _sid: number[];
  _code: number;
  names: ShipNames;
  exists: Exists;
  hexagon: number[];
  class: string;
  nationality?: string;
  hullType: HullType;
  thumbnail: string;
  rarity: Rarity;
  stars: number;
  stats: Stats;
  slots: Slot[];
  enhanceValue: EnhanceValue | null;
  scrapValue: ScrapValue | null;
  skills: Skill[];
  limitBreaks?: LimitBreak[][];
  fleetTech: FleetTech;
  construction: Construction;
  obtainedFrom: ObtainedFromClass;
  misc: Misc;
  skins: Skin[];
  gallery: Gallery[];
  devLevels?: DevLevel[];
  retrofit?: boolean;
  retrofitId?: string;
  retrofitProjects?: RetrofitProjects;
  retrofitHullType?: HullType;
}

export interface Construction {
  constructionTime: string;
  availableIn: AvailableIn;
}

export interface AvailableIn {
  light: boolean;
  heavy: boolean | string;
  aviation: boolean | string;
  limited: boolean | string;
  exchange: boolean | string;
}

export interface DevLevel {
  level: string;
  buffs: string[];
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
  collection: Collection | null;
  maxLevel: Collection | null;
}

export interface Collection {
  applicable: HullType[];
  bonus: string;
  stat: Stat;
}

export enum HullType {
  AviationBattleship = 'Aviation battleship',
  Battlecruiser = 'Battlecruiser',
  Battleship = 'Battleship',
}

export enum Stat {
  Accuracy = 'accuracy',
  Antiair = 'antiair',
  Firepower = 'firepower',
  Health = 'health',
  Reload = 'reload',
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

export enum LimitBreak {
  AuxiliaryGunBase2 = 'Auxiliary gun base +2',
  GainsMagneticTorpedo = 'Gains Magnetic Torpedo',
  LimitBreakMainGunEfficiency10 = 'Main gun efficiency +10%',
  LimitBreakMainGunEfficiency15 = 'Main gun efficiency +15%',
  LimitBreakMainGunEfficiency5 = 'Main gun efficiency +5%',
  LimitBreakMainGunMount1 = 'Main gun mount +1',
  LimitBreakSecondaryGunMount2 = 'Secondary gun mount +2',
  MainGunBase1 = 'Main gun base +1',
  MainGunEfficiency10 = 'Main Gun Efficiency +10%',
  MainGunEfficiency15 = 'Main Gun Efficiency +15%',
  MainGunEfficiency5 = 'Main Gun Efficiency +5%',
  MainGunMount1 = 'Main Gun Mount +1',
  PreLoadedMainGun1 = 'Pre-loaded Main Gun +1',
  SecondaryGunMount1 = 'Secondary Gun Mount +1',
  SecondaryGunMount2 = 'Secondary Gun Mount +2',
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
  Wiki?: string;
  Pixiv?: string;
  Twitter?: string;
  Link?: string;
}

export interface Voice {
  name: string;
  url: string;
}

export interface ShipNames {
  en: string;
  code: string;
  cn: string;
  jp: string;
  kr: string;
  tw?: string;
}

export interface ObtainedFromClass {
  obtainedFrom?: string;
  fromMaps: (FromMapClass | string)[];
}

export interface FromMapClass {
  name: string;
  note: string;
}

export enum Rarity {
  Decisive = 'Decisive',
  Elite = 'Elite',
  Normal = 'Normal',
  Priority = 'Priority',
  Rare = 'Rare',
  SuperRare = 'Super Rare',
  UltraRare = 'Ultra Rare',
}

export interface RetrofitProjects {
  A: A;
  B: A;
  C: A;
  D: A;
  E: A;
  F: A;
  G: A;
  H: A;
  I: A;
  J: A;
  K: A;
  L?: A;
}

export interface A {
  id: string;
  attributes: string[];
  materials: string[];
  coins: number;
  level: number;
  levelBreakLevel: number;
  levelBreakStars: string;
  recurrence: number;
  require: string[];
  grade?: Grade;
}

export enum Grade {
  I = 'I',
  Ii = 'II',
}

export interface ScrapValue {
  coin: number;
  oil: number;
  medal: number | null;
}

export interface Skill {
  icon: string;
  names: SkillNames;
  description: string;
  color: Color;
}

export enum Color {
  Deepskyblue = 'deepskyblue',
  Gold = 'gold',
  Pink = 'pink',
}

export interface SkillNames {
  en: string;
  cn: null | string;
  jp: null | string;
}

export interface Skin {
  name: string;
  image: string;
  background: string;
  chibi: string;
  info: Info;
  bg?: string;
}

export interface Info {
  live2dModel: boolean;
  obtainedFrom: ObtainedFromEnum;
  enClient?: string;
  cnClient?: string;
  jpClient?: string;
  cost?: number;
}

export enum ObtainedFromEnum {
  AtréCollabSpend8000OilTotal = 'Atré Collab - Spend 8000 Oil Total',
  Default = 'Default',
  LawsonCollaborationCompleteTheEventTasks = 'Lawson Collaboration - Complete the event tasks.',
  QueenOfTheCampusCompletePaintingNo7 = 'Queen of the Campus - Complete Painting No.7',
  Retrofit = 'Retrofit',
  SkinShop = 'Skin Shop',
  SpecialPartyByTheHarborEventQuestline = 'Special Party by the Harbor Event Questline',
  SummerOffensiveEventReward = 'Summer Offensive? - Event reward',
  Unobtainable = 'Unobtainable',
  VacationOffensiveEventReward = 'Vacation Offensive! - Event reward',
  Wedding = 'Wedding',
}

export interface Slot {
  maxEfficiency: number;
  minEfficiency: number;
  type: Type;
  max: number;
  kaiEfficiency?: number;
}

export enum Type {
  AntiAirGuns = 'Anti-Air Guns',
  BBGuns = 'BB Guns',
  CLDDGuns = 'CL/DD Guns',
  CLDDGunsSeaplanesOnRetrofit = 'CL/DD Guns (Seaplanes on retrofit)',
  DDGuns = 'DD Guns',
}

export interface Stats {
  baseStats: BaseStats;
  level100: BaseStats;
  level120: BaseStats;
  level125: BaseStats;
  level125Retrofit?: BaseStats;
  level120Retrofit?: BaseStats;
  level100Retrofit?: BaseStats;
}

export interface BaseStats {
  health: string;
  armor: Armor;
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

export enum Armor {
  Heavy = 'Heavy',
  Medium = 'Medium',
}
