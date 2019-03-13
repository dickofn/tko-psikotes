import Axios from "axios";

export default {
  state: {
    examApplicantId: null,
    examApplicantName: null,
    examApplicantBirthPlace: null,
    examApplicantBirthDate: null
  },
  mutations: {
    UPDATE_EXAMAPP(state, payload) {
      state.examApplicantId = payload.examInfoId;
      state.examApplicantName = payload.name;
      state.examApplicantBirthPlace = payload.placeBirth;
      state.examApplicantBirthDate = payload.dateBirth;
    }
  },
  actions: {
    newApplicant({ commit }, applicantData) {
      commit("UPDATE_LOADING", true);
      Axios.post(process.env.VUE_APP_API_URL + "/exam/start", applicantData)
        .then(res => {
          commit("UPDATE_EXAMAPP", res.data.data);
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
          commit("UPDATE_EXAMAPP", res.data.data);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    }
  }
};