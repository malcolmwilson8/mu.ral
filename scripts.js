// On window load, render canvas
window.addEventListener("load", () => {
  // Global variables
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  const widthBtn = document.querySelector("#width-btn");
  const widthSlider = document.querySelector("#width-slider");
  const colourBtn = document.querySelector("#colour-btn");
  const colourPicker = document.querySelector("#colour-picker");
  const saveBtn = document.querySelector("#save-btn");
  let lineWidth = 15;
  let strokeStyle = "white";
  let drawing = false;

  //   Size canvas programmatically
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  // Determine when a user begins drawing, run draw function
  function startPos(e) {
    drawing = true;
    draw(e);
  }

  // Determine when a user stops drawing
  function stopPos() {
    drawing = false;
    ctx.beginPath();
  }

  // Primary draw function
  function draw(e) {
    if (!drawing) {
      return;
    } else {
      ctx.lineCap = "round";
      ctx.strokeStyle = strokeStyle;
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
    lineWidth = widthSlider.value;
  }

  function changeColour() {
    strokeStyle = this.value;
    console.log(strokeStyle);
  }

  // Event Listeners
  canvas.addEventListener("mousedown", startPos);
  canvas.addEventListener("mouseup", stopPos);
  canvas.addEventListener("mousemove", draw);
  colourPicker.addEventListener("change", changeColour, false);
  colourPicker.select();
  colourBtn.addEventListener("click", function () {
    if (colourPicker.style.display == "none") {
      colourPicker.style.display = "block";
    } else {
      colourPicker.style.display = "none";
    }
  });
  saveBtn.addEventListener("click", function () {
    const image = canvas.toDataURL("image/png");
    const element = document.createElement("a");
    const filename = "mymu.ral.png";
    element.setAttribute("href", image);
    element.setAttribute("download", filename);
    element.click();
  });
  widthSlider.addEventListener("change", changeWidth);
  widthBtn.addEventListener("click", function () {
    if (widthSlider.style.display == "none") {
      widthSlider.style.display = "block";
    } else {
      widthSlider.style.display = "none";
    }
  });
});
