<template>
  <b-modal
    :id="idModal"
    hide-footer
    centered
    backdrop
    header-class="imagemodal__header"
    body-class="imagemodal__body"
    content-class="imagemodal__content"
    modal-class="customscroll__imagemodal"
  >
    <template #modal-header="{ close }">
      <img
        src="../../assets/close.svg"
        class="close__imagemodal"
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
.imagemodal__header {
  padding: 0;
  border-bottom: 0;
}
.close__imagemodal {
  overflow: hidden;
  margin-left: auto;
  position: absolute;
  z-index: 10000;
  right: 3%;
  top: 4%;
  width: 3%;
}
.close__imagemodal:hover {
  cursor: pointer;
}
.imagemodal__body {
  padding: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  max-height: 90vh;
}
.modal-dialog-scrollable .modal-content.imagemodal__content {
  overflow: hidden;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 15px;
  width: fit-content;
  height: fit-content;
  max-height: 95vh;
}
.btn {
  font-size: 1.5rem;
}


/* 20:9 */
@media only screen and (min-aspect-ratio: 9/20) and (orientation: portrait) {
  .modal-dialog-scrollable .modal-content.imagemodal__content {
    width: 94vmin;
  }
  .close__imagemodal {
    top: 2%;
    right: 4%;
    width: 5%;
  }
}

/* Portrait Ipad */
@media only screen and (min-width: 768px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
  .modal-dialog-scrollable .modal-content.imagemodal__content {
    width: 35vh;
    max-width: 40vh;
    max-height: 50vh;
  }
  .close__imagemodal {
    top: 2%;
    right: 2%;
    width: 3%;
  }
}
</style>