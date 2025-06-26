import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import UserTable from '../components/UserTable';
import * as api from '../utils/api';
import type { User } from '../types/user';
import { vi, type Mock } from 'vitest';
import '@testing-library/jest-dom';

vi.mock('../utils/api');

const mockUsers: User[] = [
  {
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
  },
];

(api.fetchUsers as unknown as Mock).mockResolvedValue(mockUsers);

describe('UserTable', () => {
  it('shows spinner initially and then renders users', async () => {
    render(<UserTable />);
    expect(screen.getByRole('status')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText('Test User')).toBeInTheDocument());
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
  });

  it('renders with empty user list', async () => {
    (api.fetchUsers as unknown as Mock).mockResolvedValueOnce([]);
    render(<UserTable />);
    await waitFor(() => expect(screen.queryByRole('status')).not.toBeInTheDocument());
    // Should render table headers but no user rows
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.queryByText('Test User')).not.toBeInTheDocument();
  });

  it('deletes a user when delete button is clicked', async () => {
    (api.fetchUsers as unknown as Mock).mockResolvedValueOnce(mockUsers);
    render(<UserTable />);
    await waitFor(() => expect(screen.getByText('Test User')).toBeInTheDocument());
    const deleteButton = screen.getByRole('button', { name: /❌/ });
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Test User')).not.toBeInTheDocument();
  });

  it('opens and closes the UserModal', async () => {
    (api.fetchUsers as unknown as Mock).mockResolvedValueOnce(mockUsers);
    render(<UserTable />);
    await waitFor(() => expect(screen.getByText('Test User')).toBeInTheDocument());
    // Click the row to open modal
    fireEvent.click(screen.getByText('Test User'));
    expect(screen.getByText('Username: testuser')).toBeInTheDocument();
    // Click the close button
    fireEvent.click(screen.getByRole('button', { name: /×/ }));
    expect(screen.queryByText('Username: testuser')).not.toBeInTheDocument();
  });
}); 