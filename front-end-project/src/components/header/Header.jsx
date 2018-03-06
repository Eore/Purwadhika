import React from 'react';
import './Header.css'

export default class Header extends React.Component {
    render = () =>
        <div className="ui large menu">
            <div className="item">
                <h3>Prasmanan.id</h3>
            </div>
            <div className="right menu">
                <div className="item">
                    <div className="ui primary button">Sign Up</div>
                </div>
            </div>
        </div>
        // <div className="page-header">
        //     <div className="logo">
        //         <h1>Prasmanan.id</h1>
        //     </div>
        //     <div className="search">
        //         <input type="text" ref="search"/>
        //     </div>
        //     <div className="cart">
        //         <button>Cart</button>
        //     </div>
        // </div>
}