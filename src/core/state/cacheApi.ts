import { FetchTemplate, RequestOptionsTemplate } from '@atsu/multi-env-impl';
import { Section } from '@atsu/taihou';
import { hasNames, SharedAPI, useFetchAPI, Identifiable, WithNames } from '@azurapi/azurapi';
import { Datatype, FormidableState, GenState, StoreActions } from '.';
import { has, isArray } from '../utils';

interface CacheGetProps<Queries extends string> {
  path: string;
  queries?: Record<Queries, string>;
}

export interface CacheAPIProps<State> {
  type: Datatype;
  basePath: string;
  fetch: FetchTemplate;
  sharedOptions: RequestOptionsTemplate;
  formidable: Section<FormidableState, StoreActions, ''>;
  onCache: (type: Datatype, payload: State | State[]) => void;
}

export type CacheAPI = ReturnType<typeof useCacheAPI>;
export const useCacheAPI = (props: CacheAPIProps<GenState>) => {
  const fetchAPI = useFetchAPI({
    fetch: props.fetch,
    basePath: props.basePath,
    sharedOptions: props.sharedOptions,
    logger: (event, data) => console.log(event, data),
  });

  const get = async <Queries extends string>(options: CacheGetProps<Queries>): Promise<any[]> => {
    const { path, queries = {} as Record<Queries, string> } = options;
    const hasQueries = Object.keys(queries).length > 0;

    const query = hasQueries ? stringifyQueries(queries) : '';

    const state: Record<string, GenState> = props.formidable.state[props.type];

    if (has('code', queries) && state[queries.code]) {
      console.log('Return by code: ' + queries.code);
      return [state[queries.code]];
    }
    if (has('name', queries)) {
      const cachedValue = findValueOnCache(state, queries);
      if (cachedValue) return cachedValue;
    }

    const getOptions = { ...props.sharedOptions, path: `${path}${query}` };
    let response = await fetchAPI.get<GenState | GenState[]>(getOptions);

    // ! Force Identifiable as not all datatypes have id on root. (e.g voicelines)
    if (!isArray(response)) {
      if (has('code', queries)) {
        response = { ...response, id: queries.code } as GenState;
      }
      response = [response];
    }

    props.onCache(props.type, response);
    return response;
  };

  return { get };
};

const stringifyQueries = <Q extends string>(queries: Record<Q, string>) => {
  let res = '?';
  Object.keys(queries).forEach((name, index) => {
    if (index !== 0) res += '&';
    res += `${name}=${queries[name]}`;
  });
  return res;
};

const findValueOnCache = <Item extends Identifiable | WithNames>(
  collection: Record<string, Item>,
  queries: Record<string, string>
): Item[] => {
  const array: Item[] = Object.keys(collection).map(id => collection[id]);

  const { name } = queries;

  if (name && hasNames(array)) {
    const value = SharedAPI.getByNames(array).matchAll(name, ['en', 'cn', 'jp']);
    return (value as Item[]) || null;
  }

  return null;
};
