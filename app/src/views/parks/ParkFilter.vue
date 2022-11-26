<template>
  <div>
    <div class="filter-header">
      <h2 class="filter-title">Filter Parks</h2>
      <BaseButton @click="clearSelections" class="filter-cta"
        >Clear Filters</BaseButton
      >
    </div>

    <div class="filter-items">
      <div class="filter-toggle">
        <input
          name="free"
          value="free"
          class="filter-tgl tgl-light"
          id="free"
          type="checkbox"
          v-model="goFree"
          @change="$emit('filterParks', this.combinedTags)"
        />
        <label class="tgl-btn" for="free"></label>
        <label class="tgl-btn" for="free">
          <h4>Free Admission</h4>
        </label>
      </div>

      <BaseCard>
        <h2>Park Activities</h2>
        <span class="filter-option">
          <div>
            <input
              type="checkbox"
              id="shopping"
              name="shopping"
              value="shopping"
              v-model="searchTags"
              @change="$emit('filterParks', this.combinedTags)"
            />
            <label for="shopping"> Shopping</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="camping"
              name="camping"
              value="camping"
              v-model="searchTags"
              @change="$emit('filterParks', this.combinedTags)"
            />
            <label for="camping"> Camping</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="biking"
              name="biking"
              value="biking"
              v-model="searchTags"
              @change="$emit('filterParks', this.combinedTags)"
            />
            <label for="biking"> Biking</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="swimming"
              name="swimming"
              value="swimming"
              v-model="searchTags"
              @change="$emit('filterParks', this.combinedTags)"
            />
            <label for="swimming"> Swimming</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="hiking"
              name="hiking"
              value="hiking"
              v-model="searchTags"
              @change="$emit('filterParks', this.combinedTags)"
            />
            <label for="hiking"> Hiking</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="fishing"
              name="fishing"
              value="fishing"
              v-model="searchTags"
              @change="$emit('filterParks', this.combinedTags)"
            />
            <label for="fishing"> Fishing</label>
          </div>
        </span>
      </BaseCard>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ParkFilter",
  data() {
    return {
      searchTags: [],
      goFree: "",
    };
  },
  computed: {
    ...mapGetters({
      recipes: "recipes/getRecipes",
    }),
    combinedTags() {
      let arr = [...this.searchTags];
      if (this.goFree === true) {
        arr.push("free");
      }

      return arr;
    },
  },
  props: {
    ctaText: {
      type: String,
      default: "Clear All",
    },
  },
  methods: {
    clearSelections() {
      this.searchTags = [];
      this.goFree = false;
      this.$emit("clearSelections", []);
    },
  },
};
</script>

<style>
.filter-header {
  display: flex;
  justify-content: space-between;
}
.filter-items {
  width: 100%;
  text-align: left;
  margin-top: 1rem;
}
.filter-option {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
.filter-toggle {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}
.filter-tgl {
  display: none;
}
.filter-tgl + .tgl-btn {
  outline: 0;
  display: block;
  width: 4em;
  height: 2em;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.filter-tgl + .tgl-btn:after,
.filter-tgl + .tgl-btn:before {
  position: relative;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
}
.filter-tgl + .tgl-btn:after {
  left: 0;
}
.filter-tgl + .tgl-btn:before {
  display: none;
}
.filter-tgl:checked + .tgl-btn:after {
  left: 50%;
}
.filter-tgl + .tgl-btn {
  background: #c2bcbc;
  border-radius: 2em;
  padding: 2px;
  -webkit-transition: all 0.4s ease-in;
  transition: all 0.4s ease-in;
}
.filter-tgl + .tgl-btn:after {
  border-radius: 50%;
  background: #fff;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.tgl-light:checked + .tgl-btn {
  background: #276749;
}
.tgl-btn h4 {
  margin-left: 0.5rem;
}
</style>