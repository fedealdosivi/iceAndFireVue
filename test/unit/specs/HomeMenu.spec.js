import { shallowMount } from '@vue/test-utils';
import HomeMenu from '@/components/HomeMenu';

describe('HomeMenu.vue', () => {
  it('renders the title', () => {
    const wrapper = shallowMount(HomeMenu);
    expect(wrapper.find('h1').text()).toBe('A Song of Ice and Fire');
  });

  it('renders the subtitle', () => {
    const wrapper = shallowMount(HomeMenu);
    expect(wrapper.find('.subtitle').text()).toBe('Explore the world of Westeros and Essos');
  });

  it('renders three navigation cards', () => {
    const wrapper = shallowMount(HomeMenu);
    const titles = wrapper.findAll('.md-title');
    expect(titles).toHaveLength(3);
    expect(titles.at(0).text()).toBe('Books');
    expect(titles.at(1).text()).toBe('Houses');
    expect(titles.at(2).text()).toBe('Characters');
  });
});
