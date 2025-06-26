import styles from './Spinner.module.css';

const Spinner = () => (
  <div className={styles.spinnerOverlay}>
    <div className={styles.spinner} role="status" aria-live="polite" aria-label="Loading">
      <span style={{position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0}}>
        Loading...
      </span>
    </div>
  </div>
);

export default Spinner; 