import { render, screen } from '@testing-library/react';
import heading from 'src/components/heading/--tests--/heading.test.js';

test('renders learn react link', () => {
	render(<heading />);
	const linkElement = screen.getByTestId('greeting_header');
	expect(linkElement).toBeInTheDocument();
});
