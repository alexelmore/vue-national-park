<template>
  <Header />
  <div class="container">
    <HubPage :loading="this.isLoading" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HubPage from "./views/HubPage.vue";
export default {
  name: "App",
  components: {
    Header,
    HubPage,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async fetchParks() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("parks/getParks");
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    await this.fetchParks();
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
