// api_chapters.ts
/**
 * Extended chapter api functions
 * @packageDocumentation
 */
import { Chapter } from '../../types/chapters';
import { CacheAPI } from '../state/cacheApi';

export type ChaptersAPI = ReturnType<typeof createChaptersAPI>;
export const createChaptersAPI = (props: CacheAPI) => {
  const { get } = props;
  const search = async (name: string): Promise<Chapter> => (await get({ path: `/search`, queries: { name } }))[0];

  return { search };
};
