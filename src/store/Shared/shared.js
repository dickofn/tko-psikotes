import Axios from "axios";

export default {
  state: {
    isError: false,
    isLoading: false,
    currentRoute: null,
    currentEndRoute: null,
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
    },
    UPDATE_CURRENTENDROUTE(state, payload) {
      state.currentEndRoute = payload;
    }
  },
  actions: {
    setError({ commit }, status) {
      commit("UPDATE_ERROR", status);
    },
    setLoading({ commit }, status) {
      commit("UPDATE_LOADING", status);
    },
    setCurrentRoute({ commit }, routeData) {
      commit("UPDATE_LOADING", true);
      return new Promise ((resolve, reject) => {
        Axios.post(process.env.VUE_APP_API_URL + "/shared/update", {
          examInfoId: routeData.examInfoId,
          sharedValue: routeData.sharedValue,
          sharedName: "CURRENT_ROUTES"
        })
          .then(res => {
            commit("UPDATE_CURRENTROUTE", routeData.sharedValue);
            commit("UPDATE_LOADING", false);
            resolve(res);
          })
          .catch(e => {
            commit("UPDATE_LOADING", false);
            console.log(e);
            reject(e)
          });
      })
    },
    setCurrentEndRoute({ commit }, routeData) {
      commit("UPDATE_LOADING", true);
      Axios.post(process.env.VUE_APP_API_URL + "/shared/new", {
        examInfoId: routeData.examInfoId,
        sharedValue: routeData.sharedValue,
        sharedName: "END_ROUTE"
      })
        .then(() => {
          commit("UPDATE_CURRENTENDROUTE", routeData.sharedValue);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    },
    getShared({ commit }, applicantExamId) {
      commit("UPDATE_LOADING", true);
      Axios.get(
        process.env.VUE_APP_API_URL + "/shared/get/all/" + applicantExamId
      )
        .then(res => {
          commit("UPDATE_CURRENTROUTE", res.data.data[0].sharedValue);
          commit("UPDATE_CURRENTENDROUTE", res.data.data[1].sharedValue);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
          commit("UPDATE_LOADING", false);
        });
    },
  }
};
