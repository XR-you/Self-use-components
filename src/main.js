import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";

import Avatar from "element-ui";

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;

Vue.use(Avatar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
