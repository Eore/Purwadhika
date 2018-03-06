import React from 'react';
import Product from './product/Product';
import products from '../../products.json';

let search = keyword => {
    let result = products.filter(x => (new RegExp(keyword, 'gi').test(x.name))).map(x => <Product key={x.id} {...x}/>)
    if (result.length === 0) return <h1>Oops, menu sedang di masak</h1>
    else return result;
}

const Search = props =>
    <div className="display-product">
        {search(props.keyword)}
    </div>

export default Search;