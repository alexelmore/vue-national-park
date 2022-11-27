<template>
  <div v-if="loading"><BaseSpinner /></div>
  <div class="flex w-4/5 justify-evenly" v-else>
    <SideBar />
    <ParkList :parks="parks" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ParkList from "./parks/ParkList.vue";
import SideBar from "../components/ui/SideBar.vue";
export default {
  name: "HubPage",
  components: {
    ParkList,
    SideBar,
  },
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    ...mapGetters({
      parks: "parks/parks",
    }),
  },
};
</script>

<style>
</style>