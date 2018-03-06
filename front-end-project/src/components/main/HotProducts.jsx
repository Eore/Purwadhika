import React from 'react';
import ProductCard from './product/ProductCard.jsx'

export default class HotProduct extends React.Component {
    render = () => {
        let hot = () => {
            let hasil = []
            let sorted = products.sort((a, b) => b.likes - a.likes)
            for (let i = 0; i < 4; i++) {
              hasil.push(<ProductCard key={sorted[i].id} {...sorted[i]}/>)
            }
            return hasil;
        }

        return (
            <div className="display-products">
                {hot()}
            </div>
        )
    }
}