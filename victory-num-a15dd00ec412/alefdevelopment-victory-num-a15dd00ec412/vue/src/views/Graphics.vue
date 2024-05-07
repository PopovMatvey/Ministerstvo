<template>
  <div class="page-wrap">
    <div class="inner-page custom-scrollbar__inner">
      <div class="inner-header">
        <div class="inner-logo" @click="goHome">
          <img src="../assets/images/logo.png" />
          <p>
            <span>Люди</span> победы
          </p>
        </div>
        <div class="logo-stat">
          <a href="https://www.gks.ru" target="_blank">
            <img src="../assets/images/logo-stat.png" />
          </a>
        </div>
        <button class="burger" @click="mobileMenu = !mobileMenu">
          <img src="../assets/images/burger.svg" />
        </button>
        <ul class="mobile-menu" v-show="mobileMenu">
          <li>
            <a href="#">
              цифры
              <span>победы</span>
            </a>
          </li>
          <li>
            <a href="#">
              люди
              <span>победы</span>
            </a>
          </li>
          <li>
            <a href="#">
              жизни
              <span>победы</span>
            </a>
          </li>
          <li>
            <a href="#">
              производства
              <span>победы</span>
            </a>
          </li>
          <li>
            <a href="#">
              демография
              <span>победы</span>
            </a>
          </li>
          <li>
            <a href="#">
              заводы
              <span>победы</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="inner-content">
        <div class="custom-scrollbar__sidebar">
          <div class="sidebar" ref="scroll_sidebar">
            <div class="sidebar-graphics">
              <p class="sidebar__tab-title">цифры</p>
              <ul class="sidebar-graphics__list" v-if="graphics.length > 0">
                <li v-for="graphic in graphics" :key="graphic.id">
                  <a :class="{active: !!active_graphic && graphic.id === active_graphic.id}" href="#" @click.prevent="selectGraphic(graphic.id)">{{ graphic.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="map">
          <div class="graphics">
            <button class="graphics__arrow graphics__arrow--left" @click="go(false)"></button>
            <div class="graphics__content">
              <div class="graphics__title" v-if="!graphicSelected">
                <p>Население</p>
                <p><span>СССР</span></p>
              </div>
              <div class="graphics__item" v-else>
                <img :src="active_graphic.url" @click="toggleModal(true)" />
              </div>
            </div>
            <button class="graphics__arrow graphics__arrow--right" @click="go(true)"></button>
          </div>
          <BlockQuotes v-if="quotes_loaded" />
        </div>
      </div>
    </div>
    <BlockBooks />

    <div class="modal" v-if="graphicSelected" v-show="modal" @click="checkHideModal">
      <div class="custom-scrollbar__modal graphics-modal">
        <div class="modal__content">
          <div class="modal__content-wr">
            <img :src="active_graphic.url" @load="toggleLoader(false)" :class="{darkener: isLoading}"/>
          </div>
          <div class="modal__share">
              <!--<a href="#" class="share-link" @click.prevent="sendShare">поделиться</a>-->
              <p>Поделиться:</p>
              <div class="modal__share-icons">
                <a class="share-link" :href="`https://connect.ok.ru/offer?url=${share_url}&title=Цифры%20Победы&imageUrl=${share_img}`" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 97.75 97.75" style="enable-background:new 0 0 97.75 97.75;" xml:space="preserve"><g><g>
                    <g>
                      <path d="M48.921,40.507c4.667-0.017,8.384-3.766,8.367-8.443c-0.017-4.679-3.742-8.402-8.411-8.406    c-4.708-0.005-8.468,3.787-8.432,8.508C40.48,36.826,44.239,40.524,48.921,40.507z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#DA3C1F"/>
                      <path d="M48.875,0C21.882,0,0,21.883,0,48.875S21.882,97.75,48.875,97.75S97.75,75.867,97.75,48.875S75.868,0,48.875,0z     M48.945,14.863c9.52,0.026,17.161,7.813,17.112,17.438c-0.048,9.403-7.814,17.024-17.318,16.992    c-9.407-0.032-17.122-7.831-17.066-17.253C31.726,22.515,39.445,14.837,48.945,14.863z M68.227,56.057    c-2.105,2.161-4.639,3.725-7.453,4.816c-2.66,1.031-5.575,1.55-8.461,1.896c0.437,0.474,0.642,0.707,0.914,0.979    c3.916,3.937,7.851,7.854,11.754,11.802c1.33,1.346,1.607,3.014,0.875,4.577c-0.799,1.71-2.592,2.834-4.351,2.713    c-1.114-0.077-1.983-0.63-2.754-1.407c-2.956-2.974-5.968-5.895-8.862-8.925c-0.845-0.882-1.249-0.714-1.994,0.052    c-2.973,3.062-5.995,6.075-9.034,9.072c-1.365,1.346-2.989,1.59-4.573,0.82c-1.683-0.814-2.753-2.533-2.671-4.262    c0.058-1.166,0.632-2.06,1.434-2.858c3.877-3.869,7.742-7.75,11.608-11.628c0.257-0.257,0.495-0.53,0.868-0.93    c-5.273-0.551-10.028-1.849-14.099-5.032c-0.506-0.396-1.027-0.778-1.487-1.222c-1.783-1.711-1.962-3.672-0.553-5.69    c1.207-1.728,3.231-2.19,5.336-1.197c0.408,0.191,0.796,0.433,1.168,0.689c7.586,5.213,18.008,5.356,25.624,0.233    c0.754-0.576,1.561-1.05,2.496-1.289c1.816-0.468,3.512,0.201,4.486,1.791C69.613,52.874,69.6,54.646,68.227,56.057z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#DA3C1F"/>
                    </g>
                  </g></g>
                  </svg>
                </a>
                <a class="share-link" :href="`https://vk.com/share.php?url=${share_url}&title=Цифры%20Победы&image=${share_img}&noparse=true`" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 97.75 97.75" style="enable-background:new 0 0 97.75 97.75;" xml:space="preserve"><g><g>
                    <path d="M48.875,0C21.883,0,0,21.882,0,48.875S21.883,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.867,0,48.875,0z    M73.667,54.161c2.278,2.225,4.688,4.319,6.733,6.774c0.906,1.086,1.76,2.209,2.41,3.472c0.928,1.801,0.09,3.776-1.522,3.883   l-10.013-0.002c-2.586,0.214-4.644-0.829-6.379-2.597c-1.385-1.409-2.67-2.914-4.004-4.371c-0.545-0.598-1.119-1.161-1.803-1.604   c-1.365-0.888-2.551-0.616-3.333,0.81c-0.797,1.451-0.979,3.059-1.055,4.674c-0.109,2.361-0.821,2.978-3.19,3.089   c-5.062,0.237-9.865-0.531-14.329-3.083c-3.938-2.251-6.986-5.428-9.642-9.025c-5.172-7.012-9.133-14.708-12.692-22.625   c-0.801-1.783-0.215-2.737,1.752-2.774c3.268-0.063,6.536-0.055,9.804-0.003c1.33,0.021,2.21,0.782,2.721,2.037   c1.766,4.345,3.931,8.479,6.644,12.313c0.723,1.021,1.461,2.039,2.512,2.76c1.16,0.796,2.044,0.533,2.591-0.762   c0.35-0.823,0.501-1.703,0.577-2.585c0.26-3.021,0.291-6.041-0.159-9.05c-0.28-1.883-1.339-3.099-3.216-3.455   c-0.956-0.181-0.816-0.535-0.351-1.081c0.807-0.944,1.563-1.528,3.074-1.528l11.313-0.002c1.783,0.35,2.183,1.15,2.425,2.946   l0.01,12.572c-0.021,0.695,0.349,2.755,1.597,3.21c1,0.33,1.66-0.472,2.258-1.105c2.713-2.879,4.646-6.277,6.377-9.794   c0.764-1.551,1.423-3.156,2.063-4.764c0.476-1.189,1.216-1.774,2.558-1.754l10.894,0.013c0.321,0,0.647,0.003,0.965,0.058   c1.836,0.314,2.339,1.104,1.771,2.895c-0.894,2.814-2.631,5.158-4.329,7.508c-1.82,2.516-3.761,4.944-5.563,7.471   C71.48,50.992,71.611,52.155,73.667,54.161z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#DA3C1F"/>
                  </g></g>
                  </svg>
                </a>
              </div>
            </div>
          <div class="modal__close">
             <button @click="toggleModal(false)" class="btn-close"></button>
          </div>
        </div>
      </div>
    </div>
      <div v-show="modal" class="overlay"></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Graphics",
  data() {
    return {
      mobileMenu: false,
      active_graphic: undefined,
      graphic_index: null,
      modal: false,
      isLoading: false
    };
  },
  computed: {
    ...mapGetters(["quotes", "graphics"]),
    quotes_loaded() {
      return this.quotes.length > 0;
    },
    graphicSelected() {
      return this.active_graphic;
    },
    share_url() {
      return `${location.origin}/api/graphics_share.php?id=${this.active_graphic.id}`;
    },
    share_img() {
      return `${location.origin}${this.active_graphic.url}`;
    }
  },
  created() {
    this.getGraphicsInfo();
  },
  components: {
    BlockBooks: () => import("../components/BlockBooks"),
    BlockQuotes: () => import("../components/BlockQuotes"),
  },
  methods: {
    ...mapActions(["getGraphicsInfo"]),
    goHome() {
      this.$router.push('/');
    },
    selectGraphic(id) {
      this.$set(this, 'graphic_index', this.graphics.findIndex(g => g.id === id));
      this.toggleActiveGraphic();
    },
    go(isForward) {
      if(this.graphic_index === null) this.$set(this, 'graphic_index', 0);
      else {
        const new_index = isForward ? (this.graphic_index + 1) % this.graphics.length : this.graphic_index - 1 < 0 ? this.graphics.length - 1 : this.graphic_index - 1;
        this.$set(this, 'graphic_index', new_index);
      }

      this.toggleActiveGraphic();
    },
    toggleActiveGraphic() {
      this.toggleLoader(true);
      this.$set(this, 'active_graphic', this.graphics[this.graphic_index]);
    },
    toggleModal(status) {
      this.$set(this, 'modal', status);
    },
    checkHideModal(event) {
      if(event.path[0].tagName.toLowerCase() === 'div') this.$set(this, 'modal', false);
    },
    toggleLoader(status) {
      this.$set(this, 'isLoading', status);
    }
  },
  mounted() {
    const sidebar = document.querySelector('.custom-scrollbar__sidebar');
    const inner = document.querySelector('.custom-scrollbar__inner')

    if(sidebar && inner) {
      window.Scrollbar.init(sidebar, {alwaysShowTracks: true});
      window.Scrollbar.init(inner, {continuousScrolling: false});
    }
  }
};
</script>

<style lang="scss" scoped>
.darkener {
  filter: brightness(50%);
}

.page-wrap {
  background-image: url(../assets/images/bg-graphics.jpg);
  background-size: cover;
  height: 100vh;

  @media (max-width: 767px) {
    height: auto;
    min-height: 100vh;
  }
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .map {
    width: 100%;

    @media (max-width: 767px) {
      width: auto;
    }

    @media (max-width: 1199px) {
      .graphics__content img {
        // width: 100%;
      }
    }
  }
}

.inner-logo {
  cursor: pointer;
}

.inner-page {
  padding: 10px 0;
}

.inner-header {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 70px;
  padding-right: 100px;
}

.sidebar-graphics {

  .sidebar__tab-title {
    margin-bottom: 40px;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      position: relative;
      color: #fff;
      text-transform: uppercase;
      font-size: 18px;
      padding-left: 100px;
      margin-bottom: 25px;

      a {
        border: 2px solid transparent;
        display: block;
        padding: 5px;

        @media (max-width: 767px) {
          width: calc(100% - 30px);
          margin: 0 auto;
        }
      }

      a.active {
        border: 2px solid #da3c1f;
        color: #fff;
        cursor: default;
      }

      &::before {
        position: absolute;
        content: "";
        width: 70px;
        height: 2px;
        left: 0;
        top: 15px;
        background-color: #da3c1f;
      }

      &::after {
        position: absolute;
        content: "";
        width: 16px;
        height: 16px;
        border-radius: 50%;
        left: 70px;
        top: 8px;
        background-color: #da3c1f;
      }
    }
  }
}

