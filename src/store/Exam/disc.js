export default {
  state: {
    isCompleteDisc: null,
    answerListDisc: null
  },
  mutations: {
    UPDATE_ISCOMPLETEDISC(state, payload){
      state.isCompleteDisc = payload;
    },
    UPDATE_ANSWERLISTDISC(state, payload) {
      state.answerListDisc = payload;
    }
  },
  actions: {
    
  }
};
