// renders without crashing
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Detail from './detail';

describe('Detail', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>
    );
    expect(true).toBeTruthy();
  });
  it('renders heading', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/detail/unknown']}>
        <Detail />
      </MemoryRouter>
    );
    const heading = getByText(/not found/i);
    expect(heading).toBeInTheDocument();
  });
});
