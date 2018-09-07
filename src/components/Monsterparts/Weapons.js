import React from 'react';
import Weapon from './Weapon'

const Weapons = React.createClass({
	render() {

		const monster = this.props.monster;

		return (
			<div className="monster-weapons">

				<h3 className="section-title">Equipment</h3>
				<h4 className="section-title">Weapons</h4>
				{ monster.weapons ? monster.weapons.map((weapon, i) => <Weapon {...this.props} key={i} i={i} weapon={weapon} />) : null }
			</div>
		)
	}
});

export default Weapons;
