const btn = document.getElementById("btn")
const listeAPuces = document.getElementById("liste")

btn.addEventListener("click", showOnlisteAPuces)

function showOnlisteAPuces(){
    let text = document.getElementById("savoir").value;
    let auteur = document.getElementById("auteur").value;
    let Date = document.getElementById("Date").value;
    let ligne = document.createElement("li");

    ligne.innerHTML = `<h1>${text} </h1> \nPar ${auteur}, le ${Date}` ;

    //listeAPuces = <ol>
    listeAPuces.appendChild(ligne);

    ligne.addEventListener("click", (event)=>{
        if(confirm(`Supprimer ${text} ?`)){
        event.currentTarget.remove();}
    })
}
 