import React from 'react';
import { Link } from 'react-router';

import General from './General';
import Rings from './Rings';
import Misc from './Misc';
import Societal from './Societal';
import Skills from './Skills';
import Actions from './Actions';
import Admin from './Admin';
import Helmet from 'react-helmet';
import Personal from './Personal';
import Weapons from './Weapons';
import Equipment from './Equipment';


if(process.env.WEBPACK) require('./style.scss');

const Monster = React.createClass({
	render() {

		const { postId } = this.props.params;
		const i = this.props.monsters.findIndex( (monster) => monster.name === postId );
		const monster = this.props.monsters[i];

		return (
			<div className="monster-single row">

				<Helmet
					title={ monster.name + ' - Monster Manager Listing' }
					meta={[
						{name: "description", content: monster.name},
						{property: 'og:title', content: monster.name + ' - Monster Manager Listing'}
					]} />

				<div className="col-sm-3 col-sm-push-9">
					<Admin {...this.props} i={i} monster={monster} />
				</div>
				<div className="col-sm-9 col-sm-pull-3">
					<General {...this.props} i={i} monster={monster} />
				</div>


				<div className="col-sm-3">
					<Personal {...this.props} i={i} monster={monster} />
				</div>
				<div className="col-sm-3">
					<Rings {...this.props} i={i} monster={monster} />
				</div>
				<div className="col-sm-3">
					<Skills {...this.props} i={i} monster={monster} />
				</div>
				<div className="col-sm-3">
					<Societal {...this.props} i={i} monster={monster} />
				</div>
				<div className="col-sm-6">
					<Weapons {...this.props} i={i} monster={monster} />
				</div>
				<div className="col-sm-6">
					<Equipment {...this.props} i={i} monster={monster} />
				</div>

				<div className="col-sm-12">
					<Actions {...this.props} i={i} monster={monster} />
				</div>

			</div>
		)
	}
});

export default Monster;
