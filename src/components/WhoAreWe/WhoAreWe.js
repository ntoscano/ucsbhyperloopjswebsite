import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './WhoAreWe.css'
import blurb from './blurb.js'

class WhoAreWe extends Component {

		constructor(props) {
				super(props);
		}

		render() {
			return (
				<div className="WhoAreWe">
					<h1 className="Caslon">Who Are we?</h1>
					<p className="blurb">{"Negotium Solutions is a technical consultancy that specializes in agile web development. We concentrate on responsive web design, cross platform functionality, actionable analytics, and scalability. Our goal is to enable your company to capture opportunities by leveraging bleeding edge technologies and practices, while laying strong technical foundations for future growth and development."}</p>
				</div>
			)
		};

}

export default WhoAreWe