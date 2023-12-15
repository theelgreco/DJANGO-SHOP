import Vue from "vue";
import Buefy from "buefy";
import App from './all_products.vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)
Vue.use(Buefy)

new Vue({
    render: h => h(App)
}).$mount('#app')