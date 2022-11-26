<template>
  <div class="sidebar" :style="{ width: width + 'px' }">
    <ParkFilter @filterParks="filterTags" @clearSelections="clearSelections" />
  </div>
</template>

<script>
import ParkFilter from "../../views/parks/ParkFilter.vue";
export default {
  name: "SideBare",
  components: {
    ParkFilter,
  },
  methods: {
    filterTags(parks) {
      console.log(parks);
    },
    clearSelections() {
      this.$emit("clearSelections", []);
    },
  },
};
</script>

<style>
</style>