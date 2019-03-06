import Axios from "axios";

export default {
  state: {
    isCompleted: null,
    answerList: null
  },
  mutations: {
    UPDATE_ISCOMPLETED(state, payload) {
      state.isCompleted = payload;
    },
    UPDATE_ANSWERLIST(state, payload) {
      state.answerList = payload;
    }
  },
  actions: {
    getCompletedStatus({ commit }, examInfo) {
      Axios.post(
        process.env.VUE_APP_API_URL + "/exam/answer/get/" + examInfo.examType,
        { examInfoId: examInfo.examInfoId }
      )
        .then(res => {
          commit("UPDATE_ISCOMPLETED", res.data.data.isComplete);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    },
    postAnswerList({ commit }, answerInfo) {
      Axios.post(process.env.VUE_APP_API_URL + "/exam/answer/new", answerInfo)
        .then(res => {
          commit("UPDATE_ANSWERLIST", res.data.data.examAnswer);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    },
    getAnswerList({ commit }, examInfo) {
      Axios.post(
        process.env.VUE_APP_API_URL + "/exam/answer/get/" + examInfo.examType,
        { examInfoId: examInfo.examInfoId }
      )
        .then(res => {
          commit("UPDATE_ANSWERLIST", res.data.data.answer);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    }
  }
};
