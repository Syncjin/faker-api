var express = require('express');
var router = express.Router();
var path = require('path');
var fakedata = require('../fakedata');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* FAKER API */
router.get('/api/card', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  let count = req.query.count;
  let page = req.query.page;
  let id = req.query.id;
  let data = fakedata.cats;

  setTimeout(() => {
    
    if(id){
      res.send(data[id-1])
    } else if(count !== undefined && page !== undefined){
      count = Number(count);
      page = Number(page);
      console.log('data',count*page, count * (page + 1))
      data = data.slice(count*page, count * (page + 1));
      res.send(data)
    } else if(count !== undefined){
      count = Number(count);
      data = data.slice(0,  count);
      res.send(data)
    } else {
      res.send(data)
    }
  }, 1000); // loading바를 테스트하기 위한 느린 응답
});

router.get('/api/image/:image', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', '/images/', req.params.image));
})

module.exports = router;
