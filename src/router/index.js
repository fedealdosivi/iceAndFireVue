import Vue from 'vue';
import Router from 'vue-router';
import toolBar from '../components/tool-bar.vue';
import HomeMenu from '@/components/HomeMenu';
import HouseMenu from '@/components/HouseMenu';
import CharacterMenu from '@/components/CharacterMenu';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeMenu',
      component: HomeMenu,
    },
    {
      path: '/House/',
      name: 'HouseMenu',
      component: HouseMenu,
    },   
    {
      path: '/Character/',
      name: 'CharacterMenu',
      component: CharacterMenu,
    },
  ],
});
