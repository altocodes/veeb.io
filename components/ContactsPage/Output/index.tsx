"use client";
//next
import { useRouter } from "next/navigation";
// styles
import styles from "./Output.module.scss";
// components
import Table from "../Table";
import Button from "@/components/Globals/Button";
// icons
import { ArrowLeftIcon } from "@/assets/icons/arrowLeft";

const Output = () => {
  const router = useRouter();
  return (
    <div className={styles.output}>
      <Button
        customStyles={styles.backBtn}
        borderType="default"
        backgroundType="outline"
        colorType="secondary"
        onClick={() => router.back()}
      >
        <ArrowLeftIcon /> Вернуться назад
      </Button>
      <div className={styles.foundContacts}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Поиск контактов</h1>
          <span className={styles.subtitle}>
            Не закрывайте страницу, иначе сбор данных начнется заново
          </span>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Output;
