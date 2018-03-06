import React from 'react';

export default class Content extends React.Component {
    constructor() {
        super();
        this.state = {
          key: '',
          cari: [],
          active: 0
        }
      }
    render = () => 
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
        {search(this.state.key)}
        {/* <Route path="/home" render={() => search(this.state.key)}/>
        <Route path="/:id" render={({match}) => {
            if match.url === '/home'
            <ProductDetail {...detail(match.url.split('/')[1])}/>
        }}/> */}
        </div>
    </div>
}