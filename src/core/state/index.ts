import { createSection, createStore, Section } from '@atsu/taihou';
import { Identifiable } from '@azurapi/azurapi';
import { Barrage } from '../../types/barrages';
import { Chapter } from '../../types/chapters';
import { Equipment } from '../../types/equipment/category';
import { Ship } from '../../types/ships/ship';
import { Voicelines } from '../../types/voicelines';
import { isArray } from '../utils';

export type GenState = Ship | Barrage | Equipment | Voicelines | Chapter;

export type Datatype = keyof FormidableState;
export interface FormidableState {
  ships: Record<string, Ship>;
  barrages: Record<string, Barrage>;
  equipments: Record<string, Equipment>;
  voicelines: Record<string, Voicelines>;
  chapters: Record<string, Chapter>;
}

interface UpdatePayload {
  type: Datatype;
  value: Record<string, any>;
}

export enum StoreActions {
  update = 'update',
}

export type FormidableSection = Section<FormidableState, StoreActions, ''>;

export const initStore = () => {
  const { store } = createStore({
    formidable: createSection<FormidableState, StoreActions, ''>({
      state: {
        ships: {},
        barrages: {},
        equipments: {},
        voicelines: {},
        chapters: {},
      },

      actions: {
        update: ({ type, value }: UpdatePayload, state) => {
          const update = { ...state[type], ...value };
          return { ...state, [type]: { ...state[type], ...update } };
        },
      },
    }),
  });

  return store;
};

export const prepareRecord = <T extends Identifiable>(value: T | T[]): Record<string, T> => {
  let obj = {} as Record<string, T>;
  if (isArray(value)) value.forEach(item => (obj[item.id] = item));
  else obj[value.id] = value;

  return obj;
};
