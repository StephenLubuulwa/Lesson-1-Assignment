import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders App successfully', () => {
	render(<App />);
	const firstHeading = screen.getByText(
		'Daniel Ssejjemba'
	);
	const secondHeading = screen.getByText(
		'Riqui Puig'
	);
	expect(firstHeading).toBeInTheDocument();
	expect(secondHeading).toBeInTheDocument();
});
