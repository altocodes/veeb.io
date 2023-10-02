// styles
import styles from "./Loader.module.scss";

interface LoaderProps {
  value?: string;
}

const Loader = ({ value }: LoaderProps) => {
  return (
    <>
      <div className={styles.loading}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
      {value && <span className={styles.text}>{value}</span>}
    </>
  );
};

export default Loader;
