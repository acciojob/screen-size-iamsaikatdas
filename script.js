//your JS code here. If required.
let widths = document.getElementById('widths')
let heights = document.getElementById('heights')

let width = window.innerWidth;
let height = window.innerHeight;

widths.innerText += (width)
console.log("Initial window height:", height

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  
  console.log("New window width:", width);
  console.log("New window height:", height);
});
