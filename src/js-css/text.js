


export default function stampText(text, x, y, can, ctx){
    if(location.pathname === '/newcard/textmode'){
        var temp = window.innerWidth;
        temp = temp/2 -220;
        x -= temp; // Get mouse pos. in relationship to canvas.
        y -= can.offsetTop + 135;

        ctx.font="20px Georgia";
        ctx.fillText(text,x,y);
    }
};

