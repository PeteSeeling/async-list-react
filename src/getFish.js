import { checkError, client } from './client';

export async function getFish(){

  const response = await client
    .from ('fish')
    .select();

  return checkError(response);
      
}