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
        @click="opentamu"
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
      <a
        href="https://www.instagram.com/p/CHhlSvZDDY4/?igshid=1pg0humv5l4xn"
        target="_blank"
      >
        <img
          src="../../assets/icon/bodymist.png"
          alt="bodymist"
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
          alt="metronomdj"
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
    <base-modal :idModal="'tamu'" @cleardata="cleardata">
      <template>
        <h1 class="title-modal text-center mb-0">Guestbook</h1>
        <p class="text-center">
          You can give your best wishes to the wedding couple and enter the
          venue by writing in this guestbook.
        </p>
        <b-row>
          <b-col cols="12" md="6" class="form-wrapper">
            <b-form ref="form" @submit.stop.prevent="submitData" class="mt-3">
              <b-form-group label="Name" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  autofocus
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Email" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter your email"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Message"
                label-for="textarea"
                class="mb-0 textarea-title"
              >
                <b-form-textarea
                  id="textarea"
                  v-model.trim="form.message"
                  placeholder="Write your message here..."
                  size="sm"
                  cols="10"
                  required
                ></b-form-textarea>
              </b-form-group>

              <div class="btn-wrapper">
                <b-button
                  type="submit"
                  block
                  class="mt-4 btn-auth btn-auth-primary submit-message"
                  >Submit</b-button
                >
              </div>
            </b-form>
          </b-col>
          <b-col cols="12" md="6" class="d-none d-md-block messages">
            <div v-for="item in messages" :key="item.id">
              <p class="mb-0 name">{{ item.name }}</p>
              <p>{{ item.text }}</p>
            </div>
          </b-col>
          <b-col cols="12" md="6" class="mt-4 d-md-none d-sm-block">
            <div v-for="item in messages" :key="item.id">
              <p class="mb-0 name">{{ item.name }}</p>
              <p>{{ item.text }}</p>
            </div>
          </b-col>
        </b-row>
      </template>
    </base-modal>

    <!-- <tamu-modal @submitData="submitData">
      <template #response>
        <b-col cols="12" md="6" class="d-none d-md-block messages">
          <div v-for="item in messages" :key="item.id">
            <p class="mb-0 name">{{ item.name }}</p>
            <p>{{ item.text }}</p>
          </div>
        </b-col>
        <b-col cols="12" md="6" class="mt-4 d-md-none d-sm-block">
          <div v-for="item in messages" :key="item.id">
            <p class="mb-0 name">{{ item.name }}</p>
            <p>{{ item.text }}</p>
          </div>
        </b-col>
      </template>
    </tamu-modal> -->
    <amplop-modal></amplop-modal>
    <live-modal></live-modal>
    <gallery-modal></gallery-modal>
    <thank-modal></thank-modal>

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
// import TamuModal from "../modal/TamuModal.vue";
import WelcomeModal from "../modal/WelcomeModal.vue";
import BaseModal from "../ui/BaseModal";

import axios from "axios";
import ThankModal from "../modal/ThankModal.vue";

export default {
  components: {
    WelcomeModal,
    // TamuModal,
    AmplopModal,
    LiveModal,
    GalleryModal,
    ThankModal,
    BaseModal,
  },
  data() {
    return {
      countdown: true,
      logovisible: true,
      messages: null,
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      var data = {
        name: this.form.name,
        email: this.form.email.toLowerCase(),
        text: this.form.message,
      };
      this.$emit("submitData", data);
    },
    cleardata() {
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
    closeModal() {
      this.$bvModal.hide("welcome");
      var getData = {
        method: "get",
        url: "https://weddingdev.arthatronic.com/api/users",
      };
      axios(getData)
        .then((response) => {
          this.messages = response.data.reverse();
        })
        .catch((error) => {
          console.error(error);
        });
      this.$bvModal.show("tamu");
      var audio = this.$root.$el.nextElementSibling;
      audio.volume = 0.05;
      audio.play();
    },
    opentamu() {
      this.$bvModal.show("tamu");
      var getData = {
        method: "get",
        url: "https://weddingdev.arthatronic.com/api/users",
      };
      axios(getData)
        .then((response) => {
          this.messages = response.data.reverse();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    submitData() {
      var data = {
        name: this.form.name,
        email: this.form.email.toLowerCase(),
        text: this.form.message,
      };

      var postData = {
        method: "post",
        data: data,
        url: "https://weddingdev.arthatronic.com/api/users/ucapan",
      };
      axios(postData)
        .then(() => {
          // console.log(response);

          var getData = {
            method: "get",
            url: "https://weddingdev.arthatronic.com/api/users",
          };
          axios(getData)
            .then((response) => {
              this.messages = response.data.reverse();
              this.$bvModal.show("thanks");
              setTimeout(() => {
                this.$bvModal.hide("thanks");
              }, 2000);
              this.form.name = ""
              this.form.email = ""
              this.form.message = ""
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    setTimeout(() => {
      this.logovisible = false;
    }, 3000);
    setTimeout(() => {
      this.$bvModal.show("welcome");
    }, 3750);
  },
};
</script>

<style>
.messages {
  max-height: 65vh;
  overflow: auto;
}
.name {
  font-weight: bolder;
}
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
  cursor: pointer;
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