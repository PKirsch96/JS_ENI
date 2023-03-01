

const monCanvas = document.getElementById("monCanvas");
const btnHaut = document.getElementById("btnHaut");
const btnDroite = document.getElementById("btnDroite");
const btnBas = document.getElementById("btnBas");
const btnGauche = document.getElementById("btnGauche");

btnHaut.addEventListener("click", moveBtn);
btnDroite.addEventListener("click", moveBtn);
btnBas.addEventListener("click", moveBtn);
btnGauche.addEventListener("click", moveBtn);

document.addEventListener("keydown", moveByKeyPress)

//fonction appelée lors d'un click sur un des boutons
function moveBtn(evt){
    //console.dir(evt);
    let direction;
    switch(evt.target.id){
        case 'btnHaut': direction='haut'; break;
        case 'btnDroite': direction='droite'; break;
        case 'btnBas': direction='bas'; break;
        case 'btnGauche': direction='gauche'; break;
    }

    move(direction);
}
//Fonction appelée lors de la pression d'une touche
function moveByKeyPress(evt){
    let direction;
    switch(evt.key){
        case 'ArrowUp':direction='haut'; break;
        case 'ArrowRight':direction='droite'; break;
        case 'ArrowDown':direction='bas'; break;
        case 'ArrowLeft':direction='gauche'; break;
    }
    move(direction);
}

function move(direction){
    //console.dir(evt);
    ctx.clearRect(x, y , 32, 32);
    switch(direction){
        case 'haut': y-=pas; break;
        case 'droite': x+=pas; break;
        case 'bas': y+=pas; break;
        case 'gauche': x-=pas; break;
    }

    ctx.drawImage(vaisseau, x, y);
}


monCanvas.width = 1720;
monCanvas.height = 880;

const ctx = monCanvas.getContext('2d');

let x = monCanvas.width/2 - 16;
let y = monCanvas.height/2 - 16;
const pas = 10;


let vaisseau = new Image(32, 32);
vaisseau.src = "./images/spaceship32x32.png";
vaisseau.onload = ()=>ctx.drawImage(vaisseau, x, y);






