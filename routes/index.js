var express = require('express');
var router = express.Router();

var userName = "iqbal@gmail.com"
var password = 1234

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});
router.post('/submit',(req,res)=>{
  let data = req.body;
  if(userName === data.email){
    if(password == data.password){
        res.redirect('/')
    }else{
      console.log("Incorrect Pasword")
    }
  }else{
    console.log("Incorrect user");
  }
})

module.exports = router;
