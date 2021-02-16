import React, { Component } from "react";
import PageSearchResult from "./components/page-search-result";
import PageHome from "./components/page-home";
import PageArtist from "./components/page-artist";
import Layout from "./components/layout";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/busqueda" component={PageSearchResult}></Route>
					<Route exact path="/artista" component={PageArtist}></Route>
					<Route exact path="/" component={PageHome}></Route>
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
