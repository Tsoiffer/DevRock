import React from "react";
import "./artist-card.css";
import {Link} from "react-router-dom"

class ArtistCard extends React.Component {
	render() {
		return (
			<Link to={"/artista?" + this.props.titulo}>
			<div className="col-3">
			<div className="item ">
				<img
					src= {this.props.img}
					alt=""
                    className="pic img-fluid"
				/>
				<p className="titulo">{this.props.titulo}</p>
			</div>
			</div>
			</Link>
		);
	}
}

export default ArtistCard;
