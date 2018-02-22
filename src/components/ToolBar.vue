<template>
      <md-toolbar class="my-toolbar" md-elevation="1">
      <h3 class="my-title">Ice and Fire</h3>
      <md-button class="my-title">Refresh</md-button>
      <md-button class="my-title">Refresh</md-button>
    </md-toolbar>
</template>

<script>
export default {
  name: 'ToolBar',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
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
