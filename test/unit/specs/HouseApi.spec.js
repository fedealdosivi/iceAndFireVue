import { describe, it, expect, vi, beforeEach } from 'vitest';

const mockFetch = vi.fn();
vi.stubGlobal('$fetch', mockFetch);

const { useHouseApi } = await import('~/composables/useHouseApi.js');
const api = useHouseApi();
const API = 'https://www.anapioficeandfire.com/api/houses';

beforeEach(() => {
  mockFetch.mockReset();
});

describe('useHouseApi', () => {
  it('getHouses calls the correct URL', async () => {
    mockFetch.mockResolvedValue([{ name: 'House Stark' }]);
    const result = await api.getHouses();
    expect(mockFetch).toHaveBeenCalledWith(API);
    expect(result).toEqual([{ name: 'House Stark' }]);
  });

  it('getHousesById calls the correct URL', async () => {
    mockFetch.mockResolvedValue({ name: 'House Stark of Winterfell' });
    const result = await api.getHousesById(362);
    expect(mockFetch).toHaveBeenCalledWith(`${API}/362`);
    expect(result.name).toBe('House Stark of Winterfell');
  });

  it('getHousesByName calls with correct params', async () => {
    mockFetch.mockResolvedValue([]);
    await api.getHousesByName('Stark');
    expect(mockFetch).toHaveBeenCalledWith(API, { params: { name: 'Stark' } });
  });

  it('getHousesByRegion calls with correct params', async () => {
    mockFetch.mockResolvedValue([]);
    await api.getHousesByRegion('The North');
    expect(mockFetch).toHaveBeenCalledWith(API, { params: { region: 'The North' } });
  });

  it('getHousesWithWords calls with correct params', async () => {
    mockFetch.mockResolvedValue([]);
    await api.getHousesWithWords();
    expect(mockFetch).toHaveBeenCalledWith(API, { params: { hasWords: true } });
  });
});
