const monCanvas = document.getElementById("monCanvas");
const btnHaut = document.getElementById("btnHaut");
const btnBas = document.getElementById("btnBas");
const btnDroite = document.getElementById("btnDroite");
const btnGauche = document.getElementById("btnGauche");

btnHaut.addEventListener("click", move);
btnBas.addEventListener("click", move);
btnDroite.addEventListener("click", move);
btnGauche.addEventListener("click", move);

document.addEventListener("keypress", moveBtn)

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

function moveBtn(e) {
    if (e.key === 'ArrowUp') {
        move("btnHaut")
    }
    else if (e.key === 'ArrowDown') {
        move("btnBas")
    }
    else if (e.key === 'ArrowLeft') {
        move("btnGauche")
    }
    else if (e.key === 'ArrowRight') {
        move("btnDroite")
    }
}


const ctx = monCanvas.getContext('2d');

let oldX = monCanvas.width / 2 - 16;
let oldY = monCanvas.height / 2 - 16;

let vaisseau = new Image(32, 32)
vaisseau.src = "images/spaceship32x32.png"
vaisseau.onload = () => {
    ctx.drawImage(vaisseau, oldX, oldY)
};


// let bouger = (move) => {
//     ctx.clearRect(oldX,oldY,32,32);
//     switch (move){
//         case 0:
//             oldX += 32
//             ctx.drawImage(vaisseau,oldX,oldY);
//             break;
//         case 1:
//             oldX -= 32
//             ctx.drawImage(vaisseau,oldX,oldY);
//             break;
//         case 2:
//             oldY -= 32
//             ctx.drawImage(vaisseau,oldX,oldY);
//             break;
//         case 3:
//             oldY += 32
//             ctx.drawImage(vaisseau,oldX,oldY);
//             break;
//     }
//
// }
// let droite = () => {
//     bouger(0)
// }
// let gauche = () => {
//     bouger(1)
// }
// let haut = () => {
//     bouger(2)
// }
// let bas = () => {
//     bouger(3)
// }
//



// const listenerActions = [haut, droite, gauche, bas]
// let boutoninput = document.getElementsByClassName("btn");
// for(let i = 0; i < listenerActions.length; i++){
//     boutoninput[i].addEventListener('click', listenerActions[i]);
// }







