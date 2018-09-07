import React from 'react';
import { Link } from 'react-router';

const Filters = React.createClass({

	render() {

		return (
			<div className="footer row">

				<div className="bulilt-with col-sm-4">
					<p><strong>An interactive L5R RPG 5e 'Monster Manual' built on React.js.</strong></p>
				</div>

				<div className="bulilt-with col-sm-4">
					<p>No way affiliated with <a href="https://www.fantasyflightgames.com/en/index/" target="_blank" title="FFG">Fantasy Flight Games</a></p>
				</div>

				<div className="repo col-sm-4">
					<p><a href="https://github.com/wezurii/teki-no-michi" target="_blank" title="Contribute on GitHub">Contribute on GitHub!</a></p>
				</div>

				<div className="col-xs-12 hidden-xs">
					<div id="pw_adbox_79779_5_1" className="project-wonderful"></div>
				</div>

			</div>
		)
	}
});

export default Filters;
