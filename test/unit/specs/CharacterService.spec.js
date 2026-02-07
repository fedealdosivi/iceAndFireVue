import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import CharacterService from '@/services/CharacterService';

const mock = new MockAdapter(axios);
const API = 'https://www.anapioficeandfire.com/api/characters';

afterEach(() => {
  mock.reset();
});

describe('CharacterService', () => {
  it('getCharacters calls the correct URL', async () => {
    mock.onGet(API).reply(200, [{ name: 'Jon Snow' }]);
    const response = await CharacterService.getCharacters();
    expect(response.data).toEqual([{ name: 'Jon Snow' }]);
  });

  it('getCharacterByName calls the correct URL', async () => {
    mock.onGet(API + '?name=Jon Snow').reply(200, [{ name: 'Jon Snow' }]);
    const response = await CharacterService.getCharacterByName('Jon Snow');
    expect(response.data).toHaveLength(1);
  });

  it('getCharacterById calls the correct URL', async () => {
    mock.onGet(API + '/583').reply(200, { name: 'Jon Snow' });
    const response = await CharacterService.getCharacterById(583);
    expect(response.data.name).toBe('Jon Snow');
  });

  it('getCharactersByGender calls the correct URL', async () => {
    mock.onGet(API + '?gender=Female').reply(200, []);
    const response = await CharacterService.getCharactersByGender('Female');
    expect(response.status).toBe(200);
  });

  it('getCharactersAlive calls the correct URL', async () => {
    mock.onGet(API + '?isAlive=true').reply(200, []);
    const response = await CharacterService.getCharactersAlive();
    expect(response.status).toBe(200);
  });

  it('getCharactersDead calls the correct URL', async () => {
    mock.onGet(API + '?isAlive=false').reply(200, []);
    const response = await CharacterService.getCharactersDead();
    expect(response.status).toBe(200);
  });
});
