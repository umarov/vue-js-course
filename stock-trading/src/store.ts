import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    funds: 10000,
    stocks: [
      { name: 'Google', sign: 'GOOG', price: 1034, description: '' },
      { name: 'Square', sign: 'SQ', price: 44, description: '' },
      { name: 'AMD', sign: 'AMD', price: 12, description: '' },
      { name: 'Nvidia', sign: 'NVDA', price: 244, description: '' },
    ],
    ownedStocks: [],
  },
  getters: {
    getAllStocks(state) {
      return state.stocks;
    },
    getOwnedStocks(state) {
      return state.ownedStocks;
    },
    getFunds(state) {
      return state.funds;
    },
  },
  mutations: {},
  actions: {},
});
