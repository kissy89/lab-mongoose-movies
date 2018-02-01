const express = require("express");
const Celebrity = require('../models/celebrities.js');
const router = express.Router;


router.get("/", function(req, res, next){
    res.send("this will be the perfect product list");
})

// iteration 2
router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(promiData => {
      res.render('celebrities/index', {promiData})
    })
    .catch(err => {
      return next(err);
    })
  });

module.exports = router;