import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ForeOFore from './Screens/ForeOFore';
import Signin from './Screens/Signin';
import Signup from './Screens/Signup';
import App from './App';
import AuthRoute from './auth/AuthRoute';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <AuthRoute exact path="/" component={App} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />
                <Route component={ForeOFore} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;