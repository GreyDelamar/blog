'use strict'

const express = require('express');
let router = express.Router();
const pg = require('../db/knex_config.js');

router.post('/v1/items',(req, res, next) => {
  //console.log(pg)
  pg('post').insert(req.body)
  .then(() =>{
    res.redirect('/')
  })
  .catch((err)=>{
    console.log('there was an error')
    next(err)
  })
});

router.get('/v1/items/delete/:id', (req, res, next) => {
  pg('post').where('id', req.params.id).del()
  .then(()=>{
    res.redirect('/')
  })
  .catch((err) => {
  console.error("error deleting from db");
  next(err);
  });
});

module.exports = router;
