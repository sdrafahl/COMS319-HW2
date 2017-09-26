var direction = 0 // 0 -> right, 1 -> down, 2 -> left, 3 -> up
var pause = false
var bufferLine = {}
var lines = []

bufferLine.x0 = 0
bufferLine.y0 = 200

bufferLine.y1 = 200
bufferLine.x1 = 0
setInterval(process, 100)


function process() {
    render()
    console.log(4 % -1)
    if(!pause) {
        if(direction == 0) {
            bufferLine.x1 += 1
        }
        if(direction == 1) {
            bufferLine.y1 += 1
        }
        if(direction == 2) {
            bufferLine.x1 -= 1
        }
        if(direction == 3) { 
            bufferLine.y1 -= 1
        }
    }
    if(bufferLine.x1 >= 600) {
        bufferLine.x1 = 600
        stop()
    }
    if(bufferLine.y1 >= 400) {
        bufferLine.y1 = 400
        stop()
    }
}

function stop() {
    pause = !pause
    lines.push({
        x0: bufferLine.x0,
        x1: bufferLine.x1,
        y0: bufferLine.y0,
        y1: bufferLine.y1,
    })
    bufferLine.x0 = bufferLine.x1
    bufferLine.y0 = bufferLine.y1
}

function right() {
    direction++
    if(direction == 4) {
        direction = 0
    }
    lines.push({
        x0: bufferLine.x0,
        x1: bufferLine.x1,
        y0: bufferLine.y0,
        y1: bufferLine.y1,
    })
    bufferLine.x0 = bufferLine.x1
    bufferLine.y0 = bufferLine.y1
}

function left() {

    direction--
    if(direction == -1) {
        direction = 3
    }

    lines.push({
        x0: bufferLine.x0,
        x1: bufferLine.x1,
        y0: bufferLine.y0,
        y1: bufferLine.y1,
    })
    bufferLine.x0 = bufferLine.x1
    bufferLine.y0 = bufferLine.y1
}


function render() {
    for(x =0; x<lines.length; x++) {
        var lineObj = lines[x]
        drawLine(lineObj.x0, lineObj.y0, lineObj.x1, lineObj.y1)
    }
    drawLine(bufferLine.x0, bufferLine.y0, bufferLine.x1, bufferLine.y1)
}


function drawLine(x0, y0, x1, y1) {
    var canvas = document.getElementById("myCanvas")
    var ctx = canvas.getContext("2d");
    ctx.moveTo(x0,y0);
    ctx.lineTo(x1,y1);
    ctx.stroke();
}
