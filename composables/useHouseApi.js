const API = 'https://www.anapioficeandfire.com/api/houses';

export const useHouseApi = () => ({
  getHouses: () => $fetch(API),
  getHousesById: (id) => $fetch(`${API}/${id}`),
  getHousesByName: (name) => $fetch(API, { params: { name } }),
  getHousesByRegion: (region) => $fetch(API, { params: { region } }),
  getHousesWithWords: () => $fetch(API, { params: { hasWords: true } }),
  getHousesWithTitles: () => $fetch(API, { params: { hasTitles: true } }),
  getHousesWithSeats: () => $fetch(API, { params: { hasSeats: true } }),
  getHousesHasDied: () => $fetch(API, { params: { hasDiedOut: true } }),
  getHousesWithAncestralWeapons: () => $fetch(API, { params: { hasAncestralWeapons: true } }),
});
