import React from 'react';

const Weapon = React.createClass({
	render() {

		const weapon = this.props.weapon;

		return (
			<div className="monster-weapon">

				<h3>{this.props.section}</h3>

				<b className="section-title">{weapon.name}</b>

				{ weapon.range ? <span className="weapon-item"> Range: {weapon.range}; Damage: {weapon.damage}; {weapon.qualities}</span> : null }

			</div>
		)
	}
});

export default Weapon;
