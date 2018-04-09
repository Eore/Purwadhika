const fn = require('../functions');

module.exports = {
    add: (data = {idUser, alamatPenerima}, callback) => {
        const invoiceId = fn.generateId();  
        const kodeInvoice = `INV-${fn.generateId().toUpperCase()}`;  
        fn.create('invoice', {id: invoiceId, kodeInvoice, tanggalTransaksi: new Date(), ...data});
        callback(invoiceId)
    },
    read: (key = {kodeInvoice}, callback) => {
        if (key.kodeInvoice) fn.read('invoice', key, res => callback(res))
        else fn.readAll('invoice', res => callback(res));
    }  
}