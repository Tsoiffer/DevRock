import ArtistCard from "./artist-card";
import Loading from "./loading";
import React, { Component } from "react";

class SearchResult extends React.Component {
	state = {
		errer: false,
		loading: false,
		data: {
			results: [],
		},
	};
	componentDidMount() {
		this.setState({ loading: true });
		this.fetchData("https://rickandmortyapi.com/api/character/?page=2");
	}
	fetchData = async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data, "lo que trajo la API");
		if (data.error) {
			this.setState({
				error: true,
				loading: false,
			});
		} else {
			this.setState({
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
					<div className="row">
						{this.state.data.results.map((item, i) => {
							return (
								<ArtistCard
									img={item.image}
									titulo={item.name}
									key={i}
								></ArtistCard>
							);
						})}
						<h1>{this.props.busqueda}</h1>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default SearchResult;
