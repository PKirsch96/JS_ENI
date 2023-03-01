let x = "une chaine avec des lettres dans un certain ordre pour donner du sens"

let y = x.replaceAll(' ', '').split('').sort().join("")

console.log(y)


let phrase = "une phrase sans majuscule";

let tab = phrase.split(' ')


for (let i = 0; i < tab.length; i++){
    tab[i] =tab[i].charAt(0).toUpperCase() + tab[i].substring(1);
}

let result = tab.join(" ")

console.log(result)