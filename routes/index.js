var express = require('express');
var router = express.Router();

let login={
  useName:"iqbal@gmail.com",
  passwor:"1234"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  let email = req.session.email;
    res.render('index', { title: 'Login',email});
});
router.get('/login',(req,res,next)=>{
  if(req.session.loggedIn){
    res.redirect('/')
  }else{
    res.render('login',{"passwordnErr":req.session.passwordnErr,"emailErr":req.session.emailErr})
    req.session.passwordnErr=false;
    req.session.emailErr=false;

  }
});
router.post('/submit',(req,res)=>{
  let data = req.body;
    if(data.email === login.useName){
      if(data.password === login.passwor){
        req.session.loggedIn = true;
        req.session.email = data.email;
        res.redirect('/');
      }else{
        req.session.passwordnErr=true;
        res.redirect('/login');
      }

    }else{
      req.session.emailErr=true;
        res.redirect('/login');
    }
})
router.get('/logout',(req,res)=>{
  req.session.destroy();
  res.redirect('/')
})

module.exports = router;
