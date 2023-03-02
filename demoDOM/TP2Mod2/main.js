const btn = document.getElementById("btn")
const aConvertir= document.getElementById("nombre")
const reponse = document.getElementById("reponse")
let devise1 = document.getElementById("devise1")
let devise2 = document.getElementById("devise2")

btn.addEventListener("click", showReponse)

//Je converti d'abord en euro avec cette hashmap
let euro = new Map([
    ['DOLLAR', 0.94],
    ['YEN', 0.0069],
    ['LIVRE', 1.13],
    ['EURO', 1]
]);

//puis dans la devise demandé avec cette hashmap
let conv = new Map([
    ['DOLLAR', 1.07],
    ['YEN', 145.19],
    ['LIVRE', 0.89],
    ['EURO', 1]
]);

//je rempli mes listes déroulante
for (let element of euro.keys()) {
    let createOpt = (mot) =>{
        let opt = document.createElement("option")
        opt.setAttribute('value', mot)
        opt.textContent = mot;
        return opt;
    }
    devise1.appendChild(createOpt(element));
    devise2.appendChild(createOpt(element));
}

//Je converti d'abord en euro, puis dans la devise demandé
function showReponse() {
    //devise1.value() = le nom de la devise (exp : "DOLLAR")
    // car pour chercher une valeur dans mes map j'en ai besoin (par exemple : euro.get("DOLLAR") vas retourner la valeur associé qui est de 0.94)
    let enEuro =  (euro.get(devise1.value) * aConvertir.value);
    let valeurFinal = (enEuro * conv.get(devise2.value)).toFixed(2);

    //J'affiche la valeur à convertir et sa devise, puis la valeur convertie et sa nouvelle valeur.
    reponse.innerHTML = `<p>${aConvertir.value} ${devise1.value.toLowerCase()}(s) est égale à : ${String(valeurFinal)} ${devise2.value.toLowerCase()}(s)</p>`;
}

