const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'api_key=live_KhbXzYnvRrenyDK017lnALRJzTdgDhK2UShY5a41CfeGFPTJ7zzSnqsmtvuONbR5';

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?breed_ids=${breedId}&${API_KEY}`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

export function fetchBreeds(breedId) {
  return fetch(`${BASE_URL}/breeds?${API_KEY}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
