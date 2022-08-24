import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '928f1abd5emsh2a3e664c96b035cp11e88fjsn2cb9e9cd23db' ,
    },
  });
    
  return data;
}