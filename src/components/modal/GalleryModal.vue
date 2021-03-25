<template>
  <base-modal :idModal="'gallery'">
    <template>
      <h1 class="title-modal text-center mb-0">Gallery</h1>
      <!-- <div class="row">
        <div class="column">
          <img
            src="../../assets/photos/1.jpg"
            style="width: 100%"
            v-b-modal.image1
          />
          <img
            src="../../assets/photos/3.jpg"
            style="width: 100%"
            v-b-modal.image3
          />
        </div>
        <div class="column">
          <img
            src="../../assets/photos/2.jpg"
            style="width: 100%"
            v-b-modal.image2
          />
          <img
            src="../../assets/photos/4.jpg"
            style="width: 100%"
            v-b-modal.image4
          />
        </div>
        <div class="column">
          <img
            src="../../assets/photos/2.jpg"
            style="width: 100%"
            v-b-modal.image2
          />
          <img
            src="../../assets/photos/4.jpg"
            style="width: 100%"
            v-b-modal.image4
          />
        </div>
      </div> -->
      <section id="photos">
        <img src="../../assets/photos/1.jpeg" alt="foto" v-b-modal.image1 />
        <img src="../../assets/photos/2.jpeg" alt="foto" v-b-modal.image2 />
        <img src="../../assets/photos/3.jpeg" alt="foto" v-b-modal.image3 />
        <img src="../../assets/photos/4.jpeg" alt="foto" v-b-modal.image4 />
        <img src="../../assets/photos/5.jpeg" alt="foto" v-b-modal.image2 />
        <img src="../../assets/photos/6.jpeg" alt="foto" v-b-modal.image3 />
        <img src="../../assets/photos/7.jpeg" alt="foto" v-b-modal.image4 />
        <img src="../../assets/photos/8.jpeg" alt="foto" v-b-modal.image2 />
      </section>

      <image-modal idModal="image1">
        <img src="../../assets/photos/1.jpeg" style="width: 100%" />
      </image-modal>
      <image-modal idModal="image2">
        <img src="../../assets/photos/2.jpeg" style="width: 100%" />
      </image-modal>
      <image-modal idModal="image3">
        <img src="../../assets/photos/3.jpeg" style="width: 100%" />
      </image-modal>
      <image-modal idModal="image4">
        <img src="../../assets/photos/4.jpeg" style="width: 100%" />
      </image-modal>
      <!-- <b-row>
        <b-col cols="12" md="6">
          <div class="qrcode-wrapper">
            <img src="../../assets/photos/1.jpg" alt="foto" class="qrcode" />
          </div>
        </b-col>
        <b-col cols="12" md="6">
          <div class="qrcode-wrapper">
            <img src="../../assets/photos/2.jpg" alt="bca" class="qrcode" />
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
      </b-row> -->
    </template>
  </base-modal>
</template>

<script>
import BaseModal from "../ui/BaseModal";
import ImageModal from "./ImageModal.vue";
// function copy() {
//   var copyText = document.querySelector("#code1");
//   copyText.select();
//   document.execCommand("copy");
// }

export default {
  components: { BaseModal, ImageModal },
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
#photos {
  /* Prevent vertical gaps */
  line-height: 0;

  -webkit-column-count: 2;
  -webkit-column-gap: 0px;
  -moz-column-count: 2;
  -moz-column-gap: 0px;
  column-count: 2;
  column-gap: 0px;
}

#photos img {
  /* Just in case there are inline attributes */
  width: 100% !important;
  height: auto !important;
}

#photos img:focus{
  outline: none
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
  max-width: 50%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}

@media (max-width: 1200px) {
  #photos {
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
  }
}
@media (max-width: 1000px) {
  #photos {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
}
@media (max-width: 800px) {
  #photos {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}
@media (max-width: 400px) {
  #photos {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
}
</style>

<style>
.title-modal {
  font-size: 3.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}
</style>