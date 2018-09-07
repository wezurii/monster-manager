import React from 'react';

const Skills = React.createClass({
	render() {

		const monster = this.props.monster;

		return (
			<div className="monster-skills">

				<h3 className="section-title">Skills</h3>

				{ monster.skills.artisan 	?	<p>Artisan: {monster.skills.artisan}</p> 		: null }
				{ monster.skills.martial		?	<p>Martial: {monster.skills.martial}</p> 				: null }
				{ monster.skills.scholar		?	<p>Scholar: {monster.skills.scholar}</p> 			: null }
				{ monster.skills.social		?	<p>Social: {monster.skills.social}</p> 			: null }
				{ monster.skills.trade		?	<p>Trade: {monster.skills.trade}</p> 				: null }

			</div>
		)
	}
});

export default Skills;
