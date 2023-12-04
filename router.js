const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.render("index.ejs");
});
router.get("/game/diceRoller", (req, res) => {
  res.render("diceRoller", {cssSuplementaire: '/css/diceRoller.css'});
});
router.get("/game/fourchette", (req, res) => {
  res.render("fourchette");
});

module.exports = router;
