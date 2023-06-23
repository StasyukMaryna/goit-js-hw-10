import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_KhbXzYnvRrenyDK017lnALRJzTdgDhK2UShY5a41CfeGFPTJ7zzSnqsmtvuONbR5';

export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    console.error('Error fetching breeds:', error);
    throw error;
  }
}
