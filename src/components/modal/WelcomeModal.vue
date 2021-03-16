<template>
  <base-modal :idModal="'welcome'">
    <template>
      <h1 class="title-welcome text-center">Welcome</h1>
      <p class="text-welcome">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        laboriosam enim sapiente odit dolorem eligendi blanditiis tenetur
        inventore adipisci quasi aliquam doloremque rem mollitia, debitis hic
        cupiditate consectetur optio totam?
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
  font-size: 3.5rem;
}
.text-welcome {
  font-size: 1.5rem;
  text-align: center;
  line-height: 30px;
}
.ok-welcome {
  margin: 0 auto;
  width: 30%;
  display: block;
}
</style>

<style>
#welcome___BV_modal_content_ .close__basemodal {
  display: none;
}
.modal-dialog-scrollable
  #welcome___BV_modal_content_.modal-content.basemodal__content {
  width: 50vh;
}
@media only screen and (min-aspect-ratio: 9/20) and (orientation: portrait) {
  .modal-dialog-scrollable
    #welcome___BV_modal_content_.modal-content.basemodal__content {
    width: 94vmin;
  }
}
</style>