import { Directus } from '@directus/sdk';
import { DataTypes } from '@/shared/model-types';

const directus = new Directus<DataTypes>(process.env.DIRECTUS_URL || '');

export async function getDirectusClient() {
  await directus.auth.static(process.env.DIRECTUS_TOKEN || '');
  return directus;
}
