import { starWarsAPI } from "../api/api";

const INITIALIZED_PLANETS = 'INITIALIZED_PLANETS';
const CLEAR_STORE = 'CLEAR_STORE';

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
        case CLEAR_STORE:
            return {
                ...state,
                planets: [],
            };
        default:
            return state;
    }
};

export const clearStore = () => ({ type: CLEAR_STORE });
export const initializedPlanets = planets => ({ type: INITIALIZED_PLANETS, planets });

export const requestPlanets = (page) => {
    return dispatch => {
        starWarsAPI.getPlanets(page)
            .then(data => { dispatch(initializedPlanets(data)) })
            .catch(error => {
                dispatch(initializedPlanets({ results: null }));
                console.error(error);
            });
    }
};

export default cardReducer;