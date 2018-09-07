import React from 'react';

const Societal = React.createClass({
	render() {

		const monster = this.props.monster;


		return (
			<div className="monster-Societal">

				<h3 className="section-title">Societal</h3>

				{ monster.societal.honor 		? <p>Honor: {monster.societal.honor}</p> 			: null }
				{ monster.societal.glory 		? <p>Glory: {monster.societal.glory}</p> 		: null }
				{ monster.societal.status 	? <p>Status: {monster.societal.status}</p>	: null }
				{ monster.societal.demeanor 	? <p>Demeanor: {monster.societal.demeanor.type}</p> 	: null }
				{ monster.societal.demeanor.bonus_type ? <p>{monster.societal.demeanor.bonus_magnitude} {monster.societal.demeanor.bonus_type} {monster.societal.demeanor.bane_magnitude} {monster.societal.demeanor.bane_type}</p> : null }
			</div>
		)
	}
});

export default Societal;
