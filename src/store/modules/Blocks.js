/**
 * Blocks.js Created by sandy on 9/20/2019
 */
import recentTenBlocks from '../../lib/blocks'

export default {
  namespaced: true,
  state: {
    loading: true,
    count: 0,
    blocks: [],
    error: null
  },
  mutations: {
    Loading (state, isLoading) {
      state.loading = isLoading
    },
    List (state, blocks) {
      state.blocks = blocks
    },
    Count (state, count) {
      state.count = count
    },
    Error (state, error) {
      state.error = error
    },
    Reset (state) {
      state.loading = true
      state.count = 0
      state.error = null
    }
  },
  actions: {
    async List ({ commit }) {
      commit('Reset')
      try {
        let blocks = []
        let count = 0
        await recentTenBlocks(res => {
          blocks.push(res)
          count = count + 1
          commit('Count', count)
          commit('List', blocks)
        })
      } catch (err) {
        commit('Error', err)
      } finally {
        commit('Loading', false)
        commit('Count', 0)
      }
    }
  },
  getters: {
    Loading: state => state.loading,
    List: state => state.blocks,
    Count: state => state.count,
    Error: state => state.error
  }
}
