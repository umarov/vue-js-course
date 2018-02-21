import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const backendUrl = 'https://somebackend.firebaseio.com/stockTrading';

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
  stateKey?: string;
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
    updateStockPrice(state, stock) {
      state.stocks[state.stocks.indexOf(stock)] = stockWithNewPrice(stock);
    },
    setStateKey(state, key) {
      state.stateKey = key;
    },
    replaceState(state, newState) {
      state.funds = 0;
      state.ownedStocks = [];
      state.stocks = [];
      Object.assign(state, newState);
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
    endDay({ commit, state }) {
      state.stocks.forEach(stock => {
        commit('updateStockPrice', stock);
      });
    },
    async saveDataToServer({ commit, state }) {
      const data = {
        state,
      };

      const response = await fetch(`${backendUrl}.json`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      });

      const { name } = await response.json();

      commit('setStateKey', name);
    },
    async loadServerData({ commit, state }) {
      if (state.stateKey) {
        const response = await fetch(`${backendUrl}/${state.stateKey}.json`, {
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
        });

        const newState = await response.json();

        commit('replaceState', newState.state);
      } else {
        throw new Error('Server key is not available');
      }
    },
  },
});

function stockWithNewPrice(stock: Stock) {
  const percentage =
    (Math.floor(Math.random() * 5) +
      Math.floor(Math.random() * -2) +
      Math.floor(Math.random() * 5) +
      (Math.floor(Math.random() * -5) +
        Math.floor(Math.random() * 7) +
        Math.floor(Math.random() * -5))) /
    100;

  stock.price = stock.price + Math.ceil(stock.price * percentage);
  return stock;
}
