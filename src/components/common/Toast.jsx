import { FiCheck, FiInfo, FiX } from 'react-icons/fi';
import { useToast } from '../../context/ToastContext';
import styles from './Toast.module.css';

const Toast = () => {
  const { toasts, removeToast } = useToast();

  if (!toasts.length) return null;

  return (
    <div className={styles.container} aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className={`${styles.toast} ${styles[toast.type]}`}>
          <span className={styles.icon}>
            {toast.type === 'error' ? <FiX /> : <FiCheck />}
          </span>
          <p>{toast.message}</p>
          <button type="button" onClick={() => removeToast(toast.id)} aria-label="Dismiss">
            <FiX size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
