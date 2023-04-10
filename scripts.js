// On window load, render canvas
window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  const widthBtn = document.querySelector("#line-width");
  const colourBtn = document.querySelector("#line-colour");
  let lineWidth = 10;

  //   Size canvas programmatically
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  // Variables
  let drawing = false;

  function startPos(e) {
    drawing = true;
    draw(e);
  }

  function stopPos() {
    drawing = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!drawing) {
      return;
    } else {
      ctx.lineCap = "round";
      ctx.strokeStyle = "white";
      ctx.lineWidth = lineWidth;

      let bcr = canvas.getBoundingClientRect();
      let offsetX = bcr.left;
      let offsetY = bcr.top;

      let mouseX = parseInt(e.clientX - offsetX);
      let mouseY = parseInt(e.clientY - offsetY);

      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(mouseX, mouseY);
    }
  }

  function changeWidth() {
    lineWidth = 20;
  }

  // Event Listeners
  canvas.addEventListener("mousedown", startPos);
  canvas.addEventListener("mouseup", stopPos);
  canvas.addEventListener("mousemove", draw);
  widthBtn.addEventListener("click", changeWidth);
});
