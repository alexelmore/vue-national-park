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
          name="Free"
          value="Free"
          class="filter-tgl tgl-light"
          id="Free"
          type="checkbox"
          v-model="goFree"
          @change="$emit('freeAdmission', this.goFree)"
        />
        <label class="tgl-btn" for="Free"></label>
        <label class="tgl-btn" for="Free">
          <h4>Free Admission</h4>
        </label>
      </div>

      <BaseCard>
        <h2>Park Activities</h2>
        <span class="filter-option">
          <div>
            <input
              type="checkbox"
              id="Shopping"
              name="Shopping"
              value="Shopping"
              v-model="searchTags"
              @change="$emit('filterParks', this.combinedTags)"
            />
            <label for="Shopping"> Shopping</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Camping"
              name="Camping"
              value="Camping"
              v-model="searchTags"
              @change="$emit('filterParks', this.combinedTags)"
            />
            <label for="Camping"> Camping</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Biking"
              name="Biking"
              value="Biking"
              v-model="searchTags"
              @change="$emit('filterParks', this.combinedTags)"
            />
            <label for="Biking"> Biking</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Swimming"
              name="Swimming"
              value="Swimming"
              v-model="searchTags"
              @change="$emit('filterParks', this.combinedTags)"
            />
            <label for="Swimming"> Swimming</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="Hiking"
              name="Hiking"
              value="Hiking"
              v-model="searchTags"
              @change="$emit('filterParks', this.combinedTags)"
            />
            <label for="Hiking"> Hiking</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Fishing"
              name="Fishing"
              value="Fishing"
              v-model="searchTags"
              @change="$emit('filterParks', this.combinedTags)"
            />
            <label for="Fishing"> Fishing</label>
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
      return arr;
    },

    isFree() {
      return this.goFree;
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