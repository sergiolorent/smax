const express = require('express');
const router = express.Router();
const Api = require('./api');
const api = new Api();

  
// USER ROUTES
router.post('/user/register', api.register);
router.post('/user/login', api.login);
router.post('/user/delete', api.delete);

module.exports.router = router;
  
  