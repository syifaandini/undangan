<template>
  <base-modal :idModal="'amplop'">
    <template>
      <h1 class="title-modal text-center mb-0">E-Amplop</h1>
      <p class="text-center">
        Although you aren’t present at the wedding location, you can also send some loves for Dana & Trisa, digitally.
      </p>
      <b-row>
        <b-col cols="12" md="6">
          <div class="qrcode-wrapper" @click.stop.prevent="copyBca">
            <img src="../../assets/qrcode/bca.jpg" alt="bca" class="qrcode" />
            <p>Rekening BCA</p>
            <p id="code1">{{ bca }}</p>
            <p>a.n Pradana Rizky Wardhana</p>
            <div style="opacity: 0">
              <input type="text" id="copyText" />
            </div>
          </div>
        </b-col>
        <b-col cols="12" md="6">
          <div class="qrcode-wrapper" @click.stop.prevent="copyGopay">
            <img src="../../assets/qrcode/gopay.jpg" alt="bca" class="qrcode" />
            <p>Gopay</p>
            <p id="code2">{{ gopay }}</p>
            <p>a.n Dana Rizky</p>
            <div style="opacity: 0">
              <input type="text" id="copyText2" />
            </div>
          </div>
        </b-col>
      </b-row>
    </template>
  </base-modal>
</template>

<script>
import BaseModal from "../ui/BaseModal";

export default {
  components: { BaseModal },
  data() {
    return {
      bca: "6800604883",
      gopay: "729972378978"
    };
  },
  methods: {
    copyBca() {
      var p1 = document.getElementById("code1");

      // set "#Color 1" with the hidden field so that you can call select on it
      var hiddenField = document.getElementById("copyText");
      hiddenField.value = p1.innerHTML;
      hiddenField.select();
      document.execCommand("copy");

      alert("Copied rekening: " + hiddenField.value);
    },
    copyGopay() {
      var p2 = document.getElementById("code2");

      // set "#Color 1" with the hidden field so that you can call select on it
      var hiddenField = document.getElementById("copyText2");
      hiddenField.value = p2.innerHTML;
      hiddenField.select();
      document.execCommand("copy");

      alert("Copied gopay number: " + hiddenField.value);
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
  width: 66%;
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
#amplop___BV_modal_content_{
  width: 50vw;
}
</style>