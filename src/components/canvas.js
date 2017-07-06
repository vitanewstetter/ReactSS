import React from 'react';

import setCanvas from '../js-css/addToCanvas';

window.onload = function(){
    setCanvas();
};

export default class Canvas extends React.Component {

    componentWillReceiveProps(){
        setCanvas();
    }
    render(){
        return <canvas id={this.props.name} className="shadow" width="400px" height="550px">

        </canvas>
    }
}

