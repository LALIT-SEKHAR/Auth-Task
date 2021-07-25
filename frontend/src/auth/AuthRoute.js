import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IsSignIn } from './Helper';

const AuthRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (IsSignIn()) {
                    return <Component {...props}/> 
                } else {
                    return (
                        <Redirect
                            to={{
                            pathname: "/signin",
                            state: { from: props.location }
                            }}
                            />  
                    )
                }
            }}
      />
    );
};

export default AuthRoute;