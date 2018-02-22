<template>
      <md-toolbar class="my-toolbar" md-elevation="1">
      <h3 class="my-title">Ice and Fire</h3>
      <md-button class="my-title" :href="'/#/House'">Houses</md-button>
      <md-button class="my-title" :href="'/#/Character'">Characters</md-button>
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
