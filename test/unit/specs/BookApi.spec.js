import { describe, it, expect, vi, beforeEach } from 'vitest';

const mockFetch = vi.fn();
vi.stubGlobal('$fetch', mockFetch);

const { useBookApi } = await import('~/composables/useBookApi.js');
const api = useBookApi();
const API = 'https://www.anapioficeandfire.com/api/books';

beforeEach(() => {
  mockFetch.mockReset();
});

describe('useBookApi', () => {
  it('getAllBooks calls the correct URL', async () => {
    mockFetch.mockResolvedValue([{ name: 'A Game of Thrones' }]);
    const result = await api.getAllBooks();
    expect(mockFetch).toHaveBeenCalledWith(API);
    expect(result).toEqual([{ name: 'A Game of Thrones' }]);
  });

  it('getBookById calls the correct URL', async () => {
    mockFetch.mockResolvedValue({ name: 'A Game of Thrones' });
    await api.getBookById(1);
    expect(mockFetch).toHaveBeenCalledWith(`${API}/1`);
  });

  it('getBookByName calls with correct params', async () => {
    mockFetch.mockResolvedValue([]);
    await api.getBookByName('A Game of Thrones');
    expect(mockFetch).toHaveBeenCalledWith(API, { params: { name: 'A Game of Thrones' } });
  });

  it('getBookFromReleaseDate calls with correct params', async () => {
    mockFetch.mockResolvedValue([]);
    await api.getBookFromReleaseDate('1996-08-01');
    expect(mockFetch).toHaveBeenCalledWith(API, { params: { fromReleaseDate: '1996-08-01' } });
  });

  it('getBookToReleaseDate calls with correct params', async () => {
    mockFetch.mockResolvedValue([]);
    await api.getBookToReleaseDate('2000-01-01');
    expect(mockFetch).toHaveBeenCalledWith(API, { params: { toReleaseDate: '2000-01-01' } });
  });
});
