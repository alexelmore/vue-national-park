<template>
  <section>
    <base-card>
      <h2>Page not found</h2>
      <p>
        This page could not be found...Maybe try searching for another park...
        <br />
        <router-link to="/parks">Back To Parks</router-link>.
      </p>
    </base-card>
  </section>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style>
</style>