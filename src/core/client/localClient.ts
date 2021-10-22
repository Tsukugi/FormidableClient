import {
  AzurAPIClient,
  createClientFactory,
  GeneratedClientProps,
  ClientTools,
  getClientTools,
} from '@azurapi/azurapi';
import { createShipsAPI, ShipsAPI } from '../api/ships';
import { createEquipmentsAPI, EquipmentsAPI } from '../api/equipment';
import { BarragesAPI, createBarragesAPI } from '../api/barrage';
import { ChaptersAPI, createChaptersAPI } from '../api/chapter';
import { createVoicelinesAPI, VoicelinesAPI } from '../api/voiceline';
import { AzurAPIState, createDispatcher, createStateManager } from '../state';

import { APIProps } from '../../types/client';

export interface FormidableCoreAPI {
  ships: ShipsAPI;
  equipments: EquipmentsAPI;
  chapters: ChaptersAPI;
  voicelines: VoicelinesAPI;
  barrages: BarragesAPI;
}

export interface FormidableClient extends AzurAPIClient<FormidableClientOptions, FormidableCoreAPI> {
  state: AzurAPIState;
  dispatch: ReturnType<typeof createDispatcher>;
  tools?: ClientTools;
}

export interface FormidableClientOptions extends Required<GeneratedClientProps> {
  serverUrl: string;
}

/**
 * Local client
 * @param props Configuration options
 */
export const createLocalClient = (options: Partial<FormidableClientOptions>): FormidableClient => {
  const state: AzurAPIState = createStateManager();
  const dispatch = createDispatcher(state);
  const defaultOptions: FormidableClientOptions = {
    autoupdate: true,
    rate: 3600000,
    useTools: false,
    localPath: './',
    customToolsImpl: undefined,
    serverUrl: 'https://formidable.herokuapp.com',
  };

  const _fetch = async (options): Promise<any> => {
    const { method, serverUrl, path, headers, body } = options;
    const url = `${serverUrl}${path}`;
    const fetchOptions: RequestInit = { method, headers, body };
    return await fetch(url, fetchOptions);
  };

  const props: APIProps = {
    sharedOptions: { serverUrl: options.serverUrl || defaultOptions.serverUrl },
    fetch: _fetch,
  };

  const clientOptions = {
    defaultOptions,
    api: {
      ships: createShipsAPI(props),
      equipments: createEquipmentsAPI(props),
      chapters: createChaptersAPI(props),
      voicelines: createVoicelinesAPI(props),
      barrages: createBarragesAPI(props),
    },
  };

  const formidableClient = createClientFactory<FormidableClientOptions, FormidableCoreAPI>(clientOptions)(options);
  return { ...formidableClient, state, dispatch };
};
