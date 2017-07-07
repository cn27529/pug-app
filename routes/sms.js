var express = require('express');
var router = express.Router();

var posts = require("../data/posts.json");

//Mockup
var postList = [
  { id: 1, link: "home", name: "單筆簡訊發送" },
  { id: 2, link: "menu1", name: "單筆長簡訊" },
  { id: 3, link: "menu2", name: "多筆簡訊發送" }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  
  res.render('sms', {
    title: '三竹簡訊',
    postList: posts.data2
  });

});

module.exports = router;
