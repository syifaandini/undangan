<template>
  <base-modal :idModal="'welcome'">
    <template>
      <p class="title-welcome text-center">
        Welcome to Trisa and Dana Virtual Wedding Venue
      </p>
      <p class="text-welcome">
        You can drag your screen to look around the venue <br /><br />
        Click on the points of interest to interact with the venue <br /><br />
        You can watch the wedding live at the ”live” point of interest on the
        right side <br />
      </p>
      <b-button @click="$emit('closeModal')" class="ok-welcome">OK</b-button>
    </template>
  </base-modal>
</template>

<script>
import BaseModal from "../ui/BaseModal";
export default {
  components: { BaseModal },
};
</script>

<style scoped>
.title-welcome {
  font-size: 2.4rem;
  font-weight: bolder;
}
.text-welcome {
  font-size: 2rem;
  text-align: center;
  line-height: 30px;
}
.ok-welcome {
  border-radius: 15px;
  box-shadow: 0px 3px 6px #00000029;
  border: none;
  letter-spacing: 0.8px;
  width: 80%;
  display: block;
  margin: 0 auto;
  background-color: #3f5333;
}
.ok-welcome:focus,
.ok-welcome:active {
  background-color: #3f5333 !important;
  box-shadow: 0px 3px 6px #00000029;
  outline: none;
}
</style>

<style>
#welcome___BV_modal_content_ .close__basemodal {
  display: none;
}
.modal-dialog-scrollable
  #welcome___BV_modal_content_.modal-content.basemodal__content {
  width: 60vh;
}
@media only screen and (min-aspect-ratio: 9/20) and (orientation: portrait) {
  .modal-dialog-scrollable
    #welcome___BV_modal_content_.modal-content.basemodal__content {
    width: 94vmin;
  }
}
</style>