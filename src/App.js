import './App.css';
import Heading from './components/heading/heading';
import React, { Component } from 'react';

class App extends Component {
	render() {
		const people = [
			{ id: '01', name: 'Daniel Ssejjemba', active: true },
			{ id: '02', name: 'Stephen Lubuulwa', active: false },
			{ id: '03', name: 'Junior Kiwanuka', active: false },
			{ id: '04', name: 'Riqui Puig', active: true },
		];
		return (
			<div className='App'>
				{people.map(person => {
					return (
						<Heading
							title={person.name}
							endabika={person.active ? 'firstHeader' : 'velvetHeader'}
							key={person.id}
						/>
					);
				})}
			</div>
		);
	}
}
export default App;

/*function App() {
	const people = [
		{ id: '01', name: 'Daniel Ssejjemba', active: true },
		{ id: '02', name: 'Stephen Lubuulwa', active: false },
		{ id: '03', name: 'Junior Kiwanuka', active: false },
		{ id: '04', name: 'Riqui Puig', active: true },
	];
	return (
		<div className='App'>
			{people.map(person => {
				return (
					<Heading
						title={person.name}
						endabika={person.active ? 'firstHeader' : 'velvetHeader'}
						key={person.id}
					/>
				);
			})}
		</div>
	);
}

export default App;*/
