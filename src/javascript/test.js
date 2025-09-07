const myCanvas = document.getElementById("cubicrBezierCurve");
const ctx = myCanvas.getContext("2d"); 

const secondCanvas = document.getElementById("bernsteinpolynomials");
const btx = secondCanvas.getContext("2d");


//set the origin of x to the lower left and invert the y axis
ctx.translate(0, secondCanvas.height);
ctx.scale(1, -1);

btx.translate(0, secondCanvas.height);
btx.scale(1, -1);

ctx.lineWidth = 2;
btx.lineWidth = 2;

// Consts for Colors
const gray = "#A9A9A9";   
const dimgray = "#696969";
const red = "#FF0000";
const lightgreen = "#00FF00";
const green = "#008000";
const blue = "#0000FF";
const lightblue = "#6082B6";
const darkorange = "#FF8C00";


// let points = [];

// let b0 = [20, 30];
// let b1 = [40, 360];
// let b2 = [570, 360];
// let b3 = [550, 30];

/* let px1 = document.getElementById("p1x").value;
let py1 = document.getElementById("p1y").value;
let px2 = document.getElementById("p2x").value;
let py2 = document.getElementById("p2y").value;
let px3 = document.getElementById("p3x").value;
let py3 = document.getElementById("p3y").value;
let px4 = document.getElementById("p4x").value;
let py4 = document.getElementById("p4y").value;

//Get Points from HTML
 let b0 = [px1, py1];
 let b1 = [px2, py2];
 let b2 = [px3, py3];
 let b3 = [px4, py4]; */

// points[0] = b0;
// points[1] = b1;
// points[2] = b2;
// points[3] = b3;

let t = 0.5;


// let paramt = document.getElementById("parametert").value;
// let paramt = document.getElementById("new").value;

function updateTextInput(val){
    document.getElementById('textInput').value=val; 
}

function updateTextInput2(val){
    document.getElementById('textInput2').value=val; 
}



function clearCanvas(){
    ctx.clearRect(0, 0, 600, 400);

}

function clearSecondCanvas(){
    btx.clearRect(0, 0, 600, 400);

}


// Result is a Point P(t) on the Bezier-Curve
function deCastlejauAlgorithm(points, t) {

    let intermediatepoints = [];

    while(points.length > 1){
        let j =  points.length -1;
        for(let i = 0; i < j; i++){
            intermediatepoints.push([
            // For x-coordinates
            points[i][0] * (1-t) + points[i+1][0] * t,
            // For y-coordinates
            points[i][1] * (1-t) + points[i+1][1] * t
        ]);
        

        }
        points = [];
        for(let i = 0; i < intermediatepoints.length; i++){
            points[i] = intermediatepoints[i].slice();

        }
        intermediatepoints = [];
    }
    console.log(points)
    return Object.assign(points[0], intermediatepoints); 

}

//Calculating of a Bezier-Curve using the Bernsteinpolynomials
function calculateBezierWithBernsteinpolynomials(points, t) {

    let cubicpoints = [];

            cubicpoints.push([
            // For x-coordinates
            // P = (1−t)3P1 + 3(1−t)2tP2 +3(1−t)t2P3 + t3P4
            Math.pow((1-t), 3) * points[0][0] + 3 *  Math.pow((1-t), 2) * t * points[1][0] + 
            3 *  (1-t) * Math.pow(t, 2) * points[2][0] + Math.pow(t, 3) * points[3][0],
            // For y-coordinates
            Math.pow((1-t), 3) * points[0][1] + 3 *  Math.pow((1-t), 2) * t * points[1][1] + 
            3 *  (1-t) * Math.pow(t, 2) * points[2][1] + Math.pow(t, 3) * points[3][1],
        ]);
        
        console.log(cubicpoints)

}

function callBezierWithBernsteinpolynomials(){
    calculateBezierWithBernsteinpolynomials(points, t)
}

//Calls the de Castlejau Algorithm
function callCastlejau(){
    deCastlejauAlgorithm(points, t)
}



