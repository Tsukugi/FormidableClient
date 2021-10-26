import { BarragesAPI } from '../api/barrage';
import { ChaptersAPI } from '../api/chapter';
import { EquipmentsAPI } from '../api/equipment';
import { ShipsAPI } from '../api/ship';
import { VoicelinesAPI } from '../api/voiceline';
import { FormidableState } from '../state';
import { FormidableCoreAPI, createLocalClient, FormidableClientOptions } from './client';
import { ClientTools } from '@azurapi/azurapi';

export class FormidableAPI {
  public options: FormidableClientOptions;
  public ships: ShipsAPI;
  public equipments: EquipmentsAPI;
  public chapters: ChaptersAPI;
  public voicelines: VoicelinesAPI;
  public barrages: BarragesAPI;
  public api: FormidableCoreAPI;
  public state: FormidableState;
  public tools: ClientTools;

  constructor(options: Partial<FormidableClientOptions> = {}) {
    const client = createLocalClient(options);
    this.options = client.options;
    this.ships = client.api.ships;
    this.api = client.api;
    this.equipments = client.api.equipments;
    this.chapters = client.api.chapters;
    this.voicelines = client.api.voicelines;
    this.barrages = client.api.barrages;
    this.state = client.state;
    this.tools = client.tools;
  }
}
