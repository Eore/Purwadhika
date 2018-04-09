import React from 'react';
import './Produk.css';

let Produk = (props) =>
	<div className="produk">
		<div>
			<a href="#">
				<img src="" alt="gambar"/>
				gambar {props.namaProduk}
			</a>
		</div>
		<div>
			<p>{props.namaProduk}</p>
		</div>
	</div>

export default Produk;