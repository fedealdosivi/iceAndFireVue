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
<style>
body{
  background-color: rgba(97, 92, 92, 0.26);
}
</style>


