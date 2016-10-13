import React, {Component, PropTypes} from 'react';

export default class Form extends Component {
    static propTypes = {
        disabled: PropTypes.bool.isRequired,
        onSubmit: PropTypes.func.isRequired
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="input-group">
                    <input
                        ref={elem => this.elem = elem}
                        type="text"
                        placeholder="Username"
                        className="form-control"
                    />
                    <span className="input-group-btn">
                        <button
                            type="button"
                            disabled={this.props.disabled}
                            className="btn btn-primary"
                        >Search</button>
                    </span>
                </div>
            </form>
        );
    }

    onSubmit = (e) => {
        e.preventDefault();

        const value = this.elem.value.trim();

        if (value) {
            this.props.onSubmit(value);
        }
    }
}
