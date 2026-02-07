import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import BookService from '@/services/BookService';

const mock = new MockAdapter(axios);
const API = 'https://www.anapioficeandfire.com/api/books';

afterEach(() => {
  mock.reset();
});

describe('BookService', () => {
  it('getAllBooks calls the correct URL', async () => {
    mock.onGet(API).reply(200, [{ name: 'A Game of Thrones' }]);
    const response = await BookService.getAllBooks();
    expect(response.data).toEqual([{ name: 'A Game of Thrones' }]);
  });

  it('getBookById calls the correct URL', async () => {
    mock.onGet(API + '/1').reply(200, { name: 'A Game of Thrones' });
    const response = await BookService.getBookById(1);
    expect(response.data).toEqual({ name: 'A Game of Thrones' });
  });

  it('getBookByName calls the correct URL', async () => {
    mock.onGet(API + '?name=A Game of Thrones').reply(200, [{ name: 'A Game of Thrones' }]);
    const response = await BookService.getBookByName('A Game of Thrones');
    expect(response.data).toHaveLength(1);
  });

  it('getBookFromReleaseDate calls the correct URL', async () => {
    mock.onGet(API + '?fromReleaseDate=1996-08-01').reply(200, []);
    const response = await BookService.getBookFromReleaseDate('1996-08-01');
    expect(response.status).toBe(200);
  });

  it('getBookToReleaseDate calls the correct URL', async () => {
    mock.onGet(API + '?toReleaseDate=2000-01-01').reply(200, []);
    const response = await BookService.getBookToReleaseDate('2000-01-01');
    expect(response.status).toBe(200);
  });
});
