import { starWarsAPI } from "../api/api";

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    currentPage: undefined
};

const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        default:
            return state;
    }
};

export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });


export default paginationReducer;