import React from 'react';
import { Router, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';


import App from './containers/app';

const history = createHistory();
export default (
    <Router history={history}>
        <Route path='/' component={App}/>
    </Router>
);
