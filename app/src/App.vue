<template>
  <Header />
  <div class="container flex justify-evenly">
    <SideBar />
    <HubPage :loading="this.isLoading" />
  </div>
</template>

<script>
import Header from "./components/ui/Header.vue";
import HubPage from "./views/HubPage.vue";
import SideBar from "./components/ui/SideBar.vue";
export default {
  name: "App",
  components: {
    Header,
    HubPage,
    SideBar,
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
}
</style>
