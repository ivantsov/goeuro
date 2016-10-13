import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import Form from '../form';
import List from '../list';
import Spinner from '../spinner';

import './styles.css';

export class App extends Component {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        loadRepos: PropTypes.func.isRequired,
        repos: PropTypes.array,
        error: PropTypes.string
    };

    render() {
        const {
            repos,
            loading,
            error,
            loadRepos
        } = this.props;

        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <Form disabled={loading} onSubmit={loadRepos}/>
                </div>
                {error && this.renderError(error)}
                {loading && <Spinner/>}
                {!error && !loading && repos && <List items={repos}/>}
            </div>
        );
    }

    renderError(error) {
        return (
            <div className="alert alert-danger" role="alert">
                <strong>Error!</strong> {error}
            </div>
        );
    }
}

export default connect(
    state => state,
    actions
)(App);
