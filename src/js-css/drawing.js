//import $ from 'jquery';

// var dataString1 = "";
// var dataString2 = "";
// var dataString3 = "";


export var draw_circle = function(can, ctx, x, y, color, blur, brushW) {
    if(location.pathname === '/newcard/drawingmode'){
        var temp = window.innerWidth;
        temp = temp/2 -220;
        x -= temp; // Get mouse pos. in relationship to canvas.
        y -= can.offsetTop + 135;
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = blur;
        ctx.beginPath();
        ctx.arc(x ,y , brushW, 0, 2*Math.PI);
        ctx.fill();
    }
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


//
// function getWidth() {
//     if (self.innerWidth) {return self.innerWidth;}
//     if (document.documentElement && document.documentElement.clientWidth) {
//         return document.documentElement.clientWidth;}
//     if (document.body) { return document.body.clientWidth;}}

// function getHeight() {
//     if (self.innerHeight) {return self.innerHeight;}
//     if (document.documentElement && document.documentElement.clientHeight) {
//         return document.documentElement.clientHeight;}
//     if (document.body) { return document.body.clientHeight;}}
// var pageWidth = getWidth();
// var pageHeight = getHeight();



