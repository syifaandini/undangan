<template>
  <div>
    <!-- <div class="content"> -->
    <div class="hotspot">
      <img
        src="../../assets/background.jpg"
        alt="background"
        class="image-bg"
      />
      <img
        src="../../assets/icon/guestbook.png"
        alt="guest book"
        class="interact icon1"
        v-b-modal.tamu
      />
      <img
        src="../../assets/icon/amplop.png"
        alt="e-amplop"
        class="interact icon2"
        v-b-modal.amplop
      />
      <img
        src="../../assets/icon/photos.png"
        alt="gallery"
        class="interact icon3"
        v-b-modal.gallery
      />
      <a href="https://www.google.com/" target="_blank">
        <img
          src="../../assets/interact.png"
          alt="food1"
          class="interact icon4"
        />
      </a>
      <a href="https://instagram.com/arthatronicstudio" target="_blank"
        ><img
          src="../../assets/icon/artha.png"
          alt="arthatronic"
          class="interact icon5"
      /></a>
      <img
        src="../../assets/icon/liveicon.png"
        alt="live"
        class="interact icon6"
        v-b-modal.live
      />
      <a href="https://instagram.com/metronomdj" target="_blank"
        ><img
          src="../../assets/icon/metronomdj.png"
          alt="food3"
          class="interact icon7"
      /></a>
      <a href="https://instagram.com/demiebakmi" target="_blank"
        ><img
          src="../../assets/icon/demie.png"
          alt="demie"
          class="interact icon8"
      /></a>
    </div>

    <welcome-modal @closeModal="closeModal"></welcome-modal>
    <tamu-modal></tamu-modal>
    <amplop-modal></amplop-modal>
    <live-modal></live-modal>
    <gallery-modal></gallery-modal>

    <!-- </div> -->
    <transition name="fade" mode="in-out">
      <div v-show="logovisible" class="bg-logo">
        <img class="logo" src="../../assets/logo.png" alt="logo" />
      </div>
    </transition>
  </div>
</template>

<script>
import AmplopModal from "../modal/AmplopModal.vue";
import GalleryModal from "../modal/GalleryModal.vue";
import LiveModal from "../modal/LiveModal.vue";
import TamuModal from "../modal/TamuModal.vue";
import WelcomeModal from "../modal/WelcomeModal.vue";

export default {
  components: { WelcomeModal, TamuModal, AmplopModal, LiveModal, GalleryModal },
  data() {
    return {
      countdown: true,
      logovisible: true,
    };
  },
  methods: {
    closeModal() {
      this.$bvModal.hide("welcome");
    },
  },
  mounted() {
    console.log("hehe");
    console.log(this.logovisible);
    setTimeout(() => {
      this.logovisible = false;
    }, 3000);
    setTimeout(() => {
      this.$bvModal.show("welcome");
    }, 3750);
  },
  // created() {
  //   setTimeout(() => {
  //     this.logovisible = true;
  //   }, 1000);
  // },
};
</script>

<style>
.interact {
  animation: blinker 1s ease-in-out infinite alternate;
}

@keyframes blinker {
  100% {
    transform: scale(0.7);
  }
}
.bg-3d-acara {
  position: absolute;
  z-index: 1;
  background: url("../../assets/background.jpg") no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
}

.hotspot {
  /* background: url(/img/background.bbaa5595.jpg); */

  /* background-size: cover; */
  background: url("../../assets/background.jpg");
  background-size: auto 116%;
  background-repeat: no-repeat;
  background-position: left center;
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 15;
  top: 0;
}
.image-bg {
  position: absolute;
  z-index: 8;
  /* visibility: hidden; */
  display: none;
}
.interact {
  position: absolute;
  z-index: 10;
  width: 5%;
}
.interact:focus {
  outline: none;
}
.icon1 {
  top: 43%;
  left: 8%;
}
.icon2 {
  top: 37%;
  left: 22%;
}
.icon3 {
  top: 26%;
  left: 13%;
}
.icon4 {
  top: 66%;
  left: 35%;
}
.icon5 {
  top: 79%;
  left: 57%;
}
.icon6 {
  top: 21%;
  right: 24%;
}
.icon7 {
  top: 69%;
  right: 48%;
}
.icon8 {
  top: 73%;
  right: 70%;
}

@media only screen and (min-aspect-ratio: 9/20) and (orientation: portrait) {
  .hotspot {
    background-size: 100% 100%;
    width: 1200px;
    height: 100vh;
  }
  .icon5 {
    top: 76%;
    left: 56%;
  }
  .icon7 {
    top: 67%;
    right: 48%;
  }
  .icon8 {
    top: 72%;
    right: 70%;
  }
}
@media only screen and (min-width: 768px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
  /* .hotspot {
    background-size: auto 100%;
    width: 2428px;
    width: 100%;
    height: 100vh;
  } */
}

/* ipad */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
  .hotspot {
    background-size: auto 100%;
    width: 1800px;
    height: 100vh;
  }
}
/* ipad landscape */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
  .hotspot {
    background-size: 100% 116%;
    width: 100vw;
    height: 100vh;
  }
}

/* ipad pro portrait */
@media only screen and (min-device-width: 1024px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
  .hotspot {
    background-size: auto 100%;
    width: 2428px;
    height: 100vh;
  }
}
@media only screen and (min-device-width: 1366px) and (max-device-width: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
  .hotspot {
    background-size: 100% 116%;
    width: 100vw;
    height: 100vh;
  }
}
</style>