// styles
import styles from "./Cards.module.scss";
// components
import Button from "@/components/Globals/Button";

const Card3 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.picture3}>
        <Button
          customStyles={styles.btn}
          borderType="round"
          backgroundType="fill"
          colorType="success"
        >
          Сделать круто!
        </Button>
      </div>
      <span className={styles.description}>
        Используйте инсайды о компании, чтобы холодный контакт превратился в
        теплый
      </span>
    </div>
  );
};

export default Card3;
