import Vue from 'vue'
import App from './App.vue'
import bootstrap from 'bootstrap';
import vuetify from './plugins/vuetify'
import firebase from './plugins/firebase'
import router from './router'
import store from './store'

import './forms'

Vue.config.productionTip = false

new Vue({                                                                             
  vuetify,
  router,
  store,
  bootstrap,
  render: h => h(App)
}).$mount('#app')
