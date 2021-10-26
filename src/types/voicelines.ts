import { Identifiable } from '@azurapi/azurapi';

export type Voicelines = Identifiable & Record<string, Voiceline>;

export interface Voiceline {
  id: string;
  skin: string;
  event: string;
  zh?: string;
  ja?: string;
  en: string;
  audio?: string;
  audioAlt?: string[];
}
