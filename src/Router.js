import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Landing, Login, Register, RegisterReseller, Store } from './Containers/Index';
import { Provider as ReduxProvider } from 'react-redux';
import configStore from './Modules/Store';
import './Modules/index.scss';
import './Modules/fonts.scss';

const reduxStore = configStore(window.REDUX_INITIAL_DATA)
const ROUTES = require('./Constants/Routes');

const Router = () => {
    return (
        <div className="font-lato">
            <ReduxProvider store={reduxStore}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={ROUTES.LANDING} component={Landing} />
                    <Route exact path={ROUTES.LOGIN} component={Login} />
                    <Route exact path={ROUTES.REGISTER} component={Register} />
                    <Route exact path={ROUTES.REGISTERRESELLER} component={RegisterReseller} />
                    <Route exact path={ROUTES.STORE} component={Store} />
                </Switch>
            </BrowserRouter>
            </ReduxProvider>
        </div>
    )
}

export default Router
