import React from "react";
import "./artist-card.css";

class ArtistCard extends React.Component {
	render() {
		return (
			<div className="col-md-3">
				<img
					src= {this.props.img}
					alt=""
                    className="pic"
				/>
				<p>{this.props.titulo}</p>
			</div>
		);
	}
}

export default ArtistCard;
