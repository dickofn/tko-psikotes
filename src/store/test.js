export default {
  state: {
    note: null
  },
  mutations: {
    TEST_IT(state, payload) {
      state.note = payload;
    }
  },
  actions: {
    actionTest({ commit }, payload) {
      commit("TEST_IT", payload);
    }
  }
};
