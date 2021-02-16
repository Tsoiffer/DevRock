import ArtistCard from "./artist-card";
import Loading from "./loading";
import React, { Component } from "react";
import "./search-bar.css";

class SearchResult extends React.Component {
	state = {
		errer: false,
		loading: false,
		data: {
			results: [],
		},
	};
	componentWillReceiveProps(e) {
		let termino = e.busqueda;

		this.fetchData(
			"https://rickandmortyapi.com/api/character/?page=" + termino
		);
	}
	// componentDidMount() {
	// 	this.fetchData("https://rickandmortyapi.com/api/character/?page=2");
	// }
	fetchData = async (url) => {
		this.setState({ loading: true });
		const response = await fetch(url);
		const data = await response.json();
		if (data.error) {
			this.setState({
				error: true,
				loading: false,
			});
		} else {
			this.setState({
				error: false,
				loading: false,
				data: data,
			});
		}
	};
	render() {
		return (
			<React.Fragment>
				{this.state.error && <h1>ERROR DE ALGO</h1>}
				{this.state.loading && <Loading />}
				<div className="container">
					<div className="row centrado">
						{this.state.data.results.map((item, i) => {
							return (
								<ArtistCard
									img={item.image}
									titulo={item.name}
									key={i}
								></ArtistCard>
							);
						})}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default SearchResult;
