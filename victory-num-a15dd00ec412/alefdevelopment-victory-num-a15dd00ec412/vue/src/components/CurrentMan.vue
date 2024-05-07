<template>
  <div @click="openModal">
    <div class="sidebar__image">
      <div class="sidebar__image-wr">
        <img :srcset="photo" :src="photo.split(',')[0]" @error="setPlaceholder" />
      </div>
    </div>
    <p class="sidebar__name">
      <a>{{ shortName }}</a>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CurrentMan",
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
    shortName() {
      const name = this.active_person.name;
      const f_name = this.active_person.f_name;
      const s_name = this.active_person.s_name;

      const empty_s_name = s_name === '-';

      return `${name.length > 0 ? name[0] + '.' : ''} ${f_name.length > 0 ? (empty_s_name ? f_name : f_name[0] + '.') : ''} ${empty_s_name ? '' : s_name}`;
    },
    photo() {
      const placeholder = this.active_person.sex ? '/assets/images/placeholders/current_pic_wmn.jpg' : '/assets/images/placeholders/current_pic_mn.jpg';
      const retina = this.active_person.sex ? '/assets/images/placeholders/current_pic_wmn@2x.jpg' : '/assets/images/placeholders/current_pic_mn@2x.jpg';
      return this.error ? `${placeholder}, ${retina} 2x` : (this.active_person.photo ? this.active_person.photo.replace(/ /g, '%20') : '');
    }
  },
  methods: {
    openModal() {
      this.$emit("modalHandler");
    },
    setPlaceholder() {
      this.$set(this, 'error', true);
    }
  },
};
</script>