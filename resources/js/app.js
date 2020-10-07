// require('./bootstrap');

// window.Vue = require('vue');
import Root from "./Root.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";

Vue.use(VueRouter);
new Vue({
    el: "#app",
    router,
    render: h => h(Root)
});
