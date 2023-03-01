let monCanvas = document.getElementById("monCanvas")

monCanvas.width = 600;
monCanvas.height = 400;

const ctx = monCanvas.getContext('2d');
//
// ctx.font ="30px Arial";
// ctx.fillStyle ="white";
// ctx.fillText("ENI", 250,200);
// // ctx.strokeText("ENI", 250,200);
// ctx.fillStyle ="red";
// ctx.fillRect(50, 50, 100, 80)

let vaisseau = new Image(32,32)
vaisseau.src = "images/spaceship32x32.png"
vaisseau.onload = () => {ctx.drawImage(vaisseau,20,20)};

let oldX = 20
let oldY = 20
let bouger = (move) => {
    ctx.clearRect(oldX,oldY,32,32);
    switch (move){
        case 0:
            oldX += 32
            ctx.drawImage(vaisseau,oldX,oldY);
            break;
        case 1:
            oldX -= 32
            ctx.drawImage(vaisseau,oldX,oldY);
            break;
        case 2:
            oldY -= 32
            ctx.drawImage(vaisseau,oldX,oldY);
            break;
        case 3:
            oldY += 32
            ctx.drawImage(vaisseau,oldX,oldY);
            break;
    }

}
let droite = () => {
    bouger(0)
}
let gauche = () => {
    bouger(1)
}
let haut = () => {
    bouger(2)
}
let bas = () => {
    bouger(3)
}


document.onkeydown = checkKey;
function checkKey(e) {
    if (e.key === 'ArrowUp') {
        bouger(2);
    }
    else if (e.key === 'ArrowDown') {
        bouger(3);
    }
    else if (e.key === 'ArrowLeft') {
        bouger(1);
    }
    else if (e.key === 'ArrowRight') {
        bouger(0);
    }
}


const listenerActions = [haut, droite, gauche, bas]
let boutoninput = document.getElementsByClassName("btn");
for(let i = 0; i < listenerActions.length; i++){
    boutoninput[i].addEventListener('click', listenerActions[i]);
}







