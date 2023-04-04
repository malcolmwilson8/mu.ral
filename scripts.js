// On window load, render canvas
window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

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
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.strokeStyle = "white";

      ctx.lineTo(e.pageX, e.pageY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.pageX, e.pageY);
    }
  }

  // Event Listeners
  canvas.addEventListener("mousedown", startPos);
  canvas.addEventListener("mouseup", stopPos);
  canvas.addEventListener("mousemove", draw);
});
