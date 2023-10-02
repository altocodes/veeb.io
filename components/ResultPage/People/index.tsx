// styles
import styles from "./People.module.scss";
// components
import Table from "../Table";
// db
import {
  peopleColsTableData,
  peopleRowTableData,
} from "@/utils/data/ResultPage/tableData";

const People = () => {
  return (
    <div className={styles.people}>
      <div className={styles.heading}>
        <h1 className={styles.title}>Люди</h1>
        <span className={styles.subTitle}>информация не хранится на сервере и собирается в realtime по запросу</span>
      </div>
      <Table cols={peopleColsTableData} rows={peopleRowTableData} />
      <div className={styles.removeFromBtn}>
        <button>Удалить меня из этого списка</button>
      </div>
    </div>
  )
}

export default People