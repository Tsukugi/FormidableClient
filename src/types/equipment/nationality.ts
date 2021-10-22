export interface Equipment {
  fits: { [key: string]: Fit | null };
  image: string;
  misc: Misc;
  nationality: Nationality;
  tiers: (Tier | null)[];
  type: TypeClass;
  id: string;
  wikiUrl: string;
  category: string;
  names: Names;
}

export enum Fit {
  AtlantaClassDidoClassAndIsuzuSecondaryGun = 'Atlanta-class, Dido-class, and Isuzu; Secondary gun',
  FitHoushouOnly = 'Houshou only',
  HoushouOnly = '"Houshou" only',
  OdinOnly = 'Odin only',
  Primary = 'primary',
  Secondary = 'secondary',
  ShirakamiFubukiOnly = 'Shirakami Fubuki only',
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
  kr: null | string;
}

export enum Nationality {
  SakuraEmpire = 'Sakura Empire',
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
  UltraRare = 'Ultra Rare',
}

export interface StarsClass {
  stars: StarsEnum;
  value: number;
}

export enum StarsEnum {
  Empty = '★★★★',
  Fluffy = '★★',
  Purple = '★',
  Stars = '★★★',
  Sticky = '★★★★★★',
  Tentacled = '★★★★★',
}

export interface Stats {
  firepower?: Antiair;
  antiair?: Antiair;
  damage?: Damage;
  oPSDamageBoost?: OPSDamageBoost;
  rateOfFire?: OPSDamageBoost;
  spread?: AmmoType;
  angle?: AmmoType;
  range?: Range;
  volley?: AmmoType;
  volleyTime?: AmmoType;
  coefficient?: Coefficient;
  ammoType?: AmmoType;
  characteristic?: Antiair;
  torpedo?: Antiair;
  noOfTorpedoes?: AmmoType;
  aviation?: Antiair;
  planeHealth?: OPSDamageBoost;
  speed?: Antiair;
  dodgeLimit?: Antiair;
  crashDamage?: Antiair;
  aAGuns?: AAGuns;
  ordnance?: AAGuns;
}

export interface AAGuns {
  type: AAGunsType;
  stats: AmmoType[];
}

export interface AmmoType {
  type: AmmoTypeType;
  count?: string;
  unit?: string;
  formatted: string;
  value?: string;
  multiplier?: string;
}

export enum AmmoTypeType {
  CountUnit = 'count_unit',
  MultiplierCountUnit = 'multiplier_count_unit',
  Value = 'value',
  ValueUnit = 'value_unit',
}

export enum AAGunsType {
  MoreStats = 'more_stats',
  Range = 'range',
  Value = 'value',
}

export interface Antiair {
  type: AmmoTypeType;
  formatted: string;
}

export interface Coefficient {
  type: CoefficientType;
  min?: Min;
  max?: Max;
  formatted: string;
  value?: string;
  unit?: Unit;
}

export enum Max {
  The104 = '104%',
  The114 = '114%',
  The118 = '118%',
  The124 = '124%',
  The125 = '125%',
  The130 = '130%',
}

export enum Min {
  The100 = '100%',
  The105 = '105%',
  The110 = '110%',
  The120 = '120%',
  The125 = '125%',
}

export enum CoefficientType {
  MinMax = 'min_max',
  ValueUnit = 'value_unit',
}

export enum Unit {
  Empty = '%',
}

export interface Damage {
  type: DamageType;
  min: string;
  max: string;
  multiplier?: string;
  formatted: string;
  minMultiplier?: string;
  maxMultiplier?: string;
}

export enum DamageType {
  MinMax = 'min_max',
  MinMaxMinMaxMultiplier = 'min_max_min_max_multiplier',
  MinMaxMultiplier = 'min_max_multiplier',
}

export interface OPSDamageBoost {
  type: OPSDamageBoostType;
  min: string;
  max: string;
  formatted: string;
  mid?: string;
  per?: Per;
}

export enum Per {
  Volley = 'volley',
  Wave = 'wave',
}

export enum OPSDamageBoostType {
  MinMax = 'min_max',
  MinMaxPer = 'min_max_per',
  MinMidMax = 'min_mid_max',
}

export interface Range {
  type: AAGunsType;
  firing?: number;
  shell?: number;
  formatted?: string;
  stats?: Antiair[];
}

export interface TypeClass {
  focus: Focus;
  name: string;
}

export enum Focus {
  AntiAir = 'Anti-air',
  Aviation = 'Aviation',
  Firepower = 'Firepower',
  Torpedo = 'Torpedo',
}
