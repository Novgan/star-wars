import { starWarsAPI } from "../api/api";

const INITIALIZED_PLANETS = 'INITIALIZED_PLANETS';

let initialState = {
    planets: []
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_PLANETS:
            return {
                ...state,
                planets: action.planets,
            };
        default:
            return state;
    }
};

export const initializedPlanets = planets => ({ type: INITIALIZED_PLANETS, planets });

export const requestPlanets = (page) => {
    return dispatch => {
        starWarsAPI.getPlanets(page).then(data => {
            dispatch(initializedPlanets(data));
        });
    }
};

export default cardReducer;