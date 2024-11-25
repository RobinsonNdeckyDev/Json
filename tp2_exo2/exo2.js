// Déclaration d'une variable JSON Etudiant
let etudiant = {
    nom: "Nguer",
    prenom: "Dame",
    notes: {
        algo: 10,
        html: 15,
        php: 17,
        mysql: 16,
        anglais: 12
    }
};


// Affichage etudiant
function afficherEtu() {
    console.log(`${etudiant.prenom} ${etudiant.nom} : Algo : ${etudiant.notes.algo}, html : ${etudiant.notes.html}, php : ${etudiant.notes.php}, Mysql : ${etudiant.notes.mysql}, Anglais : ${etudiant.notes.anglais}`);
}
afficherEtu();


// Chercher Note
function chercherNote(noteRecherchee) {
    for (let matiere in etudiant.notes) {
        // Si la note de la matiere est egale a la note recherchee
        if (etudiant.notes[matiere] === noteRecherchee) {
            console.log(`Matière : ${matiere}`);
        }
    }
}
chercherNote(15); 


// Supprimer note
function supprimerNote(matiereASupprimer) {
    // Suppression de la matiere de l'etudiant
    delete etudiant.notes[matiereASupprimer];

    // Affichage de l'etudiant apres suppression de la matiere
    console.log(etudiant);
}
supprimerNote("php"); // Exemple

