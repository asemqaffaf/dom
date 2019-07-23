function initGrid() {
  // collect colors in an array
  var colors = [];
  var range = ["00", "33", "66", "99", "cc", "ff"];

  for (var r = 0; r < range.length; r++) {
    for (var g = 0; g < range.length; g++) {
      for (var b = 0; b < range.length; b++) {
        colors.push("#" + range[r] + range[g] + range[b]);
      }
    }
  }
  var mainDiv = document.getElementById("colors");
  //   mainDiv.onclick = colorPicker2("colors[i]");

  for (let i = 0; i < colors.length; i++) {
    var innerDiv = document.createElement("div");
    innerDiv.style.backgroundColor = colors[i];
    innerDiv.className = "choice";
    innerDiv.addEventListener("click", colorPicker2);
    mainDiv.appendChild(innerDiv);
  }
}
function colorPicker2() {
  var color = this.style.backgroundColor;
  var mainSelected = document.getElementById("selected");
  mainSelected.style.backgroundColor = color;
  mainSelected.innerHTML = color;
  //   console.log(color);
}
window.onload = function() {
  initGrid();
};
