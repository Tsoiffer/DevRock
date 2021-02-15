import React, { Component } from "react";
import SearchBar from "./search-bar";
import SearchResult from "./search-result";

class PageSearchResult extends React.Component {
	state = {};
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		return (
			<React.Fragment>
				<SearchBar
					onChange={this.handleChange}
					busqueda={this.state.busqueda}
				/>
				<SearchResult busqueda={this.state.busqueda} />
			</React.Fragment>
		);
	}
}

export default PageSearchResult;
