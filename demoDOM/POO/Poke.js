
let pokemon = function (nom, numID, taille, poids, type, pdv, attaque1, attaque2) {
    this.nom = nom;
    this.numID = numID;
    this.taille = taille;
    this.poids = poids;
    this.type = type;
    this.pdv = pdv;
    this.attaque1 = attaque1;
    this.attaque2 = attaque2;
    this.etat = true;
    this.afficher = () => {
        console.log(`
        nom: ${this.nom},
        ID: #${this.numID},
        Taille: ${this.taille} m,
        Poids: ${this.poids} kg,
        Type: ${this.type},
        Points de vie: \u2661 ${this.pdv},
        Attaque: ${this.attaque1.nom}, dégats = ${this.attaque1.degats} \ud83d\uddf2,
        Attaque: ${this.attaque2.nom}, dégats = ${this.attaque2.degats} \ud83d\uddf2,
        `)
    }
    let pdv20 = this.pdv * 0.2;
    this.attack = (adversaire) =>{
        if(this.pdv < pdv20){
            adversaire.pdv -= this.attaque2.degats;
        }else{
            adversaire.pdv -= this.attaque1.degats;
        }
    }
}

let combat = (adversaire1 , adversaire2) =>{
    pikachu.afficher()
    evoli.afficher()
    while(adversaire1.pdv > 0 && adversaire2.pdv > 0){
        adversaire1.attack(adversaire2)
        adversaire2.attack(adversaire1)
        pikachu.afficher()
        evoli.afficher()
    }

}


let pikachu = new pokemon("Pikachu", 25, 0.4, 6, "éclectrique", 82, {nom: "Statik", degats: 10}, {nom: "Paratonnerre", degats: 25});
let evoli = new pokemon("Evoli", 133, 0.3, 6.5, "normal", 70, {nom: "adaptabilité", degats: 9}, {nom: "anticipation", degats: 15});



combat(pikachu, evoli)
