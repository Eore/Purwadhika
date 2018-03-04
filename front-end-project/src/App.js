import React from 'react';
import ProductCard from './components/main/product/ProductCard.jsx';
import ProductDetail from './components/main/product/ProductDetail.jsx';
import './App.css';

import products from './products.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {cart: []}
  }
  addItem = index => this.setState({cart: this.state.cart.concat(products[index])});
  delItem = index => this.setState({cart: this.state.cart.filter((x, i) => i !== index)});
  // editCart = id => this.setState({cart: this.state.cart})
  render() {
    let productsList = products.map((x, i) => {
      return (
        <ProductCard
          key = {i}
          product = {{
            name: x.name,
            detail: x.detail,
            price: x.price,
            img: x.img
          }}
        />
      )
    })
    console.log(this.state.cart)
    return (
      // <ProductCard
      //   product = {products[0]}
      // />


      // <ProductDetail
      //   product = {products[0]}
      // />


      <div id="display-products">
        {productsList}
      </div>
    );
  }
}

export default App;
