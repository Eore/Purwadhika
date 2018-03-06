import React from 'react';
import { Link } from 'react-router-dom';
import './Detail.css';

const Detail = props =>
    <div className="detail-card">
        <div className="image" style={{background: `url('${process.env.PUBLIC_URL}/img/produk/${props.img}') center center / cover`}}></div>
        <div>
            <div className="detail">
                <h1>{props.name}</h1>
                <p>{props.detail}</p>
            </div>
            <div className="nav">
                <p>{`Rp. ${props.price}`}</p>
                <a><i className="fa fa-heart"></i></a>
                <a><i className="fa fa-shopping-cart"></i></a>
            </div>
            <Link to='/home'><i className="fa fa-times-circle-o"></i></Link>
        </div>
    </div>

export default Detail;