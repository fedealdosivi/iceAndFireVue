import Vue from 'vue';
import Router from 'vue-router';
import toolBar from '../components/tool-bar.vue';
import HomeMenu from '@/components/HomeMenu';
import HouseMenu from '@/components/HouseMenu';
import CharacterMenu from '@/components/CharacterMenu';
import BooksMenu from '@/components/BooksMenu';
import MapWorld from '@/components/MapWorld';
import AboutProject from '@/components/AboutProject';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeMenu',
      component: HomeMenu,
    },
    {
      path: '/houses/',
      name: 'HouseMenu',
      component: HouseMenu,
    },   
    {
      path: '/characters/',
      name: 'CharacterMenu',
      component: CharacterMenu,
    },   
    {
      path: '/books/',
      name: 'BooksMenu',
      component: BooksMenu,
    },   
    {
      path: '/map/',
      name: 'MapWorld',
      component: MapWorld,
    },
    {
      path: '/about/',
      name: 'AboutProject',
      component: AboutProject,
    },
  ],
});
