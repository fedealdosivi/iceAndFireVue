import { describe, it, expect, vi, beforeEach } from 'vitest';

const mockFetch = vi.fn();
vi.stubGlobal('$fetch', mockFetch);

const { useCharacterApi } = await import('~/composables/useCharacterApi.js');
const api = useCharacterApi();
const API = 'https://www.anapioficeandfire.com/api/characters';

beforeEach(() => {
  mockFetch.mockReset();
});

describe('useCharacterApi', () => {
  it('getCharacters calls the correct URL', async () => {
    mockFetch.mockResolvedValue([{ name: 'Jon Snow' }]);
    const result = await api.getCharacters();
    expect(mockFetch).toHaveBeenCalledWith(API);
    expect(result).toEqual([{ name: 'Jon Snow' }]);
  });

  it('getCharacterByName calls with correct params', async () => {
    mockFetch.mockResolvedValue([]);
    await api.getCharacterByName('Jon Snow');
    expect(mockFetch).toHaveBeenCalledWith(API, { params: { name: 'Jon Snow' } });
  });

  it('getCharacterById calls the correct URL', async () => {
    mockFetch.mockResolvedValue({ name: 'Jon Snow' });
    await api.getCharacterById(583);
    expect(mockFetch).toHaveBeenCalledWith(`${API}/583`);
  });

  it('getCharactersByGender calls with correct params', async () => {
    mockFetch.mockResolvedValue([]);
    await api.getCharactersByGender('Female');
    expect(mockFetch).toHaveBeenCalledWith(API, { params: { gender: 'Female' } });
  });

  it('getCharactersAlive calls with correct params', async () => {
    mockFetch.mockResolvedValue([]);
    await api.getCharactersAlive();
    expect(mockFetch).toHaveBeenCalledWith(API, { params: { isAlive: true } });
  });

  it('getCharactersDead calls with correct params', async () => {
    mockFetch.mockResolvedValue([]);
    await api.getCharactersDead();
    expect(mockFetch).toHaveBeenCalledWith(API, { params: { isAlive: false } });
  });
});
