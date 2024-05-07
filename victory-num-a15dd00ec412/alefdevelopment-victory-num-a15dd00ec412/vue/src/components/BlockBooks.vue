<template>
  <div class="books" :class="{ open: booksOpened }">
    <div class="books__content">
      <a href="/api/visit.php?visit_id=1" target="_blank" class="books__item">
        <img src="../assets/images/notebook-icon.svg" />
        <p>
          <span>75 лет</span><br />
          книга победы
        </p>
      </a>
      <a href="/api/visit.php?visit_id=2" target="_blank" class="books__item">
        <img src="../assets/images/notebook-icon.svg" />
        <p>
          <span>70 лет</span><br />
          книга победы
        </p>
      </a>
    </div>
    <button class="books__btn" @click="booksToggle">книги победы</button>
  </div>
</template>

<script>
export default {
  name: "BlockBooks",
  data() {
    return {
      booksOpened: false,
    };
  },
  computed: {
    homeLink() {
      return `${location.origin}/files/vov_75_site.pdf`;
    }
  },
  methods: {
    booksToggle() {
      this.$set(this, "booksOpened", !this.booksOpened);
    },
  },
};
</script>

<style lang="scss" scoped>

  $primary: #da3c1f;

  .books {
    position: absolute;
    height: 100%;
    right: -240px;
    top: 0;
    background-color: $primary;
    transition: all .3s;
    z-index: 10;

    &.open {
      right: 0;

      @media(max-width:767px) {
        bottom: 0 !important;
      }
    }

    &__btn {
      position: absolute;
      border: none;
      width: 348px;
      height: 68px;
      padding-left: 37px;
      text-align: left;
      right: calc(100% - 140px);
      top: 50%;
      transform: translateY(-50%) rotate(270deg);
      font-size: 27px;
      font-weight: 700;
      text-transform: uppercase;
      background-color: $primary;
      color: #fff;
      border-top-left-radius: 34px;
      border-top-right-radius: 34px;
      cursor: pointer;
      outline: none;

      &::after {
        position: absolute;
        content: "";
        width: 40px;
        height: 52px;
        top: 9px;
        right: 35px;
        background: url(../assets/images/notebook-icon.svg) no-repeat center;
        background-size: cover;
        transform: rotate(90deg);
      }
    }

    &__content {
      height: 100%;
      width: 280px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 40px;
    }

    &__item {
      text-align: center;
      color: #fff !important;
      font-weight: 700;
      margin-bottom: 30px;

      &:last-child {
        margin-bottom: 0;
      }

      img {
        width: 100px;
      }

      p {
        text-transform: uppercase;
        font-size: 25px;
        margin: 0;
      }

      span {
        font-size: 50px;
        text-transform: lowercase;
      }
    }
  }

  @media(max-width:767px) {
    .books {
      position: fixed;
      top: auto;
      right: 0;
      bottom: -148px;
      width: 100%;
      height: auto;

      &__content {
        width: 100%;
        height: auto;
        flex-direction: row;
        padding: 30px 0;
      }

      &__item {
        margin: 0;
        margin-right: 20px;

        &:last-child {
          margin-right: 0;
        }

        img {
          width: 45px;
        }

        p {
          font-size: 14px;
        }

        span {
          font-size: 26px;
        }
      }

      &__btn {
        width: 224px;
        right: 50%;
        top: -68px;
        transform: none;
        transform: translateX(50%);
        font-size: 18px;
        padding-left: 57px;
        height: 51px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        top: -35px;

        &::after {
          width: 21px;
          height: 33px;
          transform: none;
          right: auto;
          left: 26px;
          background-size: 21px 33px;
        }
      }
    }
  }

</style>
