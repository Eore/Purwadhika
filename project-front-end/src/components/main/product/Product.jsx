import React from 'react';
import './Product.css';

const Product = props =>
    <div className="product-card">
        <div className="image" style={{background: `url('${process.env.PUBLIC_URL}/img/produk/${props.img}') center center / cover`}}>
            <div className="hidden-link">
                <a>Like</a>
                <a>Detail</a>
            </div>
        </div>
        <div className="detail">
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <a>Beli</a>
        </div>
    </div>

export default Product;