import React, { Component } from "react";
import SearchBar from "./search-bar";
import SearchResult from "./search-result";

class PageSearchResult extends React.Component {
	state = {};
	componentDidMount() {
		let search = this.props.history.location.search.substr(1);
		console.log(search);
		this.setState({ busqueda: search });
	}
	handleChange = (e) => {
		this.setState({
			busqueda: e.target.value,
		});
		this.props.history.push("/busqueda?" + e.target.value);
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
