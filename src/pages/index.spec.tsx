// renders without crashing
import { render } from '@testing-library/react';
import Index from './index';

describe('Index', () => {
  it('renders without crashing', () => {
    render(<Index />);
    expect(true).toBeTruthy();
  });
});
