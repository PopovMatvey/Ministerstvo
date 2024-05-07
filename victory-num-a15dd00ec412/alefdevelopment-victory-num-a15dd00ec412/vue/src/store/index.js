import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: [],
    active_city: {},
    show_cities: [],

    people: [],
    active_person: {},
    show_people: [],

    regions: [],
    active_region: {},

    quotes: [],

    user_clicked_map: false,

    search_map: false,
    search_text: "",

    line_scrolled: false,

    modal: false,
    graphics: []
  },
  getters: {
    cityChecker() {
      return (city, region) =>
        city.region_id === region.region_id &&
        city.country_id === region.country_id;
    },
    active_city(state) {
      return state.active_city;
    },
    cities(state) {
      return state.search_map ? state.show_cities : state.cities;
    },
    active_person(state) {
      return state.active_person;
    },
    people(state) {
      return state.show_people;
    },
    regions(state) {
      return state.regions;
    },
    line_scrolled(state) {
      return state.line_scrolled;
    },
    active_region(state) {
      return state.active_region;
    },
    quotes(state) {
      return state.quotes;
    },
    user_clicked_map(state) {
      return state.user_clicked_map;
    },
    search_map(state) {
      return state.search_map;
    },
    search_text(state) {
      return state.search_text;
    },
    modal(state) {
      return state.modal;
    },
    graphics(state) { 
      return state.graphics;
    }
  },
  mutations: {
    SET_CITIES(state, cities) {
      state.cities = [...cities];
      state.show_cities = state.cities;
    },
    SET_ACTIVE_CITY(state, city) {
      state.active_city = city;
    },
    SET_PEOPLE(state, people) {
      state.people = [...people];
    },
    SET_ACTIVE_PERSON(state, person) {
      state.active_person = person ? person : {};
    },
    SET_REGIONS(state, regions) {
      state.regions = [...regions];
    },
    SET_ACTIVE_REGION(state, region) {
      state.active_region = region;
    },
    SET_CLICK_MAP(state, status) {
      state.user_clicked_map = status;
    },
    SET_SEARCH_ACTIVE(state, status) {
      state.search_map = status;
    },
    SHOW_CITIES(state, cities) {
      state.show_cities = cities;
    },
    SHOW_PEOPLE(state, people) {
      state.show_people = people;
    },
    SET_SEARCH(state, text) {
      state.search_text = text;
    },
    SET_QUOTES(state, quotes) {
      state.quotes = quotes;
    },
    UPDATE_QUOTES(state) {
      state.quotes.push(state.quotes.shift());
    },
    SCROLL_LINE(state, status) {
      state.line_scrolled = status;
    },
    SET_MODAL(state, status) {
      state.modal = status;
    },
    SET_GRAPHICS(state, graphics) {
      state.graphics = graphics;
    }
  },
  actions: {
    async setActiveCity({ commit, getters, state, dispatch }, city) {
      const peoples = state.people.filter(p => city.id === p.city_id);

      if(peoples.length > 0) {
        commit(
          "SET_ACTIVE_REGION",
          getters.regions.find((region) => getters.cityChecker(city, region))
        );
        commit("SET_ACTIVE_CITY", city);
        commit("SET_ACTIVE_PERSON", peoples[0]);

        commit("SET_SEARCH_ACTIVE", false);
        commit("SET_CLICK_MAP", true);
  
        await dispatch("setBasicShowInfo");
      }
    },
    setBasicShowInfo({ commit, getters, state }) {
      return new Promise((resolve) => {
        const available_cities = state.cities.filter(
          state.active_region.id
            ? (city) => getters.cityChecker(city, state.active_region)
            : () => true
        );
        commit("SHOW_CITIES", available_cities);

        const available_person = state.people.filter((person) =>
          state.active_city.id
            ? person.city_id === state.active_city.id
            : !!available_cities.find((city) => city.id === person.city_id)
        );
        commit("SHOW_PEOPLE", available_person);
        resolve(true);
      });
    },
    async setActiveRegion({ commit, dispatch, state }, region) {
      commit("SET_SEARCH_ACTIVE", false);

      if(region.id) {
        const need_cities = state.cities.filter(c => c.search_region_id === region.id).map(c => c.id);
        const peoples = state.people.filter(p => need_cities.includes(p.city_id));

        if(peoples.length > 0) {
          commit("SET_ACTIVE_REGION", region);
          commit("SET_ACTIVE_CITY", state.cities.filter(c => c.search_region_id === region.id)[0]);
          commit("SET_ACTIVE_PERSON", peoples[0]);

          commit("SET_CLICK_MAP", true);

          await dispatch("setBasicShowInfo");
        }

        return peoples.length > 0;
      } else {
        commit("SET_ACTIVE_REGION", {});
        commit("SET_ACTIVE_CITY", {});
        commit("SET_ACTIVE_PERSON", {});

        commit("SET_CLICK_MAP", false);

        return false;
      }
    },
    setActivePerson({ commit, getters, state }, person) {
      return new Promise((resolve) => {
        commit("SET_ACTIVE_PERSON", person);

        state.search_map && commit("SET_MODAL", true);

        const index = state.cities
          .map((elem) => elem.id)
          .indexOf(person.city_id);
        commit("SET_ACTIVE_CITY", index !== -1 ? state.cities[index] : {});

        commit(
          "SET_ACTIVE_REGION",
          state.regions.find((region) =>
            getters.cityChecker(getters.active_city, region)
          )
        );

        commit("SET_SEARCH_ACTIVE", false);
        commit("SET_CLICK_MAP", true);

        resolve(true);
      });
    },
    setClicked({ commit }, status) {
      commit("SET_CLICK_MAP", status);
    },
    async getGraphicsInfo({ commit }) {
      const graphics = await fetch(`${location.origin}/api/getGraphics.php`);
      graphics.ok && commit("SET_GRAPHICS", (await graphics.json()).result);

      const quotes = await fetch(`${location.origin}/api/getQuotes.php`);
      quotes.ok && commit("SET_QUOTES", (await quotes.json()).result);
    },
    async getFullInfo({ commit, dispatch }) {
      const regions = await fetch(`${location.origin}/api/getRegions.php`);
      regions.ok && commit("SET_REGIONS", (await regions.json()).result);

      const cities = await fetch(`${location.origin}/api/getCities.php`);
      cities.ok && commit("SET_CITIES", (await cities.json()).result);

      const people = await fetch(`${location.origin}/api/getPeople.php`);
      people.ok && commit("SET_PEOPLE", (await people.json()).result);

      dispatch("setBasicShowInfo");

      const quotes = await fetch(`${location.origin}/api/getQuotes.php`);
      quotes.ok && commit("SET_QUOTES", (await quotes.json()).result);
    },
    async getPersonInfo({ commit }, id){
      const person = await fetch(`${location.origin}/api/getPerson.php?id=${id}`);
      person.ok && commit("SET_ACTIVE_PERSON", (await person.json()).result)
    },
    async searchInfo({ commit, getters }) {
      const response = await fetch(
        `${location.origin}/api/getSearch.php?search=${getters.search_text}`
      );

      const result = (await response.json()).result;

      commit("SHOW_CITIES", result.cities);
      commit("SHOW_PEOPLE", result.people);

      commit("SET_ACTIVE_REGION", {});
      commit("SET_ACTIVE_CITY", {});
      commit("SET_ACTIVE_PERSON", {});

      commit("SET_CLICK_MAP", false);
      commit("SET_SEARCH_ACTIVE", getters.search_text.length > 0);
    },
    updateText({ commit }, text) {
      commit("SET_SEARCH", text.target.value);
    },
    getNextQuote({ commit }) {
      commit("UPDATE_QUOTES");
    },
    toggleLine({commit}, status) {
      commit("SCROLL_LINE", status);
    },
    toggleModal({commit}, status) {
      commit("SET_MODAL", status);
    }
  },
});
