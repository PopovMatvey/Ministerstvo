<template>
  <div class="modal">
    <div class="custom-scrollbar__modal">
      <div class="modal__content">
        <h4 class="modal__mobile-title">Профаил</h4>
        <div class="modal__content-wr">
          <div class="modal__image">
            <div class="modal__image-wr">
              <img :srcset="photo" :src="photo.split(',')[0]" @error="setPlaceholder" />
            </div>
          </div>
          <div class="modal__text">
            <h2 class="modal__title">{{ name }}</h2>
            <!-- <h2 class="modal__place">{{ active_person.place_ussr }}</h2> -->
            <div class="modal__item">
              <h4>рождение/смерть:</h4>
              <div>
                <p>
                  <strong>{{ birth_date }}</strong>
                </p>
              </div>
            </div>
            <div class="modal__item" v-show="active_person.gos_stat_info.length > 0">
              <h4>Период работы в Госкомстате:</h4>
              <div>
                <p>
                  <strong>{{ active_person.gos_stat_info }}</strong>
                </p>
              </div>
            </div>
            <div class="modal__item" v-show="active_person.war_description.length > 0">
              <h4>Краткое описание боевого пути:</h4>
              <div v-html="war_info"></div>
            </div>
            <div class="modal__item" v-show="active_person.work_descrpiption.length > 0">
              <h4>Краткая трудовая биогрфаия:</h4>
              <div v-html="work_info"></div>
            </div>
            <div class="modal__item" v-show="active_person.reward_list.length > 0">
              <h4>Награды боевые и трудовые:</h4>
              <div v-html="reward_info"></div>
            </div>
            <div class="modal__share">
              <!--<a href="#" class="share-link" @click.prevent="sendShare">поделиться</a>-->
              <p>Поделиться:</p>
              <div class="modal__share-icons">
                <a class="share-link" :href="`https://connect.ok.ru/offer?url=${share_url}&title=${name}&description=Герои%20войны&imageUrl=${share_photo}`" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 97.75 97.75" style="enable-background:new 0 0 97.75 97.75;" xml:space="preserve"><g><g>
                    <g>
                      <path d="M48.921,40.507c4.667-0.017,8.384-3.766,8.367-8.443c-0.017-4.679-3.742-8.402-8.411-8.406    c-4.708-0.005-8.468,3.787-8.432,8.508C40.48,36.826,44.239,40.524,48.921,40.507z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#DA3C1F"/>
                      <path d="M48.875,0C21.882,0,0,21.883,0,48.875S21.882,97.75,48.875,97.75S97.75,75.867,97.75,48.875S75.868,0,48.875,0z     M48.945,14.863c9.52,0.026,17.161,7.813,17.112,17.438c-0.048,9.403-7.814,17.024-17.318,16.992    c-9.407-0.032-17.122-7.831-17.066-17.253C31.726,22.515,39.445,14.837,48.945,14.863z M68.227,56.057    c-2.105,2.161-4.639,3.725-7.453,4.816c-2.66,1.031-5.575,1.55-8.461,1.896c0.437,0.474,0.642,0.707,0.914,0.979    c3.916,3.937,7.851,7.854,11.754,11.802c1.33,1.346,1.607,3.014,0.875,4.577c-0.799,1.71-2.592,2.834-4.351,2.713    c-1.114-0.077-1.983-0.63-2.754-1.407c-2.956-2.974-5.968-5.895-8.862-8.925c-0.845-0.882-1.249-0.714-1.994,0.052    c-2.973,3.062-5.995,6.075-9.034,9.072c-1.365,1.346-2.989,1.59-4.573,0.82c-1.683-0.814-2.753-2.533-2.671-4.262    c0.058-1.166,0.632-2.06,1.434-2.858c3.877-3.869,7.742-7.75,11.608-11.628c0.257-0.257,0.495-0.53,0.868-0.93    c-5.273-0.551-10.028-1.849-14.099-5.032c-0.506-0.396-1.027-0.778-1.487-1.222c-1.783-1.711-1.962-3.672-0.553-5.69    c1.207-1.728,3.231-2.19,5.336-1.197c0.408,0.191,0.796,0.433,1.168,0.689c7.586,5.213,18.008,5.356,25.624,0.233    c0.754-0.576,1.561-1.05,2.496-1.289c1.816-0.468,3.512,0.201,4.486,1.791C69.613,52.874,69.6,54.646,68.227,56.057z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#DA3C1F"/>
                    </g>
                  </g></g>
                  </svg>
                </a>
                <a class="share-link" :href="`https://vk.com/share.php?url=${share_url}&title=${name}&description=Герои%20войны&image=${share_photo}&noparse=true`" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 97.75 97.75" style="enable-background:new 0 0 97.75 97.75;" xml:space="preserve"><g><g>
                    <path d="M48.875,0C21.883,0,0,21.882,0,48.875S21.883,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.867,0,48.875,0z    M73.667,54.161c2.278,2.225,4.688,4.319,6.733,6.774c0.906,1.086,1.76,2.209,2.41,3.472c0.928,1.801,0.09,3.776-1.522,3.883   l-10.013-0.002c-2.586,0.214-4.644-0.829-6.379-2.597c-1.385-1.409-2.67-2.914-4.004-4.371c-0.545-0.598-1.119-1.161-1.803-1.604   c-1.365-0.888-2.551-0.616-3.333,0.81c-0.797,1.451-0.979,3.059-1.055,4.674c-0.109,2.361-0.821,2.978-3.19,3.089   c-5.062,0.237-9.865-0.531-14.329-3.083c-3.938-2.251-6.986-5.428-9.642-9.025c-5.172-7.012-9.133-14.708-12.692-22.625   c-0.801-1.783-0.215-2.737,1.752-2.774c3.268-0.063,6.536-0.055,9.804-0.003c1.33,0.021,2.21,0.782,2.721,2.037   c1.766,4.345,3.931,8.479,6.644,12.313c0.723,1.021,1.461,2.039,2.512,2.76c1.16,0.796,2.044,0.533,2.591-0.762   c0.35-0.823,0.501-1.703,0.577-2.585c0.26-3.021,0.291-6.041-0.159-9.05c-0.28-1.883-1.339-3.099-3.216-3.455   c-0.956-0.181-0.816-0.535-0.351-1.081c0.807-0.944,1.563-1.528,3.074-1.528l11.313-0.002c1.783,0.35,2.183,1.15,2.425,2.946   l0.01,12.572c-0.021,0.695,0.349,2.755,1.597,3.21c1,0.33,1.66-0.472,2.258-1.105c2.713-2.879,4.646-6.277,6.377-9.794   c0.764-1.551,1.423-3.156,2.063-4.764c0.476-1.189,1.216-1.774,2.558-1.754l10.894,0.013c0.321,0,0.647,0.003,0.965,0.058   c1.836,0.314,2.339,1.104,1.771,2.895c-0.894,2.814-2.631,5.158-4.329,7.508c-1.82,2.516-3.761,4.944-5.563,7.471   C71.48,50.992,71.611,52.155,73.667,54.161z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#DA3C1F"/>
                  </g></g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="modal__close">
          <button @click="toggleModal(false)" class="btn-close"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ModalMan",
  data() {
    return {
      error: false
    }
  },
  watch: {
    active_person() {
      this.$set(this, 'error', false);
    }
  },
  computed: {
    ...mapGetters(["active_person"]),
    name() {
      const p_name = this.active_person.name;
      const p_f_name = this.active_person.f_name;
      const p_s_name = this.active_person.s_name;
      return `${p_name.length > 1 ? p_name : p_name + "."} ${p_f_name.length > 1 ? p_f_name : p_f_name + "."} ${p_s_name.length > 1 ? p_s_name : p_s_name + "."}`;
    },
    birth_date() {
      const death_year = this.active_person.death_year.length > 0 ? `- ${this.active_person.death_year}` : '';
      return `${this.active_person.birth_year} ${death_year}`;
    },
    photo() {
      const placeholder = this.active_person.sex ? '/assets/images/placeholders/modal_pic_wmn.jpg' : '/assets/images/placeholders/modal_pic_mn.jpg';
      const retina = this.active_person.sex ? '/assets/images/placeholders/modal_pic_wmn@2x.jpg' : '/assets/images/placeholders/modal_pic_mn@2x.jpg';
      return this.error ? `${placeholder}, ${retina} 2x` : (this.active_person.photo ? this.active_person.photo.replace(/ /g, '%20') : '');
    },
    share_url() {
      return `${location.origin}/api/share.php?id=${this.active_person.id}`;
    },
    share_photo() {
      return `${location.origin}${this.photo.split(',')[0]}`;
    },
    war_info() {
      return this.active_person.war_description.replace(/\\n/g, '<br />');
    },
    work_info() {
      return this.active_person.work_descrpiption.replace(/\\n/g, '<br />');
    },
    reward_info() {
      return this.active_person.reward_list.replace(/\\n/g, '<br />');
    }
  },
  methods: {
    ...mapActions(["toggleModal"]),
    setPlaceholder() {
      this.$set(this, 'error', true);
    },
    sendShare() {
      console.log(`victory-num.alef.im/people/${this.active_person.id}`);
    }
  },
  mounted() {
    window.Scrollbar.init(document.querySelector('.custom-scrollbar__modal'), {alwaysShowTracks: true});
  }
};
</script>
