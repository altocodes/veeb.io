// styles
import styles from "./Cards.module.scss";
// icons
import { LogoIcon } from "@/assets/icons/logo";

const Card1 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.picture}>
        <div className={styles.icon}><LogoIcon /></div>
        <div className={styles.itemGroup}>
          <span className={styles.item}>Сайт</span>
          <span className={styles.item}>Job-сайты</span>
          <span className={styles.item}>Отзывы</span>
        </div>
      </div>
      <span className={styles.description}>
        Собирайте все открытые данные по вашим потенциальным клиентам в 1 клик
      </span>
    </div>
  )
}

export default Card1