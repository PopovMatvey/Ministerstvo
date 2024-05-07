<template>
  <div class="page-wrap">
    <div class="home-page">
      <div class="logo-stat">
        <a href="https://www.gks.ru" target="_blank">
          <img src="../assets/images/logo-stat.png" />
        </a>
      </div>
      <div class="offer">
        <div class="offer__image">
          <img src="../assets/images/logo.png" />
        </div>
        <HomeSlider />
      </div>
      <div class="move-on">
        <HomeProgress />
        <router-link to="people" class="move-on__link" tag="a">Идти дальше</router-link>
      </div>
    </div>
    <div class="backgrounds">
      <div
        class="background"
        v-for="(background, i) in backgrounds"
        :key="i"
        :class="{active: i === active_index}"
        :style="{'backgroundImage': `url('${background}')`}"
      ></div>
    </div>
    <BlockBooks />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    BlockBooks: () => import("../components/BlockBooks"),
    HomeSlider: () => import("../components/HomeSlider"),
    HomeProgress: () => import('../components/HomeProgress')
  },
  data() {
    return {
      bg_interval: null,
      active_index: 0
    };
  },
  computed: {
    backgrounds() {
      return [
        "/assets/images/bg-index.jpg",
        "/assets/images/bg-index2.jpg",
        "/assets/images/bg-index3.jpg"
      ];
    }
  },
  mounted() {
    this.$set(
      this,
      "bg_interval",
      setInterval(() => {
        const new_index =
          this.active_index + 1 === this.backgrounds.length
            ? 0
            : this.active_index + 1;
        this.$set(this, "active_index", new_index);
      }, 5000)
    );
  },
  beforeDestroy() {
    clearInterval(this.bg_interval);
    this.$set(this, 'bg_interval', null);
  }
};
</script>

<style lang="scss">
.page-wrap {
  height: 100vh;

  @media (max-height: 619px) {
    height: auto;
  }
}

.home-page {
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  min-height: 100vh;
}

.logo-stat {
  margin-left: 45px;
}

.offer {
  padding: 20px 0 40px;
  margin: auto 0;

  &__image {
    width: 238px;
    height: 251px;
    margin: 0 auto;
    margin-bottom: 30px;

    @media (max-height: 759px) {
      width: 180px;
      height: auto;
      margin-bottom: 15px;
    }
  }

  &__list {
    position: relative;
    width: 100%;
    max-width: 730px;
    padding: 0 15px;
    margin: 0 auto;
    list-style: none;
    transform: translateX(140px);
    z-index: 1;
    height: auto;
    overflow: hidden;

    @media (max-height: 945px) {
      height: 375px;
    }

    @media (max-height: 866px) {
      height: 300px;
    }

    @media (max-height: 795px) {
      height: 225px;
    }

    @media (max-height: 759px) {
      height: 256px;
    }

    @media (max-height: 675px) {
      height: 192px;
    }

    @media (max-height: 619px) {
      height: auto;
    }

    a {
      display: inline-block;
      border: 3px solid transparent;
      padding: 6px 15px 6px 34px;
      font-size: 50px;
      font-weight: 900;
      letter-spacing: 1px;
      color: rgba(255, 255, 255, 0.5);
      text-transform: uppercase;

      span {
        display: none;
        transition: all 0.3s;
      }

      &:hover {
        border: 3px solid #af1c01;
        color: #fff;
        span {
          display: inline-block;
          color: #da3c1f;
        }
      }

      @media (max-height: 759px) {
        font-size: 40px;
      }
    }
  }
}

@media (max-width: 1199px) {
  .offer {
    &__list {
      a {
        font-size: 35px;
        font-weight: 700;
      }
    }
  }
}

@media (max-width: 991px) {
}

@media (max-width: 767px) {
  .logo-stat {
    display: none;
  }

  .offer {
    padding-top: 0;

    &__list {
      transform: none;
      text-align: center;

      a {
        display: inline-block;
        font-size: 30px;
        font-weight: 700;
        padding: 0px 13px 0px 13px;
        border: 2px solid transparent;

        &:hover {
          border: 2px solid #af1c01;
        }
      }
    }

    &__image {
      width: 117px;
      height: 123px;
      margin-bottom: 27px;
    }
  }

  .books {
    display: none;
  }
}
</style>