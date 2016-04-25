
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var rectWidth = 1500;
var rectHeight = 750;
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, c.width, c.height);
for (var i = 0; i < 50; i++) {
for(var j = 0; j <= 50; j++) {
ctx.fillStyle = "#FF0000";
if((i + j) % 2 === 0) {
ctx.fillRect((100 * i), (100 * j), 100, 30);
}
}
}
ctx.rotate(Math.PI / 4);
for (var i = 0; i < 50; i++) {
for(var j = 0; j <= 50; j++) {
ctx.fillStyle = "#FF0000";
if((i + j) % 2 === 0) {
ctx.fillRect((-645 + (145 * i)), (-1200 + (50 * j)), 43, 50);
}
}
}
