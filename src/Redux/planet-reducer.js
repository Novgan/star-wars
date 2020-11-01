import { starWarsAPI } from "../api/api";

const INITIALIZED_CURRENT_PLANET = 'INITIALIZED_CURRENT_PLANET';
const INITIALIZED_RESIDENTS = 'INITIALIZED_RESIDENTS';


let initialState = {
    currentPlanet: {
        info: undefined,
        residentsName: undefined
    }
};

const planetReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_CURRENT_PLANET:
            return {
                ...state,
                currentPlanet: {
                    info: action.currentPlanet,
                    residentsName: [state.currentPlanet.residentsName]
                }
            };
        case INITIALIZED_RESIDENTS:
            return {
                ...state,
                currentPlanet: {
                    info: state.currentPlanet.info,
                    residentsName: action.residents
                },
            };
        default:
            return state;
    }
};

export const initializedCurrentPlanet = currentPlanet => ({ type: INITIALIZED_CURRENT_PLANET, currentPlanet });
export const initializedResidents = residents => ({ type: INITIALIZED_RESIDENTS, residents });

export const requestCurrentPlanetThunkCreator = (id) => {
    return dispatch => {
        starWarsAPI.getCurrentPlanet(id).then(currentPlanet => {
            dispatch(initializedCurrentPlanet(currentPlanet));
            starWarsAPI.getResidents(currentPlanet.residents).then(residentsName => {
                dispatch(initializedResidents(residentsName));
            })
        })
    }
}


export default planetReducer;