const fn = require('../functions');

module.exports = {
    add: (data = {namaProduk, deskripsi, harga, idSubkategori}, callback) => {
        const produkId = fn.generateId();        
        fn.read('produk', {namaProduk: data.namaProduk}, val => {
            if (val.length > 0) { 
                callback(null); 
            } else {
                fn.create('produk', {id: produkId, ...data});
                callback(produkId)
            }
        })
    },
    edit: (key = {id}, data = {namaProduk}) => fn.update('produk', key, data),
    delete: (key = {id}) => fn.delete('produk', key),
    read: (key = {namaProduk}, callback) => {
        if (key.namaProduk) fn.read('produk', key, res => callback(res))
        else fn.readAll('produk', res => callback(res));
    }  
}