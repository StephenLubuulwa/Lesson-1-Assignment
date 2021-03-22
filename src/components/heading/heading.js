import React, { Component } from 'react';
import './heading.css';

/*export default function heading(props) {
	return (
		<h1
			className={props.endabika || 'firstHeader'}
			data-testid='greeting_header'
		>
			{props.title}
		</h1>
	);
}*/

class Heading extends Component {
	render() {
		console.log(this.props);
		return (
			<h1
				className={this.props.endabika || 'firstHeader'}
				data-testid='greeting_header'
			>
				{this.props.title}
			</h1>
		);
	}
}
export default Heading;
