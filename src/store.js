import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import user from './store/User/user'
import shared from './store/Shared/shared'
import exam from './store/Exam/exam'
import disc from './store/Exam/disc'




export default new Vuex.Store({
  modules: {
    user,
    shared,
    exam,
    disc
  }
});
