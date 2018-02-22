<template>
      <md-toolbar class="my-toolbar" md-elevation="1">
      <h3 class="my-title">Song of Ice and Fire</h3>
      <md-button class="my-title" :href="'/#/books'">Books</md-button>
      <md-button class="my-title" :href="'/#/houses'">Houses</md-button>
      <md-button class="my-title" :href="'/#/characters'">Characters</md-button>
      <md-button class="my-title" :href="'/#/map'">Map of the world</md-button>
      <md-button class="my-title" :href="'/#/about'">About the Project</md-button>
    </md-toolbar>
</template>

<script>
import ApiService from '../services/ApiService';
export default {
  name: 'toolBar',
  data() {
    return {
    };
  },

};
</script>
<style lang="scss" scoped>
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
  }
  .my-toolbar{
    background-color: darkblue;
  }
  .my-title{
    color: cornsilk;
  }
</style>
