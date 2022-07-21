import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import authReducer from "./authreducer";
import thunkMiddleware from 'redux-thunk';


let rootReducer = combineReducers({
    auth: authReducer
})

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // options like actionSanitizer, stateSanitizer
        }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware))
// other store enhancers if any


export default rootReducer