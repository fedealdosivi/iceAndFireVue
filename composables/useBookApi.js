const API = 'https://www.anapioficeandfire.com/api/books';

export const useBookApi = () => ({
  getAllBooks: () => $fetch(API),
  getBookById: (id) => $fetch(`${API}/${id}`),
  getBookByName: (name) => $fetch(API, { params: { name } }),
  getBookFromReleaseDate: (date) => $fetch(API, { params: { fromReleaseDate: date } }),
  getBookToReleaseDate: (date) => $fetch(API, { params: { toReleaseDate: date } }),
});
