export type Voicelines = Record<string, Voiceline>;

export interface Voiceline {
  event: string;
  zh?: string;
  ja?: string;
  en: string;
  audio?: string;
  audioAlt?: string[];
}
