import React from 'react';
import './Produk.css';
import { warna, produk } from '../../function';

class DetailProduk extends React.Component {
  state = {
    listWarna: [],
    data: {}
  }

  findProduk(idProduk) {
    produk.find(idProduk).then(res => this.setState({ data: res.data[0] }))
  }

  listWarna(idProduct) {
    warna.read(idProduct).then(res =>
      this.setState({
        listWarna: res.data.map(el => <option key={el.id} value={el.id}>{el.warna}</option>)
      })
    )
  }

  listUkuran(idWarna) {
  
  }

  componentWillMount() {
    this.findProduk(this.props.idProduct)
    this.listWarna(this.props.idProduct)
  }

  render() {
    return (
      <div className="DetailProduk">
        <div>
          <img src={this.state.data.gambar} alt={this.state.data.namaProduk}/>
        </div>
        <div>
          <h1>{this.state.data.namaProduk}</h1>
          <p>{this.state.data.deskripsi}</p>
          <select ref="warna" name="warna">
            {this.state.listWarna}
          </select>
          <select name="ukuran">
          
          </select>
        </div>
      </div>
    )
  }
}

export default DetailProduk;