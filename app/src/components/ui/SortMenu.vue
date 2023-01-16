<template>
  <div class="dropdown block">
    <BaseButton class="!w-32" @click="initSorting">Sort By </BaseButton>
    <BaseCard
      ref="myDropDown"
      @click.stop
      class="!my-2 !w-60 text-left !p-4"
      :class="{ hidden: menuClosed }"
    >
      <div>
        <input
          type="radio"
          id="alphabetical"
          name="alphabetical"
          value="alphabetical"
          v-model="sortType"
          @change="$emit('sortType', this.sortType)"
        />
        <label for="alphabetical"> Alphabetical Order: A to Z</label>
      </div>
      <div>
        <input
          type="radio"
          id="reverseAlpha"
          name="reverseAlpha"
          value="reverseAlpha"
          v-model="sortType"
          @change="$emit('sortType', this.sortType)"
        />
        <label for="reverseAlpha"> Descending Alphabetical Order: Z to A</label>
      </div>
      <div>
        <input
          type="radio"
          id="distance"
          name="distance"
          value="distance"
          v-model="sortType"
          @change="$emit('sortType', this.sortType)"
        />
        <label for="distance"> Nearest To Me</label>
      </div>
    </BaseCard>
  </div>
</template>

<script>
export default {
  name: "SortMenu",
  data() {
    return {
      sortType: "",
      menuClosed: true,
    };
  },
  methods: {
    initSorting() {
      this.menuClosed = !this.menuClosed;
    },
  },
};
</script>

<style>
</style>