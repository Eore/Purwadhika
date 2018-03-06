import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

class Header extends React.Component {
    render = () =>
        <div id="header">
            <div><Link to='/home'><h1>Prasmanan.id</h1></Link></div>
            <div>
                <input 
                    onChange={() => {
                        this.props.changeKeyword(this.refs.search.value);
                    }} 
                    ref="search" type="text" placeholder="cari menu"
                />
            </div>
            <div></div>
        </div>
}

export default Header;