import { createSection, DataSet, DataSetUtils, Section } from '@azurapi/azurapi';
import { Barrage } from '../../types/barrages';
import { Chapter } from '../../types/chapters';
import { Equipment } from '../../types/equipment/category';
import { Ship } from '../../types/ships/ship';
import { Voiceline } from '../../types/voicelines';

export type Datatype = keyof AzurAPIState;
export interface AzurAPIState {
  ships: Section<DataSet<Ship>>;
  barrages: Section<DataSet<Barrage>>;
  equipments: Section<DataSet<Equipment>>;
  voicelines: Section<DataSet<Voiceline>>;
  chapters: Section<DataSet<Chapter>>;
}

const setDataSet = <P, S extends DataSet<P>>(payload: P[], state: S) => {
  state.array = payload;
  state.dict = DataSetUtils.createDictionary(payload, 'id');
};

const defaultActions = () => ({ set: setDataSet });
const defaultDataSet = <T>(): DataSet<T> => ({ dict: {}, array: [] });
export const createStateManager = (): AzurAPIState => ({
  ships: createSection<DataSet<Ship>>({ state: defaultDataSet(), actions: defaultActions() }),
  barrages: createSection<DataSet<Barrage>>({ state: defaultDataSet(), actions: defaultActions() }),
  equipments: createSection<DataSet<Equipment>>({ state: defaultDataSet(), actions: defaultActions() }),
  chapters: createSection<DataSet<Chapter>>({ state: defaultDataSet(), actions: defaultActions() }),
  voicelines: createSection<DataSet<Voiceline>>({ state: defaultDataSet(), actions: defaultActions() }),
});

export type ClientStateDispatcher = ReturnType<typeof createDispatcher>;
export const createDispatcher = (state: AzurAPIState) => ({}); //TODO: Implement me
