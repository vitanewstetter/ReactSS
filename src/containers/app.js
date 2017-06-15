import React from 'react';
import { Route, Switch} from 'react-router';
import store from '../store';

import Header from './header.js';
import Background from './background';

import NewCard from '../pages/newcard';
import FindCard from '../pages/findcard';
import About from '../pages/about';


setPage();

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 'home',
        }
    }
    componentWillReceiveProps(){
        setPage();
    }
    render(){
        return <div id='app' style={{backgroundColor : this.props.background}}>
            <Background/>
            <Header/>
            <Switch>
                <Route path="/newcard" component={NewCard}/>
                <Route path="/findcard" component={FindCard}/>
                <Route path="/about" component={About}/>
            </Switch>
        </div>
    }
}


export default App;

function setPage(){
    switch(location.pathname) {
        case '/':
            store.dispatch({
                type: 'PURPLE_BACK'
            });
            store.dispatch({
                type: 'ON_HOMEPAGE'
            });
            break;
        case '/findcard':
            store.dispatch({
                type: 'LIGHT_BACK'
            });
            store.dispatch({
                type: 'MENU_LEAVE'
            });
            break;
        case '/about':
            store.dispatch({
                type: 'LIGHT_BACK'
            });
            store.dispatch({
                type: 'MENU_LEAVE'
            });
            break;
        default:
            store.dispatch({
                type: 'LIGHT_BACK'
            });
            store.dispatch({
                type: 'MENU_LEAVE'
            });

    }
}