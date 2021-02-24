import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      count: 0,
      refrigerMode: '',
      cooks: [
        {
          id: 1,
          name: '김치찌개'
        },
        {
          id: 2,
          name: '된장찌개'
        }
      ]
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setRefrigerMode(state, mode) {
      state.refrigerMode = mode;
    }
  },
  actions: {
  },
  modules: {
  }
})
