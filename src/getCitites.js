import { checkError, client } from './client';

export async function getCities(){

  const response = await client
    .from ('cities')
    .select();

  return checkError(response);
      
}