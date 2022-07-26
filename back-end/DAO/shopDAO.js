const pool = require("../db");

module.exports = class ShopDAO {

    static async buyItem(username, itemID){
        try {
            itemPrice = await pool.query("SELECT price FROM items WHERE id=($1)", [itemID]);
            playersBalance = await pool.query("SELECT balance FROM users WHERE username=($1)", [username]);
            if (playersBalance >= itemPrice){
                // BIND ITEM TO PLAYER (wait until bd's conceptual design is ready
                return true;
            }                          
            return false;            
        } catch(err){
            console.log(err);
            return false;
        }        
    }
}