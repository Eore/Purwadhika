const fn = require('../functions');

module.exports = {
    add: (data = {namaKategori}, callback) => {
        const kategoriId = fn.generateId();        
        fn.read('kategori', data, val => {
            if (val.length > 0) { 
                callback(null); 
            } else {
                fn.create('kategori', {id: kategoriId, ...data});
                callback(kategoriId)
            }
        })
    },
    edit: (key = {id}, data = {namaKategori}) => fn.update('kategori', key, data),
    delete: (key = {id}) => fn.delete('kategori', key),
    read: (key = {namaKategori}, callback) => {
        if (key.namaKategori) fn.read('kategori', key, res => callback(res))
        else fn.readAll('kategori', res => callback(res));
    }  
}