// styles
import styles from "./Contacts.module.scss";
// components
import Table from "../Table";

interface ContactsProps {
  data: any;
}

const Contacts = ({ data }: ContactsProps) => {
  return (
    <div className={styles.contacts}>
      <h1 className={styles.title}>Контакты</h1>
      <div className={styles.table}>
        <Table
          phones={data?.general?.phones}
          emails={data?.general?.emails}
          telegrams={data?.general?.telegrams}
          vk={data?.general?.vk}
        />
      </div>
    </div>
  );
};

export default Contacts;
