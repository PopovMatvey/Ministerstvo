<template>
  <div class="sidebar__tab">
    <p class="sidebar__tab-title">города</p>
    <div class="tab-line tab-line--bottom"></div>
    <ul class="sidebar__tab-list">
      <li v-for="city in show_cities" :key="city.id">
        <a
          href="#"
          class="item-city"
          :class="{active: city.id === active_city.id}"
          @click.prevent="setActiveCity(city)"
        >{{ city.name }}</a>
      </li>
    </ul>
    <div class="tab-line tab-line--top"></div>
    <div class="arrows">
      <button class="arrows__top" @click="goUp"></button>
      <button class="arrows__bottom" @click="goDown"></button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BlockCities",
  computed: {
    ...mapGetters(["cities", "active_city"])
  },
  data() {
    return {
      show_cities: []
    };
  },
  watch: {
    cities() {
      this.$set(this, "show_cities", this.cities.slice(0, 5));
    },
    active_city() {
      if (this.active_city.id) {
        const first_index = this.cities
          .map(c => c.id)
          .indexOf(this.active_city.id);

        const is_larger = first_index + 5 >= this.cities.length;

        this.$set(
          this,
          "show_cities",
          is_larger
            ? [
                ...this.cities.slice(first_index, this.cities.length),
                ...this.cities.slice(0, (first_index + 5) % this.cities.length)
              ]
            : this.cities.slice(first_index, first_index + 5)
        );
      } else {
        this.$set(this, "show_cities", this.cities.slice(0, 5));
      }
    }
  },
  methods: {
    ...mapActions(["setActiveCity"]),
    goUp() {
      let index = this.active_city.id
        ? this.cities.map(elem => elem.id).indexOf(this.active_city.id) - 1
        : 0;
      const first_show_index = this.show_cities
        .map(elem => elem.id)
        .indexOf(this.active_city.id);

      index = index < 0 ? this.cities.length - 1 : index;

      if (first_show_index === 0) {
        this.show_cities.unshift(this.cities[index]);
        this.show_cities.pop();
      }

      this.setActiveCity(this.cities[index]);
    },
    goDown() {
      let index = this.active_city.id
        ? this.cities.map(elem => elem.id).indexOf(this.active_city.id) + 1
        : 0;
      const last_show_index = this.show_cities
        .map(elem => elem.id)
        .indexOf(this.active_city.id);

      index = index > this.cities.length - 1 ? 0 : index;

      if (last_show_index === this.show_cities.length - 1) {
        this.show_cities.push(this.cities[index]);
        this.show_cities.shift();
      }

      this.setActiveCity(this.cities[index]);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
