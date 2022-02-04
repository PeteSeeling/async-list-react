import { checkError, client } from './client';

export async function getAnimals(){
  const response = await client
    .from ('animals')
    .select();

  return checkError(response);
}