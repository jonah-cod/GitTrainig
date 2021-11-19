const mssql = require('mssql');
const mssqlconfig = require('./dbconfig')

const saveUser = (data)=>{
    
    let {fName, username, pass} = data;
    
    mssql.connect(mssqlconfig, (err)=>{
        if (err) {
            console.log(err.message);
        }else{
            console.log('Database connected successfully');
            try {
                mssql.query `insert into usersdata.users (fName, username, pass) VALUES(${fName}, ${username}, ${pass})`;
            } catch (error) {
                console.log(error.message);
            }

        }
    })

    
    
}

async function  authUser(id){
 
    try {
        
        await mssql.connect(mssqlconfig);
        let user = await mssql.query `SELECT * FROM usersdata.users WHERE username = ${id}`;
        return user;
    } catch (err) {
        console.log(err);   
    }
    //console.log(user.recordset[0]);
}
module.exports = {saveUser, authUser};