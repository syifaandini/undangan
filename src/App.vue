<template>
  <div>
    <view-undangan v-if="!mulai"></view-undangan>
    <view-acara v-else></view-acara>
  </div>
</template>

<script>
import ViewUndangan from "./components/views/ViewUndangan";
import ViewAcara from "./components/views/ViewAcara";

export default {
  components: { ViewUndangan, ViewAcara },
  data() {
    return {
      mulai: true,
    };
  },
};
</script>

<style>
@font-face {
  font-family: letstrace;
  src: url("./assets/letstrace.otf") format("opentype");
}

body,
html {
  margin: 0;
  padding: 0;
  font-family: "letstrace", sans-serif !important;
  overflow-y: hidden;
  height: calc(var(--vh, 1vh) * 100);
}

p {
  font-size: 1.5rem;
}
.form-wrapper {
  min-width: 50%;
}
label,
.form-control {
  font-size: 1.5rem;
}
@media only screen and (min-aspect-ratio: 9/20) and (orientation: portrait) {
  #tamu .modal-dialog-scrollable .modal-content.basemodal__content {
    width: 94vw;
  }
  .form-wrapper {
    min-width: 100%;
  }
}
/* Portrait Ipad */
@media only screen and (min-width: 768px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
  #tamu .modal-dialog-scrollable .modal-content.basemodal__content {
    width: 94vw;
    max-width: 98vw;
    max-height: 63vh;
  }
}
.submit-message {
  border-radius: 15px;
  box-shadow: 0px 3px 6px #00000029;
  border: none;
  letter-spacing: 0.8px;
  width: 100%;
  display: block;
  margin: 0 auto;
  background-color: #3f5333;
}
.submit-message:focus,
.submit-message:active {
  background-color: #3f5333 !important;
  box-shadow: 0px 3px 6px #00000029;
  outline: none;
}
</style>
