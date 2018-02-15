const id = x => document.getElementById(x);
const cls = x => document.getElementsByClassName(x);

let tambahItem = (id, cart, produk) => {
    produk.forEach((x, i) => {
        if (x.id == id) cart.push(produk[i]);
    })
    return cart;
}

let hapusItem = (id, cart) => {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            cart.splice(i, 1);
            return cart;
        }
    }
}

let cariItem = (nama, produk) => {
    let hasil = [];
    produk.forEach(x => {
        let regx = new RegExp(nama, 'gi');
        if (regx.test(x.nama)) hasil.push(x);
    })
    return hasil;
}

let checkout = (cart) => {
    let temp = [];
    let sorted = cart.sort((a, b) => a.id - b.id);
    for (let i = sorted[0].id; i <= sorted[cart.length - 1].id; i++) {
        temp.push([sorted.find(x => x.id ==i), sorted.filter(x => x.id == i).reduce(sum => ++sum, 0)])
    }
    let hasil = temp.filter(x => x[1] > 0) 
    return {
        data : hasil,
        total : hasil.reduce((sum, x) => sum + (x[0].harga * x[1]), 0)
    };
}

let cart = [];

let cetakProduk = data => {
    let hasil = '';
    data.forEach(x => {
        hasil += id('produk').innerHTML
            .replace(/{{id}}/g, x.id)
            .replace(/{{namaProduk}}/g, x.nama)
            .replace(/{{urlGambar}}/g, `assets/img/produk/${x.gambar}`)
            .replace(/{{hargaProduk}}/g, x.harga)
    })
    return hasil;
}

let assignBtnFunc = btn => {
    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = () => {
            cart = tambahItem(btn[i].value, cart, produk);
        }
    }
}

window.onload = () => {
    id('tampil-produk').innerHTML = cetakProduk(produk);
    assignBtnFunc(cls('btn-tambah'))
}

let cari = id('cari-item'); 
cari.onkeyup = () => {
    if (cari.value != '') {
        let found = cariItem(cari.value, produk);
        if (found.length != 0) id('tampil-produk').innerHTML = cetakProduk(found);
        else id('tampil-produk').innerHTML = `<h1>Duh, lauk yang di cari masih dimasak :(</h1>`
    } else {
        id('tampil-produk').innerHTML = cetakProduk(produk);        
    }
    assignBtnFunc(cls('btn-tambah'))        
}