import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import BooksMenu from '@/components/BooksMenu';

const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0));
const mock = new MockAdapter(axios);

const mockBooks = [
  { name: 'A Game of Thrones', numberOfPages: 694, publisher: 'Bantam Books', released: '1996-08-01T00:00:00' },
  { name: 'A Clash of Kings', numberOfPages: 768, publisher: 'Bantam Books', released: '1998-11-16T00:00:00' },
];

afterEach(() => {
  mock.reset();
});

describe('BooksMenu.vue', () => {
  it('starts with empty books and loading false', () => {
    mock.onGet('https://www.anapioficeandfire.com/api/books').reply(200, []);
    const wrapper = shallowMount(BooksMenu);
    expect(wrapper.vm.books).toEqual([]);
  });

  it('sets loading to true then false after fetch', async () => {
    mock.onGet('https://www.anapioficeandfire.com/api/books').reply(200, mockBooks);
    const wrapper = shallowMount(BooksMenu);
    await flushPromises();
    expect(wrapper.vm.loading).toBe(false);
    expect(wrapper.vm.books).toEqual(mockBooks);
  });

  it('sets books to empty array on error', async () => {
    mock.onGet('https://www.anapioficeandfire.com/api/books').reply(500);
    const wrapper = shallowMount(BooksMenu);
    await flushPromises();
    expect(wrapper.vm.loading).toBe(false);
    expect(wrapper.vm.books).toEqual([]);
  });
});
