<template>
  <div v-if="isLoading"><BaseSpinner /></div>
  <div class="flex w-4/5 justify-evenly" v-else>
    <SideBar
      @filterTags="initialParksList"
      @clearSelections="clearSelections"
      @freeAdmission="updateAdmissionStatus"
    />
    <ParkList :parks="finalParksList" />
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
      activities: [],
      currentParksList: [],
      selectedActivities: [],
      freeAdmission: false,
      isLoading: false,
    };
  },

  components: {
    ParkList,
    SideBar,
  },

  methods: {
    // Async method that dispatches the getParks action, calling the National Park endpoint
    async fetchParks() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("parks/getParks");
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },

    // Method that sets the activities data property to the array of park tags, which gets emitted up from the SideBar component
    filterTags(parkTags) {
      this.activities = [...parkTags];
    },

    // Method that sets the initialParksList data property to an array of parks, which gets emitted up from the SideBar component
    initialParksList(array) {
      this.activities = [...array];
      this.currentParksList = [];

      this.parks.forEach((park) => {
        const listedActivities = [];

        for (const activity in park.actNames) {
          listedActivities.push(park.actNames[activity]);
        }
        const addPark = this.includesAll(listedActivities, this.activities);

        if (addPark && this.activities.length) {
          this.currentParksList.push(park);
        }
      });
    },

    // Method that checks if the array of parks (first argument) includes all elements in the second array (second argument), and returns a corrilating bool.
    includesAll(arr, values) {
      return values.every((v) => arr.includes(v));
    },

    // Method that resets all the data propeties back to their initial values
    clearSelections() {
      this.activities = [];
      this.selectedActivities = [];
      this.currentParksList = [];
      this.freeAdmission = false;
    },

    // Method that flips the freeAdmission data boolean property based on the admission bool value that gets emitted up from the SideBar component.
    updateAdmissionStatus(admission) {
      this.freeAdmission = admission;
    },
  },

  computed: {
    ...mapGetters({
      parks: "parks/parks",
    }),

    // Computed property that serves as the final list of parks that gets displayed in the UI to the user
    finalParksList() {
      let parkArray = [];
      if (this.freeAdmission && this.currentParksList.length) {
        parkArray = this.currentParksList.filter((park) => {
          if (park.entranceFees[0].cost === "0.00") {
            return park;
          }
        });
      } else if (this.freeAdmission && !this.currentParksList.length) {
        parkArray = this.parks.filter((park) => {
          if (park.entranceFees[0].cost === "0.00") {
            return park;
          }
        });
      } else {
        parkArray = [...this.currentParksList];
      }
      return parkArray;
    },
  },

  async created() {
    // Once component is created, call fetchParks method
    await this.fetchParks();
  },
};
</script>

<style>
</style>