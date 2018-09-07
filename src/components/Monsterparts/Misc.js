import React from 'react';

const Misc = React.createClass({
	render() {

		const monster = this.props.monster;

		return (
			<div className="monster-misc">

				<h3 className="section-title">Misc</h3>

				{ monster.misc.species ? <p>Species: {monster.misc.species} </p>							: null }
				{ monster.misc.book				? <p>{monster.misc.book} Page {monster.misc.page}</p> 							: null }


			</div>
		)
	}
});

export default Misc;
