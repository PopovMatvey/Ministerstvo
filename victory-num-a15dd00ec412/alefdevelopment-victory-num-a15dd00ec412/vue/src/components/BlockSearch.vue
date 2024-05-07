<template>
  <div class="sidebar__tab-search">
    <button @click="searchInfo"></button>
    <input type="text" @input="updateText" :value="search_text" @keydown="checkKey" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BlockSeach",
  computed: {
    ...mapGetters(['search_text']),
  },
  methods: {
    ...mapActions(['searchInfo', 'updateText']),
    checkKey(e) {
      if (e.keyCode==13) this.searchInfo();
    }
  }
};
</script>
