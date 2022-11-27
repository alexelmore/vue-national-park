<template>
  <div class="sidebar">
    <ParkFilter @filterParks="filterTags" @clearSelections="clearSelections" />
  </div>
</template>

<script>
import ParkFilter from "../../views/parks/ParkFilter.vue";
import { mapGetters } from "vuex";
export default {
  name: "SideBar",
  components: {
    ParkFilter,
  },
  computed: {
    ...mapGetters({
      parks: "parks/parks",
    }),
  },
  methods: {
    filterTags(parks) {
      this.$emit("filterTags", parks);
    },
    clearSelections() {
      this.$emit("clearSelections", []);
    },
  },
};
</script>

<style>
</style>