import Axios from "axios";

export default {
  state: {
    examApplicantId: null,
    examApplicantName: null
  },
  mutations: {
    UPDATE_EXAMAPPID(state, payload) {
      state.examApplicantId = payload;
    },
    UPDATE_EXAMAPPNAME(state, payload) {
      state.examApplicantName = payload;
    }
  },
  actions: {
    newApplicant({ commit }, applicantData) {
      commit("UPDATE_LOADING", true);
      Axios.post(process.env.VUE_APP_API_URL + "/exam/start", applicantData)
        .then(res => {
          commit("UPDATE_EXAMAPPID", res.data.data.examInfoId);
          commit("UPDATE_EXAMAPPNAME", res.data.data.name);
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
          commit("UPDATE_EXAMAPPID", res.data.data.examInfoId);
          commit("UPDATE_EXAMAPPNAME", res.data.data.name);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    }
  }
};
