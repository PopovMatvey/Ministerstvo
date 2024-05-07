<template>
  <div class="progress-bar">
    <span :class="{active: active}"></span>
  </div>
</template>

<script>
export default {
  name: "HomeProgress",
  data() {
    return {
      active: false,
      timer: null
    };
  },
  mounted() {
    setTimeout(() => {
      this.$set(this, "active", true);
      this.$set(
        this,
        "timer",
        setTimeout(() => {
          this.$router.push("/people");
        }, 11000)
      );
    }, 0);
  },
  beforeDestroy() {
    this.$set(this, "active", false);
    clearTimeout(this.timer);
    this.$set(this, "timer", null);
  }
};
</script>

<style>
.progress-bar span {
  width: 0%;
  transition: width 10s linear;
}
.progress-bar .active {
  width: 100%;
}
</style>