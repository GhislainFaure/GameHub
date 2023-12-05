const express = require("express");
const router = express.Router();
const gamesJson = require('./games.json');


router.get("/", (req, res) => {
  res.render("index.ejs",);
});

// on filtre sur le tableau pour recuperer le jeu 


router.get("/game/:game", (req, res) => {
const gameSelected = req.params.game;

const foundGame = gamesJson.find((game) => game.name === gameSelected )
console.log(foundGame);
if (foundGame){
  res.render(foundGame.name, {cssSuplementaire: foundGame.cssFile})
}
else {
  next();
}


// router.get("/game/diceRoller", (req, res) => {
//   res.render("diceRoller", {cssSuplementaire: '/css/diceRoller.css'});
// });

});








module.exports = router;
