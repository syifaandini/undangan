<template>
  <div>
    <div class="bg-3d d-flex justify-content-center"></div>
    <div class="overlay-bg"></div>

    <!-- <transition name="fade">
      <div v-show="logovisible">
        <div class="d-flex align-items-center justify-content-center">
          <img class="logo" src="./assets/logo.png" alt="logo" />
        </div>
      </div>
    </transition> -->

    <transition name="fade" mode="out-in">
      <div v-show="logovisible" class="bg-logo">
        <img class="logo" src="../../assets/logo.png" alt="logo" />
      </div>
    </transition>

    <transition name="scale">
      <div v-show="!logovisible && countdown">
        <Countdown @toUndangan="toUndangan" />
      </div>
    </transition>

    <transition name="scale">
      <div v-if="!countdown" class="bg-undangan d-flex justify-content-center">
        <img class="undangan" src="../../assets/undangan.png" alt="undangan" />
        <b-button class="btn-ok" @click="toCD">OK</b-button>
      </div>
    </transition>
  </div>
</template>

<script>
import Countdown from "../Countdown";
export default {
  components: { Countdown },
  data() {
    return {
      countdown: true,
      logovisible: true,
    };
  },
  methods: {
    toCD() {
      this.countdown = true;
    },
    toUndangan() {
      this.countdown = false;
    },
  },
  created() {
    setTimeout(() => (this.logovisible = false), 2000);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.2);
}

.scale-enter-from {
  /* opacity: 0;
  transform: translateY(-50px) scale(0.2); */
}
.scale-enter-active {
  animation: scale 1s ease-out;
  /* transition: all 0.3s ease-out; */
}
.scale-enter-to {
  /* opacity: 1;
    transform: translateY(0) scale(1); */
}

@keyframes scale {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.2);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.bg-logo {
  position: absolute;
  z-index: 1000;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b9cbbb;
}
.logo {
  position: absolute;
  z-index: 5;
  width: 30%;
  top: 50%;
  transform: translateY(-50%);
}
.bg-3d {
  position: absolute;
  z-index: 1;
  background: url("../../assets/background.jpg") no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  filter: blur(3px);
  -webkit-filter: blur(3px);
  height: calc(var(--vh, 1vh) * 100);
}
.overlay-bg {
  position: absolute;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  filter: blur(3px);
  -webkit-filter: blur(3px);
  height: calc(var(--vh, 1vh) * 100);
}
.bg-undangan {
  position: absolute;
  background-color: transparent;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  z-index: 3;
  height: calc(var(--vh, 1vh) * 100);
}
.undangan {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  height: 85vh;
  width: auto;
}
.btn-ok {
  background-color: #b9cbbb;
  color: black;
  font-weight: bold;
  position: fixed;
  bottom: 1%;
  border-radius: 12px;
  width: 80px;
  outline: none;
  border: none;
  height: 38px;
  line-height: 25px;
}
.btn-ok:hover,
.btn-ok:active,
.btn-ok:focus {
  background-color: #b9cbbb !important;
  color: black !important;
  outline: none !important;
  box-shadow: none !important;
}

/* 20:9 */
@media only screen and (min-aspect-ratio: 9/20) and (orientation: portrait) {
  .undangan {
    height: 86vh;
    width: 89%;
  }
  .logo {
    width: 80%;
  }
}

/* 16:9 */
@media only screen and (min-aspect-ratio: 9/16) and (orientation: portrait) {
  .undangan {
    height: 74vh;
    width: 88%;
  }
}
</style>