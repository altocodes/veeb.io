"use client";
// styles
import styles from "@/assets/styles/pages/not-found.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <h1>Страница не найдена</h1>
      <span>Попробуйте другой адрес</span>
    </div>
  );
};

export default NotFoundPage;
