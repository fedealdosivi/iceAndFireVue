import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import HouseService from '@/services/HouseService';

const mock = new MockAdapter(axios);
const API = 'https://www.anapioficeandfire.com/api/houses';

afterEach(() => {
  mock.reset();
});

describe('HouseService', () => {
  it('getHouses calls the correct URL', async () => {
    mock.onGet(API).reply(200, [{ name: 'House Stark' }]);
    const response = await HouseService.getHouses();
    expect(response.data).toEqual([{ name: 'House Stark' }]);
  });

  it('getHousesById calls the correct URL', async () => {
    mock.onGet(API + '/362').reply(200, { name: 'House Stark of Winterfell' });
    const response = await HouseService.getHousesById(362);
    expect(response.data.name).toBe('House Stark of Winterfell');
  });

  it('getHousesByName calls the correct URL', async () => {
    mock.onGet(API + '?name=Stark').reply(200, [{ name: 'House Stark' }]);
    const response = await HouseService.getHousesByName('Stark');
    expect(response.data).toHaveLength(1);
  });

  it('getHousesByRegion calls the correct URL', async () => {
    mock.onGet(API + '?region=The North').reply(200, []);
    const response = await HouseService.getHousesByRegion('The North');
    expect(response.status).toBe(200);
  });

  it('getHousesWithWords calls the correct URL', async () => {
    mock.onGet(API + '?hasWords=true').reply(200, []);
    const response = await HouseService.getHousesWithWords();
    expect(response.status).toBe(200);
  });
});
