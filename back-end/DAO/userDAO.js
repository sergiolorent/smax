const pool = require("../db");


module.exports = class UserDAO{

    static async register(username, email, password){
        if(!UserDAO.checkUser(username)){
            try {
                await pool.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", [username, email, password]);
                return true;
            } catch(err){
                console.log(err);
                return false;
            }
        }
        else
            return false;
    }

    static async login(username, password){
        if(UserDAO.checkUser(username)){
            try {
                res = await pool.query("SELECT password FROM users WHERE username=($1)", [username]);
                if (res.rows.password === password)
                    return true
                return false;
            } catch(err){
                console.log(err);
                return false;
            }
        }
        else
            return false;
    }

    static async delete(username){
        try {
            await pool.query("DELETE FROM users WHERE username=($1)", [username]);
            return true;
        } catch(err){
            console.log(err);
            return false;
        }
    }

    static async getItems(username){
        // waiting until db's conceptual design is ready 
    }

    static async checkUser(username){
        try {
            res = await pool.query("SELECT name FROM users WHERE username=($1)", [username]);
            return res.rows.length > 0;
        } catch(err){
            console.log(err);
        }
    }
}