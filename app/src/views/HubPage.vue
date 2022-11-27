<template>
  <div v-if="loading"><BaseSpinner /></div>
  <div class="flex w-4/5 justify-evenly" v-else>
    <SideBar @filterTags="filterTags" @clearSelections="clearSelections" />
    <ParkList :parks="filteredParks" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ParkList from "./parks/ParkList.vue";
import SideBar from "../components/ui/SideBar.vue";
export default {
  name: "HubPage",

  data() {
    return {
      tags: [],
    };
  },

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

  methods: {
    filterTags(parkTags) {
      this.tags = [...parkTags];
    },
    clearSelections() {
      this.tags = [];
    },
  },

  computed: {
    ...mapGetters({
      parks: "parks/parks",
    }),

    filteredParks() {
      let selectedParks = [];
      if (this.tags.length) {
        if (this.tags.includes("Free")) {
          selectedParks = [
            ...this.parks.filter((park) => {
              if (park.entranceFees[0].cost === "0.00") {
                return park;
              }
            }),
          ];
        }

        // Todo: add in another condition for all other non "Free" tags

        return selectedParks;
      } else {
        selectedParks = [...this.parks];
        return selectedParks;
      }
    },
  },
};
</script>

<style>
</style>