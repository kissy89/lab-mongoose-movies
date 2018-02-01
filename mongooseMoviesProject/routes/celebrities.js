const express = require("express");
const Celebrity = require('../models/celebrities.js');

const router = express.Router;


// iteration 2
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then(promiData => {
      res.render('celebrities/index', {promiData})
    })
    .catch(err => {
      return next(err);
    })
  });

router.get('/celebrities/show/:id', (req, res, next) => {
  const promiId = req.params.id;
  Celebrity.findById(promiId, (err, promi) => {
    if (err) { return next(err); }
    res.render('celebrities/show', { promi: promi });
  });
});

module.exports = router;