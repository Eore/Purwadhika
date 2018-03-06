import React from 'react';
import Product from './product/Product';
import './Main.css';

import products from '../../products.json';

let hotProduct = () => {
    let result = [];
    let sorted = products.sort((a, b) => b.likes - a.likes);
    for (let i = 0; i < 4; i++) result.push(<Product key={i} {...sorted[i]}/>);
    return result;
}
let list = products.map(x => <Product key={x.id} {...x}/>);

const Main = props =>
    <div>
        <center><h1 className="title">Most Liked Product</h1></center>
        <div className="display-product">
            {hotProduct()}
        </div>
        <br/><br/>
        <center><h1 className="title">Our Product</h1></center>
        <div className="display-product">
            {list}
        </div>
    </div>

export default Main;