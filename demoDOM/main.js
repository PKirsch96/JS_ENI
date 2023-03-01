const monCanvas = document.getElementById("monCanvas");
const btnHaut = document.getElementById("btnHaut");
const btnBas = document.getElementById("btnBas");
const btnDroite = document.getElementById("btnDroite");
const btnGauche = document.getElementById("btnGauche");

btnHaut.addEventListener("click", move);
btnBas.addEventListener("click", move);
btnDroite.addEventListener("click", move);
btnGauche.addEventListener("click", move);

document.addEventListener("keypress", move)

monCanvas.width = 1720;
monCanvas.height = 880;

const pas = 10;

function move(evt) {
    ctx.clearRect(oldX, oldY, 32, 32);
    switch (evt.target.id) {
        case "btnHaut" :
            oldY -= pas;
            break;
        case "btnBas" :
            oldY += pas;
            break;
        case "btnDroite" :
            oldX += pas;
            break;
        case "btnGauche" :
            oldX -= pas;
            break;
    }
    ctx.drawImage(vaisseau, oldX, oldY);
}


const ctx = monCanvas.getContext('2d');

let oldX = monCanvas.width / 2 - 16;
let oldY = monCanvas.height / 2 - 16;

let vaisseau = new Image(32, 32)
vaisseau.src = "images/spaceship32x32.png"
vaisseau.onload = () => {
    ctx.drawImage(vaisseau, oldX, oldY)
};






