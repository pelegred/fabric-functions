function pos(el, position, cb) {
  const coords = {
    xl: 24,
    xc: canvas.width / 2,
    xr: canvas.width - 24,
    yt: 24,
    yc: canvas.height / 2,
    yb: canvas.height - 24,
  };
  switch (position) {
    case 1:
      el.originX = "left";
      el.originY = "top";
      el.left = coords.xl;
      el.top = coords.yt;
      el.textAlign = "left";
      break;
    case 2:
      el.originX = "center";
      el.originY = "top";
      el.left = coords.xc;
      el.top = coords.yt;
      el.textAlign = "center";
      break;
    case 3:
      el.originX = "right";
      el.originY = "top";
      el.left = coords.xr;
      el.top = coords.yt;
      el.textAlign = "right";
      break;
    case 4:
      el.originX = "left";
      el.originY = "center";
      el.left = coords.xl;
      el.top = coords.yc;
      el.textAlign = "left";
      break;
    case 5:
      el.originX = "center";
      el.originY = "center";
      el.left = coords.xc;
      el.top = coords.yc;
      el.textAlign = "center";
      break;
    case 6:
      el.originX = "right";
      el.originY = "center";
      el.left = coords.xr;
      el.top = coords.yc;
      el.textAlign = "right";
      break;
    case 7:
      el.originX = "left";
      el.originY = "bottom";
      el.left = coords.xl;
      el.top = coords.yb;
      el.textAlign = "left";
      break;
    case 8:
      el.originX = "center";
      el.originY = "bottom";
      el.left = coords.xc;
      el.top = coords.yb;
      el.textAlign = "center";
      break;
    case 9:
      el.originX = "right";
      el.originY = "bottom";
      el.left = coords.xr;
      el.top = coords.yb;
      el.textAlign = "right";
      break;
    default:
      el.originX = "center";
      el.originY = "center";
      el.left = coords.xc;
      el.top = coords.yc;
      el.textAlign = "center";
      break;
  }
  canvas.requestRenderAll();
  console.log("mid-render");
  setTimeout(cb, 1000);
}

function size(el, size) {
  let x;
  switch (size) {
    case "s":
      x = 16;
      break;
    case "m":
      x = 24;
      break;
    case "l":
      x = 30;
      break;
    case "xl":
      x = 48;
      break;
  }
  el.fontSize = x;
  canvas.requestRenderAll();
}

function fit(el) {
  let bounds = el.__charBounds;
  let totalWidth = 0;
  for (let i = 0; i < bounds.length; i++) {
    for (let j = 0; j < bounds[i].length; j++) {
      totalWidth += bounds[i][j].width;
    }
  }
  if (totalWidth < canvas.width - 48) {
    el.width = totalWidth * 1.1;
  } else {
    el.width = canvas.width - 48;
  }
  console.log("hello");
  // canvas.requestRenderAll();
}
