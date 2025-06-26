import axios from 'axios';
import { fetchUsers } from '../utils/api';
import type { User } from '../types/user';
import { describe, it, expect, vi, type Mock } from 'vitest';

vi.mock('axios');
const mockedAxios = vi.mocked(axios);

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

describe('fetchUsers', () => {
  it('fetches users from API', async () => {
    (mockedAxios.get as unknown as Mock).mockResolvedValue({ data: mockUsers });
    const users = await fetchUsers();
    expect(users).toEqual(mockUsers);
    expect(mockedAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
  });
}); 