import stampText from './text';
import {draw_circle} from './drawing';

import store from '../store';

import {currentH, currentL, currentW, currentF} from '../components/toolControls/drawing-mode';

var current_x, current_y, last_x, last_y;
// import {canF, ctxF} from './drawing';
import {inputedText} from '../components/toolControls/text-mode';

// window.onmousedown = function (e) {
//     current_x = e.x;
//     current_y = e.y;
//     stampText(inputedText, current_x, current_y, canF, ctxF);
// };

var currentCanvas = 1;

var brushH = 60;
var brushL = 50;
var brushW = 20;
var brushF = 5;
var is_drawing = false;

// var link = '';

var currentColor = "hsl(0, 90%, 50%)";

var canF = 0;
var ctxF;

export default function setCanvas() {
    canF = document.getElementById('canvas-front');
    ctxF = canF.getContext('2d');
    is_drawing = false;
};

export function canvasBackground(f){
    ctxF.beginPath();
    ctxF.rect(0,0, 440, 550);
    ctxF.fillStyle = f;
    ctxF.fill();
}

window.onmousedown = function (e) {
    console.log("mousedown");
    if(location.pathname === '/newcard/drawingmode'){
        if(store.getState().menuShowing.menuShowing === false){
            brushH = currentH;
            brushL = currentL;
            brushW = currentW - currentF/2;
            brushF = currentF;

            if(brushW < 0){
                brushW = 2;
            }

            currentColor = "rgb(" + hslToRgb(brushH/360, 0.9, brushL/100) + ")";
            last_x = e.x;
            last_y = e.y;
            current_x = e.x;
            current_y = e.y;

            if(currentCanvas === 1){
                draw_circle(canF, ctxF, current_x, current_y, currentColor, brushF, brushW);
            }

            store.dispatch({
                type: 'MENU_OFF'
            });
            is_drawing = true;
        }
    }
    else if(location.pathname === '/newcard/textmode'){
        current_x = e.x;
        current_y = e.y;
        stampText(inputedText, current_x, current_y, canF, ctxF, brushW);
    }

};

window.onmousemove = function (e) {
    if (is_drawing === true) {
        currentColor = "rgb(" + hslToRgb(brushH/360, 0.9, brushL/100) + ")";
        current_x = e.x;
        current_y = e.y;

        var progress = 0.0;

        while (progress <= 1.0) {
            var x_inside = last_x + (current_x - last_x) * progress;
            var y_inside = last_y + (current_y - last_y) * progress;
            if(currentCanvas === 1){
                draw_circle(canF, ctxF, x_inside, y_inside, currentColor, brushF, brushW);
            }
            progress += 0.05;
        }

        last_x = current_x;
        last_y = current_y;
    }
};

window.onmouseup = function (e) {
    if(is_drawing === true){
        store.dispatch({
            type: 'MENU_LEAVE'
        });
    }
    currentColor = "rgb(" + hslToRgb(brushH/360, 0.9, brushL/100) + ")";
    current_x = e.x;
    current_y = e.y;
    if(currentCanvas === 1){
        draw_circle(canF, ctxF, current_x, current_y, currentColor, brushF);
    }
    is_drawing = false;

};

function hslToRgb(h, s, l){
    var r, g, b;
    if(s === 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}