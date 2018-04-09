import React from 'react';
import axios from 'axios';

export default class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            kategori: [],
            subKategori: [],
            warna: [],
            ukuran: []
        }
    }

    getKategori = () => axios.get()
    getSubKategori = () => axios.get()

    render = () => {
        
        return (
            <div id="sidebar">

            </div>
        )
    }
}