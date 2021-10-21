// api_equipment.ts
/**
 * Extended equipment api functions
 * @packageDocumentation
 */

import { APIProps } from '../../types/client';
import { useFetchAPI } from '@azurapi/azurapi';

export type EquipmentsAPI = ReturnType<typeof createEquipmentsAPI>;
/**
 * Special equipments class for extended functionality
 */
export const createEquipmentsAPI = (props: APIProps) => {
  const { fetch, sharedOptions } = props;
  const fetchAPI = useFetchAPI({ basePath: '/ships', fetch, sharedOptions });

  return {};
};
