// api_barrage.ts
/**
 * Extended barrage api functions
 * @packageDocumentation
 */

import { Barrage } from '../../types/barrages';
import { CacheAPI } from '../state/cacheApi';

export type BarragesAPI = ReturnType<typeof createBarragesAPI>;
/**
 * Special barrage class for extended functionality
 */

export const createBarragesAPI = (props: CacheAPI) => {
  const { get } = props;

  const search = async (name: string): Promise<Barrage[]> => await get({ path: `/search`, queries: { name } });

  return { search };
};
