let mycanvas = new fabric.StaticCanvas("c");

const coords = {
  xl: 24,
  xc: mycanvas.width / 2,
  xr: mycanvas.width - 24,
  yt: 24,
  yc: mycanvas.height / 2,
  yb: mycanvas.height - 24,
};

let mytext = new fabric.Textbox("Shop at amazon", {
  fill: "pink",
  // backgroundColor: "red",
  opacity: 0,
});

let mybase = new fabric.Rect({
  fill: "rgba(0,0,0,.75)",
  originX: mytext.originX,
  originY: mytext.originY,
  opacity: 0,
});

// ----------------------------------------------------------------------

textSize(mytext, "m");

textPosition(mytext, 5, () => {
  mycanvas.renderAll(); // Force after:render
});

// ----------------------------------------------------------------------

animationSlide(mytext, 1000);

mycanvas.add(mybase);
mycanvas.add(mytext);

mycanvas.on("after:render", function () {
  textFit(mytext);
  updateBase(mytext, mybase);
});

mycanvas.renderAll();
mycanvas.renderAll();
