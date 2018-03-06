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
let list = keyword => products.filter(x => keyword === '' || x.category === keyword).map(x => <Product key={x.id} {...x}/>);

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            category: ''
        }
    }
    changeCategory = category => this.setState({category})
    render = () =>
        <div>
            <center><h1 className="title">Most Liked Product</h1></center>
            <div className="display-product">
                {hotProduct()}
            </div>
            <br/><br/>
            <center>
                <h1 className="title">Our Product</h1>
                <div className="category">
                    <a onClick={() => this.changeCategory('')}>All</a>                    
                    <a onClick={() => this.changeCategory('daging')}>Daging</a>
                    <a onClick={() => this.changeCategory('tambahan')}>Tambahan</a>
                </div>
            </center>
            <div className="display-product">
                {list(this.state.category)}
            </div>
        </div>
}

export default Main;