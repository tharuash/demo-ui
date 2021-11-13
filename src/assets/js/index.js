//Green to Red colour


/*ctx = $("#c")
console.log(ctx)*/
/*.getContext('2d');
ctx.beginPath();*/

/*setTimeout(function(){ 
    canvas_arrow(ctx, 40, 210, 190, 80);
    ctx.stroke();
}, 3000);*/



//Bot to Scanning--------


//Scanning to Login
/*canvas_arrow(ctx, 230, 80, 370, 80);

//Login to Malware
canvas_arrow(ctx, 420, 80, 560, 80);

//Malware to CC
canvas_arrow(ctx, 600, 80, 740, 80);

//CC to DDoS
canvas_arrow(ctx, 790, 80, 930, 80);

//DDos to Victim-1
canvas_arrow(ctx, 970, 80, 1110, 210);

//Bot to CC
canvas_line(ctx, 30, 250, 30, 550);
canvas_line(ctx, 30, 550, 760, 550);
canvas_arrow(ctx, 760, 550, 760, 530);

//CC to CC
canvas_line(ctx, 740, 510, 720, 510);
canvas_line(ctx, 720, 90, 720, 510);
canvas_arrow(ctx, 720, 90, 740, 80);
canvas_arrow(ctx, 720, 220, 740, 220);
canvas_arrow(ctx, 720, 380, 740, 380);

//Loader to Malware
canvas_line(ctx, 560, 510, 540, 510);
canvas_line(ctx, 540, 90, 540, 510);
canvas_arrow(ctx, 540, 90, 560, 80);
canvas_arrow(ctx, 540, 220, 560, 220);
canvas_arrow(ctx, 540, 380, 560, 380);

//DDos to Victim-2
canvas_arrow(ctx, 970, 220, 1110, 220);

//DDos to Victim-3
canvas_arrow(ctx, 970, 380, 1110, 230);

//Column Separate Line
canvas_line(ctx, 100, 500, 100, 50);
canvas_line(ctx, 300, 500, 300, 50);
canvas_line(ctx, 500, 500, 500, 50);
canvas_line(ctx, 700, 500, 700, 50);
canvas_line(ctx, 900, 500, 900, 50);
canvas_line(ctx, 1000, 500, 1000, 50);

ctx.stroke();*/


function canvas_arrow(context, fromx, fromy, tox, toy) {
    var headlen = 10; // length of head in pixels
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(
        tox - headlen * Math.cos(angle - Math.PI / 6),
        toy - headlen * Math.sin(angle - Math.PI / 6)
    );
    context.moveTo(tox, toy);
    context.lineTo(
        tox - headlen * Math.cos(angle + Math.PI / 6),
        toy - headlen * Math.sin(angle + Math.PI / 6)
    );
}

function canvas_line(context, fromx, fromy, tox, toy) {
    // draw a red line
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
}

function greenToRed_1(id) {
    $("#" + id).css("background", "red");
}

function redToYellow_1(id) {
    $("#" + id).css("background", "yellow");
}

