import React from 'react';
import { Link } from 'react-router';

const Listing = React.createClass({
	render() {

		const { monster, i } = this.props;

		return (
			<div className="monster-listing col-xs-12 col-sm-4">

				<h2>
					<Link to={`/listing/${monster.name}`}>
						<center>{monster.name}</center>
					</Link>
				</h2>

				<center><p>{monster.type} - Conflict Rank:<img src="/assets/military.png"/> {monster.conflicts.military} <img src="/assets/political.png"/> {monster.conflicts.political}</p></center>
			</div>
		)
	}
});

export default Listing;
