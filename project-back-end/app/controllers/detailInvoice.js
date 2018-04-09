const fn = require('../functions');

module.exports = {
    add: (data = {idInvoice, namaProduk, warna, ukuran, jumlahProduk, hargaProduk}, callback) => {
        const detailInvoiceId = fn.generateId();        
        fn.read('detailInvoice', data, val => {
            if (val.length > 0) { 
                callback(null);
            } else {
                fn.create('detailInvoice', {id: detailInvoiceId, ...data});
                callback(detailInvoiceId)
            }
        })
    },
    read: (key = {id}, callback) => {
        if (key.id) fn.read('detailInvoice', key, res => callback(res))
        else fn.readAll('detailInvoice', res => callback(res));
    }  
}