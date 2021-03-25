import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


Vue.use(VueCountdownTimer);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import App from './App.vue'
import VueCountdownTimer from 'vuejs-countdown-timer';

Vue.config.productionTip = false

// var loading = document.getElementById("loading")
// var acara = document.getElementById("app")

// window.addEventListener("load", showPage);

// function showPage() {
//   loading.style.display="none"
//   acara.style.display="block"
// }

new Vue({
  render: h => h(App),
}).$mount('#app')
