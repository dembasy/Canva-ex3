var c = document.getElementById('mon_canvas');
var ctx = c.getContext('2d');

//Couleur du toit de la voiture
ctx.beginPath();
ctx.fillStyle = '#00A552';

//Toit de la voiture
ctx.fillRect(100, 60, 200, 80);
ctx.closePath();
ctx.stroke();

//Couleur de la carrosserie de la voiture
ctx.fillStyle = '#00A552';

//Carrosserie de la voiture
ctx.fillRect(25, 125, 350, 75);
ctx.beginPath();

//Roue n°2 de la voiture
ctx.arc(100, 250, 50, 0, Math.PI * 2, true);
ctx.fillStyle = '#CDCDCD';
ctx.fill();
ctx.stroke();
ctx.beginPath();

//Roue de la voiture
ctx.arc(300, 250, 50, 0, Math.PI * 2, true);
ctx.fillStyle = '#CDCDCD';
ctx.fill();
ctx.stroke();
