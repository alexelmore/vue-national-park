<template>
  <div class="text-gray-500 text-3xl mt-10 mb-6">
    <div v-if="parks.length">
      <div v-for="park in parks" :key="park.id">
        <ParkItem :park="park" @click.stop="goToPark(park.id)" />
      </div>
    </div>
    <div v-else>No Park Data</div>
  </div>
</template>

<script>
import ParkItem from "./ParkItem.vue";
export default {
  name: "ParkList",

  components: {
    ParkItem,
  },

  props: {
    parks: {
      type: Array,
    },
  },

  methods: {
    goToPark(id) {
      console.log(`${this.$route.path}/${id}`);
      this.$router.replace(`${this.$route.path}/${id}`);
    },
  },
};
</script>

<style>
</style>