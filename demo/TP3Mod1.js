let phrase = "Ceci est une PHRASE";
let phrase_Min = phrase.toLowerCase().replaceAll(' ', '');
let voyelle = "aeiouy"
let count = 0;

for (let pas = 0; pas < voyelle.length; pas++) {
    for (let i = 0; i < phrase_Min.length; i++) {
        if (phrase_Min[i] === voyelle[pas]) {
            count += 1;
        }
    }
    if (count > 0) console.log(voyelle[pas] + " : " + count);
    count = 0;
}
const reduceCountToVowels = (str) => {
    const map = new Map()
    str.split('').filter(x => x.match(/[aeiouy]/g)).forEach(x => map.set(x, map.get(x) ? map.get(x) + 1 : 1))
    return map
}
console.log(reduceCountToVowels(phrase_Min))


// 2 - Faire un programme qui trouve le(s) mot(s) le(s) plus long(s) dans une phrase
//
// Exemple: "Javascript est un langage formidable"
// doit afficher :
//     Mot(s) le(s) plus long(s) : Javascript, formidable

let JS = "Javascript est un langage formidable";
let tabMots = JS.split(" ");
let i, mots=[], max=0;
for(i=0; i<tabMots.length; i++){
    if(tabMots[i].length === max){
        mots.push(tabMots[i]) ;
    }else if(tabMots[i].length > max){
        mots = [];
        mots.push(tabMots[i]);
        max = tabMots[i].length;
    }
}
console.log("Mot(s) le(s) plus long(s) : " + mots.join(", "));

