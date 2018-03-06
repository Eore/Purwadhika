import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

export default class ProductDetail extends React.Component {
    render = () => 
        <div className="product-detail">
            <Link to="/home" className="back"><i className="fa fa-chevron-left"></i></Link>
            <div className="image">
                <img src={`${process.env.PUBLIC_URL}/img/produk/${this.props.img}`} alt={this.props.name}/>
            </div>
            <div className="description">
                <img src={`img/produk/${this.props.img}`} alt={this.props.name}/>            
                <button className="like"><i className="fa fa-heart-o"></i></button>
                <div className="title">
                    <strong>{this.props.name}</strong>
                </div>
                <div className="content">
                    <p>{this.props.detail}</p>
                </div>
                <div className="footer">
                    <strong>Rp. {this.props.price}</strong>
                    <button className="tambah">+ tambah</button>
                </div>
            </div>
        </div>
}