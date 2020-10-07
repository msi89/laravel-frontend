// require('./bootstrap');

// window.Vue = require('vue');
import Root from "./root.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import Layout from "./layouts/default.vue";
import Blank from "./layouts/blank.vue";
import Fragment from "./layouts/fragment.vue";

Vue.use(VueRouter);
Vue.component("Layout", Layout);
Vue.component("Blank", Blank);
Vue.component("Fragment", Fragment);

new Vue({
    el: "#app",
    router,
    render: h => h(Root)
});
