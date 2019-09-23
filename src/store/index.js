/**
 * index.js Created by sandy on 9/22/2019
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Blocks from './modules/Blocks'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: { Blocks }
})
