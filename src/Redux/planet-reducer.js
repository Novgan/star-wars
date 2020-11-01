import { starWarsAPI } from "../api/api";

const INITIALIZED_CURRENT_PLANET = 'INITIALIZED_CURRENT_PLANET';
const INITIALIZED_RESIDENTS = 'INITIALIZED_RESIDENTS';
const CLEAR_STORE = 'CLEAR_STORE';


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
        case CLEAR_STORE:
            return {
                ...state,
                currentPlanet: {
                    info: undefined,
                    residentsName: undefined
                },
            };
        default:
            return state;
    }
};

export const initializedCurrentPlanet = currentPlanet => ({ type: INITIALIZED_CURRENT_PLANET, currentPlanet });
export const initializedResidents = residents => ({ type: INITIALIZED_RESIDENTS, residents });
export const clearStore = () => ({ type: CLEAR_STORE });

export const requestCurrentPlanetThunkCreator = (id) => {
    return dispatch => {
        starWarsAPI.getCurrentPlanet(id)
            .then(currentPlanet => {
                dispatch(initializedCurrentPlanet(currentPlanet));
                starWarsAPI.getResidents(currentPlanet.residents)
                    .then(residentsName => { dispatch(initializedResidents(residentsName)) })
                    .catch(erorr => {
                        dispatch(initializedResidents([null]));
                        console.error(erorr);
                    })
            }).catch(erorr => {
                dispatch(initializedCurrentPlanet(null));
                console.error(erorr);
            })
    }
}


export default planetReducer;