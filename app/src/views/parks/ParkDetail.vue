<template>
  <BaseCard>
    <div class="bg-amber-200 p-8">
      <h2 class="text-black text-xl">{{ park.fullName }}</h2>
      <p>{{ park.description }}</p>
      <br />
      <div v-for="img in park.images" :key="img.alt">
        <img :src="img.url" :alt="img.alt" /> <br />
      </div>
    </div>
  </BaseCard>
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