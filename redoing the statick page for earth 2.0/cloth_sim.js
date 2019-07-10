var c = document.getElementById("cloth_sim");
var ctx = c.getContext("2d");
// Create gradient
var grd = ctx.createLinearGradient(0, 0, 500, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 600, 300);
//need to get the following to render on top of the gradient
ctx.font = "30px Arial";
ctx.fillText("Hello World", 200, 350);