.modal__content-wr {
  align-items: flex-start;
}

.modal__content-wr img {
  display: block;
  margin: 0 auto;

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex-shrink: 0;
  }
}

.graphics {
  min-height: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 1200px;

  &__content {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 50px;
    padding-right: 50px;

    img,
    svg {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__item {
    flex-grow: 1;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      // height: auto;
      img {
        flex-shrink: 0;
      }
    }

    // @media (max-width: 1199px) {
    //   @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {

    //   }
    // } 
  }

  &__title {
    color: #fff;
    flex-grow: 1;

    p {
      margin: 0;
      font-weight: bold;
      text-transform: uppercase;

      span {
        position: relative;

        &::after {
          position: absolute;
          content: "";
          width: 50vw;
          height: 3px;
          left: 10px;
          bottom: -50px;
          background-color: #da3c1f;

          @media (max-width: 1199px) {
            bottom: -20px;
          } 

          @media (max-width: 767px) {
            display: none;
          } 

          @media (max-height: 620px) {
            display: none;
          } 
        }
      }
    }

    p:first-child {
      color: #fff;
      font-size: 6vw;
    }

    p:last-child {
      color: #da3c1f;
      text-align: right;
      font-size: 8vw;
    }
  }

  &__arrow {
    width: 45px;
    height: 45px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    transition: all .2s;

    &:hover {
      opacity: 0.8;
    }

    &--left {
      background-image: url(../assets/images/left-arrow.svg);
      background-size: cover;
      background-position: center;
    }

    &--right {
      background-image: url(../assets/images/right-arrow.svg);
      background-size: cover;
      background-position: center;
    }
  }
}

.graphics-modal {
  .modal__content {
    max-width: 100%;
    padding: 0;
  }
}

.custom-scrollbar__sidebar {
  max-width: 320px;

  @media (max-width: 767px) {
    max-width: 100%;
  }
}

.modal__share {
  margin: 0 auto;
  padding: 30px 0;
  text-align: center;
  max-width: 260px;
}

.modal__share-icons {
  justify-content: center;
  a:last-child {
    margin-right: 0;  
  }
}

@media (max-width: 1199px) {
  .graphics__content {
    padding-left: 15px;
    padding-right: 15px;
  }
}

@media (max-width: 991px) {
  .logo-stat {
    max-width: 210px;
  }

  .inner-header {
    padding-left: 15px;
  }

  .map {
    height: calc(100vh - 76px);
  }

  .sidebar-graphics__list li {
    padding-left: 110px;
  }

  .sidebar-graphics__list li:before {
    width: 75px;
  }

  .sidebar-graphics__list li:after {
    left: 75px;
  }

  .map {
    margin-left: 0;
  }

  .graphics__title p:first-child {
    font-size: 5vw;
  }
}

@media (max-width: 767px) {
  .inner-content {
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 80px;
  }

  .inner-header {
    padding-right: 15px;
  }

  .map {
    height: auto;
    margin: 0 15px;
  }

  .logo-stat {
    display: none;
  }

  .books {
    display: block;
  }

  .sidebar-graphics__list li {
    padding-left: 0;
    text-align: center;
    margin-bottom: 12px;

    a {
      // display: inline-block;
      // width: 100%;
      padding-left: 15px;
      padding-right: 15px;
      font-size: 16px;
    }

    &::before,
    &::after {
      display: none;
    }
  }

  .sidebar-graphics .sidebar__tab-title {
    margin-bottom: 25px;
  }

  .graphics {
    padding: 50px 0;
  }

  .graphics__title p {
    text-align: center !important;

    &:first-child {
      font-size: 8vw;
    }

    &:last-child {
      font-size: 10vw;
    }
  }
}

@media (max-width: 575px) {
  .graphics__content {
    padding: 0;
  }

  .graphics-modal {
    .modal__content {
      padding-top: 40px;
    }
  }
}
</style>