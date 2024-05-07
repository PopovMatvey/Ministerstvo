<template>
  <div id="app">
    <router-view/> <!-- Компонент страницы -->
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<!-- Стили тут -->
<style lang="scss">

  $primary: #da3c1f;

  @font-face {
    font-family: "Roboto";
    src: url("assets/fonts/Roboto-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto";
    src: url("assets/fonts/Roboto-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto";
    src: url("assets/fonts/Roboto-Black.ttf") format("truetype");
    font-weight: 900;
    font-style: normal;
  }

  body {
    position: relative;
    font-family: "Roboto", "Arial", sans-serif;
    min-width: 320px;
    font-size: 16px;
    color: #000;
    font-weight: 400;
  }

  * {
    box-sizing: border-box;
    font-family: "Roboto", "Arial", sans-serif;
  }

  .page-wrap {
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: $primary;
    }
  }

  // 

  .logo-stat {
    width: 100%;
    max-width: 346px;

    a {
      display: block;
    }
  }

  .inner-logo {
    display: flex;
    align-items: center;
    
    p {
      margin: 0;
      margin-left: 12px;
      font-size: 24px;
      color: $primary;
      font-weight: 700;
      text-transform: uppercase;

      @media(max-width:991px) {
        font-size: 18px;

        span {
          display: block;
        }
      }
    }

    span {
      color: #fff;
    }

    img {
      width: 42px;
      height: 45px;
    }
  }

  .inner-content {
    display: flex;
  }

  .custom-scrollbar__sidebar {
    width: 100%;
    max-width: 390px;
    padding-right: 17px;
    flex-shrink: 0;
    height: calc(100vh - 114px);
  }

  .sidebar {
    width: 100%;
    height: 100%;

    &__image {
      width: 262px;
      height: 149px;
      text-align: right;
      margin-right: 28px;
      margin-left: auto;

      img {
        width: 100%;
        display: block;
        opacity: 1;
        height: 100%;
        object-fit: contain;
        @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
          width: auto;
          display: inline-block;
        }
      }
    }

    &__image-wr {
      width: 100%;
      height: 100%;
      // max-width: 100%;
      // max-height: 100%;
      // background: #000;
      // box-shadow: -21.7px 12.5px 25.2px 3.8px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      cursor: pointer;
      text-align: center;
    }

    &__name {
      font-size: 25px;
      font-weight: 700;
      text-align: right;
      color: #fff;
      text-transform: uppercase;
      margin: 20px 0;
      cursor: pointer;

      a {
        position: relative;
        display: inline-block;
        padding-right: 28px;

        &::after {
          position: absolute;
          content: "";
          right: -5px;
          top: 7px;
          border: 7px solid transparent;
          border-left: 11px solid #be3c21;
        }
      }
    }

    &__tab-title {
      margin-top: 0;
      margin-bottom: 18px;
      height: 32px;
      color: #fff;
      background-color: $primary;
      font-size: 20px;
      line-height: 32px;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 2px;
      text-align: center;
      padding-left: 70px;
    }

    &__tab-search {
      display: flex;
      padding-left: 70px;

      button {
        flex-shrink: 0;
        border: none;
        width: 26px;
        height: 26px;
        background: url("assets/images/search.svg") no-repeat center;
        background-size: 26px;
        margin-right: 8px;
      }

      input {
        flex-grow: 1;
        border: none;
        width: 100%;
        border-bottom: 1px solid $primary;
        background-color: transparent;
        color: #fff;
        font-size: 20px;
        padding: 2px 15px 6px 15px;
      }
    }

    &__tab-list {
      margin: 0;
      padding-left: 70px;
      padding-top: 5px;
      padding-bottom: 5px;
      list-style: none;
    }
  }

  .item-people {
    display: flex;
    align-items: center;
    margin-left: 36px;
    padding: 10px 0;

    @media(max-width:991px) {
      margin-left: 0;
    }

    &__image {
      flex-shrink: 0;
      width: 56px;
      height: 56px;
      border: 3px solid #8c8c8c;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 12px;
      opacity: 0.6;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      width: 100%;

      strong {
        display: block;
        font-size: 18px;
        font-weight: 700;
        color: rgba(140, 140, 140, 0.7);
        text-transform: uppercase;
        margin-bottom: 2px;
      }

      span {
        display: block;
        font-size: 15px;
        font-weight: 700;
        color: rgba(140, 140, 140, 0.7);
        text-transform: uppercase;
      }
    }

    &:hover,
    &.active {
      .item-people__image {
        opacity: 1;
        border: 3px solid $primary;
      }

      .item-people__text strong {
        color: $primary;
      }

      .item-people__text span {
        color: #fff;
      }
    }
  }

  .item-city {
    display: block;
    padding: 5px 15px;
    font-size: 17px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.68px;
    color: #737373;
    text-align: center;

    &.active {
      color: $primary;
    }
  }

  .tab-line {
    position: relative;
    margin-left: 70px;
    height: 1px;
    background-color: $primary;

    &::before {
      position: absolute;
      content: "";
      width: 1px;
      height: 10px;
      left: 0;
      background-color: $primary;
    }

    &::after {
      position: absolute;
      content: "";
      width: 1px;
      height: 10px;
      right: 0;
      background-color: $primary;
    }

    &--top {
      &::before,
      &::after {
        bottom: 0;
      }
    }

    &--bottom {
      &::before,
      &::after {
        top: 0;
      }
    }

    @media(max-width:991px) {
      margin-left: 15px;
    }

    @media(max-width:767px) {
      margin-right: 15px;
    }
  }

  .arrows {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    margin-left: 70px;

    button {
      position: relative;
      width: 20px;
      height: 20px;
      background: transparent;
      border: none;
      cursor: pointer;
      outline: none;
    }

    &__top {
      margin-right: 2px;
    }

    &__top::before {
      position: absolute;
      content: "";
      border: 7px solid transparent;
      border-bottom: 11px solid #be3c21;
      left: 3px;
      top: -2px;
    }

    &__bottom::before {
      position: absolute;
      content: "";
      border: 7px solid transparent;
      border-top: 11px solid #be3c21;
      left: 3px;
      top: 5px;
    }

    @media(max-width:991px) {
      margin-left: 15px;
    }

    @media(max-width:767px) {
      margin-right: 15px;
    }
  }

  .map {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 30px;
    margin-right: 120px;
    height: calc(100vh - 114px);
    padding-bottom: 60px;

    &__wr {
      width: 100%;
      max-width: 1380px;
      margin: auto;
      height: 100%;

      svg:not(.svg-mask) {
        width: 100%;
        height: 100%;
      }
    }

    &__message {
      position: absolute;
      left: 420px;
      right: 120px;
      bottom: 20px;
      color: #fefefe;
      padding: 8px 30px;
      border: 3px solid $primary;
      font-size: 15px;
      letter-spacing: 1.45px;
      background: rgba(0, 0, 0, 0.4);

      p {
        margin: 0;
      }

      @media(max-width:991px) {
        left: 340px;
      }

      @media(max-width:767px) {
        left: 15px;
        right: 15px;
        bottom: 70px
      }
    }
  }

  // modal

  .custom-scrollbar__modal {
    width: 100%;
    height: 100%;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 10;
  }

  .modal {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 11;
    color: #fff;
    padding: 40px;

    @media(max-width:575px) {
      padding: 20px 0;
    }

    &__content {
      position: relative;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      max-width: 1100px;
      margin: 0 auto;
      padding: 40px;

      @media(max-width:575px) {
        padding: 20px;
      }
    }

    &__content-wr {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__image {
      width: 48%;
      transform: rotate(-3deg);

      &-wr {
        position: relative;

        &::before {
          display: block;
          position: absolute;
          content: "";
          width: 100%;
          height: 104%;
          left: 15px;
          top: -21px;
          border: 5px solid $primary;

          @media(max-width:575px) {
            width: 98%;
            height: 100%;
            left: -10px;
            top: -15px;
            border: 2px solid #da3c1f;
          }
        }
      }

      img {
        width: 100%;
        display: block;
        position: relative;
      }

      @media(max-width:991px) {
        width: 35%;
      }

      @media(max-width:767px) {
        width: 70%;
        margin: 0 auto;
        margin-bottom: 50px;
        transform: rotate(-2deg);
      }

      @media(max-width:575px) {
        width: 100%;
        padding: 0 20px;
      }
    }

    &__text {
      width: 50%;
      padding-left: 80px;

      @media(max-width: 991px) {
        width: 65%;
      }

      @media(max-width: 767px) {
        width: 100%;
      }

      @media(max-width: 575px) {
        padding-left: 0;
        
      }
    }

    &__title {
      position: relative;
      font-size: 32px;
      font-weight: 700;
      text-transform: uppercase;
      margin-top: 0;
      margin-bottom: 28px;

      &::before {
        position: absolute;
        content: "";
        width: 36px;
        height: 36px;
        left: -55px;
        top: -7px;
        background: url(assets/images/user.svg) no-repeat center;
        background-size: 100%;
      }

      @media(max-width: 575px) {
        padding-left: 30px;
        font-size: 20px;
        letter-spacing: 2px;
        margin-bottom: 18px;

        &::before {
          width: 19px;
          height: 19px;
          left: 0;
          top: -1px;
        }
      }
    }

    &__place {
      position: relative;
      font-size: 32px;
      font-weight: 700;
      text-transform: uppercase;
      margin-top: 0;
      margin-bottom: 28px;

      &::before {
        position: absolute;
        content: "";
        width: 36px;
        height: 36px;
        left: -55px;
        top: -3px;
        background: url(assets/images/pin.svg) no-repeat center;
        background-size: 100%;
      }

      @media(max-width: 575px) {
        padding-left: 30px;
        font-size: 20px;
        letter-spacing: 2px;
        margin-bottom: 18px;

        &::before {
          width: 19px;
          height: 19px;
          left: 0;
          top: -1px;
        }
      }
    }

    &__item {
      margin-bottom: 20px;
      letter-spacing: 0.8px;

      h4 {
        margin-top: 0;
        margin-bottom: 2px;
        color: $primary;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 18px;
        letter-spacing: 1.8px;

        @media(max-width: 575px) {
          font-size: 16px;
        }
      }

      p {
        margin-top: 0;
      }

      strong {
        font-size: 18px;

        @media(max-width: 575px) {
          font-size: 16px;
        }
      }
    }

    &__share {
      margin: 30px 0;

      p {
        font-size: 18px;
        margin-top: 0;
        margin-bottom: 10px;
      }

      &-icons {
        display: flex;
      }
    }

    &__close {
      position: absolute;
      right: 20px;
      top: 0;

      .btn-close {
        position: relative;
      }

      @media (min-width: 768px) {
        .btn-close::before {
          position: absolute;
          content: "\0437\0430\043A\0440\044B\0442\044C";
          font-size: 18px;
          text-transform: uppercase;
          transform: rotate(-90deg);
          color: #fff;
          left: -32px;
          top: 75px;
          letter-spacing: 2px;
        }
      }
    }

    &__mobile-title {
      display: none;
      font-size: 18px;
      color: $primary;
      width: 100%;
      margin-top: 0;
      margin-bottom: 35px;
      text-transform: uppercase;
      font-weight: 700;
      text-align: center;
      letter-spacing: 3.6px;

      @media (max-width: 767px) {
        display: block;
      }
    }
  }

  .share-link {
    display: block;
    margin-right: 15px;
    width: 40px;
    height: 40px;
    position: relative;
    overflow: hidden;

    &::before {
      position: absolute;
      content: '';
      width: 97%;
      height: 97%;
      background: transparent;
      z-index: -1;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: background .4s;
    }

    &:hover {
      &::before {
        background: #fff;
      }
    }
  }

  .btn-close {
    position: relative;
    width: 32px;
    height: 32px;
    border: none;
    background: url(assets/images/close.svg) no-repeat center;
    background-size: 100%;
    cursor: pointer;
  }

  .burger {
    display: none;
    width: 35px;
    height: 23px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding: 0;
  }

  .mobile-menu {
    margin: 0;
    padding: 10px 0;
    width: 100%;
    list-style: none;
    position: absolute;
    left: 0;
    top: calc(100% + 15px);
    background-color: rgba(0,0,0,0.85);
    z-index: 1;

    a {
      display: block;
      text-align: center;
      color: #fff;
      padding: 10px 0;
      font-size: 18px;
      font-weight: 700;

      span {
        color: $primary;
      }
    }
  }

  @media(max-width:991px) {
    .custom-scrollbar__sidebar {
      max-width: 310px;
      height: calc(100vh - 76px);
    }

    .sidebar__image {
      width: calc(100% - 30px);
      margin: 0px;
      margin: 0 15px;
    }
    
    .sidebar__name {
      margin-left: 15px;
    }

    .sidebar__tab-title,
    .sidebar__tab-search,
    .sidebar__tab-list {
      padding-left: 15px;
    }

    .sidebar__name {
      font-size: 20px;
      text-align: left;
      margin-right: 15px;

      a {
        display: block;

        &::after {
          top: 4px;
        }
      }
    }
  }

  @media(max-width:767px) {
    .custom-scrollbar__sidebar {
      height: auto;
      padding-right: 0;
      width: 100%;
      max-width: 100%;
      margin: 0 auto;
    }

    .sidebar__image {
      opacity: 1;
      // height: auto;
    }

    .sidebar__tab-search,
    .sidebar__tab-list {
      padding-right: 15px;
    }

    .sidebar__tab-title {
      padding-left: 0;
    }
  }

  .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 2s;
    background-color: #303030;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -5;

    &.active {
      z-index: -1;
      opacity: 1;
    }
  }

  .move-on {
    display: flex;
    position: absolute;
    align-items: center;
    width: 100%;
    bottom: 30px;
    right: 0;
    padding-right: 130px;

    .progress-bar {
      position: relative;
      flex-grow: 1;
      height: 3px;
      background-color: transparent;
      overflow: hidden;

      span {
        position: absolute;
        height: 3px;
        background-color: #be3c21;
      }
    }

    &__link {
      position: relative;
      display: block;
      flex-shrink: 0;
      font-size: 42px;
      color: #fff;
      letter-spacing: -2.52px;
      margin-left: 30px;
      padding-right: 40px;
      transition: all .3s;
      z-index: 5;

      &::after {
        position: absolute;
        content: "";
        right: -12px;
        top: 55%;
        transform: translateY(-50%);
        border: 14px solid transparent;
        border-left: 24px solid #be3c21;
        transition: right .3s;
      }

      &:hover {
        &::after {
          right: -22px;
        }
      }
    }

    @media (max-width: 1199px) {
      padding-right: 60px;

      &__link {
        font-size: 20px;
        letter-spacing: 0.4px;
        padding-right: 25px;
        margin-left: 10px;

        &::after {
          right: 0;
          border: 6px solid transparent;
          border-left: 9px solid #be3c21;
        }

        &:hover {
          &::after {
            right: -6px;
          }
        }
      }
    }

    @media(max-width: 767px) {
      padding-right: 15px;
    }
  }

  .modal-open {
    overflow: hidden;
  }

  .custom-scrollbar__inner,
  .custom-scrollbar__home {
    position: fixed !important;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .scrollbar-track {
    border-radius: 4px;
  }

</style>
