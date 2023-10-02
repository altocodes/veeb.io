// styles
import styles from "./Output.module.scss";
// components
import InfoBlocks from "../InfoBlocks";

const Output = () => {
  return (
    <div className={styles.output}>
      <div className={styles.heading}>
        <h1 className={styles.title}>
          Veebio — сервис поиска <br /> B2B-контактов для продавцов
        </h1>
      </div>
      <InfoBlocks />
    </div>
  );
};

export default Output;
