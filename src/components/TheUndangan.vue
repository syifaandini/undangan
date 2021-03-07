<template>
  <div class="undangan">
    <b-card
      tag="article"
      class="text-center"
      body-class="cardbody-auth"
    >
      <img src="../assets/undangan.jpg" alt="undangan" />
    </b-card>
  </div>
</template>


<script>
// import BaseModal from "./BaseModal.vue";

export default {
  // components: { BaseModal },
};
</script>

<style scoped>
.card-body{
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  overflow: hidden !important;
}
.undangan {
  position: relative;
  z-index: 1;
  margin: 0;
  /* left: 50%;
  transform: translateX(-50%); */
}
.undangan img {
  /* position: absolute; */
  margin: 0 auto;
  /* height: 100vh;
  width: auto; */
}
</style>