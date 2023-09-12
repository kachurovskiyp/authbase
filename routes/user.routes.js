const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
    if(!req.user){
      res.redirect('http://localhost:8000/user/no-permission');
    } else {
      next();
    }
  };

router.get('/profile/settings', isLogged, (req, res) => {
    res.render('profile-settings');
});

router.get('/profile', isLogged, (req, res) => {
    res.render('profile');
});

router.get('/logged', isLogged, (req, res) => {
    res.render('logged', {
        name: req.user.displayName, 
        photo: req.user.photos[0].value
    });
});

router.get('/no-permission', (req, res) => {
    res.render('noPermission');
});

module.exports = router;