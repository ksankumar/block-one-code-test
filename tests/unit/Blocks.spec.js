/**
 * App.spec.js Created by sandy on 9/21/2019
 */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import './setup'
import Vuex from 'vuex'
import Blocks from '../../src/store/modules/Blocks'
import blockList from './fixtures/blockData'
import BlocksVue from '@/components/Blocks.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
describe('components/Blocks.vue', async () => {
  let wrapper
  let store
  beforeEach(async (done) => {
    store = new Vuex.Store({
      state: {},
      modules: {
        Blocks
      }
    })
    wrapper = shallowMount(BlocksVue, {
      store,
      localVue
    })
    store.commit('Blocks/List', blockList)
    done()
  })
  it('Blocks components is rendered', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('Check last 10 blocks loaded.', () => {
    expect(store.getters['Blocks/List'].length).toEqual(10)
  })
})
