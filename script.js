//your JS code here. If required.
let wid = document.getElementById('widths')
let heig = document.getElementById('heights')

let width = window.innerWidth;
let height = window.innerHeight;

console.log("Initial window width:", width);
console.log("Initial window height:", height);

wid.innerText = width;
heig.innerText = height

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;

wid.innerText = width;
heig.innerText = height
});
