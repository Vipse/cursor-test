import axios from 'axios';
import type { User } from '../types/user';

export const fetchUsers = async (): Promise<User[]> => {
  const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
  return res.data;
}; 