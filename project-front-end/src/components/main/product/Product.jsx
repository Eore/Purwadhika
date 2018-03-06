import React from 'react';
import './Product.css';

const Product = props =>
    <div className="product-card">
        <div className="image" style={{background: `url('${process.env.PUBLIC_URL}/img/produk/${props.img}') center center / cover`}}>
            <div className="hidden-link">
                <a><i class="fa fa-heart"></i></a>
                <a><i class="fa fa-search"></i></a>
            </div>
        </div>
        <div className="detail">
            <h1>{props.name}</h1>
            <p>{`rp. ${props.price}`}</p>
            <a><i class="fa fa-shopping-cart"></i></a>
        </div>
    </div>

export default Product;