import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Landing, Login, Register, RegisterReseller, Store } from './Containers/Index';
import './Modules/index.scss';
import './Modules/fonts.scss';
import LoginContainer from './Containers/LoginContainer';

const ROUTES = require('./Constants/Routes');

const Router = () => {
    return (
        <div className="font-lato">            
            <BrowserRouter>
                <Switch>
                    <Route exact path={ROUTES.LANDING} component={Landing} />
                    <Route exact path={ROUTES.LOGIN} component={LoginContainer} />
                    <Route exact path={ROUTES.REGISTER} component={Register} />
                    <Route exact path={ROUTES.REGISTERRESELLER} component={RegisterReseller} />
                    <Route exact path={ROUTES.STORE} component={Store} />
                </Switch>
            </BrowserRouter>            
        </div>
    )
}

export default Router
