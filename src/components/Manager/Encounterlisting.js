import React from 'react';
import { Link } from 'react-router';

const Listing = React.createClass({
	render() {

		const { monster, i } = this.props;

		return (
			<div className="monster-listing col-sm-3">

				<h2>
					<Link to={`/listing/${monster.name}`}>
						{monster.name}
					</Link>
				</h2>

				<label htmlFor="endurance">Endurance:</label>
				<input name="endurance" type="text" defaultValue={monster.personal.endurance} onChange={ e => this.props.update_listing(e.target.name, e.target.value, i ) } />

				<label htmlFor="composure">Composure:</label>
				<input name="composure" type="text" defaultValue={monster.personal.composure} onChange={ e => this.props.update_listing(e.target.name, e.target.value, i ) } />

				<label htmlFor="resistance">Resistance:</label>
				<input name="resistance" type="text" defaultValue={monster.armor.resistance} onChange={ e => this.props.update_listing(e.target.name, e.target.value, i ) } />


				<label htmlFor="initiative">Initiative:</label>
				<input name="initiative" type="text" defaultValue="" onChange={ e => this.props.update_listing(e.target.name, e.target.value, i ) } />

				<label htmlFor="stance">Stance:</label>
				<input name="stance" type="text" defaultValue="" onChange={ e => this.props.update_listing(e.target.name, e.target.value, i ) } />


				<label htmlFor="notes">Notes:</label>
				<textarea name="notes" defaultValue={monster.notes} onChange={ e => this.props.update_listing( e.target.name, e.target.value, i ) } />

				<p className="remove" onClick={ e => this.props.remove_listing( i ) }>Remove</p>

			</div>
		)
	}
});

export default Listing;
