//alors oui j'ai trouvé cette méthode sur le net aprés des heures et des heures de comparatifs et d'essais et j'ai trouvé cette approche intéréssante dans la mesure ou l'on fait des économies de tables dans le html//

let finished = false;
let colorChosen = [];
let history = [];
const historyEl = document.querySelector(".history");
const currentSelectionEl = document.querySelector(".current-selection");
const colors = ["orange", "blue", "yellow", "red", "purple"];
let guesses = 0;
const final = randomFinal();

// ici le but est de présenter un tableau horyzontal grâce à des variables qui se déclarent dans les fonctions
function randomFinal() {
    const newFinal = [...new Array(5)].map((f) => {
        const random = Math.floor(Math.random() * Math.floor(colors.length));
        return colors[random];
    });
    return newFinal;
}

function selectColor(color) {
    colorChosen.push(color);

    const current = document.createElement("div");
    current.classList.add("item");
    current.classList.add(color);

    currentSelectionEl.appendChild(current);

    if (colorChosen.length === 5) {
        history.push(colorChosen);
        currentSelectionEl.innerHTML = "";

        //on va créer directement le resultat grâce à "hystory"
        const historyItem = document.createElement("div");
        historyItem.classList.add("history-item");
        for (const chosen of colorChosen) {
            const el = document.createElement("div");
            el.classList.add("item");
            el.classList.add(chosen);
            historyItem.appendChild(el);
        }
        historyItem.appendChild(document.createElement("hr"));

        //les pastilles banches et noires donnent un indice
        const hints = calculateHints(colorChosen);

        for (const hint of hints) {
            const el = document.createElement("div");
            el.classList.add("item");
            if (hint === "full") {
                el.classList.add("full");
            } else {
                el.classList.add("half");
            }
            historyItem.appendChild(el);
        }
        historyEl.appendChild(historyItem);
        guesses++;

        colorChosen.length = 0;
        if (
            hints.length === final.length &&
            hints.every((hint) => hint === "full")
        ) {
            window.alert("BRAVO c'est réussi ! ");
        } else if (guesses > 7) {
            window.alert("Pas bon, recommencez ! ");
        }
    }
}

//utilisation de la méthode "push" pour ajouter de nouveaux éléments au tableau.
//"foreach" apelle une fonction pour chaque éléments (sauf si l'élément est vide, ce qui n'est pas le cas ici)

function calculateHints(colors) {
    const hints = [];
    const dublicateCheck = [];

    colors.forEach((color, index) => {
        if (final[index] === color) {
            hints.push("full");
            dublicateCheck.push(color);
        }
    });

    colors.forEach((color, index) => {
        if (!dublicateCheck.includes(color) && final.includes(color)) {
            hints.push("half");
        }
    });

    return hints;
}
// il n'y a pas de boutons, ni de validation, puisque la réponse dépend du nombre de tentatives.

const buttons = document.querySelectorAll(".item");
for (let button of buttons) {
    const color = button.classList[1];
    button.addEventListener("click", () => selectColor(color));
}