// graphical evaluation of the intermediate points of the de castlejau algorithm
function draw_intermediate_points(points, paramt) {

    // var paramt = document.getElementById("parametert").value;
    let firstiteration = [];
    let secondIteration = [];


    for(i= 0; i <points.length-1; i++){
        firstiteration.push([
                 points[i][0] * (1-paramt) + points[i+1][0] * paramt,
                 points[i][1] * (1-paramt) + points[i+1][1] * paramt
             ]);

    }

    console.log(firstiteration);

    //Draw Lines between the points of the first iteration
    ctx.beginPath();
    ctx.moveTo(firstiteration[0][0], firstiteration[0][1]);
    for(let i = 0; i < firstiteration.length-1; i++){
        ctx.lineTo(firstiteration[i+1][0], firstiteration[i+1][1]);
    }
    ctx.strokeStyle = green;
    ctx.stroke(); 

    //Draw the points of the first iteration
    for(i = 0; i <firstiteration.length; i++){
        ctx.beginPath();
        ctx.arc(firstiteration[i][0], firstiteration[i][1], 3, 0, 8 * Math.PI, false);
        ctx.fillStyle = green;
        ctx.strokeStyle = green;
        ctx.fill();
        ctx.stroke(); 

    }

    for(i= 0; i < firstiteration.length-1; i++){
        secondIteration.push([
            firstiteration[i][0] * (1-paramt) + firstiteration[i+1][0] * paramt,
            firstiteration[i][1] * (1-paramt) + firstiteration[i+1][1] * paramt
             ]);

    }

    //Draw Lines between the points of the second iteration
    ctx.beginPath();
    ctx.moveTo(secondIteration[0][0], secondIteration[0][1]);
    for(let i = 0; i < secondIteration.length-1; i++){
        ctx.lineTo(secondIteration[i+1][0], secondIteration[i+1][1]);
    }
    ctx.strokeStyle = blue;
    ctx.stroke(); 

    //Draw the points of the first iteration
    for(i = 0; i <secondIteration.length; i++){
        ctx.beginPath();
        ctx.arc(secondIteration[i][0], secondIteration[i][1], 3, 0, 8 * Math.PI, false);
        ctx.fillStyle = blue;
        ctx.strokeStyle = blue;
        ctx.fill();
        ctx.stroke(); 

    }


}

function callDrawBezier() {
    var points = [];

    var px1 = document.getElementById("p1x").value;
    var py1 = document.getElementById("p1y").value;
    var px2 = document.getElementById("p2x").value;
    var py2 = document.getElementById("p2y").value;
    var px3 = document.getElementById("p3x").value;
    var py3 = document.getElementById("p3y").value;
    var px4 = document.getElementById("p4x").value;
    var py4 = document.getElementById("p4y").value;
    
    //Get Points from HTML
     var b0 = [px1, py1];
     var b1 = [px2, py2];
     var b2 = [px3, py3];
     var b3 = [px4, py4]; 
    
    points[0] = b0;
    points[1] = b1;
    points[2] = b2;
    points[3] = b3;
    var paramt = document.getElementById("parametert").value;
    draw_intermediate_points(points, paramt)
}


function bernsteinPolynomial(t){
    let bernsteinpolynomialb0 = [];
    let bernsteinpolynomialb1 = [];
    let bernsteinpolynomialb2 = [];
    let bernsteinpolynomialb3 = [];
    let steps = 100;

    for(t = 0; t <= steps; t++){
        bernsteinpolynomialb0.push([
            t/steps * 600,
            (1-3*t/steps + 3 * Math.pow(t/steps, 2) - Math.pow(t/steps, 3)) * 400
        ]);
        bernsteinpolynomialb1.push([
            t/steps * 600,
            (3*t/steps - 6 * Math.pow(t/steps, 2) + 3 * Math.pow(t/steps, 3)) * 400
        ]);
        bernsteinpolynomialb2.push([
            t/steps * 600,
            (3 * Math.pow(t/steps, 2) - 3 * Math.pow(t/steps, 3)) * 400
        ]);
        bernsteinpolynomialb3.push([
            t/steps * 600,
            Math.pow(t/steps, 3) * 400
        ]);
    }


    let bn0 = bernsteinpolynomialb0.length-1;

    btx.beginPath();
        btx.moveTo(bernsteinpolynomialb0[0][0], bernsteinpolynomialb0[0][1]);
        for(let a = 0; a < bn0; a++){
            btx.lineTo(bernsteinpolynomialb0[a+1][0], bernsteinpolynomialb0[a+1][1]);
    }
    btx.strokeStyle = lightblue;
    btx.stroke(); 
    // console.log(bernsteinpolynomialb0) 

    let bn1 = bernsteinpolynomialb1.length-1;

    btx.beginPath();
        btx.moveTo(bernsteinpolynomialb1[0][0], bernsteinpolynomialb1[0][1]);
        for(let a = 0; a < bn1; a++){
            btx.lineTo(bernsteinpolynomialb1[a+1][0], bernsteinpolynomialb1[a+1][1]);
    }
    btx.strokeStyle = lightgreen;
    btx.stroke(); 
    // console.log(bernsteinpolynomialb0)
    
    let bn2 = bernsteinpolynomialb2.length-1;

    btx.beginPath();
        btx.moveTo(bernsteinpolynomialb2[0][0], bernsteinpolynomialb2[0][1]);
        for(let a = 0; a < bn2; a++){
            btx.lineTo(bernsteinpolynomialb2[a+1][0], bernsteinpolynomialb2[a+1][1]);
    }
    btx.strokeStyle = darkorange;
    btx.stroke(); 
    // console.log(bernsteinpolynomialb0) 

    let bn3 = bernsteinpolynomialb3.length-1;

    btx.beginPath();
        btx.moveTo(bernsteinpolynomialb3[0][0], bernsteinpolynomialb3[0][1]);
        for(let a = 0; a < bn3; a++){
            btx.lineTo(bernsteinpolynomialb3[a+1][0], bernsteinpolynomialb3[a+1][1]);
    }
    btx.strokeStyle = dimgray;
    btx.stroke(); 
    console.log(bernsteinpolynomialb3 [100][0], bernsteinpolynomialb3[100][1])

    //Draw points
    var paramt = document.getElementById("bt").value;
    let d = paramt*100

    btx.beginPath();
        btx.arc(bernsteinpolynomialb0[d][0], bernsteinpolynomialb0[d][1], 3, 0, 8 * Math.PI, false);
        btx.fillStyle = lightblue;
        btx.strokeStyle =lightblue;
        btx.fill();
        btx.stroke(); 

        btx.beginPath();
        btx.arc(bernsteinpolynomialb1[d][0], bernsteinpolynomialb1[d][1], 3, 0, 8 * Math.PI, false);
        btx.fillStyle = lightgreen;
        btx.strokeStyle = lightgreen;
        btx.fill();
        btx.stroke(); 

        btx.beginPath();
        btx.arc(bernsteinpolynomialb2[d][0], bernsteinpolynomialb2[d][1], 3, 0, 8 * Math.PI, false);
        btx.fillStyle = darkorange;
        btx.strokeStyle = darkorange;
        btx.fill();
        btx.stroke(); 

        btx.beginPath();
        btx.arc(bernsteinpolynomialb3[d][0], bernsteinpolynomialb3[d][1], 3, 0, 8 * Math.PI, false);
        btx.fillStyle = dimgray;
        btx.strokeStyle = dimgray;
        btx.fill();
        btx.stroke(); 


        btx.font = "24px Times New Roman";
        btx.fillStyle = lightblue;
        btx.strokeStyle = lightblue;
        btx.fillText("B0", 40, 350);

        btx.font = "24px Times New Roman";
        btx.fillStyle = lightgreen;
        btx.strokeStyle = lightgreen;
        btx.fillText("BI", 190, 200);

        btx.font = "24px Times New Roman";
        btx.fillStyle = darkorange;
        btx.strokeStyle = darkorange;
        btx.fillText("BII", 380, 200);

        btx.font = "24px Times New Roman";
        btx.fillStyle = dimgray;
        btx.strokeStyle = dimgray;
        btx.fillText("BIII", 520, 350);

        console.log(paramt)

}

