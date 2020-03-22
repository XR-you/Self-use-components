import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";

import { Avatar, Pagination, Table } from "element-ui";

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;

Vue.use(Avatar);
Vue.use(Pagination);
Vue.use(Table);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
