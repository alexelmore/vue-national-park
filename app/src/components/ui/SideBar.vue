<template>
  <div class="sidebar min-w-[35%]">
    <ParkFilter
      class="
        flex flex-col
        items-stretch
        p-4
        bg-amber-200
        rounded-lg
        border-solid border-2 border-black
      "
      @filterParks="filterTags"
      @clearSelections="clearSelections"
      @freeAdmission="freeAdmission"
    />
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
    /* The below methods emit their correlating data properties, which they receive from the ParksFilter component, up to the HubPage component */

    filterTags(parks) {
      this.$emit("filterTags", parks);
    },

    clearSelections() {
      this.$emit("clearSelections", []);
    },

    freeAdmission(admission) {
      this.$emit("freeAdmission", admission);
    },
  },
};
</script>

<style>
</style>