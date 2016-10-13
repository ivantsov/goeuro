import request from 'superagent';
import {
    LOAD_REPOS,
    LOAD_REPOS_SUCCESS,
    LOAD_REPOS_ERROR
} from './constants';

const baseUrl = 'https://api.github.com/users';

export function loadRepos(userId) {
    return async (dispatch) => {
        dispatch({type: LOAD_REPOS});

        try {
            const res = await request(`${baseUrl}/${userId}/repos`);

            dispatch({
                type: LOAD_REPOS_SUCCESS,
                data: res.body
            });
        }
        catch (err) {
            dispatch({
                type: LOAD_REPOS_ERROR,
                error: err.status
            });
        }
    };
}
