var express = require('express'),
    Lanking = require('../models/lanking');
var router = express.Router();

/*
var counts = [{
  id: 'pjw921116@naver.com',
  time:"12시",
  score: 10,

}, {
  id: 'pjw921116@naver.com',
  time:"12시",
  score: 20,

}, {
  id: 'pjw921116@naver.com',
  time:"11시",
  score: 40,
}];
*/

/* GET users listing. */

router.get('/',function(req, res, next){
  //res.render('count',counts)
  //res.json(counts);

  Count.find({},function(err,counts){
    if(err){
      return next(err);
    }
    res.render('count',{counts: counts});
  });


});

router.get('/:id',function(req, res){
  var count = counts[req.params.id]; // counts[0]
  res.json(count);
});

router.post('/',function(req, res){
  /*
  console.log(req.body);
   counts.push(req.body);
   res.json(req.body);
*/

  var newLanking = new Lanking({
    id: req.body.id,
    time: req.body.time,
    score: req.body.score,
  });

  newLanking.save(function(err){
    if(err){
      return next(err);
    }else{
      res.json(req.body);
    }
  });


});

router.put('/:id',function(req, res){
  var count = req.body;
  var countToEdit = counts[req.params.id];
  countToEdit = count;
  counts.push(countToEdit);
  res.json(countToEdit);
});

router.delete('/:id',function(req, res){
  counts.splice(1,req.params.id);
  res.json(count)
});

module.exports = router;
