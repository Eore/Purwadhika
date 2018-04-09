import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import AdminHome from './containers/AdminHome';
import UserHome from './containers/UserHome';
import DetailProduk from './components/produk/DetailProduk';

export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Route exact path="/" component={UserHome}>
					<Route exact path="/detail/:id" render={({match}) => <DetailProduk idProduk={match.params.id}/>}/>				
				</Route>
				{/* <Route path="/admin" render={({ match }) => <AdminHome rootUrl={match.url}/>}/> */}
			</BrowserRouter>
		);
	}
}

