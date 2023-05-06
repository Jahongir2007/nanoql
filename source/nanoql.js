const mysql = require("mysql");

module.exports = class Connection {
    constructor(connection){
        this.host = connection[0];
        this.username = connection[1];
        this.password = connection[2];
        this.db = connection[3];
    }

    sql(query, option){
        if(this.db){
            var con = mysql.createConnection({
                host: this.host,
                user: this.username,
                password: this.password,
                database: this.db
            });
        
            con.connect(function(err) {
                if(err){
                    console.log(err.message);
                }
            
                con.query(`${query}`, option);
            });
        }else{
            var con = mysql.createConnection({
                host: this.host,
                user: this.username,
                password: this.password,
            });
        
            con.connect(function(err) {
                if(err){
                    console.log(err.message);
                }
            
                con.query(`${query}`, option);
            });
        }
    }
    isErr(err){
        if(err){
            console.log(err.message);
        }
    }
}
