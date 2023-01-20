import styles from './alert.module.scss';
import { clsx } from 'clsx';

export default function Alert({ children, type }) {
    return (
        <div
            className={clsx({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error',
            })}
        >
            {children}
        </div>
    );
}