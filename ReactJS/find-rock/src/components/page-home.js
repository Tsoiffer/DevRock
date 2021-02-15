import React, { Component } from "react";
import "./page-home.css";
import logo from "../logo.svg";

class PageHome extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.name, e.target.value);
		this.props.history.push("/busqueda?" + this.state.busqueda);
	};
	handleChange = (e) => {
		this.setState({
			busqueda: e.target.value,
		});
	};
	state = {
		busqueda: "",
	};
	render() {
		return (
			<div className="container">
				<div className="row centrado">
					<div className="col-md-6 centrar">
						<img src={logo} alt="" id="logo" />
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
									value={this.state.busqueda}
									onChange={this.handleChange}
									name="busqueda"
								/>
							</div>
							<div className="actions">
								<button className="btng" type="submit">
									Search Similar Artist
								</button>
								<button className="btng">EscuelaDevRock</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default PageHome;
