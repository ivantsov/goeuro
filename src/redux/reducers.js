import {
    LOAD_REPOS,
    LOAD_REPOS_SUCCESS,
    LOAD_REPOS_ERROR
} from './constants';

const initialState = {
    repos: null,
    loading: false,
    error: null
};

function getErrorText(err) {
    if (err === 404) {
        return 'User not found... Let\'s try another one!';
    }
    return 'Something went wrong... Please try again later.';
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_REPOS:
            return {
                ...initialState,
                loading: true
            };
        case LOAD_REPOS_SUCCESS:
            return {
                ...initialState,
                repos: action.data
            };
        case LOAD_REPOS_ERROR:
            return {
                ...initialState,
                error: getErrorText(action.error)
            };
        default:
            return state;
    }
}
