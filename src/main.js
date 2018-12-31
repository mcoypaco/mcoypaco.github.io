import Vue from 'vue'
import VueMoment from 'vue-moment'
import './plugins/vuetify'

import App from './App.vue'
import store from './store'

Vue.use(VueMoment)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
