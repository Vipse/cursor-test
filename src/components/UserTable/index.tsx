import { useEffect, useState } from 'react';
import type { User } from '../../types/user';
import { fetchUsers } from '../../utils/api';
import styles from './UserTable.module.css';
import UserModal from '../UserModal';
import UserRow from '../UserRow';
import Spinner from '../Spinner';

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  const deleteUser = (id: number) => {
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Users</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name / Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow
              key={user.id}
              user={user}
              onSelect={setSelectedUser}
              onDelete={(id, e) => { e.stopPropagation(); deleteUser(id); }}
            />
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default UserTable; 