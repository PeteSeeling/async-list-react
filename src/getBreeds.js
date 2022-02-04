import { checkError, client } from './client';

export async function getBreeds(){
   
  const response = await client
    .from ('breeds')
    .select();

  return checkError(response);
}