const database = require('mysql2')
const dotenv = require('dotenv')

dotenv.config()

const connection = database.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD
});

const query = (query, parameters) => {
    return new Promise((res, rej) => {
        let mysql2 = connection.query(query, parameters, function (error, results, fields) {
            if (error) rej(error)
            res(results)
        });
        // console.log("SQL : ", mysql2.sql)
    })
}

module.exports = {
    connection,
    query
}