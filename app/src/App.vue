<template>
  <Header />
  <router-view class="w-9/12 m-auto justify-evenly" />
</template>

<script>
import Header from "./components/ui/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
