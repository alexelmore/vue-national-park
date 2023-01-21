<template>
  <div v-if="isLoading"><BaseSpinner /></div>
  <div v-else>
    <div class="flex justify-evenly">
      <SideBar
        @filterTags="initialParksList"
        @clearSelections="clearSelections"
        @freeAdmission="updateAdmissionStatus"
      />
      <ParkList :parks="finalParksList" />
      <SortMenu @sortType="selectedSort" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ParkList from "./parks/ParkList.vue";
import SideBar from "../components/ui/SideBar.vue";
import SortMenu from "../components/ui/SortMenu.vue";
export default {
  name: "HubPage",

  data() {
    return {
      activities: [],
      currentParksList: [],
      selectedActivities: [],
      freeAdmission: false,
      isLoading: false,
      location: {
        latitude: null,
        longitude: null,
      },
      locationEnabled: false,
    };
  },

  components: {
    ParkList,
    SideBar,
    SortMenu,
  },

  methods: {
    ...mapActions({
      userLocation: "parks/setUserLocation",
      setParkCoords: "parks/setParkDistance",
    }),

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

    // Method that passess the user's coordinates to the setUserLocation action
    success(pos) {
      this.locationEnabled = true;
      this.location.latitude = pos.coords.latitude;
      this.location.longitude = pos.coords.longitude;
      this.userLocation(this.location);
      this.setParkCoords();
    },

    // Method that fires if and when there is an error when trying to get the user's coordinates
    error(err) {
      console.log(err);
      this.locationEnabled = false;
    },

    // Method that listens to the emitted sort type from the SortMenu component and than sorts the currentParkList array accordingly
    selectedSort(type) {
      if (type === "alphabetical") {
        // Alphabetical sort
        this.currentParksList.length
          ? this.currentParksList.sort((a, b) => {
              return a.name.localeCompare(b.name);
            })
          : this.parks.sort((a, b) => {
              return a.name.localeCompare(b.name);
            });
      } else if (type === "reverseAlpha") {
        // Reverse Alphabetical sort
        this.currentParksList.length
          ? this.currentParksList.sort().reverse()
          : this.parks.sort().reverse();
      } else {
        // Sort by distance from user
        if (!this.locationEnabled) {
          alert("Allow us to use your current location.");
        } else {
          this.currentParksList.length
            ? this.currentParksList.sort((a, b) => {
                return a.distanceFromUser - b.distanceFromUser;
              })
            : this.parks.sort((a, b) => {
                return a.distanceFromUser - b.distanceFromUser;
              });
        }
      }
    },
  },

  computed: {
    ...mapGetters({
      parks: "parks/parks",
      usersCoords: "parks/getUserLocation",
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
        parkArray = this.currentParksList.length
          ? [...this.currentParksList]
          : [...this.parks];
      }
      return parkArray;
    },
  },

  async created() {
    // Once component is created, call fetchParks method
    await this.fetchParks();

    // Request geolocation for user
    navigator.geolocation.getCurrentPosition(this.success, this.error);
  },
};
</script>

<style>
</style>