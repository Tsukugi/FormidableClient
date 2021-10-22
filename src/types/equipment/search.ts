export interface Welcome8 {
  fits: { [key: string]: Fit | null };
  image: string;
  misc: Misc;
  nationality: Nationality;
  tiers: (Tier | null)[];
  type: TypeClass;
  id: string;
  wikiUrl: string;
  category: Category;
  names: Names;
}

export enum Category {
  AntiAirGuns = 'Anti-Air Guns',
  BattleshipGuns = 'Battleship Guns',
  LightCruiserGuns = 'Light Cruiser Guns',
}

export enum Fit {
  HoushouOnly = '"Houshou" only',
  Primary = 'primary',
  Secondary = 'secondary',
  Type1936AClassOnly = 'Type 1936A-class only',
  ZeppyBéarnAndEagleOnly = '"Zeppy, Béarn and Eagle" only',
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
  jp: string;
  kr: string;
}

export enum Nationality {
  RoyalNavy = 'Royal Navy',
  SakuraEmpire = 'Sakura Empire',
}

export interface Tier {
  tier: number;
  rarity: Rarity;
  stars: Stars;
  stats: Stats;
}

export enum Rarity {
  Elite = 'Elite',
  Normal = 'Normal',
  Rare = 'Rare',
  SuperRare = 'Super Rare',
}

export interface Stars {
  stars: string;
  value: number;
}

export interface Stats {
  firepower?: Accuracy;
  antiair: Accuracy;
  damage: Damage;
  rateOfFire: Damage;
  spread?: AmmoType;
  angle: AmmoType;
  range: Range;
  volley?: Volley;
  volleyTime?: AmmoType;
  coefficient?: Coefficient;
  ammoType: AmmoType;
  characteristic?: Accuracy;
  oPSDamageBoost?: Damage;
  accuracy?: Accuracy;
}

export interface Accuracy {
  type: AccuracyType;
  formatted: string;
}

export enum AccuracyType {
  Value = 'value',
  ValueUnit = 'value_unit',
}

export interface AmmoType {
  type: AccuracyType;
  value?: string;
  unit?: string;
  formatted: string;
}

export interface Coefficient {
  type: CoefficientType;
  value?: string;
  unit?: string;
  formatted: string;
  min?: Min;
  max?: string;
}

export enum Min {
  The100 = '100%',
  The110 = '110%',
}

export enum CoefficientType {
  MinMax = 'min_max',
  ValueUnit = 'value_unit',
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
  formatted: string;
  firing?: number;
  shell?: number;
}

export enum RangeType {
  Range = 'range',
  Value = 'value',
}

export interface Volley {
  type: string;
  multiplier: string;
  count: string;
  unit: string;
  formatted: string;
}

export interface TypeClass {
  focus: Focus;
  name: Name;
}

export enum Focus {
  AntiAir = 'Anti-air',
  Firepower = 'Firepower',
}

export enum Name {
  AAGun = 'AA Gun',
  BBGun = 'BB Gun',
  CLGun = 'CL Gun',
}
