import { FetchTemplate, RequestOptionsTemplate } from '@azurapi/azurapi';

export interface APIProps {
  sharedOptions: RequestOptionsTemplate;
  fetch: FetchTemplate;
}
