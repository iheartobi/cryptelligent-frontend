const initialState = {
    user: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            return { ...state, user: action.data}
        }
        case 'LOGIN_USER': {
            return { ...state, user: action.data}
        }
        case 'LOGOUT_USER': {
            return { ...state, user: action.data}
        }
        case 'GET_USER': {
            return { ...state, user: action.data}
        }
        default: {
            return state
        }
    }
}