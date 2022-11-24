<template>
  <div v-if="loading"><BaseSpinner /></div>
  <div
    class="flex flex-col align-center justify-center text center items-center"
    v-else
  >
    <div
      class="text-gray-500 text-3xl mt-10 mb-6"
      v-for="park in parks"
      :key="park.id"
    >
      <ParkList :park="park" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ParkList from "./parks/ParkList.vue";
export default {
  name: "HubPage",
  components: {
    ParkList,
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