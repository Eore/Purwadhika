const fn = require('./models');

module.exports = {
    generateId: () => `${Math.random().toString(32).split('.')[1]}${Date.now().toString(32)}`,
    create: (tableName, data) => fn.query(`insert into ${tableName} set ?`, data),
    readAll: (tableName, callback) => fn.query(`select * from ${tableName}`, (err, res) => callback(res)),
    read: (tableName, keyword, callback) => fn.query(`select * from ${tableName} where ?`, keyword, (err, res) => callback(res)),
    // search: (tableName, fieldName, keyword, callback) => fn.query(`select * from ${tableName} where ${fieldName} like ${keyword}`, (err, res) => {console.log(fieldName, keyword, res); callback(res);}),    
    update: (tableName, keyword, data) => fn.query(`update ${tableName} set ? where ?`, [data, keyword]),
    delete: (tableName, keyword) => fn.query(`delete from ${tableName} where ?`, keyword),
    joinTables: (tableName, fieldName, fieldJoin, callback) => {
        let joins = (data) => {
            let ret = '';
            for (let val in data) {
                ret += `join ${val} on ${data[val][0]} = ${data[val][1]}`
            }
            return ret
        }
        fn.query(`select ${fieldName.join(',')} from ${tableName} ${joins(fieldJoin)}`, (err, res) => callback(res))
    }
}