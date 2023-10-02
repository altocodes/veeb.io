// styles
import styles from "./TestBlocks.module.scss";

const DataItem = () => {
  const phones = {};
  return (
    <div className={styles.item}>
      <h2>Phones</h2>
      {Object.values(phones).map((item: any) => (
        <div className={styles.block}>
          <span className={styles.value}>+{item.source}</span>
        </div>
      ))}
    </div>
  );
};

export default DataItem;
