const initialState = {
  coin: {},
  coins: [],
  news: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_COINS": {
      return { ...state, coins: action.data };
    }
    case "ALL_NEWS": {
      return { ...state, news: action.data };
    }
    default: {
      return state;
    }
  }
};
