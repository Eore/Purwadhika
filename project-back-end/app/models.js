const db = require('./database');

db.model('user', [
    'id varchar(100) not null primary key',
    'role int not null',
    'username varchar(30) not null',
    'password varchar(100) not null',
    'nama varchar(30) not null',
    'email varchar(100) not null',
    'telepon varchar(13) not null',
    'createAt datetime not null'
])

db.model('kategori', [
    'id varchar(100) not null primary key',    
    'namaKategori varchar(20) not null'
])

db.model('subKategori', [
    'id varchar(100) not null primary key',    
    'idKategori varchar(100) not null',
    'namaSubKategori varchar(20) not null',
    // 'foreign key (idKategori) references kategori(id) on delete cascade'
])

db.model('produk', [
    'id varchar(100) not null primary key',    
    'namaProduk varchar(30) not null',
    'deskripsi text',
    'gambar varchar(255) not null',
    'harga bigint not null',
    'idSubKategori varchar(100) not null',
    // 'foreign key (idSubKategori) references subKategori(id)'
])

db.model('warna', [
    'id varchar(100) not null primary key',    
    'idProduk varchar(100) not null',
    'warna varchar(20) not null',
    // 'foreign key (idProduk) references produk(id) on delete cascade'
])

db.model('ukuran', [
    'id varchar(100) not null primary key',    
    'idWarna varchar(100) not null',
    'ukuran varchar(5) not null',
    'stok int not null',
    // 'foreign key (idWarna) references warna(id) on delete cascade'
])

db.model('invoice', [
    'id varchar(100) not null primary key',
    'idUser varchar(100) not null',
    'kodeInvoice varchar(100) not null',    
    'alamatPenerima text not null',
    'tanggalTransaksi datetime not null',
    // 'foreign key (idUser) references user(id)'
])

db.model('detailInvoice', [
    'id varchar(100) not null primary key',    
    'idInvoice varchar(100) not null',
    'namaProduk varchar(100) not null',
    'warna varchar(20) not null',
    'ukuran varchar(5) not null',
    'jumlahProduk int not null',
    'hargaProduk int not null',
    // 'foreign key (idInvoice) references invoice(id)'
])

module.exports = db.fn;