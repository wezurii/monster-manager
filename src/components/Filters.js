import React from 'react';
import { Link } from 'react-router';
import Filter from './Filter';
import Helmet from 'react-helmet';

const Filters = React.createClass({

	render() {

		return (

			<div className="monster-filters row col-sm-12">

			<Helmet
				title={ 'Teki no Michi: Encounter Management Tools for GMs' }
				meta={[
					{name: "description", content: 'An interactive L5R RPG 5e "Monster Manual" featuring over 100 monsters from official and unofficial L5R sources!' },
					{property: 'og:title', content: 'Teki no Michi: Encounter Management Tools for GMs'},
				]} />

				<Filter {...this.props} value={this.props.filters.challenge_rating_min} key="challenge_rating_min" id="challenge_rating_min" filter="challenge_rating" label="Challenge Rating - Min"/>
				<Filter {...this.props} value={this.props.filters.challenge_rating_max} key="challenge_rating_max" id="challenge_rating_max" filter="challenge_rating" label="Challenge Rating - Max"/>
				<Filter {...this.props} value={this.props.filters.type} key="type" id="type" filter="type" label="Type"/>
				<Filter {...this.props} value={this.props.filters.book} key="book" id="book" filter="book" label="Book"/>
				<Filter {...this.props} value={this.props.filters.search} key="search" id="search" filter="search" label="Search"/>

			</div>
		)
	}
});

export default Filters;
