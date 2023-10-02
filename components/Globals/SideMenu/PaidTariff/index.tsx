// styles
import styles from "./PaidTariff.module.scss";
// components
import Form from "./Form";

const PaidTariff = () => {
  return (
    <div className={styles.paidTariff}>
      <div className={styles.heading}>
        <h2 className={styles.title}>
          Регистрация и подключение платного тарифа
        </h2>
        <p className={styles.text}>
          Стоимость тарифа — <strong>999 руб. / мес.</strong> <br />В стоимость
          входит просмотр <strong>50 контактов людей</strong>. Когда лимит
          закончится, его можно будет пополнить за ту же стоимость.
        </p>
      </div>
      <Form />
    </div>
  );
};

export default PaidTariff;
