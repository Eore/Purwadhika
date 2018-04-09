const bcrypt = require('bcrypt');
const fn = require('../functions');

module.exports = {
    register: (data = {username, password, nama, email, telepon}, callback) => {
        const userId = fn.generateId()
        fn.read('user', {username: data.username}, val => {
            if (val.length > 0)
                callback(null);
            else
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(data.password, salt, (err, hash) => {
                        fn.create('user', {
                            ...data,
                            id: userId,
                            password: hash,
                            role: 100,
                            createAt: new Date()
                        })
                        callback(userId);
                    })
                })
        })
    },
    login: (data = {username, password}, callback) => {
        fn.read('user', {username: data.username}, val => {
            if (val > 0) 
                bcrypt.compare(password, val[0].password, (err, valid) => {
                    if (valid)
                        callback({id: val.id, username: val.username});
                    else
                        callback(null);
                })
            else
                callback(null)
        })
    }
}