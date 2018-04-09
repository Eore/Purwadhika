import React from 'react';
import Axios from 'axios';
import './TambahProduk.css';
import { produk } from '../../function';

let url = 'http://localhost:2000/api';

class TambahProduk extends React.Component {
	state = {
		kategori: [],
		subKategori: [],
		kategoriSelected: false
	}
	
	listKategori() {
		let hasil = [];
		Axios.post(`${url}/kategori/read`)
			.then(res => {
				res.data.forEach(el => 
					hasil.push(<option key={el.id} value={el.id}>{el.namaKategori}</option>)
				)
				this.setState({ kategori: hasil });
			});			
	}

	listSubKategori(idKategori) {
		let hasil = [];
		Axios.post(`${url}/subkategori/read`, { idKategori })
			.then(res => {
				res.data.forEach(el => 
					hasil.push(<option key={el.id} value={el.id}>{el.namaSubKategori}</option>)
				)
				this.setState({ subKategori: hasil });
			});			
	}

	componentWillMount() {
		this.listKategori();
	}

	render() {
		return (
			<div id="tambah-produk">
				<div>
					<input type="file" name="gambar" accept=".jpg,.jpeg,.png"/>
				</div>
				<div>
					<input type="text" ref="namaProduk" placeholder="Nama Produk"/>
					<input type="number" ref="harga" placeholder="Harga Produk"/>
				</div>
				<div>						
					<select 
						onChange={() => {
							this.setState({ 
								kategoriSelected: true
							})
							this.listSubKategori(this.refs.kategori.value)
						}}
						defaultValue="" name="kategori" ref="kategori">
						<option value="" disabled>Pilih Kategori</option>
						{this.state.kategori}
					</select>
					<select
						disabled={!this.state.kategoriSelected}
						defaultValue="" name="subkategori" ref="subKategori">
						<option value="" disabled>Pilih Sub Kategori</option>
						{this.state.subKategori}
					</select>
				</div>
				<div>
					<input type="text" ref="warna" placeholder="Warna"/>
					<input type="text" ref="ukuran" placeholder="ukuran"/>								
					<input type="number" ref="stok" placeholder="Stok Produk"/>
				</div>
				<div>
					<textarea cols="40" rows="10" ref="deskripsi"></textarea>
				</div>
				<div>
					<input onClick={() => {
						produk.add({
							namaProduk: this.refs.namaProduk.value,
							harga: this.refs.harga.value,
							deskripsi: this.refs.deskripsi.value,
							idSubKategori: this.refs.subKategori.value,
							warna: this.refs.warna.value,
							ukuran: this.refs.ukuran.value,
							stok: this.refs.stok.value
						})
						this.refs.namaProduk.value = '';
						this.refs.harga.value = '';
						this.refs.deskripsi.value = '';
						this.refs.kategori.value = '';
						this.refs.subKategori.value = '';
						this.refs.warna.value = '';
						this.refs.ukuran.value = '';
						this.refs.stok.value = '';
						this.setState({ kategoriSelected: false })
					}} type="submit" value="Tambah"/>
				</div>
			</div>
		)
	}
}

export default TambahProduk;