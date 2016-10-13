jest.mock('superagent');

import request from 'superagent';
import {
    LOAD_REPOS,
    LOAD_REPOS_SUCCESS,
    LOAD_REPOS_ERROR
} from '../constants';
import {loadRepos} from '../actions';

describe('actions', () => {
    async function testCase(promise) {
        const dispatch = jest.fn();
        const userId = 'test';

        request.mockImplementation(() => promise);

        await loadRepos(userId)(dispatch);

        expect(request.mock.calls[0][0].includes(`/${userId}/repos`)).toBeTruthy();
        expect(dispatch).toBeCalledWith({type: LOAD_REPOS});

        return dispatch;
    }

    it('success', async () => {
        const body = ['somedata'];
        const dispatch = await testCase(Promise.resolve({body}));

        expect(dispatch).lastCalledWith({
            type: LOAD_REPOS_SUCCESS,
            data: body
        });
    });

    it('error', async () => {
        const status = 404;
        const dispatch = await testCase(Promise.reject({status}));

        expect(dispatch).lastCalledWith({
            type: LOAD_REPOS_ERROR,
            error: status
        });
    });
});
