import React from 'react';

export default class ColorPicker extends React.Component {
    render(){
        return <div className="colorPicker">
            <input id={this.props.name + "-h"} className="rangeH color-input" type="range" min="0" max="360" step="1"/>
            <input id={this.props.name + "-l"}className="rangeL color-input" type="range" min="0" max="100" step="1"/>
        </div>
    }
}
