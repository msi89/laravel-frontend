import VueRouter from "vue-router";
import Home from "./views/home.vue";
import About from "./views/about.vue";
import Contact from "./views/contact.vue";
import NotFound from "./views/404.vue";

const router = new VueRouter({
    base: __dirname,
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        },
        {
            path: "*",
            name: "404",
            component: NotFound
        }
    ]
});

export default router;
