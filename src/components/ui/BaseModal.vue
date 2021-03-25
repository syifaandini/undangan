<template>
  <b-modal
    :id="idModal"
    hide-footer
    scrollable
    centered
    backdrop
    header-class="basemodal__header"
    body-class="basemodal__body"
    content-class="basemodal__content"
    modal-class="customscroll__basemodal"
    @hidden="$emit('cleardata')"
  >
    <template #modal-header="{ close }">
      <img
        src="../../assets/close.svg"
        class="close__basemodal"
        alt="close"
        @click="close()"
      />
    </template>
    <div class="block">
      <slot></slot>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: ["idModal"],
};
</script>

<style>
.dialog-title {
  color: #365da5;
  font-size: 22px;
  letter-spacing: 1.2px;
  font-weight: bold;
}
.basemodal__header {
  padding: 0;
  border-bottom: 0;
}
.close__basemodal {
  overflow: auto;
  margin-left: auto;
  position: absolute;
  z-index: 10000;
  right: 3%;
  top: 4%;
  width: 3%;
}
.close__basemodal:hover {
  cursor: pointer;
}
.basemodal__body {
  padding: 20px 30px;
  overflow-x: hidden;
}
.modal-dialog-scrollable .modal-content.basemodal__content {
  overflow: inherit;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 15px;
  width: 60vw;
  max-height: 98vh;
}
.btn {
  font-size: 1.5rem;
}

/* Scrollbar */
/* width */
.customscroll__basemodal ::-webkit-scrollbar {
  width: 10px;
  background: transparent;
}
/* Track */
.customscroll__basemodal ::-webkit-scrollbar-track {
  margin-top: 50px;
  margin-bottom: 15px;
  background: transparent;
  border-radius: 10px;
}
.customscroll__basemodal ::-webkit-scrollbar-thumb {
  border-right: 8px solid rgba(0, 0, 0, 0);
  border-radius: 1px;
  background-clip: padding-box;
  box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05),
    inset 1px 1px 0px rgba(0, 0, 0, 0.05);
}

/* Handle */
.customscroll__basemodal ::-webkit-scrollbar-thumb {
  background-color: #a8bc63;
}

/* 20:9 */
@media only screen and (min-aspect-ratio: 9/20) and (orientation: portrait) {
  .modal-dialog-scrollable .modal-content.basemodal__content {
    width: 94vmin;
  }
  .close__basemodal {
    top: 2%;
    right: 4%;
    width: 5%;
  }
}

/* Portrait Ipad */
@media only screen and (min-width: 768px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
  .modal-dialog-scrollable .modal-content.basemodal__content {
    width: 35vh;
    max-width: 40vh;
    max-height: 50vh;
  }
  .close__basemodal {
    top: 2%;
    right: 2%;
    width: 3%;
  }
}
</style>