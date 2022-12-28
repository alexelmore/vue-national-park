<template>
  <BaseCard>{{ park.fullName }}</BaseCard>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ParkDetail",

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      park: "",
    };
  },
  computed: {
    ...mapGetters({
      parkMatch: "parks/getParkById",
    }),
  },

  created() {
    this.park = this.parkMatch(this.id);
  },
};
</script>

<style>
</style>