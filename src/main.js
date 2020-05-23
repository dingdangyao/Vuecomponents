import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import CardFlag from "./../packages/index";
import CardImg from "./../packages/index";
import login from "./../packages/index";
import record from "./../packages/index";
import search from "./../packages/index";
import scrollLoader from "./../packages/index";
import backTop from "./../packages/index";
import IconSvg from "./../packages/index";
import Magnifier from "./../packages/index";
import SlideBar from "./../packages/index";
import "./icons";
import "jquery";
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(CardFlag);
Vue.use(CardImg);
Vue.use(login);
Vue.use(record);
Vue.use(scrollLoader);
Vue.use(search);
Vue.use(backTop);
Vue.use(IconSvg);
Vue.use(Magnifier);
Vue.use(SlideBar);

new Vue({
  render: h => h(App)
}).$mount("#app");
