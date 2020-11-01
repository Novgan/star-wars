import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import paginationReducer from "./pagination-reducer"
import planetReducer from "./planet-reducer"
import cardReducer from "./card-reducer";

let reducers = combineReducers({
    planets: cardReducer,
    currentPlanet: planetReducer,
    pagination: paginationReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;