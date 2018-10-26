import { Stock } from '../../store';

interface PortfolioState {
  ownedStocks: Stock[];
  funds: number;
}

interface OwnedStock {
  name: string;
  sign: string;
  price: number;
  description: string;
  quantity: number;
}

const state: PortfolioState = {
  ownedStocks: [],
  funds: 10000,
};

const getters = {
  getOwnedStocks({ ownedStocks }: PortfolioState) {
    return ownedStocks.reduce(
      (stocks, stock) => {
        const { sign } = stock;
        if (stocks[sign]) {
          return {
            ...stocks,
            ...{ [sign]: { quantity: stocks[sign].quantity + 1, ...stock } },
          };
        } else {
          return { ...stocks, ...{ [sign]: { quantity: 1, ...stock } } };
        }
      },
      {} as { string: OwnedStock },
    );
  },
  getFunds({ funds }) {
    return funds;
  },
};

const mutations = {
  addShares({ ownedStocks }: PortfolioState, shares: Stock[]) {
    ownedStocks = [...shares, ...ownedStocks];
  },
  removeShare({ ownedStocks }: PortfolioState, indexToRemove: number) {
    ownedStocks = ownedStocks.filter((_, index) => index !== indexToRemove);
  },
  reduceFunds({ funds }, amount) {
    funds -= amount;
  },
  increaseFunds({ funds }, amount) {
    funds += amount;
  },
  resetState(currentState, newState) {
    currentState.funds = 0;
    currentState.ownedStocks = [];
    Object.assign(currentState, newState);
  },
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
