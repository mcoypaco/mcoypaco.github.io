import Vue from 'vue'
import Vuex from 'vuex'

import data from '../data'
import api from './modules/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state () {
    return {
      data,
    }
  },
  modules: {
    api,
  }
})