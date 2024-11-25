// Objet nommé personne
let personne = {
    nom: "Sene",
    prenom: "Saliou",
    age: 30
};


// Affichage des valeurs des variables
console.log(personne.nom);
console.log(personne.prenom);
console.log(personne.age);


// Affichage des valeurs des variables en utilisant la notaion avec crochets
console.log(personne["nom"]);
console.log(personne["prenom"]);
console.log(personne["age"]);

// Modification de la valeur du prenom
personne.prenom = "Salim";
console.log(personne.prenom);   

// Modifier la valeur du prénom en saisissant une nouvelle valeur en utilisant window.prompt
personne.prenom = window.prompt("Entrez votre prenom");
console.log(personne.prenom);

// Affichage des properties de l'objet personne en utilisant la boucle for in
for (let property in personne) {
    console.log(property + ": " + personne[property]);
}