// styles
import styles from "./MyInfoDeletion.module.scss";
// components
import Form from "./Form";

const MyInfoDeletion = () => {
  return (
    <div className={styles.myInfoDeletion}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Удаление информации о себе</h2>
        <span className={styles.subTitle}>
          Если в отчетах сканирования вы нашли информацию о себе и хотели бы её
          удалить, то вы можете оставить заявку в эту форму. После проверки
          модератором, мы сможем удалить упоминание ваших данных с того
          источника, на котором они были найдены.
        </span>
      </div>
      <Form />
    </div>
  );
};

export default MyInfoDeletion;
