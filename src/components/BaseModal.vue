<template>
  <b-card
    border-variant="light"
    tag="article"
    class="text-center"
    body-class="cardbody-auth"
  >
    <b-card-title>{{ title }}</b-card-title>
    <b-card-text class="mb-4">
      <slot></slot>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
.border-light{
  border-color: transparent !important;
}
</style>

<style scoped>
.card {
  /* border-radius: 20px; */
  margin: 0 auto;
  height: 100vh;
  /* background-color: transparent; */
}
.card-title {
  margin: 1.5rem auto 1.4rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #365da5;
}
.card-header {
  background-color: transparent;
  border: none;
  padding: 0;
  float: left;
}
.header-back:hover {
  cursor: pointer;
}
.card-body {
  padding: 0;
}
.card-footer {
  padding: 0;
  background-color: transparent;
  border: none;
  font-size: 0.75rem;
}
/* 20:9 */
@media only screen and (min-aspect-ratio: 9/20) and (orientation: portrait) {
  .login-screen {
    background-color: white;
  }
  .card {
    min-width: 90vw;
    max-width: 90vw;
    height: auto;
  }
  .card-body {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    padding: 0.75rem 1.75rem;
  }
  .card-title {
    margin: 37px auto 25px;
  }
}
@media only screen and (min-width: 768px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
  .card {
    height: auto;
    min-width: 25rem;
    max-width: 25rem;

    border-radius: 20px;
  }
}
</style>