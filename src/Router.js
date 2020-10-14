import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Landing } from './Containers/Index'
import './Modules/index.scss';
import './Modules/fonts.scss';
const ROUTES = require('./Constants/Routes')

const Router = () => {
    return (
        <div className="font-lato">
            <BrowserRouter>
                <Switch>
                    <Route path={ROUTES.LANDING} component={Landing} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router
