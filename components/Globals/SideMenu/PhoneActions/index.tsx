// styles
import Button from "../../Button";
// components
import styles from "./PhoneActions.module.scss";

interface PhoneActionsProps {
  phoneNumber: string;
}

const PhoneActions = ({ phoneNumber }: PhoneActionsProps) => {
  return (
    <div className={styles.phoneActions}>
      <div className={styles.heading}>
        <span className={styles.subTitle}>Телефон</span>
        <h2 className={styles.title}>{phoneNumber}</h2>
      </div>
      <div className={styles.actions}>
        <span>Возможные действия</span>
        <div className={styles.buttonGroup}>
          {["Позвонить", "WhatsApp", "Telegram"].map((btn) => (
            <Button
              borderType="default"
              backgroundType="outline"
              colorType="primary"
              children={btn}
              key={btn}
            />
          ))}
        </div>
      </div>
      <div className={styles.search}>
        <span>Искать самостоятельно</span>
        <div className={styles.buttonGroup}>
          {["Яндекс", "Google"].map((btn) => (
            <Button
              borderType="default"
              backgroundType="outline"
              colorType="primary"
              children={btn}
              key={btn}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneActions;
