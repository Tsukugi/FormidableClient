export interface Chapter {
  id: string;
  names: Names;
  normal: Normal;
  hard: Hard;
}

export interface Hard {
  title: string;
  code: string;
  introduction: string;
  unlockRequirements: UnlockRequirements;
  threeStarRewards: ThreeStarReward[];
  enemyLevel: EnemyLevel;
  baseXP: BaseXP;
  requiredBattles: number;
  bossKillsToClear: number;
  starConditions: string[];
  airSupremacy: AirSupremacy;
  fleetRestrictions: FleetRestrictions;
  statRestrictions: StatRestrictions;
  mapDrops: string[];
  additionalNotes: string;
  blueprintDrops: BlueprintDrop[];
  shipDrops: (ShipDropClass | string)[];
  nodeMap: NodeMap;
}

export interface AirSupremacy {
  actual: number;
  superiority: number;
  supremacy: number;
}

export interface BaseXP {
  smallFleet: number;
  mediumFleet: number;
  largeFleet: number;
  bossFleet: number;
}

export interface BlueprintDrop {
  name: string;
  tier: Tier;
}

export enum Tier {
  T2 = 'T2',
  T3 = 'T3',
}

export interface EnemyLevel {
  mobLevel: number;
  bossLevel: number;
  boss: string;
}

export interface FleetRestrictions {
  fleet1: Fleet1;
  fleet2: Fleet2;
}

export interface Fleet1 {
  aircraftCarrier: number;
  battleship: number;
  heavyCruiser: number;
  lightCruiser: number;
}

export interface Fleet2 {
  aircraftCarrier: number;
  battlecruiser: number;
  heavyCruiser: number;
  destroyer: number;
}

export interface NodeMap {
  width: number;
  height: number;
  map: Map[][];
  nodes: Node[];
}

export enum Map {
  BossSpawn = 'Boss spawn',
  EnemySpawn = 'Enemy spawn',
  FleetSpawn = 'Fleet spawn',
  Land = 'Land',
  ResupplyNode = 'Resupply node',
  Sea = 'Sea',
  SecretNode = 'Secret node',
  SubmarineSpawn = 'Submarine Spawn',
}

export interface Node {
  x: number;
  y: number;
  node: Map;
}

export interface ShipDropClass {
  name: string;
  note: string;
}

export interface StatRestrictions {
  averageLevel: number;
  torpedo: number;
  evasion: number;
}

export interface ThreeStarReward {
  item: string;
  count?: number;
}

export interface UnlockRequirements {
  text: string;
  requiredLevel: number;
}

export interface Names {
  en: string;
  cn: string;
  jp: string;
}

export interface Normal {
  title: string;
  code: string;
  introduction: string;
  unlockRequirements: UnlockRequirements;
  clearRewards: ClearRewards;
  threeStarRewards: ThreeStarReward[];
  enemyLevel: EnemyLevel;
  baseXP: BaseXP;
  requiredBattles: number;
  bossKillsToClear: number;
  starConditions: string[];
  airSupremacy: AirSupremacy;
  mapDrops: string[];
  additionalNotes: string;
  blueprintDrops: BlueprintDrop[];
  shipDrops: (ShipDropClass | string)[];
  nodeMap: NodeMap;
}

export interface ClearRewards {
  cube: number;
  coin: number;
  oil: number;
}
