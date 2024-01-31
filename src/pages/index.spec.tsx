// renders without crashing
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Index from './index';

describe('Index', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    expect(true).toBeTruthy();
  });
  it('renders heading', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    const heading = getByText(/Recipes Book/i);
    expect(heading).toBeInTheDocument();
  });
  it('renders search input', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    const searchInput = getByPlaceholderText(
      /Search recipe name\/ingredients/i
    );
    expect(searchInput).toBeInTheDocument();
  });
});
