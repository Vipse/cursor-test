import type { User } from '../../types/user';
import styles from './UserModal.module.css';

interface Props {
  user: User;
  onClose: () => void;
}

const UserModal = ({ user, onClose }: Props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>×</button>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: <a href={`https://${user.website}`}>{user.website}</a></p>
        <p>Address: {user.address.street}, {user.address.city}</p>
        <p>Map: <a href={`https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`} target="_blank">View</a></p>
        <p>Company: {user.company.name}</p>
      </div>
    </div>
  );
};

export default UserModal; 