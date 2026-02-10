const API = 'https://www.anapioficeandfire.com/api/characters';

export const useCharacterApi = () => ({
  getCharacters: () => $fetch(API),
  getCharacterByName: (name) => $fetch(API, { params: { name } }),
  getCharacterById: (id) => $fetch(`${API}/${id}`),
  getCharactersByGender: (gender) => $fetch(API, { params: { gender } }),
  getCharactersByCulture: (culture) => $fetch(API, { params: { culture } }),
  getCharactersDead: () => $fetch(API, { params: { isAlive: false } }),
  getCharactersAlive: () => $fetch(API, { params: { isAlive: true } }),
});
