import React from 'react';
import Axios from 'axios';
import './TambahSubKategori.css';

let url = 'http://localhost:2000/api';

class TambahSubKategori extends React.Component {
    state = {
        idKategori: this.props.idKategori,
        subKategori: []
    }

    addSubKategori(idKategori, namaSubKategori) {
        return Axios.post(`${url}/subkategori/add`, {idKategori, namaSubKategori});
    }

    deleteSubKategori(id) {
        return Axios.post(`${url}/subkategori/delete`, {id});
    }

    getSubKategori(idKategori) {
        return Axios.post(`${url}/subkategori/read`, {idKategori});
    }

    listSubKategori(idKategori) {
        let hasil = [];
        this.getSubKategori(idKategori)
            .then(res => {
                res.data.forEach(el => 
                    hasil.push(
                        <li key={el.id}>
                            <a>{el.namaSubKategori}</a> 
                            <button onClick={() => {
                                let yakin = window.confirm(`Anda yakin ingin menghapus ${el.namaKategori}?`);
                                if (yakin) this.deleteSubKategori(el.id)
                            }}>X</button>
                        </li>
                    )
                )
                this.setState({ subKategori: hasil });
            });	
    }

    componentWillMount() {
        // this.setState({idKategori: this.props.idKategori});
        this.listSubKategori(this.props.idKategori);
    }

    // shouldComponentUpdate(prevProps, prevState) {
    //     this.setState({idKategori: this.props.idKategori});        
    //     this.listSubKategori(this.state.idKategori);
    //     return prevProps.subKategori !== this.props.subKategori;
    // }

    render() {
        return (
            <div className="sub-kategori">
                <div>
                    <input type="text" ref="subKategori"/>
                    <button onClick={() => {
                        let yakin = window.confirm(`Anda yakin ingin menambah ${this.refs.subKategori.value}?`);                        
                        if (yakin) {
                            this.addSubKategori(this.state.idKategori, this.refs.subKategori.value);
                        }
                        this.refs.subKategori.value = '';
                    }}>+</button>
                </div>
                <ul>
                    {this.state.subKategori}
                </ul>
            </div>
        )
    }
}

export default TambahSubKategori;