const userDAO = require("../DAO/userDAO");
const shopDAO = require("../DAO/shopDAO");
const gameDAO = require("../DAO/gameDAO");

module.exports = class Api{

    //USER API CALLS

    register(req, res){
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;
        //send data to userDAO 
        if(userDAO.register(username, email, password))
            res.send({status: 200, response: 'Usuario registrado correctamente'});
        res.send({status: 500, response: 'Error al registrar usuario'});
    }

    login(req, res){
        var username = req.body.username;
        var password = req.body.password;
        //send data to userDAO 
        if(userDAO.login(username, password))
            res.send({status: 200, response: 'Usuario logueado correctamente'});
        res.send({status: 500, response: 'Error al iniciar sesion'});
    }

    delete(req, res){
        var username = req.body.username;
        //send data to userDAO 
        if(userDAO.delete(username))
            res.send({status: 200, response: 'Usuario eliminado correctamente'});
        res.send({status: 500, response: 'Error al eliminar al usuario'});
    }

    // SHOP API CALLS

    getItems(req, res){
        username = req.body.username;
        result, itemIDs = userDAO.getItems(username);
        if (result)
            res.send({status: 200, response: itemIDs});
        res.send({status: 500});
    }

    buyItem(req, res){
        username = req.body.username;
        item = req.body.item;
        if(shopDAO.buyItem(username, itemID))
            res.send({status: 200, response: "Objeto comprado correctamente"});
        res.send({status: 500, response: "Error al comprar el objeto"});
    }

    // GAME API CALLS

    createGame(req, res){
        type = req.body.type;
        result, gameID = gameDAO.create(username, type);
        if(result)
            res.send({status: 200, response: gameID});
        res.send({status: 500});
    }

    deleteGame(req, res){
        username = req.body.username;
        gameID = req.body.gameID;
        if (gameDAO.delete(username, gameID))
            res.send({status: 200, response: "La partida se ha cancelado"});
        res.send({status: 500, response: "Error al cancelar la partida"});
    }

    publicJoin(req, res){
        username = req.body.username;
        if(gameDAO.publicJoin(username))
            res.send({status: 200, response: "Jugador unido a la partida"});
        res.send({status: 500, response: "Error al unir a la partida"});
    }

    privateJoin(req, res){
        username = req.body.username;
        key = req.body.key;
        if(gameDAO.privateJoin(username, key))
            res.send({status: 200, response: "Jugador unido a la partida privada"});
        res.send({status: 500, response: "Error al unirse a la partida privada"});
    }

}