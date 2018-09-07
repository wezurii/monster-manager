import React from 'react';

const Rings = React.createClass({


	render() {

		const monster = this.props.monster;

		return (
			<div className="monster-Rings">

				<h3 className="section-title">Rings</h3>

				<p>Earth: {monster.rings.earth}</p>
				<p>Air: {monster.rings.air}</p>
				<p>Fire: {monster.rings.fire}</p>
				<p>Water: {monster.rings.water}</p>
				<p>Void: {monster.rings.void}</p>

			</div>
		)
	}
});

export default Rings;
