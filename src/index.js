import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import vuetify from './plugins/vuetify.js';
import App from './App.vue';

Vue.use(VueCompositionAPI);

new Vue({
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
