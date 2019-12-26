const initialState = {
  team: {},
  teams: [],
  league: {},
  leagues: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_TEAMS": {
      return { ...state, teams: action.data };
    }
    default: {
      return state;
    }
  }
};
