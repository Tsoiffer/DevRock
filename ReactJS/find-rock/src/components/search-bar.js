import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "./search-bar.css";

class SearchBar extends React.Component {
	// Esto ahora quedo en el page search result
	// state = {
	// 	busqueda: "",
	// };
	// handleChange = (e) => {
	// 	this.setState({ [e.target.name]: e.target.value });
	// 	console.log(e.target.name, e.target.value);
	// };
	handleClick = (e) => {
		e.preventDefault();
		console.log(e.target.name, "OUCH Soy Un Boton");
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.name, e.target.value);
	};
	render() {
		return (
			<React.Fragment>
				<div className="row">
					<div className="col-md-2">
						<Link to="/">
							<img src={logo} alt="" className="logo-barra" />
						</Link>
					</div>
					<div className="col-md-4">
						<form
							className="form-inline"
							onSubmit={this.handleSubmit}
							name="Form"
						>
							<div className="busqueda">
								<input
									type="text"
									id="buscar"
									placeholder="Busca una banda"
									value={this.props.busqueda}
									onChange={this.props.onChange}
									name="busqueda"
								/>
							</div>
						</form>
					</div>
				</div>
				<hr />
			</React.Fragment>
		);
	}
}

export default SearchBar;
