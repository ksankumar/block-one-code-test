/**
 * App.spec.js Created by sandy on 9/21/2019
 */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import './setup'
import Vuex from 'vuex'
import Blocks from '../../src/store/modules/Blocks'
import App from '@/App.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('App.vue', () => {
  let wrapper
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      modules: {
        Blocks
      }
    })
    wrapper = shallowMount(App, {
      store,
      localVue
    })
  })
  it('App page is rendered', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('Check Blocks length is 0 before landing.', () => {
    expect(store.getters['Blocks/List'].length).toEqual(0)
  })
})
