import React, { Component } from "react";
import SearchBar from "./search-bar";
import Loading from "./loading";
import "./page-artist.css";

class PageArtist extends React.Component {
	state = {
		errer: false,
		loading: false,
		data: {
			results: [{ image: "" }, { name: "" }, { status: "" }],
		},
	};
	componentDidMount() {
		let search = this.props.history.location.search.substr(1);
		console.log(search);
		this.fetchData("https://rickandmortyapi.com/api/character/?name=" + search);
	}

	fetchData = async (url) => {
		console.log(url);
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
		console.log(this.state.data);
	};

	render() {
		return (
			<React.Fragment>
				<SearchBar />
				{this.state.error && <h1>ERROR DE ALGO</h1>}
				{this.state.loading && <Loading />}
				<div className="container">
					<div className="row centrar">
						<div className="col-md-3" />
						<div className="col-md-6">
							<img
								src={this.state.data.results[0].image}
								alt=""
								className="pic-artist margenes50"
							/>
							<h2>{this.state.data.results[0].name}</h2>
							<p>{this.state.data.results[0].status}</p>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default PageArtist;
