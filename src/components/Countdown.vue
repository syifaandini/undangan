<template >
  <div class="overlay depan container-fluid">
    <div class="blue-bg mx-auto col-6" v-bind:class="{ active: updated }">
      <div class="tittle mb-2 mt-0 px-0">The virtual venue will open in</div>

      <div class="time-container row d-flex justify-content-center my-4">
        <!-- <div class="col-1 content-desktop"></div> -->
        <CDdays @endCD="endCD" class="mx-auto" />
        <CDhours class="mx-auto" />
        <CDminutes class="mx-auto" />
        <CDseconds class="mx-auto content-desktop" />
        <!-- <div class="col-1 content-desktop"></div> -->
      </div>
      <h5 @click="$emit('toUndangan')" alt="back" class="back mt-5 text-center">
        Show invitation
      </h5>
    </div>
  </div>
</template>

<script>
import CDdays from "./CountElements/CD_days.vue";
import CDhours from "./CountElements/CD_hours.vue";
import CDminutes from "./CountElements/CD_minutes.vue";
import CDseconds from "./CountElements/CD_seconds.vue";

export default {
  name: "Countdown",
  components: {
    CDdays,
    CDhours,
    CDminutes,
    CDseconds,
  },
  methods: {
    endCD() {
      this.$emit("endCD");
    },
  },
  // props:["msg", "updated"]
  props: {
    msg: {
      type: String,
    },
    updated: {
      type: Boolean,
    },
  },
};
</script>

<style>
.back {
  cursor: pointer;
  text-decoration: underline;
  letter-spacing: 1px;
  color: #998d45;
  font-size: 36px;
}
.bg-tm {
  width: 135px; /*135*/
  height: 135px;
  background: #998d45 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  opacity: 1;
}
.num-tm {
  padding-top: 15px;
  width: 100%;
  height: 86px;
  text-align: center;
  font: normal normal bold 65px/86px;
  font-family: "letstrace", sans-serif !important;
  letter-spacing: 3.25px;
  color: #ffffff;
  opacity: 1;
  font-size: 3rem;
}
.text-tm {
  width: 100%;
  height: 50px;
  text-align: center;
  font-family: "letstrace", sans-serif !important;
  letter-spacing: 1.2px;
  color: #ffffff;
  opacity: 1;
  font-size: 30px;
}

@media screen and (max-width: 770px) {
  .bg-tm {
    width: 100px;
    height: 100px;
  }
  .num-tm {
    padding-top: 7px;
    /* font: normal normal bold 50px/63px; */
    font-size: 12vmin;
    height: 60px;
  }
  .text-tm {
    /* font: normal normal normal 15px/20px; */
    font-size: 7vmin;
  }
}
@media screen and (max-width: 600px) {
  .bg-tm {
    width: 83px;
    height: 83px;
  }
  .num-tm {
    height: 55px;
    text-align: center;
    /* font: normal normal bold 40px/53px Red Hat Display; */
  }
  .text-tm {
    font: normal normal normal 11px/14px;
  }
}
@media screen and (max-width: 380px) {
  .bg-tm {
    width: 70px;
    height: 70px;
  }
  .num-tm {
    padding-top: 3px;
    height: 50px;
    text-align: center;
    font: normal normal bold 40px/53px;
  }
  .text-tm {
    font: normal normal normal 11px/14px;
  }
}
</style>

<style scoped>
div {
  padding: 0px;
  margin: 0px;
}

.active {
  height: 510px;
}

.blue-bg {
  position: relative;
  max-width: 735px;
  min-width: 54vw;
  padding: 23px;
  top: 50%;
  transform: translateY(-50%);
  align-self: baseline;
  background: #444 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 15px;
  opacity: 1;
}

.fix-center {
  /* width: 100vw; */
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  justify-content: center;
  align-items: center;
  z-index: 10000;
}
.time-container {
  margin: auto;
  max-width: 75%;
}

.overlay {
  position: absolute;
  top: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.depan {
  position: absolute;
  z-index: 1000;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
}

.tittle {
  position: relative;
  text-align: center;
  font-family: "letstrace", sans-serif !important;
  letter-spacing: 2.4px;
  color: #ffffff;
  opacity: 1;
  font-size: 10vmin;
}

.text {
  width: 294px;
  height: 51px;
  text-align: center;
  width: 90%; 
  letter-spacing: 1.08px;
  color: #ececec;
  opacity: 1;
}

.small-text {
  width: 294px;
  text-align: center;
  width: 90%;
  letter-spacing: 1.08px;
  color: #ececec;
  opacity: 1;
}

.content-desktop {
  display: block;
}

.content-mobile {
  display: none;
}

/* tablet */

@media screen and (max-width: 1390px) {
  .content-desktop {
    display: none;
  }
  .content-mobile {
    display: block;
  }
}
@media screen and (max-width: 1100px) {
  .blue-bg {
    min-width: 75%;
  }
}
@media screen and (max-width: 770px) {
  .blue-bg {
    min-width: 83%t;
  }
  .text {
    width: 90%;
  }
}
@media screen and (max-width: 750px) {
  .blue-bg {
    min-width: 90%;
  }
}
@media screen and (max-width: 480px) {
  .blue-bg {
    min-width: 95%;
  }
}
</style>