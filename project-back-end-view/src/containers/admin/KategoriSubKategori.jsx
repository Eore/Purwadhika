import React from 'react';

import TambahKategori from '../../components/admin/TambahKategori';
import TambahSubKategori from '../../components/admin/TambahSubKategori';

class KategoriSubKategori extends React.Component {
    state = {
        idKategori: null
    }

    getIdKategori(idKategori) {
        this.setState({idKategori})
    }

    shouldComponentUpdate(props, prevState) {
        return prevState.idKategori !== this.state.idKategori;
    }

    render() {
        return (
            <div id="kategori-subkategori">
                <TambahKategori getIdKategori={this.getIdKategori.bind(this)}/>
                <TambahSubKategori idKategori={this.state.idKategori}/>
            </div>
        )
    }
}

export default KategoriSubKategori;