import Axios from 'axios';

const url = 'http://localhost:2000/api';

export const kategori = {
  read: () => Axios.post(`${url}/kategori/read`),
  add: (namaKategori) => Axios.post(`${url}/kategori/read`, { namaKategori }),
  delete: (idKategori) => Axios.post(`${url}/kategori/delete`, { idKategori }),
  edit: (idKategori, namaKategori) => Axios.post(`${url}/kategori/edit`, { idKategori, namaKategori })
}

export const produk = {
  read: () => Axios.post(`${url}/produk/read`),
  find: (idKategori) => Axios.post(`${url}/produk/read`, { idKategori }),
  add: ({ namaProduk, deskripsi, harga, idSubKategori, warna, ukuran, stok }) => {
    Axios.post(`${url}/produk/add`, { namaProduk, deskripsi, harga, idSubKategori })
    .then(idKategori => 
      Axios.post(`${url}/warna/add`, { idKategori, warna })
      .then(idWarna =>
        Axios.post(`${url}/ukuran/add`, { idWarna, ukuran, stok })
      )
    )
  }
}

export const warna = {
  read: (idProduk) => Axios.post(`${url}/warna/read`, { idProduk })
}