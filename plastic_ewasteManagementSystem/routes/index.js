var express = require('express');
var router = express.Router();
const connection = require('../database/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'EWaste Management System' });
});


/* GET About US. */
router.get('/aboutus', function(req, res, next) {
  res.render('about', { title: 'EWaste Management System' });
});


/* GET Contact Us. */
router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'EWaste Management System' });
});

/* GET AdminHomepage */

router.get('/admin',function(req,res,next){
  res.render("adminhomepage",{title: 'Adminstrator Page'})
})

//-----------------Customer Registeration-------------


router.get('/customerregister',(req,res,next)=>
{
  res.render("customerregisteration");
});

router.post('/adddata',(req,res)=>
{
  connection.query("insert into Customer set ?" ,[req.body],()=>{     
     console.log("data stored in database")
   

})
  connection.query("update Customer set status = 'Not approved' where cid = ?",[req.body.cid],()=>{ 

   })
  console.log("data added to the database");
 
})


module.exports = router;