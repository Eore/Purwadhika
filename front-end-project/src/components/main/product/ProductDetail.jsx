import React from 'react';
import './ProductDetail.css';

export default class ProductDetail extends React.Component {
    render = () => 
        <div className="product-detail">
            <button className="back"><i className="fa fa-chevron-left"></i></button>
            <div className="image">
                <img src={`img/${this.props.product.img}`} alt={this.props.product.name}/>
            </div>
            <div className="description">
                <img src={`img/${this.props.product.img}`} alt={this.props.product.name}/>            
                <button className="like"><i className="fa fa-heart-o"></i></button>
                <div className="title">
                    <strong>{this.props.product.name}</strong>
                </div>
                <div className="content">
                    <p>{this.props.product.detail}</p>
                </div>
                <div className="footer">
                    <strong>Rp. {this.props.product.price}</strong>
                    <button className="tambah">+ tambah</button>
                </div>
            </div>
        </div>
}