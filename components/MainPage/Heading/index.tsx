// styles
import styles from "./Heading.module.scss"

const Heading = () => {
  return (
    <div className={styles.heading}>
      <h1 className={styles.headingTitle}>VEEBIO</h1>
      <span className={styles.headingSubtitle}>Поиск контактов и инсайдов для продавцов</span>
    </div>
  )
}

export default Heading