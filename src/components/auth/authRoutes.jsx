import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './signUp';
import SignIn from './signIn';

const AuthRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
            </Switch>
        </Router>
    );
};

export default AuthRoutes;