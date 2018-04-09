const mysql = require('mysql');
const config = require('./configs.json').dbConfig;

let initDB = () => {
    let db = mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password
    });
    db.query('create database if not exists ecommerce');
    db.end();
}

let connectDB = () =>{
    let db = mysql.createConnection({...config})
    db.connect(err => err ? console.log(err) : null)
    return db;
} 

module.exports.model = (tableName, schema) => {
    initDB();
    return connectDB().query(`create table if not exists ${tableName} (${schema.join(',')})`)    
}

module.exports.fn = connectDB();