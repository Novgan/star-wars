import { starWarsAPI } from "../api/api";

const INITIALIZED_PLANETS = 'INITIALIZED_PLANETS';
const INITIALIZED_CURRENT_PLANET = 'INITIALIZED_CURRENT_PLANET';


let initialState = {
    planets: [],
    currentPlanet:[]
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_PLANETS:
            return {
                ...state,
                planets: action.data
            };
        case INITIALIZED_CURRENT_PLANET:
            return {
                ...state,
                currentPlanet: action.data
            };
        default:
            return state;
    }
};

export const initializedPlanets = data => ({ type: INITIALIZED_PLANETS, data });

export const initializedCurrentPlanet = data => ({ type: INITIALIZED_CURRENT_PLANET, data });

export const requestPlanets = () => {
    return dispatch => {
        starWarsAPI.getPlanets().then(data => {
            dispatch(initializedPlanets(data));
        });
    }
};

export const requestCurrentPlanet = (id) => {
    return dispatch => {
        starWarsAPI.getCurrentPlanet(id).then(data => {
            dispatch(initializedCurrentPlanet(data));
        });
    }
};


export default appReducer;