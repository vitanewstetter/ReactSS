import React from 'react';

import Header from './header';
import Body from './body';
import Background from './background';

import {
    purple, lightPurple
} from '../components/variables.js';


export default class Home extends React.Component {
    render(){
        return <div id='app'>
                <Background color={purple}/>
                <Header
                    logocolor='white'
                    iconcolor={purple}
                    menu={this.menuSelector}
                    page={this.state.page}
                    menuShowing={this.state.menuShowing}
                />
                <Body
                    page={this.state.page}
                />
        </div>
    }

}