console.log("Laboratoire prêt !");
const nom = "mohamed";
let age = 17;
const motDePasseAttendu = "secret123";
let motDePasseUtilisateur = "12bb5"; //
if (motDePasseUtilisateur===motDePasseAttendu) {
    console.log("Accès autorisé. Bienvenue !");
} else if (motDePasseUtilisateur.length<8) {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}