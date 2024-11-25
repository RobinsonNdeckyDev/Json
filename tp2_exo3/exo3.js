// Déclaration d'une variable JSON Etudiant
let etudiant = {
    nom: "Nguer",
    prenom: "Dame",
    notes: [10, 15, 17, 16, 12, 14, 13, 19, 8, 11]
};

// Affichage etudiant
function afficherEtu() {
    console.log(`${etudiant.prenom} ${etudiant.nom} : ${etudiant.notes.join(", ")}`);
}
afficherEtu();


// Moyenne des notes
function moyenneNote() {
    // Calcul de la moyenne des notes de l'etudiant 
    let total = etudiant.notes.reduce((acc, note) => acc + note, 0);

    // Affichage de la moyenne des notes de l'etudiant
    let moyenne = total / etudiant.notes.length;

    // Affichage de la moyenne des notes de l'etudiant 
    console.log(`Moyenne des notes : ${moyenne.toFixed(2)}`);
}
moyenneNote();


// Suppression d'une note
function supprimerNote(noteASupprimer) {
    // Suppression de la note de l'etudiant 
    etudiant.notes = etudiant.notes.filter(note => note !== noteASupprimer);

    // Affichage de l'etudiant apres suppression de la note
    console.log(`${etudiant.prenom} ${etudiant.nom} : ${etudiant.notes.join(", ")}`);
}
supprimerNote(15); // Exemple
