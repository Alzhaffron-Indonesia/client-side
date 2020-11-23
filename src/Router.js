import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Landing, Login, Notfound, Register, RegisterReseller, Shop } from './Containers/Index';
import { Provider as ReduxProvider } from 'react-redux';
import configStore from './Modules/Redux/Store';
import './Modules/index.scss';
import './Modules/fonts.scss';

const reduxStore = configStore()
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
                        <Route exact path={ROUTES.SHOP} component={Shop} />
                        <Route component={Notfound} />                      
                    </Switch>
                </BrowserRouter>
            </ReduxProvider>
        </div>
    )
}

export default Router
