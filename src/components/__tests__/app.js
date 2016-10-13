import React from 'react';
import renderer from 'react-test-renderer';
import {App} from '../app';

describe('App', () => {
    const loadRepos = jest.fn();

    function testCase(input) {
        const component = renderer.create(input);

        expect(component.toJSON()).toMatchSnapshot();
    }

    it('error', () => {
        testCase(
            <App
                loading={false}
                error="Not found"
                loadRepos={loadRepos}
            />
        );
    });

    it('loading', () => {
        testCase(<App loading loadRepos={loadRepos}/>);
    });

    describe('list', () => {
        it('initial loading', () => {
            testCase(<App loading={false} loadRepos={loadRepos}/>);
        });

        it('no repos', () => {
            testCase(
                <App
                    loading={false}
                    loadRepos={loadRepos}
                    repos={[]}
                />
            );
        });

        it('with repos', () => {
            testCase(
                <App
                    loading={false}
                    repos={[{
                        id: 1,
                        name: 'test',
                        html_url: 'http://url.com'
                    }]}
                    loadRepos={loadRepos}
                />
            );
        });
    });
});