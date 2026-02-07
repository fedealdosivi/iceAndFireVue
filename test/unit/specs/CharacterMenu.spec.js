import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import CharacterMenu from '@/components/CharacterMenu';

const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0));
const mock = new MockAdapter(axios);

const mockCharacters = [
  { name: 'Jon Snow', gender: 'Male', culture: 'Northmen', aliases: ['Lord Snow'] },
  { name: 'Daenerys Targaryen', gender: 'Female', culture: 'Valyrian', aliases: ['Dany'] },
];

afterEach(() => {
  mock.reset();
});

describe('CharacterMenu.vue', () => {
  it('starts with empty characters and loading false', () => {
    mock.onGet('https://www.anapioficeandfire.com/api/characters').reply(200, []);
    const wrapper = shallowMount(CharacterMenu);
    expect(wrapper.vm.characters).toEqual([]);
  });

  it('fetches characters on created and populates data', async () => {
    mock.onGet('https://www.anapioficeandfire.com/api/characters').reply(200, mockCharacters);
    const wrapper = shallowMount(CharacterMenu);
    await flushPromises();
    expect(wrapper.vm.loading).toBe(false);
    expect(wrapper.vm.characters).toEqual(mockCharacters);
  });

  it('sets characters to empty array on error', async () => {
    mock.onGet('https://www.anapioficeandfire.com/api/characters').reply(500);
    const wrapper = shallowMount(CharacterMenu);
    await flushPromises();
    expect(wrapper.vm.loading).toBe(false);
    expect(wrapper.vm.characters).toEqual([]);
  });
});
