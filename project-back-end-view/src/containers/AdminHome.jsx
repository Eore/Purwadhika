import React from 'react';
import { Route, Link } from 'react-router-dom';

import TambahProduk from '../components/admin/TambahProduk';
import KategoriSubKategori from './admin/KategoriSubKategori';

class AdminHome extends React.Component {
	render() {
		return (
			<div id="admin-home">
				<ul>
					<li><Link to="/admin/listproduk">List Produk</Link></li>
					<li><Link to="/admin/tambahproduk">Tambah Produk</Link></li>
					<li><Link to="/admin/tambahkatsubkat">Tambah Kategori/SubKategori</Link></li>
				</ul>
				<Route path="/admin/tambahproduk" component={TambahProduk}/>
				{/* <Route path="/admin/tambahkatsubkat" component={KategoriSubKategori}/>				 */}
                {/* <TambahProduk/> */}
			</div>
		)
	}
}

export default AdminHome;