function callBernsteinPolynomial(){
    bernsteinPolynomial(t)
}

function main() {

    var points = [];

var px1 = document.getElementById("p1x").value;
var py1 = document.getElementById("p1y").value;
var px2 = document.getElementById("p2x").value;
var py2 = document.getElementById("p2y").value;
var px3 = document.getElementById("p3x").value;
var py3 = document.getElementById("p3y").value;
var px4 = document.getElementById("p4x").value;
var py4 = document.getElementById("p4y").value;

//Get Points from HTML
 var b0 = [px1, py1];
 var b1 = [px2, py2];
 var b2 = [px3, py3];
 var b3 = [px4, py4]; 

points[0] = b0;
points[1] = b1;
points[2] = b2;
points[3] = b3;
    // Very small increase of the t array to get enough points for a smooth bezier-curve
    // maybe 0.001
    let t;
    // stores the calculated bezierpoints in an array in order to draw the bezier-curve
    let steps = 100;
    let bezierpoints = [];
    for(t = 0; t <= steps; t++){
        bezierpoints.push([
            deCastlejauAlgorithm(points, t/steps)
    ]);

    }
    //draw lines between the Controlpoints

     ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        ctx.lineTo(points[1][0], points[1][1]);
        ctx.lineTo(points[2][0], points[2][1]);
        ctx.lineTo(points[3][0], points[3][1]);
        ctx.strokeStyle = gray;
        ctx.stroke();  

    //draw the Bezier-Curves 
    // Bezierpoints is a 3 dimensional array
    // It should be only 2 dimensional

    let k = bezierpoints.length;

    ctx.beginPath();
        ctx.moveTo(bezierpoints[0][0], bezierpoints[0][1]);
        for(let a = 0; a < k; a++){
            ctx.lineTo(bezierpoints[a][0][0], bezierpoints[a][0][1]);
        console.log(bezierpoints[a][1])
    }
    ctx.strokeStyle = red;
    ctx.stroke(); 

    for(i = 0; i <4; i++){
        ctx.beginPath();
        ctx.arc(points[i][0], points[i][1], 3, 0, 8 * Math.PI, false);
        ctx.fillStyle = gray;
        ctx.strokeStyle = gray;
        ctx.fill();
        ctx.stroke(); 

    }


    console.log(bezierpoints)

}

function callMain(){

}