<template>
  <lazy-component v-for="img in park.images" :key="img.alt">
    <img :src="img.url" :alt="img.alt" height="300" /> <br />
  </lazy-component>
</template>

<script>
export default {
  name: "ParkImages",
  props: {
    park: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>