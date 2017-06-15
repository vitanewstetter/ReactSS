import React from 'react';

export default class ColorPicker extends React.Component {
    render(){
        return <div className="colorPicker" style={{marginTop: this.props.margin}}>
            <input  id={this.props.name + "-h"} className="rangeH color-input" type="range" min="0" max="360" step="1"/>
            <input style={{background: 'linear-gradient(to right, hsl(255, 90%, 0%), hsl(255, 90%, 50%), hsl(255, 90%, 100%))'}}id={this.props.name + "-l"}className="rangeL color-input" type="range" min="0" max="100" step="1"/>
        </div>
    }
}
