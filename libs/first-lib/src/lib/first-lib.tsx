import styles from './first-lib.module.css';

/* eslint-disable-next-line */
export interface FirstLibProps {}

export function FirstLib(props: FirstLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FirstLib!</h1>
    </div>
  );
}

export default FirstLib;
