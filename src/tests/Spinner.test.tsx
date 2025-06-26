import { render, screen } from '@testing-library/react';
import Spinner from '../components/Spinner';
import styles from '../components/Spinner/Spinner.module.css';
import '@testing-library/jest-dom';

describe('Spinner', () => {
  it('renders spinner overlay and spinner', () => {
    render(<Spinner />);
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass(styles.spinner);
  });

  it('displays visually hidden loading text', () => {
    render(<Spinner />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
}); 