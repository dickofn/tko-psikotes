import Axios from "axios";

export default {
  state: {
    examApplicantId: null,
    examApplicantName: null,
    examApplicantBirthPlace: null,
    examApplicantBirthDate: null,
    applicantId: null,
    self: {
      isCompleted: null,
      applicant: {},
      applicantAddress: []
    },
    detail: {
      isCompleted: null,
      applicantAddress: [],
      applicantFamily: [],
      applicantContact: [],
      applicantEducation: [],
      applicantDescription: {}
    },
    experience: {
      isCompleted: null,
      applicantOrganization: [],
      applicantTraining: [],
      applicantLanguage: [],
      applicantExperience: [],
      applicantAddress: [],
      applicantDescription: {}
    }
  },
  mutations: {
    UPDATE_EXAMAPP(state, payload) {
      state.examApplicantId = payload.examInfoId;
      state.examApplicantName = payload.name;
      state.examApplicantBirthPlace = payload.placeBirth;
      state.examApplicantBirthDate = payload.dateBirth;
    },
    UPDATE_APPLICANTID(state, payload) {
      state.applicantId = payload;
    },
    UPDATE_SELF(state, payload) {
      state.self = payload;
    },
    UPDATE_SELFSTATUS(state, payload) {
      state.self.isCompleted = payload;
    },
    UPDATE_DETAIL(state, payload) {
      state.detail = payload;
    },
    UPDATE_DETAILSTATUS(state, payload) {
      state.detail.isCompleted = payload;
    },
    UPDATE_EXPERIENCE(state, payload) {
      state.experience = payload;
    },
    UPDATE_EXPERIENCESTATUS(state, payload) {
      state.experience.isCompleted = payload;
    }
  },
  actions: {
    setApplicant({ commit }, applicantData) {
      return new Promise ((resolve, reject)=>{
        commit("UPDATE_LOADING", true);
        Axios.post(process.env.VUE_APP_API_URL + "/exam/start", applicantData)
          .then(res => {
            commit("UPDATE_EXAMAPP", res.data.data);
            commit("UPDATE_LOADING", false);
            resolve(res)
          })
          .catch(e => {
            commit("UPDATE_LOADING", false);
            reject(e);
          });
      })
    },
    getApplicant({ commit }, applicantExamId) {
      commit("UPDATE_LOADING", true);
      Axios.post(process.env.VUE_APP_API_URL + "/exam/info", applicantExamId)
        .then(res => {
          commit("UPDATE_EXAMAPP", res.data.data);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    },
    setSelf({ commit }, selfData) {
      commit("UPDATE_LOADING", true);
      Axios.post(process.env.VUE_APP_API_URL + "/applicant/new/self", selfData)
        .then(res => {
          commit("UPDATE_APPLICANTID", res.data.data);
          commit("UPDATE_SELF", selfData);
          commit("UPDATE_SELFSTATUS", true);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    },
    getSelf({ commit }, applicantExamId) {
      commit("UPDATE_LOADING", true);
      Axios.post(
        process.env.VUE_APP_API_URL + "/applicant/get/complete/self",
        applicantExamId
      )
        .then(res => {
          commit("UPDATE_SELFSTATUS", res.data.data.isComplete);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    },
    setDetail({ commit }, payload) {
      commit("UPDATE_LOADING", true);
      Axios.post(
        process.env.VUE_APP_API_URL + "/applicant/new/detail/" + payload.examId,
        payload.data
      )
        .then(res => {
          commit("UPDATE_APPLICANTID", res.data.data);
          commit("UPDATE_DETAIL", payload.data);
          commit("UPDATE_DETAILSTATUS", true);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    },
    getDetail({ commit }, applicantExamId) {
      commit("UPDATE_LOADING", true);
      Axios.post(
        process.env.VUE_APP_API_URL + "/applicant/get/complete/detail",
        applicantExamId
      )
        .then(res => {
          commit("UPDATE_DETAILSTATUS", res.data.data.isComplete);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    },
    setExperience({ commit }, payload) {
      commit("UPDATE_LOADING", true);
      Axios.post(
        process.env.VUE_APP_API_URL + "/applicant/new/experience/" + payload.examId,
        payload.data
      )
        .then(res => {
          commit("UPDATE_APPLICANTID", res.data.data);
          commit("UPDATE_EXPERIENCE", payload.data);
          commit("UPDATE_EXPERIENCESTATUS", true);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    },
    getExperience({ commit }, applicantExamId) {
      commit("UPDATE_LOADING", true);
      Axios.post(
        process.env.VUE_APP_API_URL + "/applicant/get/complete/experience",
        applicantExamId
      )
        .then(res => {
          commit("UPDATE_EXPERIENCESTATUS", res.data.data.isComplete);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    }
  }
};
