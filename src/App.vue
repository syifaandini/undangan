<template>
  <div id="app">
    <div class="bg-3d d-flex justify-content-center"></div>
    <div class="overlay-bg"></div>
    <Countdown v-if="countdown" @toUndangan="toUndangan" />
    <div v-else class="bg-undangan d-flex justify-content-center">
      <img class="undangan" src="./assets/undangan.jpeg" alt="undangan" />
      <b-button class="btn-ok" @click="toCD">OK</b-button>
    </div>
  </div>
</template>

<script>
import Countdown from "./components/Countdown.vue";

export default {
  components: { Countdown },
  data() {
    return {
      countdown: false,
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
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700&display=swap");

body,
html {
  margin: 0;
  padding: 0;
  font-family: "Red Hat Display", sans-serif !important;
}
.bg-3d {
  position: absolute;
  z-index: 1;
  background: url("./assets/background.jpg") no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  filter: blur(3px);
  -webkit-filter: blur(3px);
  height: calc(var(--vh, 1vh) * 100);
  /* height: calc(var(--vh, 1vh) * 100); */
}
.overlay-bg {
  position: absolute;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.8);
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
  background-color: #444;
  color: #998d45;
  font-weight: bold;
  position: fixed;
  bottom: 1%;
  border-radius: 12px;
  width: 80px;
  outline: none;
  border: none;
}
.btn-ok:hover,
.btn-ok:active,
.btn-ok:focus {
  background-color: #444;
  outline: none;
  box-shadow: transparent !important;
}

/* 20:9 */
@media only screen and (min-aspect-ratio: 9/20) and (orientation: portrait) {
  .undangan {
    height: 86vh;
    width: 89%;
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
