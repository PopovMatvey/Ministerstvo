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
            <CurrentMan v-if="people_loaded" @modalHandler="toggleModal(true)" />
            <div class="sidebar__tab">
              <p class="sidebar__tab-title">люди</p>
              <BlockSearch />
              <ul class="sidebar__tab-list">
                <ListMan
                  v-for="(man, i) in show_people"
                  :key="i"
                  :man="man"
                  :isActive="man.id === active_person.id"
                />
              </ul>
              <div class="tab-line tab-line--top"></div>
              <div class="arrows">
                <button class="arrows__top" @click="goUp"></button>
                <button class="arrows__bottom" @click="goDown"></button>
              </div>
            </div>
            <BlockCities />
          </div>
        </div>
        <div class="map">
          <Map />
          <BlockQuotes v-if="quotes_loaded" />
        </div>
      </div>
    </div>
    <BlockBooks />
    <ModalMan v-if="people_loaded" v-show="modal" />
    <div v-show="modal" class="overlay"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CurrentMan from "../components/CurrentMan";
export default {
  name: "People",
  props: {
    id: String
  },
  data() {
    return {
      mobileMenu: false,
      booksOpened: false,
      show_people: []
    };
  },
  computed: {
    ...mapGetters(["people", "active_person", "quotes", "modal"]),
    people_loaded() {
      return !!this.active_person.id;
    },
    quotes_loaded() {
      return this.quotes.length > 0;
    }
  },
  async created() {
    this.getFullInfo();
    if (this.id) {
      await this.getPersonInfo(this.id);
      this.toggleModal(true);
    }
  },
  watch: {
    people() {
      this.$set(this, "show_people", this.people.slice(0, 3));
    },
    modal() {
      if(this.modal) {
        document.querySelector("body").classList.add('modal-open');
      } else {
        document.querySelector("body").classList.remove('modal-open');
      }
    }
  },
  components: {
    Map: () => import("../components/Map"),
    ListMan: () => import("../components/ListMan"),
    CurrentMan,
    ModalMan: () => import("../components/ModalMan"),
    BlockBooks: () => import("../components/BlockBooks"),
    BlockCities: () => import("../components/BlockCities"),
    BlockQuotes: () => import("../components/BlockQuotes"),
    BlockSearch: () => import("../components/BlockSearch")
  },
  methods: {
    ...mapActions(["setActivePerson", "getFullInfo", "getPersonInfo", "toggleLine", "toggleModal"]),
    hideLine(y) {
      this.toggleLine(y > 0);
    },
    goHome() {
      this.$router.push('/');
    },
    goUp() {
      let index = this.active_person.id
        ? this.people.map(elem => elem.id).indexOf(this.active_person.id) - 1
        : 0;
      const first_show_index = this.show_people
        .map(elem => elem.id)
        .indexOf(this.active_person.id);

      index = index < 0 ? this.people.length - 1 : index;

      if (first_show_index === 0) {
        this.show_people.unshift(this.people[index]);
        this.show_people.pop();
      }

      this.setActivePerson(this.people[index]);
    },
    goDown() {
      let index = this.active_person.id
        ? this.people.map(elem => elem.id).indexOf(this.active_person.id) + 1
        : 0;
      const last_show_index = this.show_people
        .map(elem => elem.id)
        .indexOf(this.active_person.id);

      index = index > this.people.length - 1 ? 0 : index;

      if (last_show_index === this.show_people.length - 1) {
        this.show_people.push(this.people[index]);
        this.show_people.shift();
      }

      this.setActivePerson(this.people[index]);
    }
  },
  mounted() {
    const sidebar = window.Scrollbar.init(document.querySelector('.custom-scrollbar__sidebar'), {alwaysShowTracks: true});
    window.Scrollbar.init(document.querySelector('.custom-scrollbar__inner'), {continuousScrolling: false});

    sidebar.addListener(status => {
      this.hideLine(status.offset.y);
    });
  }
};
</script>

<style lang="scss" scoped>
.page-wrap {
  background-image: url(../assets/images/bg-inner.jpg);
  height: 100vh;

  @media (max-width: 767px) {
    height: auto;
    min-height: 100vh;
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
}

@media (max-width: 575px) {
  .map {
    display: none;
  }
}
</style>