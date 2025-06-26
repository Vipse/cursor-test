import type { User } from '../../types/user';
import styles from '../UserTable/UserTable.module.css';

interface UserRowProps {
  user: User;
  onSelect: (user: User) => void;
  onDelete: (id: number, e: React.MouseEvent<HTMLButtonElement>) => void;
}

const UserRow = ({ user, onSelect, onDelete }: UserRowProps) => {
  return (
    <tr onClick={() => onSelect(user)}>
      <td><strong>{user.name}</strong><br />{user.email}</td>
      <td>{`${user.address.city}, ${user.address.street}`}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      <td>{user.company.name}</td>
      <td>
        <button onClick={e => onDelete(user.id, e)}>❌</button>
      </td>
    </tr>
  );
};

export default UserRow; 