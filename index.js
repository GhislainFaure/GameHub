// on instancie une appliaction express
const express = require("express");
const ejs = require("ejs");
const port = 3000;
const app = express();
const router = require("./router");



app.set("views", "./views");
app.set("view engine", "ejs");
// les ressources publiques sont rangées dans le dossier public
app.use(express.static("public"));

app.use(router);

app.listen(port, () => {
  console.log(`app is listening to http://localhost:${port}`);
});
