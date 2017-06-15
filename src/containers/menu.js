import React from 'react';
import { connect } from 'react-redux';

import {
    NewCardIcon, FindCardIcon, AboutIcon
} from '../components/icons.js';




class Menu extends React.Component {
    render(){
        return <div id="menu-dropdown" className={this.props.shadow} onMouseLeave={this.props.onMouseLeave} style={{backgroundColor: this.props.menu}}>
            <NewCardIcon name="newcard" color={this.props.color} menu={this.props.menu}/>
            <FindCardIcon name="findcard" color={this.props.color} menu={this.props.menu}/>
            <AboutIcon name="about" color={this.props.color} menu={this.props.menu}/>
        </div>
    }
}

const mapStateToProps = function(store) {
    return {
        menuShowing: store.menuShowing.menuShowing,
        background: store.colors.background,
        icons: store.colors.icons,
        menu: store.colors.menu,
        shadow: store.colors.shadow
    };
};

export default connect(mapStateToProps)(Menu);