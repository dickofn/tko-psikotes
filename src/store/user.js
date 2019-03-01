export default {
  state: {
    user: null
  },
  mutations: {
    UPDATE_USER(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    newTestCandidate({ commit }, candidateData) {
      this.$axios
        .get(process.env.VUE_APP_API_URL + "/administratif/get/provinsi")
        .then(res => {
          console.log(res);
        });
    }
  }
};
