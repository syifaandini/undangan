<template>
  <!-- <div>
    <div id="loading" class="loader">
      <img src="loading.svg" alt="loading" />
    </div> -->
    <div id="app">
      <view-undangan v-if="!mulai"></view-undangan>
      <view-acara v-else></view-acara>
    </div>
  <!-- </div> -->
</template>

<script>
import ViewUndangan from "./components/views/ViewUndangan";
import ViewAcara from "./components/views/ViewAcara";

export default {
  components: { ViewUndangan, ViewAcara },
  data() {
    return {
      mulai: true,
    };
  },
};
</script>

<style>
@font-face {
  font-family: letstrace;
  src: url("./assets/letstrace.otf") format("opentype");
}

body,
html {
  margin: 0;
  padding: 0;
  font-family: "letstrace", sans-serif !important;
  overflow-y: hidden;
  height: calc(var(--vh, 1vh) * 100);
}

p {
  font-size: 1.5rem;
}
/* .loader{
  position: fixed;
  z-index: 150;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader img{
  width: 10%;
} */
</style>
