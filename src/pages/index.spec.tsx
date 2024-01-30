// renders without crashing
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Index from './index';

describe('Index', () => {
  it('renders without crashing', () => {
    render(<Index />);
    expect(true).toBeTruthy();
  });
  it('renders heading', () => {
    const { getByText } = render(<Index />);
    const heading = getByText(/Recipes Book/i);
    expect(heading).toBeInTheDocument();
  });
  it('renders search input', () => {
    const { getByPlaceholderText } = render(<Index />);
    const searchInput = getByPlaceholderText(
      /Search recipe name\/ingredients/i
    );
    expect(searchInput).toBeInTheDocument();
  });
});
