<template>
  <BaseCard>
    <div class="bg-amber-200 p-8">
      <h2 class="text-black text-xl">{{ park.fullName }}</h2>
      <p>{{ park.description }}</p>
      <br />
      <ParkImages :park="park" />
    </div>
  </BaseCard>
</template>

<script>
import { mapGetters } from "vuex";
import ParkImages from "./ParkImages.vue";
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

  components: {
    ParkImages,
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