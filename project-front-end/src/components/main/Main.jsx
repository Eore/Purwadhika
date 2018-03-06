import React from 'react';
import Product from './product/Product';

import products from '../../products.json';

const Main = props =>
    <div>
        {console.log(products)}
        <Product {...products[0]}/>
    </div>

export default Main;