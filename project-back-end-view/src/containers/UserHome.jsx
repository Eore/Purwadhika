import React from 'react';
import { produk } from '../function';

import Produk from '../components/produk/Produk';

class UserHome extends React.Component {
  state = {
    listProduk: []
  }

  componentWillMount() {
    produk.read().then(res => this.setState({ 
      listProduk: res.data.map(el => <Produk id={el.id} key={el.id} namaProduk={el.namaProduk}/>)
    }))
  }

  render() {
    return (
      <div>
        {this.state.listProduk}
      </div>
    )
  }
}

export default UserHome;