var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
  console.log('get /user route');
  // check if logged in
  if(req.isAuthenticated()) {
    // send back user object from database
    console.log('logged in');
    res.send(req.user);
  } else {
    // failure best handled on the server. do redirect here.
    console.log('not logged in');
    // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
    res.send(false);
  }
});

// clear all server session information about this user
router.get('/logout', function(req, res) {
  // Use passport's built-in method to log out the user
  console.log('Logged out');
  req.logOut();
  res.sendStatus(200);
});

router.post('/', function(req,res){
  var newItem = new itemModel.items(req.body);
  console.log('newItem ->', newItem);

  newItem.save(function(err) {
    console.log('This item sucks!!! errrrrrr');
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('successful Item created');
      res.sendStatus(201);
    }
  });
})


module.exports = router;
