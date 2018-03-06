import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Detail from './components/main/product/Detail';
import Search from './components/main/Search';

import products from './products.json';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			keyword: ''
		}
	}

	changeKeyword = keyword => this.setState({keyword})

	render() {
		return (
			<div>
				<Header changeKeyword={this.changeKeyword.bind(this)}/>
				<div className="content">
					<Route path="/home" 
						render={() => {
							if (this.state.keyword === '') return <Main/>
							else return <Search keyword={this.state.keyword}/>
						}}
					/>
					<Route path="/detail/:id" 
						render={({match}) => <Detail {...products.find(x => x.id === parseInt(match.params.id, 10))}/>}
					/>					
					{/* <Footer/> */}
				</div>
			</div>
		);
	}
}

export default App;
