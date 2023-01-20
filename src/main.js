import Vue from 'vue'
import App from './App.vue'
import bootstrap from 'bootstrap';
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  bootstrap,
  render: h => h(App)
}).$mount('#app')
