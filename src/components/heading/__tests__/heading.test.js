import { render, screen } from '@testing-library/react';
import Heading from '../heading';

test('renders learn react link', () => {
	render(<Heading />);
	const linkElement = screen.getByTestId('greeting_header');
	expect(linkElement).toBeInTheDocument();
});
