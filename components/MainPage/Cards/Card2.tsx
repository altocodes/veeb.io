// styles
import styles from "./Cards.module.scss";
// icons
import { ExcelIcon } from "@/assets/icons/excel";

const Card2 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.picture2}>
        <div className={styles.icon}><ExcelIcon /></div>
        <div className={styles.itemGroup}>
          <input type="checkbox" checked readOnly className={styles.checkBox} />
          <span className={styles.text}>+7 939 800-81-85</span>
        </div>
      </div>
      <span className={styles.description}>
        Добавляйте найденные данные в единый список и экспортируйте в Excel
      </span>
    </div>
  );
};

export default Card2;
