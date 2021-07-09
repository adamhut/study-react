import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import StorePicker from './StorePicker'
import App from './App'
import NotFound from './NotFound'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StorePicker}></Route>
                <Route exact path="/store/:storeid" component={App}></Route>
                <Route component={NotFound}></Route>
            </Switch>    
        </BrowserRouter>
    );
}

export default Router;
