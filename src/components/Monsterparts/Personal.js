import React from 'react';

const Personal = React.createClass({
	render() {

		const monster = this.props.monster;


		return (
			<div className="monster-personal">

				<h3 className="section-title">Personal</h3>

				{ monster.personal.endurance 		? <p>Endurance: {monster.personal.endurance}</p> 			: null }
				{ monster.personal.composure 		? <p>Composure: {monster.personal.composure}</p> 		: null }
				{ monster.personal.focus 	? <p>Focus: {monster.personal.focus}</p>	: null }
				{ monster.personal.vigilance 	? <p>Vigilance: {monster.personal.vigilance}</p> 	: null }
			</div>
		)
	}
});

export default Personal;
