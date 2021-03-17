<template>
  <div id="app">
    <view-undangan v-if="!mulai"></view-undangan>
    <view-acara v-else></view-acara>
  </div>
</template>

<script>
import ViewUndangan from "./components/views/ViewUndangan";
import ViewAcara from "./components/views/ViewAcara";

export default {
  components: { ViewUndangan, ViewAcara },
  data() {
    return {
      mulai: false
    }
  }
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

p{
  font-size: 1.5rem;
}
</style>
