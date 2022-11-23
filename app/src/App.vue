<template>
  <Header />
  <div class="container">start</div>
</template>

<script>
import Header from "./components/Header.vue";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    Header,
  },
  methods: {
    ...mapActions({
      fetchParks: "parks/getParks",
    }),
  },
  created() {
    this.fetchParks();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
