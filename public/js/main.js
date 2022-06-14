let reponsePersoClass = [
  "Homme de la foret",
  "Femme de la foret",
  "Truc de la foret",
  "Homme du desert",
  "Femme du desert",
  "Truc du desert",
  "Homme de l'ocean",
  "Femme de l'ocean",
  "Truc de l'ocean",
];
let reponseGlobal = [
  "question1Forest",
  "question1Ocean",
  "question1Desert",
  "question2Homme",
  "question2Femme",
  "question2Truc",
];
console.log(reponseGlobal);
let reponseQuestionNumber = ["1", "2", "3"];

console.log(reponsePersoClass);
//question 1
function question1(answer) {
  answer = prompt("Votre choix : (n°)");
  if (answer === reponseQuestionNumber[0]) {
    alert("La foret ! Bon choix !");
    reponseGlobal = "[0]";
    localStorage.setItem("reponse1", reponseGlobal);

    window.open("../html/formPages/homme.html", "_self");
  } else if (answer === reponseQuestionNumber[1]) {
    alert("L'ocean ! Bloub !");
    window.open("../html/formPages/homme.html", "_self");
    reponseGlobal = "[1]";
    localStorage.setItem("reponse2", reponseGlobal);
  } else if (answer === reponseQuestionNumber[2]) {
    alert("Le desert ! Ouf quelle chaleur !");
    window.open("../html/formPages/homme.html", "_self");
    reponseGlobal = "[2]";
    localStorage.setItem("reponse3", reponseGlobal);
  } else {
    alert("Heuuuuu! Je n'ai pas compris !");
  }
}
//question 2
function question2(answer) {
  answer = prompt("Votre choix : (n°)");
  if (answer === reponseQuestionNumber[0]) {
    alert("Oki");
    reponseGlobal = "[3]";
    localStorage.setItem("reponse4", reponseGlobal);
    window.open("../formPages/final.html", "_self");
  } else if (answer === reponseQuestionNumber[1]) {
    alert("Oki");
    reponseGlobal = "[4]";
    localStorage.setItem("reponse5", reponseGlobal);
    window.open("../formPages/final.html", "_self");
  } else if (answer === reponseQuestionNumber[2]) {
    alert("Oki");
    reponseGlobal = "[5]";
    localStorage.setItem("reponse6", reponseGlobal);
    window.open("../formPages/final.html", "_self");
  } else {
    alert("Heuuuuu! Je n'ai pas compris !");
  }
}

//final code

function reponseFinal(answer) {
  if (
    localStorage.getItem("reponse1") === "[0]" &&
    localStorage.getItem("reponse4") === "[3]"
  ) {
    alert("Vous êtes un " + " " + reponsePersoClass[0]);
    window.localStorage.clear();
  } else if (
    localStorage.getItem("reponse1") === "[0]" &&
    localStorage.getItem("reponse5") === "[4]"
  ) {
    alert("Vous êtes un " + " " + reponsePersoClass[1]);
    window.localStorage.clear();
  } else if (
    localStorage.getItem("reponse1") === "[0]" &&
    localStorage.getItem("reponse6") === "[5]"
  ) {
    alert("Vous êtes un " + " " + reponsePersoClass[2]);
    window.localStorage.clear();
  } else if (
    localStorage.getItem("reponse2") === "[1]" &&
    localStorage.getItem("reponse4") === "[3]"
  ) {
    alert("Vous êtes un " + " " + reponsePersoClass[3]);
    window.localStorage.clear();
  } else if (
    localStorage.getItem("reponse2") === "[1]" &&
    localStorage.getItem("reponse5") === "[4]"
  ) {
    alert("Vous êtes un " + " " + reponsePersoClass[4]);
    window.localStorage.clear();
  } else if (
    localStorage.getItem("reponse2") === "[1]" &&
    localStorage.getItem("reponse6") === "[5]"
  ) {
    alert("Vous êtes un " + " " + reponsePersoClass[5]);
    window.localStorage.clear();
  } else if (
    localStorage.getItem("reponse3") === "[2]" &&
    localStorage.getItem("reponse4") === "[3]"
  ) {
    alert("Vous êtes un " + " " + reponsePersoClass[6]);
    window.localStorage.clear();
  } else if (
    localStorage.getItem("reponse3") === "[2]" &&
    localStorage.getItem("reponse5") === "[4]"
  ) {
    alert("Vous êtes un " + " " + reponsePersoClass[7]);
    window.localStorage.clear();
  } else if (
    localStorage.getItem("reponse3") === "[2]" &&
    localStorage.getItem("reponse6") === "[5]"
  ) {
    alert("Vous êtes un " + " " + reponsePersoClass[8]);
    window.localStorage.clear();
  } else {
    alert("Heuuuuu! Je n'ai pas compris !");
  }
}
