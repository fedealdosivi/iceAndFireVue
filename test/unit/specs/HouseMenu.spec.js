import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import HouseMenu from '@/components/HouseMenu';

const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0));
const mock = new MockAdapter(axios);

const mockHouses = [
  { name: 'House Stark of Winterfell', words: 'Winter is Coming', region: 'The North', coatOfArms: 'A grey direwolf' },
  { name: 'House Lannister of Casterly Rock', words: 'Hear Me Roar!', region: 'The Westerlands', coatOfArms: 'A golden lion' },
];

afterEach(() => {
  mock.reset();
});

describe('HouseMenu.vue', () => {
  it('starts with empty houses and loading false', () => {
    mock.onGet('https://www.anapioficeandfire.com/api/houses').reply(200, []);
    const wrapper = shallowMount(HouseMenu);
    expect(wrapper.vm.houses).toEqual([]);
  });

  it('fetches houses on created and populates data', async () => {
    mock.onGet('https://www.anapioficeandfire.com/api/houses').reply(200, mockHouses);
    const wrapper = shallowMount(HouseMenu);
    await flushPromises();
    expect(wrapper.vm.loading).toBe(false);
    expect(wrapper.vm.houses).toEqual(mockHouses);
  });

  it('sets houses to empty array on error', async () => {
    mock.onGet('https://www.anapioficeandfire.com/api/houses').reply(500);
    const wrapper = shallowMount(HouseMenu);
    await flushPromises();
    expect(wrapper.vm.loading).toBe(false);
    expect(wrapper.vm.houses).toEqual([]);
  });
});
