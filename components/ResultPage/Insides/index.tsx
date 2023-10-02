"use client";
import { useState } from "react";
// styles
import styles from "./Insides.module.scss";
// db
import { tabsData } from "@/utils/data/ResultPage/tabsData";

const Insides = () => {
  const [currentTab, setCurrentTab] = useState<number>(1);

  return (
    <div className={styles.insides}>
      <h1 className={styles.title}>Инсайды</h1>
      <div className={styles.tabs}>
        {tabsData.map((tab) => (
          <div
            className={styles.tabItem}
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            // TODO: set active class
            style={{
              borderBottom: currentTab === tab.id ? "2px solid #4343FF" : "",
            }}
          >
            {tab.value} ({tab.count})
          </div>
        ))}
      </div>
      <div className={styles.tabSearchResult}>{`${
        tabsData[currentTab - 1].searchValue
      }: ${tabsData[currentTab - 1].count}`}</div>
    </div>
  );
};

export default Insides;
