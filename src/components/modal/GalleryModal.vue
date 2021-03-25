<template>
  <base-modal :idModal="'gallery'">
    <template>
      <h1 class="title-modal text-center mb-0">Gallery</h1>
      <b-row>
        <b-col cols="12" md="6">
          <div class="qrcode-wrapper">
            <img src="../../assets/qrcode/bca.png" alt="bca" class="qrcode" />
          </div>
        </b-col>
        <b-col cols="12" md="6">
          <div class="qrcode-wrapper">
            <img src="../../assets/qrcode/bca.png" alt="bca" class="qrcode" />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6">
          <div class="qrcode-wrapper">
            <img src="../../assets/qrcode/bca.png" alt="bca" class="qrcode" />
          </div>
        </b-col>
        <b-col cols="12" md="6">
          <div class="qrcode-wrapper">
            <img src="../../assets/qrcode/bca.png" alt="bca" class="qrcode" />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6">
          <div class="qrcode-wrapper">
            <img src="../../assets/qrcode/bca.png" alt="bca" class="qrcode" />
          </div>
        </b-col>
        <b-col cols="12" md="6">
          <div class="qrcode-wrapper">
            <img src="../../assets/qrcode/bca.png" alt="bca" class="qrcode" />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6">
          <div class="qrcode-wrapper">
            <img src="../../assets/qrcode/bca.png" alt="bca" class="qrcode" />
          </div>
        </b-col>
        <b-col cols="12" md="6">
          <div class="qrcode-wrapper">
            <img src="../../assets/qrcode/bca.png" alt="bca" class="qrcode" />
          </div>
        </b-col>
      </b-row>
    </template>
  </base-modal>
</template>

<script>
import BaseModal from "../ui/BaseModal";
// function copy() {
//   var copyText = document.querySelector("#code1");
//   copyText.select();
//   document.execCommand("copy");
// }

export default {
  components: { BaseModal },
  data() {
    return {
      test: "123456",
    };
  },
  methods: {
    copyTestingCode() {
      var p1 = document.getElementById("code1");

      // set "#Color 1" with the hidden field so that you can call select on it
      var hiddenField = document.getElementById("copyText");
      hiddenField.value = p1.innerHTML;
      hiddenField.select();
      document.execCommand("copy");

      alert("Copied the text: " + hiddenField.value);
    },
  },
};
</script>

<style scoped>
.qrcode-wrapper {
  margin-bottom: 10px;
  padding-bottom: 10px;
  background-color: white;
  width: 100%;
  text-align: center;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  cursor: pointer;
}
.qrcode-wrapper img {
  margin: 20px 10px;
  width: 80%;
}
.qrcode-wrapper p {
  margin-bottom: 0;
  line-height: 26px;
  /* font-size: 1.5rem; */
}
</style>

<style>
.title-modal {
  font-size: 3.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}
</style>