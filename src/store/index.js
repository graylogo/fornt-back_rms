import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    num: 10
}
const getters = {}
const mutations = {}
const actions = {}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
})

export default  store
