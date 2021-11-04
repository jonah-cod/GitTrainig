const sql = require('mssql')
const sqlconfig = require('./db')



async function saveUser(data) {
    let {firstName, secondName, username, projectName, pass} = data
    try {
        await sql.connect(sqlconfig)
        await sql.query `insert into usersData (fName, sName, username, pName, pass) VALUES (${firstName}, ${secondName}, ${username}, ${projectName}, ${pass})`
        console.log('new user saved')
    } catch (error) {
        console.log(error);
    }
}

async function getUser(id) {
    try {
        await sql.connect(sqlconfig)
       let user = await sql.query `select * from usersData where username=${id}`;
       return user; 
    } catch (error) {
        console.log(error.message)
    }
    
    
}
module.exports = {saveUser, getUser}