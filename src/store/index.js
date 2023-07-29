import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'

//load Vuex
Vue.use(Vuex)

//Create store
export default new Vuex.Store({
  modules: {
    todos
  }
})
