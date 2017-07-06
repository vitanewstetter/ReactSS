import React from 'react';

import ColorPicker from '../colorPicker';
import { canvasBackground } from '../../js-css/addToCanvas';

class BackgroundColor extends React.Component {
    componentWillUpdate(){
        setBackground();
    }
  render(){
      return <div id="background-color" className="tool-controls">
          <ColorPicker
            name="background-color"
          />
      </div>
  }
}

var hue;
var lightness;

function setBackground(){
    hue = document.getElementById('background-color-h');
    lightness = document.getElementById('background-color-l');

//trying to get the colors of the inputs to update :(
   var color = 'hsl('+ hue.value + ', 90%,' + lightness.value + '%)';

  //  var test = "linear-gradient(to right, hsl(0, 90%, " + lightness.value +"%), hsl(30, 90%, " + lightness.value +"%), hsl(60, 90%, " + lightness.value +"%), hsl(90, 90%, " + lightness.value +"%), hsl(120, 90%, " + lightness.value +"%), hsl(150, 90%, " + lightness.value +"%), hsl(180, 90%, " + lightness.value +"%), hsl(210, 90%, " + lightness.value +"%), hsl(240, 90%, " + lightness.value +"%), hsl(270, 90%, " + lightness.value +"%), hsl(300, 90%, " + lightness.value +"%), hsl(330, 90%, " + lightness.value +"%), hsl(360, 90%, " + lightness.value +"%))";

    canvasBackground(color);

}

export default BackgroundColor;