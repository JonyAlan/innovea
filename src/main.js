import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import SpinnerLoad from "./components/spinner";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(SpinnerLoad);

Vue.component("SpinnerLoad", SpinnerLoad);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
