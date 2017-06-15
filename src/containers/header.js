import React from 'react';
import { connect } from 'react-redux';

import Logo from '../components/logo.js';
import Menu from './menu.js';

import store from '../store';

class Header extends React.Component {
    render(){
        if(this.props.hover===true) {
            return <div id="app-header" onMouseEnter={mouseEnter}>
                <Logo logocolor={this.props.icons}/>
                {this.props.menuShowing ? <Menu onMouseLeave={mouseLeave} color={this.props.icons} shadow={this.props.shadow}/> : null}
            </div>
        }else if(this.props.hover===false) {
            return <div id="app-header">
                <Logo logocolor={this.props.icons}/>
                {this.props.menuShowing ? <Menu color={this.props.icons} shadow={this.props.shadow}/> : null}
            </div>
        }
        }
}

function mouseEnter(){

    store.dispatch({
        type: 'MENU_HOVER'
    });
}
function mouseLeave(){
    store.dispatch({
        type: 'MENU_LEAVE'
    });
}

const mapStateToProps = function(store) {
    return {
        menuShowing: store.menuShowing.menuShowing,
        hover: store.menuShowing.hover,
        background: store.colors.background,
        icons: store.colors.icons,
        menu: store.colors.menu,
        shadow: store.colors.shadow
    };
};

export default connect(mapStateToProps)(Header);