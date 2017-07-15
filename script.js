var x=75;
var y=75;
var speed = 5;

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

function draw() {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    if (canvas.getContext) {


        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
//
        ctx.fillStyle = 'orange';
        ctx.fill();


    }
    ctx.beginPath();
//        ctx.moveTo(125, 125);
    ctx.lineTo(115, 45);
    ctx.lineTo(140, 20);
    ctx.closePath();
    ctx.strokeStyle = 'yellow';
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(122, 60);
    ctx.lineTo(150, 60);
    ctx.closePath();
    ctx.strokeStyle = 'red';
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(125, 80);
    ctx.lineTo(155, 100);
    ctx.closePath();
    ctx.strokeStyle = 'yellow';
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(118, 100);
    ctx.lineTo(135, 120);
    ctx.closePath();
    ctx.strokeStyle = 'red';
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(100, 118);
    ctx.lineTo(135, 170);
    ctx.closePath();
    ctx.strokeStyle = 'yellow';
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(75, 125);
    ctx.lineTo(135, 240);
    ctx.closePath();
    ctx.strokeStyle = 'red';
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(50, 120);
    ctx.lineTo(-5, 200);
    ctx.closePath();
    ctx.strokeStyle = 'yellow';
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(32, 100);
    ctx.lineTo(-20, 120);
    ctx.closePath();
    ctx.strokeStyle = 'red';
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(25, 80);
    ctx.lineTo(0, 80);
    ctx.closePath();
    ctx.strokeStyle = 'yellow';
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(28, 60);
    ctx.lineTo(-100, 40);
    ctx.closePath();
    ctx.strokeStyle = 'red';
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(40, 40);
    ctx.lineTo(10, 15);
    ctx.closePath();
    ctx.strokeStyle = 'yellow';
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(60, 28);
    ctx.lineTo(50, 10);
    ctx.closePath();
    ctx.strokeStyle = 'red';
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(80, 25);
    ctx.lineTo(80, 0);
    ctx.closePath();
    ctx.strokeStyle = 'yellow';
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(100, 32);
    ctx.lineTo(110, 10);
    ctx.closePath();
    ctx.strokeStyle = 'red';
    ctx.stroke();
    //
    // var time = new Date();
    // ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ( (2*Math.PI)/6000)*time.getMilliseconds() );
    // ctx.translate(75,45);
    // ctx.draw(pattern,10,10);
    // ctx.restore();
}


var $elie = $(".circle");
rotate(1);

function rotate(degree) {
    $elie.css({
        WebkitTransform: 'rotate(' + degree + 'deg)'
    });
    $elie.css({
        '-moz-transform': 'rotate(' + degree + 'deg)'
    });

    if (degree < 90) {
        timer = setTimeout(function() {
            rotate(++degree);
        }, 15);
    }
}

