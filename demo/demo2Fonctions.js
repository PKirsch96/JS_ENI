//1-Définition d'une fonction
let nbAppels = 0;
function nomFonction(unParametre, unDeuxiemeParam)
{
    nbAppels++;
    console.log("Appel no " + nbAppels + " de nomFonction")
    console.log('unParametre = ' + unParametre);
    console.log(typeof unParametre);

    console.log('unDeuxiemeParam = ' + unDeuxiemeParam);
    console.log(typeof unDeuxiemeParam);

    return true;
}

//2-Appel de la fonction
//2.1 Avec le nombre de paramètre attendu
nomFonction(42, "bob");
//2.2 avac un nombre de paramètre différent
nomFonction("bob");
nomFonction();
nomFonction(42, "bob", "param qui n'existe pas");

