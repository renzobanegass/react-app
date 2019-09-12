import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import About from './components/ContentStore';

const AppRoutes = () => 
<App>
    <Switch>
        <Route path="/product" component={ product } />       
    </Switch>
</App>

export default AppRoutes;