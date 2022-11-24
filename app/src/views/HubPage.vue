<template>
  <div v-if="loading"><BaseSpinner /></div>
  <div v-else>
    <div v-for="park in parks" :key="park.id">
      <h2>{{ park.fullName }}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HubPage",

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