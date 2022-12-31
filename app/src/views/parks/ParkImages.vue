<template>
  <BaseCard v-for="img in park.images" :key="img.alt">
    <img :src="img.url" :alt="img.alt" /> <br />
  </BaseCard>
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