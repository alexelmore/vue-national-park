<template>
  <BaseCard class="card !w-9/12">
    <h2 class="text-neutral-50 text-3xl font-bold">{{ park.fullName }}</h2>
    <lazy-component>
      <img
        class="w-72 m-auto mt-10"
        :src="park.images[0].url"
        :alt="park.images[0].alt"
      />
    </lazy-component>
  </BaseCard>
</template>

<script>
export default {
  name: "ParkItem",

  props: {
    park: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  transition: transform 0.3s, filter 1.5s ease-in-out;
  filter: grayscale(100%);
  transform: scale(1);
}

.card:hover {
  filter: grayscale(0);
  transform: scale(1.1);
}
</style>