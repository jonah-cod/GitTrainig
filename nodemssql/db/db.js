const sql = require('mssql')
require('dotenv').config();

const sqlconfig = {
    user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }

}

// async function connectToDB() {   
//     try {
//         await sql.connect(sqlconfig)
//         console.log('connected to DB')
//         let data = await sql.query `select * from userData`
//         console.dir(data);
//     } catch (error) {
//         console.log(error.message)
//     }
    

// }

module.exports = sqlconfig