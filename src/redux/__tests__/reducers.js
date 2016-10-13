import {
    LOAD_REPOS,
    LOAD_REPOS_SUCCESS,
    LOAD_REPOS_ERROR
} from '../constants';
import reducers from '../reducers';

const initialState = {
    repos: null,
    loading: false,
    error: null
};

describe('reducers', () => {
    it('initial state', () => {
        expect(reducers(undefined, {})).toEqual(initialState);
    });

    it('invalid action type', () => {
        expect(reducers(undefined, {type: 'invalid'})).toEqual(initialState);
    });

    it('load repos', () => {
        expect(reducers(undefined, {type: LOAD_REPOS})).toEqual({
            ...initialState,
            loading: true
        });
    });

    it('load repos success', () => {
        const action = {
            type: LOAD_REPOS_SUCCESS,
            data: ['somedata']
        };

        expect(reducers(undefined, action)).toEqual({
            ...initialState,
            repos: action.data
        });
    });

    describe('load repos error', () => {
        it('404', () => {
            const action = {
                type: LOAD_REPOS_ERROR,
                error: 404
            };

            expect(reducers(undefined, action)).toEqual({
                ...initialState,
                error: 'User not found... Let\'s try another one!'
            });
        });

        it('another error', () => {
            const action = {
                type: LOAD_REPOS_ERROR,
                error: 500
            };

            expect(reducers(undefined, action)).toEqual({
                ...initialState,
                error: 'Something went wrong... Please try again later.'
            });
        });
    });
});
