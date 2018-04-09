import React from 'react';
import './Produk.css';
import { Link } from 'react-router-dom';

let Produk = (props) =>
    <div className="produk">
        <Link to={`/detail/${props.id}`}>
            <img src={props.gambar} alt={props.namaProduk}/>
            <h1>{props.namaProduk}</h1>
        </Link>
    </div>

export default Produk;