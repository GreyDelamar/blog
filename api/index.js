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

router.get('/v1/items/edit/:id',(req, res, next) => {
  res.render('/edit/')
});

// router.put('/v1/items/edit/:id', function(req,res){
//   pg('post').where('id', req.params.id).update(req.body)
//   .then(() =>{
//     res.redirect('/')
//   })
//   .catch((err)=>{
//     console.log('there was an error')
//     next(err)
//   })
// });
// exports.edit = function(req, res){
//
//   var id = req.params.id;
//
//   req.getConnection(function(err,connection){
//
//      connection.query('SELECT * FROM customer WHERE id = ?',[id],function(err,rows)
//         {
//
//             if(err)
//                 console.log("Error Selecting : %s ",err );
//
//             res.render('edit_customer',{page_title:"Edit Customers - Node.js",data:rows});
//
//          });
//
//     });
// };

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
