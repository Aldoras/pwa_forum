import React, { Component } from 'react';

export default class LoginBar extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', };
        //aby šlo uvnitř volat "this"
        this.onLoginClicked = this.onLoginClicked.bind(this);
    }

    render() {
        return (
        <div className="form-group">
            <form className="form-inline">
                <div className={"form-group mx-sm-3"+(this.props.usernameTaken ? ' has-danger':'')}>
                <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                    <input
                        value={this.state.username}
                        className={"form-control "+(this.props.usernameTaken?'form-control-danger':'')}
                        id="inlineFormInputGroup"
                        placeholder="Username"
                        onChange={event => this.onInputChange(event.target.value)} />
                        {this.state.username =='' || this.props.usernameTaken ? '':<button type="button" className="btn btn-primary" onClick={this.onLoginClicked}>Submit</button>}
                    <div className="form-control-feedback">{this.props.usernameTaken ? 'This username is currently in use, please try another.' : ''}</div>
                </div>
            </form>
            </div>
                    );
    }
    onInputChange(username) {
        this.setState({ username });
        this.props.onUsernameChange(username);
    }
    onLoginClicked()
    {
        this.props.onButtonClick(this.state.username);
    }

}