import { createStore, combineReducers } from 'redux';
import { userReducer } from './Reducers.js/userReducer';
import { UIReducer } from './Reducers.js/UIReducer';
import { dataReducer } from './Reducers.js/dataReducer'

const rootReducer = combineReducers({
    user: userReducer,
    UI: UIReducer,
    data: dataReducer
});

export default createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)