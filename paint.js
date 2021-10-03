let brushMode
let brushSize
let saveButton
let myCanvas

function setup() {
  
  myCanvas = createCanvas(1000, 1000);
  
  background(0)

  brushMode = 1
  brushSize = 25
  
  saveButton = createButton('save');
  saveButton.position(0, 0);
  saveButton.mousePressed(savePainting);
}

function savePainting() {
  saveCanvas(myCanvas, 'myAwesomePainting', 'png');
}

function selectBrushMode() {
  if (keyIsDown(49)) {
    brushMode = 1
  }
  else if (keyIsDown(50)) {
    brushMode = 2
  }
}

function paintRect() {
  rect(mouseX - brushSize/2, mouseY - brushSize/2, 
       brushSize, brushSize)
}

function paintSpray() {
  let r = random(0, 255)
  let g = random(0, 255)
  let b = random(0, 255)
  fill(r, g, b)
  circle(mouseX + random(-20, 20), 
         mouseY + random(-20, 20), 
         brushSize + random(0, 20))
}

function draw() {

  selectBrushMode()
  
  if (mouseIsPressed) {
    if (brushMode === 1) {
      paintRect()
    }
    else {
      paintSpray()
    }
  }
     
} 

