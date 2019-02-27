import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import user from './store/user'
import test from './store/test'

export default new Vuex.Store({
  modules: {
    user,
    test
  }
});
