//import $ from 'jquery';

// var dataString1 = "";
// var dataString2 = "";
// var dataString3 = "";

import store from '../store';

import {currentH, currentL, currentW, currentF} from '../components/toolControls/drawing-mode';


var currentCanvas = 1;

var brushH = 60;
var brushL = 50;
var brushW = 20;
var brushF = 5;

// var link = '';

var currentColor = "hsl(0, 90%, 50%)";

var canF = 0;
var ctxF;

export default function setCanvas() {
        canF = document.getElementById('canvas-front');
        ctxF = canF.getContext('2d');
};

export function canvasBackground(f){
    ctxF.beginPath();
    ctxF.rect(0,0, 440, 550);
    ctxF.fillStyle = f;
    ctxF.fill();
}


var draw_circle = function(can, ctx, x, y, color, blur) {
    var temp = window.innerWidth;
    x -= can.offsetLeft; // Get mouse pos. in relationship to canvas.
    y -= can.offsetTop + 135;
    //ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = blur;
    ctx.beginPath();
    ctx.arc(x ,y , brushW, 0, 2*Math.PI);
    ctx.fill();
};

var is_drawing = false;
var last_x, last_y, current_x, current_y;

//drawing functions
window.onmousedown = function (e) {
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
            draw_circle(canF, ctxF, current_x, current_y, currentColor, brushF);
        }

        store.dispatch({
            type: 'MENU_OFF'
        });
        is_drawing = true;
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
                draw_circle(canF, ctxF, x_inside, y_inside, currentColor, brushF);
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


// $(done).hover(function(){
//     dataString1 = canF.toDataURL("image/png");
//     // dataString2 = canI1.toDataURL("image/png");
//     // dataString3 = canI2.toDataURL("image/png");
// });
//
// //make the card!!
// done.onclick = function makeCard(){
//
//
//     var imageData = {front: dataString1, back: dataString2, inside: dataString3, myLink: link};
//     var stringData = JSON.stringify(imageData);
//
//
//     $.ajax({
//         type: 'POST',
//         data: stringData,
//         contentType: 'text/json',
//         url: '/',
//         success: function(data) {
//             var user_id = data;
//             console.log('success');
//             console.log(user_id);
//             window.location.href = "/users/" + user_id;
//         }
//     });
// }

// //make again
// again.onclick = function(){
// location.reload();
// }



function getWidth() {
    if (self.innerWidth) {return self.innerWidth;}
    if (document.documentElement && document.documentElement.clientWidth) {
        return document.documentElement.clientWidth;}
    if (document.body) { return document.body.clientWidth;}}

// function getHeight() {
//     if (self.innerHeight) {return self.innerHeight;}
//     if (document.documentElement && document.documentElement.clientHeight) {
//         return document.documentElement.clientHeight;}
//     if (document.body) { return document.body.clientHeight;}}
// var pageWidth = getWidth();
// var pageHeight = getHeight();



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