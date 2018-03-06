import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import Main from './components/main/Main';
import Detail from './components/main/product/Detail';

import products from './products.json';

class App extends React.Component {
	render() {
		return (
		<div className="App">
			{/* <Header/> */}
			<Route path="/home" component={Main}/>
			<Route path="/detail/:id" render={({match}) => <Detail {...products.find(x => x.id === parseInt(match.params.id, 10))}/>}/>
			{/* <Footer/> */}
		</div>
		);
	}
}

export default App;
