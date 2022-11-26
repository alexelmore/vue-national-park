

<template>
  <div class="card bg-green-800 w-96 rounded-xl p-6 mx-auto mt-8 max-w-2xl">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
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