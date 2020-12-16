let hi, vi;

function textPosition(text, position, cb) {
  switch (position) {
    case 1:
      text.originX = "left";
      text.originY = "top";
      text.left = coords.xl;
      text.top = coords.yt;
      text.textAlign = "left";
      hi = -1;
      vi = -1;
      break;
    case 2:
      text.originX = "center";
      text.originY = "top";
      text.left = coords.xc;
      text.top = coords.yt;
      text.textAlign = "center";
      hi = 0;
      vi = -1;
      break;
    case 3:
      text.originX = "right";
      text.originY = "top";
      text.left = coords.xr;
      text.top = coords.yt;
      text.textAlign = "right";
      hi = 1;
      vi = -1;
      break;
    case 4:
      text.originX = "left";
      text.originY = "center";
      text.left = coords.xl;
      text.top = coords.yc;
      text.textAlign = "left";
      hi = -1;
      vi = 0;
      break;
    case 5:
      text.originX = "center";
      text.originY = "center";
      text.left = coords.xc;
      text.top = coords.yc;
      text.textAlign = "center";
      hi = 0;
      vi = 0;
      break;
    case 6:
      text.originX = "right";
      text.originY = "center";
      text.left = coords.xr;
      text.top = coords.yc;
      text.textAlign = "right";
      hi = 1;
      vi = 0;
      break;
    case 7:
      text.originX = "left";
      text.originY = "bottom";
      text.left = coords.xl;
      text.top = coords.yb;
      text.textAlign = "left";
      hi = -1;
      vi = 1;
      break;
    case 8:
      text.originX = "center";
      text.originY = "bottom";
      text.left = coords.xc;
      text.top = coords.yb;
      text.textAlign = "center";
      hi = 0;
      vi = 1;
      break;
    case 9:
      text.originX = "right";
      text.originY = "bottom";
      text.left = coords.xr;
      text.top = coords.yb;
      text.textAlign = "right";
      hi = 1;
      vi = 1;
      break;
    default:
      text.originX = "center";
      text.originY = "center";
      text.left = coords.xc;
      text.top = coords.yc;
      text.textAlign = "center";
      hi = 0;
      vi = 0;
      break;
  }
  setTimeout(cb, 200);
}

function textSize(text, size) {
  switch (size) {
    case "s":
      text.fontSize = 16;
      break;
    case "m":
      text.fontSize = 24;
      break;
    case "l":
      text.fontSize = 30;
      break;
    case "xl":
      text.fontSize = 48;
      break;
  }
}

function textFit(text) {
  // ---------- get totalWidth ----------
  let bounds = text.__charBounds;
  let totalWidth = 0;
  for (let i = 0; i < bounds.length; i++) {
    for (let j = 0; j < bounds[i].length; j++) {
      totalWidth += bounds[i][j].width;
    }
  }
  // ---------- /get totalWidth ----------
  if (totalWidth < mycanvas.width - 48) {
    text.width = totalWidth * 1.05;
  } else {
    text.width = mycanvas.width - 48;
  }
}

function updateBase(text, base) {
  base.originX = text.originX;
  base.originY = text.originY;

  base.left = text.left + 10 * hi;
  base.top = text.top + 10 * vi;

  base.width = text.width + 20;
  base.height = text.height + 20;

  base.opacity = text.opacity;
}

function animationSlide(text, duration) {
  text.animate(
    { left: "+=0" },
    {
      from: text.left - 48,
      onChange: mycanvas.renderAll.bind(mycanvas),
      duration: duration,
      easing: fabric.util.ease.easeInCubic,
    }
  );
  text.animate(
    { opacity: "+=1" },
    {
      from: 0,
      duration: duration,
    }
  );
}
