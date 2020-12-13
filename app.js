let canvas = new fabric.Canvas("c");

let input = "Shop at amazon";
// input = input + " and get 20% discount for free";

let text = new fabric.Textbox(input, {
  fill: "white",
  backgroundColor: "rgba(0,0,0,.7)",
});

canvas.add(text);

size(text, "m");
pos(text, 1, () => {
  canvas.renderAll();
  console.log("renderall");
});

// can only use fit() after the event "after:render"
// because the text need to be rendered
canvas.on("after:render", function () {
  fit(text);
  console.log("after-render");
});

// text.animate("left", 100);

// todo:
// on window refresh - set the commands to be pos-top-left, size-m, fit
// consider always making full width, and draw rect based on lines

// caption background
// animate
// trello
// zip
