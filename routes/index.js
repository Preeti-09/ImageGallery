var express    = require('express'),
	bodyParser = require('body-parser'),
	router     = express.Router();

router.get('/',function(req,res){
    res.render('../views/index.ejs');
});

router.get('/head',function(req,res){
    res.render('../views/head.ejs');
});

router.get('/ishu',function(req,res){
    res.render('../views/ishu.ejs');
});

router.get('/sudha',function(req,res){
    res.render('../views/sudha.ejs');
});

router.get('/jatin',function(req,res){
    res.render('../views/jatin.ejs');
});

router.get('/rishi',function(req,res){
    res.render('../views/rishi.ejs');
});
router.get('/about',function(req,res){
    res.render('../views/about.ejs')
})

module.exports = router ; 