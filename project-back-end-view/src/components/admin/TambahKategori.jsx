import React from 'react';
import Axios from 'axios';
import './TambahKategori.css';

let url = 'http://localhost:2000/api';

class TambahKategori extends React.Component {
    state = {
        kategori: [],
        subKategori: [],
        selectedKategori: null
    }

    addKategori(namaKategori) {
        return Axios.post(`${url}/kategori/add`, {namaKategori});
    }

    deleteKategori(id) {
        return Axios.post(`${url}/kategori/delete`, {id});
    }

    getKategori() {
        return Axios.post(`${url}/kategori/read`);
    }

    listKategori() {
        let hasil = [];
        this.getKategori()
            .then(res => {
                res.data.forEach(el => 
                    hasil.push(
                        <li key={el.id}>
                            <a onClick={() => {
                                // this.listSubKategori(el.id);
                                this.props.getIdKategori(el.id);
                                
                                this.setState({selectedKategori: el.id})
                            }}>{el.namaKategori}</a> 
                            <button onClick={() => {
                                let yakin = window.confirm(`Anda yakin ingin menghapus ${el.namaKategori}?`);
                                if (yakin) this.deleteKategori(el.id)
                            }}>X</button>
                        </li>
                    )
                )
                this.setState({ kategori: hasil });
            });			
    } 

    componentWillMount() {
        this.listKategori();
    }

    shouldComponentUpdate(props, prevState) {
        this.listKategori();
        // this.props.getIdKategori(this.state.selectedKategori);
        return prevState.kategori.length !== this.state.kategori.length;
    }

    render() {
        return (
            <div className="kategori">
                <div>
                    <input type="text" ref="kategori"/>
                    <button onClick={() => {
                        let yakin = window.confirm(`Anda yakin ingin menambah ${this.refs.kategori.value}?`);                        
                        if (yakin) {
                            this.addKategori(this.refs.kategori.value);
                        }
                        this.refs.kategori.value = '';
                    }}>+</button>
                </div>
                <ul>
                    {this.state.kategori}
                </ul>
            </div>
        )
    }
}

export default TambahKategori;