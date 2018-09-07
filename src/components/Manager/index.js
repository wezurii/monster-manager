import React from 'react';
import { Link } from 'react-router';
import Encounterlisting from './Encounterlisting';
import Helmet from 'react-helmet';

if(process.env.WEBPACK) require('./style.scss');

const Manager = React.createClass ({

	render() {

		const { encounter } = this.props;

		if ( encounter.length > 0 ) {

			return (

			<div className="monster-manager row">
				<Helmet
					title={ 'Teki no Michi: Encounter Admin' }
					meta={[
						{name: "description", content: 'An L5R RPG 5e encounter manager for GMs.' },
						{property: 'og:title', content: 'Teki no Michi: Encounter Admin'},
					]} />

					{encounter.map((monster, i) => <Encounterlisting {...this.props} key={i} i={i} monster={monster} />)}
				</div>
			);

		} else {

			return (

			<div className="monster-manager row">
				<Helmet
					title={ 'Teki no Michi: Encounter Admin' }
					meta={[
						{name: "description", content: 'An L5R RPG 5e encounter manager for GMs.' },
						{property: 'og:title', content: 'Teki no Michi: Encounter Admin'},
					]} />

					<div className="alert alert-danger col-xs-12">No monsters have been added to your encounter.</div>
				</div>
			);
		}
	}
});

export default Manager;
