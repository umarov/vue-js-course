import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface Stock {
  name: string;
  sign: string;
  price: number;
  description: string;
}

interface OwnedStock {
  name: string;
  sign: string;
  price: number;
  description: string;
  quantity: number;
}

interface StockTradingState {
  funds: number;
  stocks: Stock[];
  ownedStocks: Stock[];
}

export default new Vuex.Store({
  state: {
    funds: 10000,
    stocks: [
      { name: 'Google', sign: 'GOOG', price: 1034, description: '' },
      { name: 'Square', sign: 'SQ', price: 44, description: '' },
      { name: 'AMD', sign: 'AMD', price: 12, description: '' },
      { name: 'NVidia', sign: 'NVDA', price: 244, description: '' },
    ],
    ownedStocks: [],
  } as StockTradingState,
  getters: {
    getAllStocks(state) {
      return state.stocks;
    },
    getOwnedStocks(state) {
      return state.ownedStocks.reduce((stocks: any, stock: Stock) => {
        const { sign } = stock;
        if (stocks[sign]) {
          return {
            ...stocks,
            ...{ [sign]: { quantity: stocks[sign].quantity + 1, ...stock } },
          };
        } else {
          return { ...stocks, ...{ [sign]: { quantity: 1, ...stock } } };
        }
      }, {});
    },
    getFunds(state) {
      return state.funds;
    },
  },
  mutations: {
    addShares(state: StockTradingState, shares: Stock[]) {
      state.ownedStocks = [...shares, ...state.ownedStocks];
    },
    removeShare(state: StockTradingState, indexToRemove: number) {
      state.ownedStocks = state.ownedStocks.filter((_, index) => index !== indexToRemove);
    },
    reduceFunds(state, amount) {
      state.funds -= amount;
    },
    increaseFunds(state, amount) {
      state.funds += amount;
    },
  },
  actions: {
    buyShares({ commit, state }, { quantity, sign }) {
      const shares = [];
      const stockToBuy = state.stocks.find(stock => stock.sign === sign);

      if (stockToBuy) {
        for (let i = 0; i < quantity; i++) {
          shares.push(stockToBuy);
        }
        commit('addShares', shares);
        commit('reduceFunds', stockToBuy.price * quantity);
      }
    },
    sellShares({ commit, state }, { quantity, sign }) {
      const stockToSell = state.stocks.find(stock => stock.sign === sign);

      if (stockToSell) {
        for (let i = 0; i < quantity; i++) {
          const indexToRemove = state.ownedStocks.indexOf(stockToSell);
          commit('removeShare', indexToRemove);
        }

        commit('increaseFunds', stockToSell.price * quantity);
      }
    },
  },
});
