//2 chiffre
let compare2chiffres = (x,y) => (x>y?x:y);

console.log(compare2chiffres(5,45))

//3 chiffres
let compare3chiffres = (x,y,z) => x>y?(x>z?x:z):(y>z?y:z);

console.log(compare3chiffres(5,45, 89))

//3 chiffres bis

let compare3chiffres_Bis = (x,y,z) => compare2chiffres(x, fct = () =>{y>z?y:z});

console.log(compare3chiffres_Bis(5,45, 102))

//factorielle = 
let factorielle = (x) => {
    let fact = 1;
    for (let i = 2; i <= x; i++) { fact *= i; }
    return fact;
}

console.log(factorielle(15))

//fonction récursive (qui s'appelle elle-même)
function factorielle_Bis(x) {
    if (x === 1) return  1;
    else return x * factorielle_Bis(x - 1);
}

console.log(factorielle_Bis(3))