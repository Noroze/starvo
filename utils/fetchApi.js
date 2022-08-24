import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '1df4bcb37dmshf1faccce46a0017p1340cdjsn1edd168dde27' ,
    },
  });
    
  return data;
}