// Author: Carter Smith Craney

// Global UI Variables 
let canvasDiv; 
let canvas; 
let textDiv; 
let textP; 
let buttonDiv;
let submitButton; 
let resetButton;

// Global ML Variables 
let doodlenet; 
let img; 
let isModelReady;


function setup() {
canvasDiv= createDiv(); 
canvas = createCanvas(640, 480); 
canvas.parent(canvasDiv);textDiv= createDiv; 
textP = createP("Model loading, please wait..."); 
textP.parent(textDiv); 
//create button UI 
buttonDiv = createDiv(); 
submitButton = createButton("SUBMIT");
submitButton.parent(buttonDiv);
submitButton.mousePressed(predictImage);
resetButton = createButton("RESET");
resetButton.parent(buttonDiv);
resetButton.mousePressed(resetCanvas); 
buttonDiv.style("display", "none"); 
//initialize ML Variables 
isModelReady = false; 
doodlenet = ml5.imageClassifier("DoodleNet", modelReady);

}

function draw() {
if(mouseIsPressed && isModelReady) {
  strokeWeight(25);
  line(mouseX, mouseY, pmouseX, pmouseY);

}
}

function resetCanvas() {

}

function modelReady() {
isModelReady = true; 
buttonDiv.style("display", "block");
textP.html("Draw your image, then click submit!");

}

function predictImage() {

}

function gotResults(error, results) {

}
