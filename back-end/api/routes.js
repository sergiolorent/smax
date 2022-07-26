const express = require('express');
const router = express.Router();
const Api = require('./api');
const api = new Api();

  
// USER ROUTES
router.post('/user/register', api.register);
router.post('/user/login', api.login);
router.post('/user/delete', api.delete);

// SHOP ROUTES
router.get('/shop/getItems', api.getItems);
router.post('/shop/buyItem', api.buyItem);

// GAME ROUTES
router.post('/game/create', api.createGame);
router.post('/game/delete', api.deleteGame);
router.post('/game/publicJoin', api.publicJoin);
router.post('/game/privateJoin', api.privateJoin);
module.exports.router = router;
  
  