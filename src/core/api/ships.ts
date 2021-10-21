// api_ship.ts
/**
 * Extended ship api functions
 * @packageDocumentation
 */
import { Ship } from '../../types/ships/ship';
import { useFetchAPI } from '@azurapi/azurapi';
import { APIProps } from '../../types/client';

export type ShipsAPI = ReturnType<typeof createShipsAPI>;
/**
 * Special ships class for extended functionality
 */
export const createShipsAPI = (props: APIProps) => {
  const { fetch, sharedOptions } = props;
  const fetchAPI = useFetchAPI({ basePath: '/ships', fetch, sharedOptions });

  const shipClass = async (name: string): Promise<Ship[]> => await fetchAPI.get({ path: `/class?name=${name}` });

  const hull = async (name: string): Promise<Ship[]> => await fetchAPI.get({ path: `/hull?name=${name}` });

  const id = async (code: string): Promise<Ship> => await fetchAPI.get({ path: `/id?code=${code}` });

  const nationality = async (name: string): Promise<Ship[]> =>
    await fetchAPI.get({ path: `/nationality?name=${name}` });

  const rarity = async (name: string): Promise<Ship[]> => await fetchAPI.get({ path: `/rarity?name=${name}` });

  const random = async (): Promise<Ship[]> => await fetchAPI.get({ path: `/random` });

  const search = async (name: string): Promise<Ship[]> => await fetchAPI.get({ path: `/search?name=${name}` });

  return { shipClass, hull, id, nationality, rarity, random, search };
};
