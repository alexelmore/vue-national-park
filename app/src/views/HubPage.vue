<template>
  <div v-if="loading"><BaseSpinner /></div>
  <div v-else>coaches</div>
</template>

<script>
export default {
  name: "HubPage",

  props: {
    loading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
</style>