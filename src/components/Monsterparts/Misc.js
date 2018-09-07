import React from 'react';

const Misc = React.createClass({
	render() {

		const monster = this.props.monster;

		return (
			<div className="monster-misc">

				<h3 className="section-title">Misc</h3>

				{ monster.misc.species ? <p>Species: {monster.species} </p>							: null }
				{ monster.misc.book				? <p>{monster.book} Page {monster.page}</p> 							: null }


			</div>
		)
	}
});

export default Misc;
