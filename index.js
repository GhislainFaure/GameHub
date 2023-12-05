// on instancie une appliaction express
const express = require("express");
const ejs = require("ejs");
const port = 3000;
const app = express();
const router = require("./router");
const gamesJson = require('./games.json');


let compteurVisites = 0;
app.set("views", "./views");
app.set("view engine", "ejs");

// Je définie une propriété de l'objet locals dans TOUTES les vues
// Toutes les vues pourront manipuler une variable locals.games qui contiendra
// un tableau d'objet, la liste des jeux
app.locals.games = gamesJson;

// les ressources publiques sont rangées dans le dossier public
app.use(express.static("public"));
// MW compteur de visites
app.use((req, res, next) => {
  compteurVisites++;
  console.log(`Le nombre de visiteurs est de ${compteurVisites}`)
  next();
}) 
// MW de journalisation
app.use((req, res, next) => {
  let today = new Date()
  console.log(today);
  next();
  
})
app.use(router);
// MW pour gérer la page 404
app.use((req, res) => {
  res.render('404')
})

app.listen(port, () => {
  console.log(`app is listening to http://localhost:${port}`);
});
