import React from 'react';
import { connect } from 'react-redux';

class Background extends React.Component {
    render(){
        return <div id='app-background' style={{backgroundColor: this.props.background}}></div>
    }
}

const mapStateToProps = function(store) {
    return {
        background: store.colors.background
    };
};

export default connect(mapStateToProps)(Background);