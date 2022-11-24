<template>
  <div>
    <h2 class="text-3xl font-bold">{{ park.fullName }}</h2>
    <img
      class="w-72 m-auto mt-10"
      :src="park.images[0].url"
      :alt="park.images[0].alt"
    />
  </div>
</template>

<script>
export default {
  name: "ParkList",
  props: {
    park: {
      type: Object,
    },
  },
};
</script>

<style>
</style>