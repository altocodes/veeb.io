"use client";
import { useEffect, useState } from "react";
// styles
import styles from "./Output.module.scss";
// components
import Empty from "./Empty";
import List from "./List";

const Output = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const arr: any = localStorage.getItem("websites");
    setData(JSON.parse(arr));
    setLoading(false);
  }, []);

  return (
    <div className={styles.output}>
      {loading ? <></> : data?.length ? <List data={data} setData={setData} /> : <Empty />}
    </div>
  );
};

export default Output;
