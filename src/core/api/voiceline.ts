// api_voiceline.ts
/**
 * Extended chapter api functions
 * @packageDocumentation
 */

import { Voicelines } from '../../types/voicelines';
import { CacheAPI } from '../state/cacheApi';

export type VoicelinesAPI = ReturnType<typeof createVoicelinesAPI>;
export const createVoicelinesAPI = (props: CacheAPI) => {
  const { get } = props;

  const ship = async (id: string): Promise<Voicelines> => (await get({ path: `/ship`, queries: { id } }))[0];

  return { ship };
};
