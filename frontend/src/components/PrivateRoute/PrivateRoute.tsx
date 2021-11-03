import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { user } from 'utils/gun';

const PrivateRoute: React.FC<any> = ({ children: Component, ...rest }) => {
  const isAuth = user.is;
  if (isAuth) return <Component {...rest} />;
  else
    return (
      <Route
        {...rest}
        render={({ location }) => {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  goTo: location.pathname,
                },
              }}
            />
          );
        }}
      />
    );
};
export default PrivateRoute;
