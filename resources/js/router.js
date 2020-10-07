import VueRouter from "vue-router";
import Home from "./components/Hello.vue";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        }
    ]
});

export default router;
