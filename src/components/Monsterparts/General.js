import React from 'react';

const General = React.createClass({
	render() {

		const monster = this.props.monster;

		return (
			<div className="monster-general">

				<h2 className="title">{monster.name}</h2>
				{ monster.conflicts.military ? <p>Conflict Rank:<img src="/assets/military.png"/> {monster.conflicts.military} <img src="/assets/political.png"/> {monster.conflicts.political}</p> 						: null }
				<p>{monster.description}</p>

			</div>
		)
	}
});

export default General;
