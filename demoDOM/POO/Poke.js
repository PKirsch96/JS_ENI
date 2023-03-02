
let pokemon = function (nom, numID, taille, poids, type, pdv, attaque1, attaque2) {
    this.nom = nom;
    this.numID = numID;
    this.taille = taille;
    this.poids = poids;
    this.type = type;
    this.pdv = pdv;
    this.attaque1 = attaque1;
    this.attaque2 = attaque2;
    this.afficher = () => {
        console.log(`
        ${nom},
        ${numID},
        ${taille},
        ${poids},
        ${type},
        ${pdv},
        attaque: ${attaque1.nom}, dégats = ${attaque1.degats},
        attaque: ${attaque2.nom}, dégats = ${attaque2.degats},
        `)
    }
}

let pikachu = new pokemon("Pikachu", 25, "0.4 m", "6 kg", "éclaire", 82, {nom: "Statik", degats: 10}, {nom: "Paratonnerre", degats: 25});
pikachu.afficher()



