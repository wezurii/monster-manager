import React from 'react';

const Equipment = React.createClass({
	render() {

		const monster = this.props.monster;

		return (
			<div className="monster-weapons">

				<h4 className="section-title">Armor</h4>
				<p><b>{monster.armor.name}</b> Resistance {monster.armor.resistance}, {monster.armor.qualities}</p>
				<h4 className="section-title">Gear</h4>
				<p>{monster.gear}</p>



			</div>
		)
	}
});

export default Equipment;
