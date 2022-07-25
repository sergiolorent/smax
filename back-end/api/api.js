const userDAO = require("../DAO/userDAO");


module.exports = class Api{

    //USER API CALLS

    register(req, res){
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;
        //send data to userDAO 
        userDAO.register(username, email, password);
        res.send('Usuario registrado correctamente');
    }

    login(req, res){
        var username = req.body.username;
        var password = req.body.password;
        //send data to userDAO 
        userDAO.login(username, password);
        res.send('Usuario logueado correctamente');
    }

    delete(req, res){
        var username = req.body.username;
        //send data to userDAO 
        userDAO.delete(username);
        res.send('Usuario eliminado correctamente');
    }

}