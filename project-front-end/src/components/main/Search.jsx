import React from 'react';
import Product from './product/Product';
import products from '../../products.json';

let search = keyword => products.filter(x => (new RegExp(keyword, 'gi').test(x.name))).map(x => <Product key={x.id} {...x}/>)

const Search = props =>
    <div className="display-product">
        {search(props.keyword)}
    </div>

export default Search;