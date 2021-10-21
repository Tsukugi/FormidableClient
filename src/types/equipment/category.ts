export interface Equipment {
  fits: Fits;
  image: string;
  misc: Misc;
  nationality: string;
  tiers: (Tier | null)[];
  type: TypeClass;
  id: string;
  wikiUrl: string;
  category: Category;
  names: Names;
}

export enum Category {
  DestroyerGuns = 'Destroyer Guns',
}

export interface Fits {
  destroyer: Destroyer;
  lightCruiser: Battlecruiser;
  heavyCruiser: Battlecruiser;
  monitor: Battlecruiser;
  largeCruiser: Battlecruiser;
  battleship: Battlecruiser;
  battlecruiser: Battlecruiser;
  aviationBattleship: null;
  aircraftCarrier: null;
  lightCarrier: null;
  repairShip: null;
  munitionShip: Destroyer;
  submarine: Destroyer;
  submarineCarrier: null;
}

export enum Battlecruiser {
  AtlantaClassDidoClassAndIsuzuSecondaryGun = 'Atlanta-class, Dido-class, and Isuzu; Secondary gun',
  Secondary = 'secondary',
}

export enum Destroyer {
  Primary = 'primary',
}

export interface Misc {
  blueprints: string;
  madeFrom: string[];
  notes: string;
  usedFor: string[];
  animation: string;
  obtainedFrom: string;
}

export interface Names {
  en: string;
  cn: string;
  jp: null | string;
  kr: null | string;
}

export interface Tier {
  tier: number;
  rarity: Rarity;
  stars: StarsClass;
  stats: Stats;
}

export enum Rarity {
  Elite = 'Elite',
  Normal = 'Normal',
  Rare = 'Rare',
  SuperRare = 'Super Rare',
}

export interface StarsClass {
  stars: StarsEnum;
  value: number;
}

export enum StarsEnum {
  Empty = '★★★',
  Fluffy = '★★',
  Purple = '★',
  Stars = '★★★★',
  Tentacled = '★★★★★',
}

export interface Stats {
  firepower: Antiair;
  antiair?: Antiair;
  damage: Damage;
  rateOfFire: Damage;
  spread: AmmoType;
  angle: AmmoType;
  range?: Range;
  volley: Volley;
  volleyTime: AmmoType;
  coefficient: Coefficient;
  ammoType: AmmoType;
  characteristic: Antiair;
  oPSDamageBoost?: Damage;
}

export interface AmmoType {
  type: AmmoTypeType;
  value: string;
  unit: AmmoTypeUnit;
  formatted: string;
}

export enum AmmoTypeType {
  MinMax = 'min_max',
  ValueUnit = 'value_unit',
}

export enum AmmoTypeUnit {
  ConePattern = '° cone pattern',
  Empty = '°',
  RandomAim = '° random aim',
  S = 's',
  The50 = '/ 50',
  The55 = '/ 55',
  The60 = '/ 60',
  The70 = '/ 70',
}

export interface Antiair {
  type: AntiairType;
  formatted: string;
}

export enum AntiairType {
  Value = 'value',
}

export interface Coefficient {
  type: AmmoTypeType;
  min?: Min;
  max?: string;
  formatted: string;
  value?: string;
  unit?: CoefficientUnit;
}

export enum Min {
  The110 = '110%',
  The115 = '115%',
  The120 = '120%',
  The125 = '125%',
}

export enum CoefficientUnit {
  Empty = '%',
}

export interface Damage {
  type: DamageType;
  min: string;
  max: string;
  multiplier?: string;
  formatted: string;
  per?: Per;
}

export enum Per {
  Volley = 'volley',
}

export enum DamageType {
  MinMax = 'min_max',
  MinMaxMultiplier = 'min_max_multiplier',
  MinMaxPer = 'min_max_per',
}

export interface Range {
  type: RangeType;
  firing: number;
  shell: number;
  formatted: string;
}

export enum RangeType {
  Range = 'range',
}

export interface Volley {
  type: VolleyType;
  multiplier: string;
  count: string;
  unit: VolleyUnit;
  formatted: string;
}

export enum VolleyType {
  MultiplierCountUnit = 'multiplier_count_unit',
}

export enum VolleyUnit {
  Shells = 'shells',
}

export interface TypeClass {
  focus: Focus;
  name: Name;
}

export enum Focus {
  Firepower = 'Firepower',
}

export enum Name {
  DDGun = 'DD Gun',
}


