<template>
  <base-modal :idModal="'live'">
    <template>
      <h1 class="title-modal text-center mb-0">Live Akad</h1>
      <p class="text-center">
        You can watch what is happening in the wedding of Dana & Trisa here, LIVE.
      </p>
      <b-row>
        <b-col cols="12" md="6">
          <a href="https://instagram.com/kyriz_boogieman" target="_blank">
            <div class="instagram-wrapper">
              <img
                src="../../assets/icon/dana.png"
                alt="instagram"
                class="instagram-icon"
              />
              <p class="instagram-user">@kyriz_boogieman</p>
            </div>
          </a>
        </b-col>
        <b-col cols="12" md="6">
          <a href="https://instagram.com/fangtatis" target="_blank">
            <div class="instagram-wrapper">
              <img
                src="../../assets/icon/tatis.png"
                alt="instagram"
                class="instagram-icon"
              />
              <p class="instagram-user">@fangtatis</p>
            </div>
          </a>
        </b-col>
      </b-row>
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
#live .modal-dialog-scrollable .modal-content.basemodal__content {
  width: 40vw;
}
@media only screen and (min-aspect-ratio: 9/20) and (orientation: portrait) {
  #live .modal-dialog-scrollable .modal-content.basemodal__content {
    width: 94vw;
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