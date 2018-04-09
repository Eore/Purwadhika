const fn = require('../functions');

module.exports = {
    add: (data = {idWarna, ukuran, gambar, stok}, callback) => {
        const ukuranId = fn.generateId();
        fn.create('ukuran', {id: ukuranId, ...data});
        callback(ukuranId)
    },
    edit: (key = {id}, data = {ukuran, stok}) => fn.update('ukuran', key, data),
    delete: (key = {id}) => fn.delete('ukuran', key),
    read: (key = {idWarna}, callback) => {
        if (key.idWarna) fn.read('ukuran', key, res => callback(res))
        else fn.readAll('ukuran', res => callback(res));
    }  
}