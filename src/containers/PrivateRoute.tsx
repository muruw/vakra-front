import React, { Component } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import Auth from '../util/auth';

interface PrivateRouteProps extends RouteProps {
  component: any
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;

  return (
    <Route {...rest} render={(routeProps: any) => (
      Auth.isAuthenticated
        ? <Component {...routeProps} />
        : <Redirect to={{
          pathname: '/login',
          state: {from: routeProps.location}
        }}
        />
    )} />
  )
}

export default PrivateRoute;