import { render, screen, fireEvent } from '@testing-library/react';
import UserModal from '../components/UserModal';
import type { User } from '../types/user';
import { vi } from 'vitest';
import '@testing-library/jest-dom';

const mockUser: User = {
  id: 1,
  name: 'Test User',
  username: 'testuser',
  email: 'test@example.com',
  address: {
    street: 'Test St',
    suite: 'Apt 1',
    city: 'Testville',
    zipcode: '12345',
    geo: { lat: '0', lng: '0' },
  },
  phone: '123-456-7890',
  website: 'test.com',
  company: { name: 'Test Co', catchPhrase: 'Test!', bs: 'test' },
};

describe('UserModal', () => {
  it('renders user details and close button', () => {
    const onClose = vi.fn();
    render(<UserModal user={mockUser} onClose={onClose} />);
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText((content) =>
      content.includes('test@example.com')
    )).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    expect(onClose).toHaveBeenCalled();
  });
}); 