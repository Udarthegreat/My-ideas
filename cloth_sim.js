var c = document.getElementById("cloth_sim");
var ctx = c.getContext("2d");
// Create gradient
var grd = ctx.createLinearGradient(0, 0, 500, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "green");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 600, 300);
//need to get the following to render on top of the gradient
// var grd2 = ctx.createLinearGradient(0, 0, 500, 0);
// grd2.addColorStop(0, "gree");
// grd2.addColorStop(1, "yello");
// // Fill with gradient
// ctx.fillStyle = grd2;
ctx.font = "30px Arial";
ctx.fillText("cloth sim, coming soon", 130, 350);
