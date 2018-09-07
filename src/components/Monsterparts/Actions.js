import React from 'react';
import Action from './Action'

const Actions = React.createClass({
	render() {

		const monster = this.props.monster;

		return (
			<div className="monster-actions">

				<h3 className="section-title">Abilities</h3>

				{ monster.abilities ? monster.abilities.map((action, i) => <Action {...this.props} key={i} i={i} action={action} />) : null }
			</div>
		)
	}
});

export default Actions;
