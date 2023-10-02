// styles
import styles from "./Heading.module.scss";
// icons
import { LogoIcon } from "@/assets/icons/logo";

const Heading = () => {
  return (
    <div className={styles.heading}>
      <LogoIcon />
      <h1 className={styles.title}>VEEBIO</h1>
      <span className={styles.subtitle}>Поиск контактов и инсайдов для B2B-продавцов</span>
    </div>
  )
}

export default Heading