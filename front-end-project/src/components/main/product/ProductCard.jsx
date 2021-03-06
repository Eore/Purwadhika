import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export default class ProductCard extends React.Component {
    render = () =>
        <div className="column">
            <div className="ui fluid card">
                <div className="image">
                    <img src={`${process.env.PUBLIC_URL}/img/produk/${this.props.img}`}/>
                </div>
                <div className="content">
                    <Link to={`/detail/${this.props.id}`} className="header">{this.props.name}</Link>
                </div>
            </div>
        </div>
        // <div className="product-card" style={{background: `url('img/produk/${this.props.product.img}') center center / cover`}}>
        //     {/* <img src={`img/${this.props.product.img}`} alt={this.props.product.name}/> */}
        //     <div className="header">
        //         <h1 className="title">{this.props.product.name}</h1>                
        //         <button className="like"><i className="fa fa-heart"></i></button>
        //     </div>
        //     <div className="footer">
        //         <p className="price"><span>Rp.</span>{`${this.props.product.price / 1000}rb`}</p>
        //         {/* <button className="detail-button">detail</button> */}
        //         <button className="add"><i className="fa fa-plus"></i></button>
        //     </div>
        // </div>
}