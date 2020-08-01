import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import PublicPanel from '../PublicPanel';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute';
import { BookingShort } from '../../booking/short/BookingShort';
import Auth from '../../util/auth';

type Props = typeof defaultProps;
type State = typeof initialState;

const initialState = Object.freeze({
  value: {},
  errors: [],
  didCheckErrors: false
});
const defaultProps = Object.freeze({});

export class AuthPage extends Component<Props, State> {
  readonly state = initialState;

  render() {

    return (

      <Router>
        <div>
          <AuthButton/>
          <ul>
            <li><Link to="/public">Public page</Link></li>
            <li><Link to="/protected">Protected Page</Link></li>
          </ul>

          <Route path="/public" component={PublicPanel} />
          <Route path="/login" component={Login} />
          <PrivateRoute path='/protected' component={BookingShort} />
        </div>
      </Router>
    )
  }
}

const AuthButton = withRouter(({ history }) => (
  Auth.isAuthenticated
    ? <p>
      Welcome! <button onClick={() => {
      Auth.signout(() => history.push('/'))
    }}>Sign out</button>
    </p>
    : <p>You are not logged in.</p>
))