const fn = require('../functions');

module.exports = {
    add: (data = {idProduk, warna}, callback) => {
        const warnaId = fn.generateId();        
        fn.create('warna', {id: warnaId, ...data});
        callback(warnaId)
    },
    edit: (key = {id}, data = {warna}) => fn.update('warna', key, data),
    delete: (key = {id}) => fn.delete('warna', key),
    read: (key = {idProduk}, callback) => {
        if (key.idProduk) fn.read('warna', key, res => callback(res))
        else fn.readAll('warna', res => callback(res));
    }  
}