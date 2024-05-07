<template>
  <li>
    <a class="item-people" :class="{active: isActive}" href="" @click.prevent="setActivePerson(man)">
      <div class="item-people__image">
        <img :srcset="photo" :src="photo.split(',')[0]" @error="setPlaceholder"/>
      </div>
      <div class="item-people__text">
        <strong>{{ shortName }}</strong>
        <span>{{ position }}</span>
      </div>
    </a>
  </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ListMan",
  props: {
    man: Object,
    isActive: Boolean
  },
  data() {
    return {
      error: false
    }
  },
  watch: {
    man() {
      this.$set(this, 'error', false);
    }
  },
  computed: {
    shortName() {
      const name = this.man.name;
      const f_name = this.man.f_name;
      const s_name = this.man.s_name;

      const empty_s_name = s_name === '-';

      return `${name.length > 0 ? name[0] + '.' : ''} ${f_name.length > 0 ? (empty_s_name ? f_name : f_name[0] + '.') : ''} ${empty_s_name ? '' : s_name}`;
    },
    position() {
      const position_text = this.man.position;
      const war_text = this.man.war_description;

      return position_text.length > 0 ? (position_text.length < 40 ? position_text : `${position_text.replace(/<[^>]*>?/gm, '').replace(/\\n/g, ' ').slice(0, 40)}...`) : (war_text.length > 0 ? (war_text.length < 40 ? war_text : `${war_text.replace(/<[^>]*>?/gm, '').replace(/\\n/g, ' ').slice(0, 40)}...`) : '');
    },
    photo() {
      const placeholder = this.man.sex ? '/assets/images/placeholders/round_pic_wmn.png' : '/assets/images/placeholders/round_pic_mn.png';
      const retina = this.man.sex ? '/assets/images/placeholders/round_pic_wmn@2x.png' : '/assets/images/placeholders/round_pic_mn@2x.png';
      return this.error ? `${placeholder}, ${retina} 2x` : (this.man.photo ? this.man.photo.replace(/ /g, '%20') : '');
    }
  },
  methods: {
    ...mapActions(['setActivePerson']),
    setPlaceholder() {
      this.$set(this, 'error', true);
    }
  }
};
</script>
