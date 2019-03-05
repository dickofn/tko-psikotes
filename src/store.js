import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import user from './store/user'
import shared from './store/shared'
import exam from './store/exam'




export default new Vuex.Store({
  modules: {
    user,
    shared,
    exam
  }
});
