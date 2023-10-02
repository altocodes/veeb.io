import { useEffect, useState } from "react";
// styles
import styles from "./Table.module.scss";
// components
import FailRow from "./FailRow";
import SuccessRow from "./SuccessRow";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const arr: any = localStorage.getItem("websites");
    setData(JSON.parse(arr));
  }, []);

  const removeCompany = (address: string) => {
    const websites: any = localStorage.getItem("websites");
    const filteredWesites = JSON.parse(websites).filter(
      (item: any) => item.address !== address
    );
    setData(filteredWesites);
    localStorage.setItem("websites", JSON.stringify(filteredWesites));
  };

  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>сайт</th>
            <th></th>
            <th>собрано контактов</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row: any, key: number) => (
            <tr key={key}>
              {!row.error ? (
                <SuccessRow {...row} />
              ) : (
                <FailRow {...row} removeCompany={removeCompany} />
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
