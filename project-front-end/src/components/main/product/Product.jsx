import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = props =>
    <div className="product-card">
        <div className="image" style={{background: `url('${process.env.PUBLIC_URL}/img/produk/${props.img}') center center / cover`}}>
            <div className="hidden-link">
                <a><i className="fa fa-heart"></i></a>
                <Link to={`/detail/${props.id}`}><i className="fa fa-search"></i></Link>
            </div>
        </div>
        <div className="detail">
            <h1>{props.name}</h1>
            <p>{`rp. ${props.price}`}</p>
            <a><i className="fa fa-shopping-cart"></i></a>
        </div>
    </div>

export default Product;