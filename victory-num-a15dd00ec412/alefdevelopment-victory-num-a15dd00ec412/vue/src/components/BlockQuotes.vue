<template>
  <div class="map__message">
    <marquee loop="-1" scrollamount="10">
      <span class="message__box" v-for="q in quotes" :key="q.id" v-html="q.quote"></span>
    </marquee>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BlockQuotes",
  computed: {
    ...mapGetters(["quotes"]),
  }
};
</script>

<style scoped>
  .map__message {
    display: inherit;
    overflow: hidden;
  }

  .message__box {
    display: inline-block; 
    white-space: nowrap; 
    width: unset;
  }
  
  .message__box:not(:first-of-type) {
    margin-left: 30px;
  }
</style>