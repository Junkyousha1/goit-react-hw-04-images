import DotLoader from 'react-spinners/ClipLoader';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.overlay}>
      <DotLoader size={250} color={'#461646'} className={styles.loader} />
    </div>
  );
}
