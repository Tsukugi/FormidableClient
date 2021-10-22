export interface Barrage {
    id:     string;
    type:   Type;
    icon:   string;
    name:   string;
    image?: string;
    ships:  string[];
    hull:   string;
    rounds: Round[];
}

export interface Round {
    type: string;
    dmgL: number;
    dmgM: number;
    dmgH: number;
    note: null | string;
}

export enum Type {
    Class = "class",
    Ship = "ship",
    Skill = "skill",
}
