
/* 1 - Les commentaires */
console.log("1 - Les commentaires");
// commentaires de fin de ligne
/*
    commentaires sur plusieurs lignes
 */

/* 2 - Déclarer des variables avec le mot clé var */
console.log("");
console.log("2 - Déclarer des variables avec le mot clé var");
/* Avant EcmaScript 2015 ( utilisé sur les versions anciennes des navigateurs ) */

//2.1 La portée est globale ou fonction
    {
        var z = 1;
    }
    z += 1;
    console.log("z = " + z) //affiche 2
    function maFonction(){
        var z = 3;
    }
    console.log("z = " + z) //affiche 2


//2.2 possibilité de redéfinir la même variable
var x = 1;
if (x === 1) {
    var x = 2;  //Redéfinition de la même fonction
    console.log("x=" + x); //affiche 2
}
console.log("x=" + x);  //affiche 2


//3 Déclarer des variables avec let
console.log("");
console.log("3 Déclarer des variables avec let");
// 3.1 une même variable ne peut être redéfini avec let
let y=1;
//let y=2;  //pas possible déjà défini dans la même portée
if(y === 1){
    let y = 2;   //possible car la portée est différente
    console.log("y=" + y); //affiche 2
    let a = 3;
}
console.log("y=" + y); //affiche 1
//console.log("a="+a); //ReferenceError - a n'est pas défini dans cette portée


//4 déclarer des constantes avec const
const b=2;
console.log("b="+b); //affiche 2
//b=3; //TypeError: Assignment to constant variable

//4.1 const a une portée locale
const c=1;
{
    const c=2;
}
console.log("c="+c); //affiche 1

//5 - Notion de typage dynamique
console.log("");
console.log("5 - Notion de typage dynamique");
let d ;
console.log("d = " + typeof d);
d= 1;
console.log("d = " + typeof d);
d = "d la réponse d";
console.log("d = " + typeof d);
d = false;
console.log("d = " + typeof d);
d = null;
console.log("d = " + typeof d);
d = {nom: "bob", age:12};
console.log("d = " + typeof d);

const tab = [1, 2, 3]
console.log(tab)