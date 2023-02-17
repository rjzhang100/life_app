const mysql = require('mysql2');
const config = require('db_config');

class Db_Ops {
    async getAllTransactions() {
        try {
            let sqlconn = await mysql.createConnection(config);
            let transactions = await sqlconn.request().query("select * from finance");
            return transactions.recordset;
        }
        catch (err) {
            console.log(err);
        }
    };
}

module.exports(Db_Ops);