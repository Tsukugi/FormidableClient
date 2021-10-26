// api_ship.ts
/**
 * Extended ship api functions
 * @packageDocumentation
 */
import { Ship } from '../../types/ships/ship';
import { CacheAPI } from '../state/cacheApi';

export type ShipsAPI = ReturnType<typeof createShipsAPI>;
/**
 * Special ships class for extended functionality
 */
export const createShipsAPI = (props: CacheAPI) => {
  const { get } = props;

  const shipClass = async (name: string): Promise<Ship[]> => await get({ path: `/class`, queries: { name } });

  const hull = async (name: string): Promise<Ship[]> => await get({ path: `/hull`, queries: { name } });

  const id = async (code: string): Promise<Ship> => (await get({ path: `/id`, queries: { code } }))[0];

  const nationality = async (name: string): Promise<Ship[]> => await get({ path: `/nationality`, queries: { name } });

  const rarity = async (name: string): Promise<Ship[]> => await get({ path: `/rarity`, queries: { name } });

  const random = async (): Promise<Ship[]> => await get({ path: `/random` });

  const search = async (name: string): Promise<Ship[]> => await get({ path: `/search`, queries: { name } });

  return { shipClass, hull, id, nationality, rarity, random, search };
};
