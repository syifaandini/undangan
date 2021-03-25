<template>
  <base-modal :idModal="'thanks'">
    <template>
      <h1 class="title-modal text-center mb-0">Thank you!</h1>
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
a{
  text-decoration: none;
  color: black;
}
.instagram-wrapper {
  margin-bottom: 10px;
  background-color: white;
  width: 100%;
  text-align: center;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
}
.instagram-icon {
  margin: 20px 10px 0 10px;
  width: 30%;
}
</style>

<style>
#thanks .modal-dialog-scrollable .modal-content.basemodal__content {
  width: 30vw;
}
#thanks .close__basemodal{
  display: none;
}
@media only screen and (min-aspect-ratio: 9/20) and (orientation: portrait) {
  #thanks .modal-dialog-scrollable .modal-content.basemodal__content {
    width: 80vw;
  }
}
@media only screen and (min-width: 768px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
  #live .close__basemodal {
    top: 2%;
    right: 2%;
    width: 5%;
  }
}
</style>