var express = require('express');
const {check, validationResult} = require('express-validator/check')
var router = express.Router();
const startDB = require('../public/javascripts/startingDB.js')
const mongoose = require('mongoose')
const Ad = mongoose.model('Ad')
const filterTags = require('../public/javascripts/filters')
/* GET home page. */
router.get('/', function(req, res, next) {
  Ad.find({}, function(err, values){
    res.render('index', { title: 'Nodepop', values: values });
     })
});

//GET to Return the available tags
router.get('/tags', function(req, res, next) {
  Ad.find({}, function(err){
    if(err){
      console.error('Error:', err)
    }
    res.render('tags', {title: 'Nodepop', tags: ['Work', 'Lifestyle', 'Work', 'Mobile']});
     })
});

//GET to Return the filterd adds

router.get('/filter', (req, res)=>{ 
  
  filterTags.filterQuery(req.query, (err, filteredAds, filterQuery)=>{
    if(err){
      console.error('Error: ', err)
    }
    if (Object.keys(filteredAds).length === 0){
      res.render('emptyFilter', {title: 'Nodepop'})
    }else{
      res.render('filters', {title: 'Nodepop', filtered: filteredAds, query:Object.keys(filterQuery)});
    }
  })  
})

//Post to Add a new ad
router.post('/newadd', [
  check('name', ' minimum lengt is 5').isLength({min: 5}),
  check('intention',' must be Sell or Buy').isIn(['Sell', 'Buy']),
  check('price', ' must be a number between "0" and "1000000"').isFloat({gt:0, lt:1000000}),
  check('tags', 'The allowed Tags are "Motor", "Lifestyle", "Work", "Mobile"').isIn(['Motor', 'Lifestyle', 'Work', 'Mobile'])
], function(req, res){  
  console.log(JSON.stringify(req.body))
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    errors.throw()
  }
  let newAdd = new Ad(req.body)
  newAdd.save(function(err, resp){
    if(err){
      return console.error('Error: ' + err)
    }
    console.log(resp.name, 'saved!!')
    res.send('OK')
  })
  
})

module.exports = router;
