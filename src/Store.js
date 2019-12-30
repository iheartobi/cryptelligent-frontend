import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';

const rootReducer = combineReducers({
    user: userReducer,
    data: dataReducer
});

export default createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);