import { createShipsAPI, ShipsAPI } from '../api/ship';
import { createEquipmentsAPI, EquipmentsAPI } from '../api/equipment';
import { BarragesAPI, createBarragesAPI } from '../api/barrage';
import { ChaptersAPI, createChaptersAPI } from '../api/chapter';
import { createVoicelinesAPI, VoicelinesAPI } from '../api/voiceline';
import { FormidableState, GenState, initStore, prepareRecord, StoreActions } from '../state';

import { Client, CreateClientProps } from '@azurapi/azurapi';
import { ImplHandler } from '@atsu/multi-env-impl';
import { Datatype } from '@azurapi/azurapi/build/core/state';
import { useCacheAPI } from '../state/cacheApi';

export interface FormidableCoreAPI {
  ships: ShipsAPI;
  equipments: EquipmentsAPI;
  chapters: ChaptersAPI;
  voicelines: VoicelinesAPI;
  barrages: BarragesAPI;
}

export interface FormidableClientOptions extends CreateClientProps {
  serverUrl: string;
}

const defaultOptions: FormidableClientOptions = {
  autoupdate: true,
  rate: 3600000,
  useTools: false,
  localPath: './',
  customToolsImpl: undefined,
  serverUrl: 'https://formidable.herokuapp.com',
};

/**
 * Local client
 * @param props Configuration options
 */
export const createLocalClient = (
  props: Partial<FormidableClientOptions>
): Client<FormidableClientOptions, FormidableCoreAPI, FormidableState> => {
  const options = { ...defaultOptions, ...props };
  const store = initStore();

  const sharedProps = {
    sharedOptions: { serverUrl: options.serverUrl || defaultOptions.serverUrl },
    fetch: ImplHandler.fetch,
    formidable: store.formidable,
    onCache: (type: Datatype, payload: GenState | GenState[]) =>
      store.formidable.commit(StoreActions.update, { type, value: prepareRecord(payload) }),
  };

  const api = {
    ships: createShipsAPI(
      useCacheAPI({
        ...sharedProps,
        type: 'ships',
        basePath: '/ships',
      })
    ),
    equipments: createEquipmentsAPI(
      useCacheAPI({
        ...sharedProps,
        type: 'equipments',
        basePath: '/equipments',
      })
    ),
    chapters: createChaptersAPI(
      useCacheAPI({
        ...sharedProps,
        type: 'chapters',
        basePath: '/chapters',
      })
    ),
    voicelines: createVoicelinesAPI(
      useCacheAPI({
        ...sharedProps,
        type: 'voicelines',
        basePath: '/voicelines',
      })
    ),
    barrages: createBarragesAPI(
      useCacheAPI({
        ...sharedProps,
        type: 'barrages',
        basePath: '/barrages',
      })
    ),
  };

  return {
    api,
    options,
    state: store.formidable.state,
  };
};
