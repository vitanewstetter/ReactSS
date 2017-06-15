import React from 'react';

import ColorPicker from '../colorPicker';

class BackgroundColor extends React.Component {
    componentWillUpdate(){
        setDrawingTool();
    }
    componentDidMount(){
        setDrawingTool();
    }
    render(){
        return <div id="drawing-mode" className="tool-controls">
            <div id="current-brush" style={{boxShadow :'rgba(34,34,34) 0 0 5px 10px' }}></div>
            <ColorPicker
                name="drawing-mode"
                margin="80px"
            />
            <input id='soften-brush' className="other-input" defaultValue="5" type="range" min="0" max="10" step="1"/>
            <input id='brush-size' className="other-input" defaultValue="15" type="range" min="2" max="40" step="1"/>

        </div>
    }
}




export var currentH;
export var currentL;
export var currentW;
export var currentF;


export function setDrawingTool(){
    var hue = document.getElementById('drawing-mode-h');
    var lightness = document.getElementById('drawing-mode-l');
    var brush = document.getElementById('current-brush');
    var softness = document.getElementById('soften-brush');
    var size = document.getElementById('brush-size');


    var color = 'hsl('+ hue.value + ', 90%,' + lightness.value + '%)';
    var soft = softness.value;

    //show brush color, fuzziness, and size
    brush.style.backgroundColor = color;
    brush.style.boxShadow = color + '0 0 ' + soft/2 + 'px 10px';
    brush.style.width = size.value + 'px';
    brush.style.height = size.value + 'px';

    currentH = hue.value;
    currentL = lightness.value;
    currentW = size.value;
    currentF = soft;

}

export default BackgroundColor;