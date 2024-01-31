// renders without crashing
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Detail from './detail';

describe('Detail', () => {
  it('renders without crashing', () => {
    render(<Detail />);
    expect(true).toBeTruthy();
  });
});
