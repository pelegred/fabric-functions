let canvas = new fabric.Canvas("c");

// Setup

let text = new fabric.Textbox("Shop at amazon", {
  fill: "white",
  opacity: 0
});

let rect = new fabric.Rect({
  fill: 'rgba(0,0,0,.75)',
  originX : text.originX,
  originY : text.originY,
  opcaity: 0
});

// Set Text Properties

size(text, "m");

pos(text, 7, () => {
  canvas.renderAll();
  console.log("renderall on callback");
});

// Adding and rendering elements to canvas

canvas.add(rect);
canvas.add(text);

// Using the render event to fit text and update bg

canvas.on("after:render", function () {
  fit(text);
  updateTextBg(text);
  console.log("after-render event fired");
});

// Animating the text

text.animate({'left': '+=8', 'opacity': '+=1'}, { 
  from: 0,
  onChange: canvas.renderAll.bind(canvas),
  duration: 1000,
  easing: fabric.util.ease.easeInCubic
});
