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
      applicant: {
        examInfoId: null,
        picture: null,
        fullName: null,
        sex: null,
        placeBirth: null,
        dateBirth: null,
        handphone: null,
        telephone: null,
        emailAddress: null,
        religion: null,
        weight: null,
        height: null,
        physicalImpairment: null,
        idType: null,
        idNumber: null,
        typeBlood: null,
        nationality: null,
        martialStatus: null,
        martialDate: null,
        hobby: null
      },
      applicantAddress: [
        {
          addressTypeId: 1,
          detailAddress: null,
          kelurahan: null,
          kecamatan: null,
          city: null,
          province: null,
          postalCode: null,
          country: "Indonesia"
        },
        {
          addressTypeId: 2,
          detailAddress: null,
          kelurahan: null,
          kecamatan: null,
          city: null,
          province: null,
          postalCode: null,
          country: "Indonesia"
        },
        {
          addressTypeId: 3,
          detailAddress: null,
          kelurahan: null,
          kecamatan: null,
          city: null,
          province: null,
          postalCode: null,
          country: "Indonesia"
        }
      ]
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
    }
  },
  actions: {
    setApplicant({ commit }, applicantData) {
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
          commit("UPDATE_SELFSTATUS", res.data.data);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    }
  }
};
