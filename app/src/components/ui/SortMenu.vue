<template>
  <div class="dropdown block w-32">
    <BaseButton class="!w-32 font-bold text-white" @click="initSorting"
      >Sort By
    </BaseButton>
    <BaseCard
      ref="myDropDown"
      @click.stop
      class="!my-2 !w-60 text-left !p-4 border-solid border-2 border-black"
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
        <label class="font-bold text-white" for="alphabetical">
          Order: A to Z</label
        >
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
        <label class="font-bold text-white" for="reverseAlpha">
          Order: Z to A</label
        >
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
        <label class="font-bold text-white" for="distance">
          Nearest To Me</label
        >
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
    async initSorting() {
      const el = this.$refs.myDropDown.$el;
      if (el.classList.contains("hidden")) {
        this.menuClosed = !this.menuClosed;
        el.animate(
          [
            // keyframes
            {
              opacity: "0",
              transform: "rotateX(70deg)",
              transformOrigin: "top",
            },
            {
              opacity: "1",
              transform: "rotateX(0deg)",
              transformOrigin: "top",
            },
          ],
          {
            // timing options
            duration: 1000,
            iterations: 1,
          }
        );
      } else {
        await el.animate(
          [
            // keyframes
            {
              opacity: "0",
              transform: "rotateX(70deg)",
              transformOrigin: "top",
            },
            {
              opacity: "1",
              transform: "rotateX(0deg)",
              transformOrigin: "top",
            },
          ],
          {
            // timing options
            duration: 1002,
            iterations: 1,
            direction: "reverse",
          }
        );
        setTimeout(() => {
          this.menuClosed = !this.menuClosed;
        }, 1000);
      }
    },
  },
};
</script>

<style>
</style>