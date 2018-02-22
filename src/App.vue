<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view/>
  </div>
</template>

<script>
import toolBar from './components/tool-bar.vue';
export default {
  name: 'App',
  components: {
    toolBar
  },
};
</script>

