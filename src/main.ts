import Vue from "vue";
import App from "./components/App";
import Gif from "./components/Gif";
import GifModal from "./components/GifModal";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.component("Gif", Gif);
Vue.component("GifModal", GifModal);

new Vue({
  render: h => h(App)
}).$mount("#app");
