//déclaration de variables

let emailS;
let emailSC;
let arobase;
let message = document.getElementById("message");

// déclation de la fonction qui va observer la saisie de l'utilisateur

function presenceAro() {
    emailS = document.getElementById("email").value;

    // "includes" nous permet de spécifier les valeur attendues
    // "indexOf" renvoie l'occurence d'une valeur dans la chaine de characteres
    //"substring" permet d'extraire un caractére attendu entre 2 positions

    if (emailS.includes("@") && emailS.includes(".")) {
        arobase = emailS.indexOf("@");
        emailSC = emailS.substring(arobase);

        //innerHTML est une propriété définie qui renvoie du contenu (ici sous forme de message à l'utilisateur)

        if (emailSC.includes(".")) {
            message.innerHTML =
                '<div class="text-success">Votre adresse mail est valide !</div>';
        } else {
            message.innerHTML =
                '<div class="text-danger">Votre adresse mail est INVALIDE !</div>';
        }
    } else {
        message.innerHTML =
            '<div class="text-danger">Votre adresse mail est INVALIDE !</div>';
    }
}
//selon le résultat de la fonction , le message affiche la réponse évoquée dans le message.innerhtml
document
    .getElementById("email")
    .addEventListener("keydown", presenceAro, false);