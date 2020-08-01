import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../../util/auth';

type State = typeof initialState;

const initialState = Object.freeze({
  redirectToReferrer: false
})

export default class Login extends Component<any, State> {
  readonly state = initialState;

  login = () => {
    Auth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }
    return (
      <div>
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }

}