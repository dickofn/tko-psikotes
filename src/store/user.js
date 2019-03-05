import Axios from "axios";

export default {
  state: {
    examId: null,
    examApplicant: null
  },
  mutations: {
    UPDATE_EXAMID(state, payload) {
      state.examId = payload;
    },
    UPDATE_EXAMAPPLICANT(state, payload) {
      state.examApplicant = payload;
    }
  },
  actions: {
    newApplicant({ commit }, applicantData) {
      commit("UPDATE_LOADING", true);
      Axios.post(process.env.VUE_APP_API_URL + "/exam/start", applicantData)
        .then(res => {
          commit("UPDATE_EXAMID", res.data.data.examInfoId);
          commit("UPDATE_EXAMAPPLICANT", res.data.data.name);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    },
    getApplicant({ commit }, applicantExamId) {
      Axios.post(process.env.VUE_APP_API_URL + "/exam/info", applicantExamId)
        .then(res => {
          commit("UPDATE_EXAMID", res.data.data.examInfoId);
          commit("UPDATE_EXAMAPPLICANT", res.data.data.name);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    }
  }
};
