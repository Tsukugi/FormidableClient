// api_equipment.ts
/**
 * Extended equipment api functions
 * @packageDocumentation
 */

import { Equipment } from '../../types/equipment/category';
import { CacheAPI } from '../state/cacheApi';

export type EquipmentsAPI = ReturnType<typeof createEquipmentsAPI>;
/**
 * Special equipments class for extended functionality
 */
export const createEquipmentsAPI = (props: CacheAPI) => {
  const { get } = props;

  const category = async (name: string): Promise<Equipment[]> => await get({ path: `/category`, queries: { name } });

  const nationality = async (name: string): Promise<Equipment[]> =>
    await get({ path: `/nationality`, queries: { name } });

  const search = async (name: string): Promise<Equipment[]> => await get({ path: `/search`, queries: { name } });

  return { category, nationality, search };
};
