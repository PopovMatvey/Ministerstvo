<template>
  <transition-group class="offer__list" tag="ul" name="slide">
    <li v-for="item in home_slides" :key="item.id" class="company">
      <router-link :to="item.to" tag="a">
        {{ item.value }}
        <span>победы</span>
      </router-link>
    </li>
  </transition-group>
</template>

<script>
export default {
  name: "HomeSlider",
  data() {
    return {
      timer: null,
      home_slides: [
        {id: 1, value: "цифры", to: "graphics"},
        {id: 2, value: "люди", to: "people"}
        //{id: 3, value: "жизни"},
        //{id: 4, value: "производства"},
        //{id: 5, value: "демография"},
        //{id: 6, value: "заводы"}
      ],
    };
  },
  mounted() {
    //this.updateActive();
  },
  beforeDestroy() {
      clearTimeout(this.timer);
      this.$set(this, 'timer', null);
      this.$set(this, 'home_slides', [
        {id: 1, value: "цифры", to: "graphics"},
        {id: 2, value: "люди", to: "people"}
        //{id: 3, value: "жизни"},
        //{id: 4, value: "производства"},
        //{id: 5, value: "демография"},
        //{id: 6, value: "заводы"}
      ]);
  },
  methods: {
    updateActive() {
      this.$set(
        this,
        "timer",
        setTimeout(() => {
          const deleter = this.home_slides.shift();
          deleter.id = deleter.id + 6;
          this.home_slides.push(deleter)
          this.updateActive();
        }, 1500)
      );
    }
  }
};
</script>

<style>
.slide-enter-active {
  transition: .3s ease-in;
}

.slide-leave-active {
  transition: 2s cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
   transform: translateY(-75px);
}

.offer__list .active a {
  border: 3px solid #af1c01;
  color: #fff;
  transition: 0.3s;
}
.offer__list .active a span {
  display: inline-block;
  color: #da3c1f;
  transition: 0.3s;
}
</style>