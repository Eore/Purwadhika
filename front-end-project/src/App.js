import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom'

import Header from './components/header/Header.jsx';
import ProductCard from './components/main/product/ProductCard.jsx';
import ProductDetail from './components/main/product/ProductDetail.jsx';
import './App.css';

import products from './products.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      key: '',
      cari: [],
      active: 0
    }
  }
  addItem = index => this.setState({cart: this.state.cart.concat(products[index])});
  delItem = index => this.setState({cart: this.state.cart.filter((x, i) => i !== index)});
  // editCart = id => this.setState({cart: this.state.cart})
  render() {
    let productsList = products.map((x, i) => {
      return (
        <ProductCard key={x.id} {...x} />
      )
    })
    let detail = key => products.find(x => x.id == key) 
    let search = key => products.filter(x => (new RegExp(key, 'gi').test(x.name) || x.category === key)).map(x => <ProductCard key={x.id} {...x}/>)
    let hot = () => {
      let hasil = []
      let sorted = products.sort((a, b) => b.likes - a.likes)
      for (let i = 0; i < 4; i++) {
        hasil.push(<ProductCard key={sorted[i].id} {...sorted[i]}/>)
      }
      return hasil;
    }
    return (
      <div>
        <Header/>
        <center><h1>Most Liked</h1></center>
        <div className="display-products">
          {hot()}
        </div>
        <center><h1>Our Menu</h1></center>
        <div className="main-content">
          <div className="side-menu">
            <div className="ui vertical menu">
              <div className="item">
                <div className="ui transparent icon input">
                  <input type="text" ref="search" placeholder="Cari menu" onChange={() => this.setState({key: this.refs.search.value})}/>
                  <i className="search icon"></i>
                </div>
              </div>
              <a onClick={() => {this.setState({key: ''}); this.setState({active: 0})}} className={this.state.active === 0 ? "item active" : "item"}>Semua</a>
              <a onClick={() => {this.setState({key: 'daging'}); this.setState({active: 1})}} className={this.state.active === 1 ? "item active" : "item"}>Daging</a>
              <a onClick={() => {this.setState({key: 'ikan'}); this.setState({active: 2})}} className={this.state.active === 2 ? "item active" : "item"}>Ikan</a>
              <a onClick={() => {this.setState({key: 'tambahan'}); this.setState({active: 3})}} className={this.state.active === 3 ? "item active" : "item"}>Tambahan</a>
            </div>
          </div>
          <div className="display-products">
            {/* {search(this.state.key)} */}
            <Route path="/home" render={() => search(this.state.key)}/>
            <Route path="/:id" render={({match}) => <ProductDetail {...detail(match.url.split('/')[1])}/>}/>
            {/* <Route path="/:id" render={({match}) => {
              switch (match.url.split('/')[1]) {
                case 'daging': return filtered('daging');
                case 'ikan': return filtered('ikan');
                case 'tambahan': return filtered('tambahan');
                default: return productsList;
              }
            }}/> */}
            {/* <Route path="/cari/:id" render={({match}) => search(match.url.split('/')[2])}/> */}
            {/* {productsList} */}
          </div>
        </div>
      </div>

      // <ProductCard
      //   product = {products[0]}
      // />


      // <ProductDetail
      //   product = {products[0]}
      // />


    );
  }
}

export default App;
