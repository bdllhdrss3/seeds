
const express = require('express');
const router = express.Router();
const Seed = require("../models/seed")


//controllers
const addSeed = require("./controllers/addSeed").addSeed

//Routes
router.post("/addSeed", addSeed);

router.get('/', async(req, res) => {
  Seed.find({}).then((seeds)=>{
      res.send(seeds);
      })

});


module.exports = router;