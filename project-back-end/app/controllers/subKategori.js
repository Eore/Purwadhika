const fn = require('../functions');

module.exports = {
    add: (data = {idKategori, namaSubKategori}, callback) => {
        const subKategoriId = fn.generateId();        
        fn.read('subKategori', {namaSubKategori: data.namaSubKategori}, val => {
            if (val.length > 0) { 
                callback(null); 
            } else {
                fn.create('subKategori', {id: subKategoriId, ...data});
                callback(subKategoriId)
            }
        })
    },
    edit: (key = {id}, data = {namaKategori}) => fn.update('subKategori', key, data),
    delete: (key = {id}) => fn.delete('subKategori', key),
    read: (key = {idKategori}, callback) => {
        if (key.idKategori) fn.read('subKategori', key, res => callback(res))
        else fn.readAll('subKategori', res => callback(res));
    }  
}