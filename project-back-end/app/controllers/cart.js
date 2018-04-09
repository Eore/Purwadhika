module.exports = {
    addItem: (item, cart) => {
        let val = cart.find(x => x.idProduk === item.idProduk)
        if (val) return cart.map(x => x.idProduk === item.idProduk ? x = {...x, jumlahProduk: x.jumlahProduk + item.jumlahProduk} : x)
        else return cart.concat(item)
    },
    delItem: (idProduk, cart) => cart.filter(x => x.idProduk !== idProduk)
}