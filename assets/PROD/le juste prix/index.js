// ici j'utilise const car ce sont des variables qui resteront inchangées
const nomObjet = [
    " un gamepad",
    " une souris",
    " un ecran",
    "un tapis",
    " un souffleur",
];

const imageObjet = [
    "gamepad.png",
    "souris.png",
    "ecran.png",
    "tapis.png",
    "souffleur.png",
];

// par contre l'utilisation de "let" ici est indispensable puisque le but est de faire évoluer les variables selon les conditions définies dans les functions
let prixProp;
let prixAdeviner;
let nbrAuhasard;
let comptEssai;
let image = document.getElementById("objet");
let nomImage = document.getElementById("nom-objet");
let bouton = document.getElementById("bouton");
let message = document.getElementById("message");

let afficheEssai = document.getElementById("nbr-tente");

// la méthode "math.floor" permet de retourner une valeur plus basse
//"math.random" permet de renvoyer un nombre aléatoir

function generateChiffre(valeurMaxi) {
    return Math.floor(Math.random() * Math.floor(valeurMaxi));
}
prixAdeviner = generateChiffre(100) + 1;
nbrAuhasard = generateChiffre(5);

function afficheImage(valeur) {
    return (
        '<img src="/images/' +
        valeur +
        '" class="img-fluid" color=#FFFFF0 width="30%" alt="Responsive image">'
    );
}
image.innerHTML = afficheImage(imageObjet[nbrAuhasard]);
nomImage.innerHTML = nomObjet[nbrAuhasard];
comptEssai = 10;
afficheEssai.innerHTML = "il vous reste" + comptEssai + "tentatives...";

function verifierProposition() {
    prixProp = document.getElementById("prix-Prop").value;
    if (comptEssai == 0) {
        afficheEssai.innerHTML = "il vous reste" + comptEssai + "tentatives...";
        message.innerHTML =
            "ben non c'est pas ça!<br> le juste prix c'est : " +
            prixAdeviner +
            " euros";
        bouton.disabled = true;
    } else {
        if (prixProp > prixAdeviner) {
            message.innerHTML = "c'est moins !";
            comptEssai--;
            afficheEssai.innerHTML =
                "il vous reste : " + comptEssai + " x tentatives...";
        }
        if (prixProp < prixAdeviner) {
            message.innerHTML = "c'est plus !";
            comptEssai--;
            afficheEssai.innerHTML =
                "il vous reste : " + comptEssai + " x tentatives...";
        }
        if (prixProp == prixAdeviner) {
            message.innerHTML = "T'es trop fort, t'as gagné!!!";
            afficheEssai.innerHTML = "En " + comptEssai + " x tentatives...";
            bouton.disabled = true;
        }
    }
}
bouton.addEventListener("click", verifierProposition, false);