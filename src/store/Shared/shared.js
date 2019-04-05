import Axios from "axios";

export default {
  state: {
    isError: false,
    isLoading: false,
    currentRoute: null
  },
  mutations: {
    UPDATE_ERROR(state, payload) {
      state.isError = payload;
    },
    UPDATE_LOADING(state, payload) {
      state.isLoading = payload;
    },
    UPDATE_CURRENTROUTE(state, payload) {
      state.currentRoute = payload;
    }
  },
  actions: {
    loadingError({ commit }, status) {
      commit("UPDATE_ERROR", status);
    },
    loadingStatus({ commit }, status) {
      commit("UPDATE_LOADING", status);
    },
    setCurrentRoute({ commit }, routeData) {
      commit("UPDATE_LOADING", true);
      Axios.post(process.env.VUE_APP_API_URL + "/shared/update/current/route", {
        examInfoId: routeData.examInfoId,
        sharedValue: routeData.sharedValue,
        sharedName: "CURRENT_ROUTES"
      })
        .then(() => {
          commit("UPDATE_CURRENTROUTE", routeData.sharedValue);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    },
    getCurrentRoute({ commit }, applicantExamId) {
      commit("UPDATE_LOADING", true);
      Axios.get(
        process.env.VUE_APP_API_URL + "/shared/get/all/" + applicantExamId
      )
        .then(res => {
          commit("UPDATE_CURRENTROUTE", res.data.data[0].sharedValue);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    }
  }
};
