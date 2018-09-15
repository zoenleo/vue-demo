import Vue from 'vue'
import Vuex from 'vuex'
import * as modules from './modules/user'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules
})

export default store