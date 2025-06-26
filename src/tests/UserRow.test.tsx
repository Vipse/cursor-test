import { render, screen, fireEvent } from '@testing-library/react';
import UserRow from '../components/UserRow';
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

describe('UserRow', () => {
  it('renders user info and calls handlers', () => {
    const onSelect = vi.fn();
    const onDelete = vi.fn();
    render(
      <table><tbody>
        <UserRow user={mockUser} onSelect={onSelect} onDelete={onDelete} />
      </tbody></table>
    );
    expect(screen.getByText('Test User')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Test User'));
    expect(onSelect).toHaveBeenCalledWith(mockUser);
    fireEvent.click(screen.getByRole('button'));
    expect(onDelete).toHaveBeenCalled();
  });
}); 