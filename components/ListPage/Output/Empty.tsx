// next
import Link from "next/link";
// styles
import styles from "./Output.module.scss";
// icons
import { EmptyEmojiIcon } from "@/assets/icons/emptyEmoji";

const Empty = () => {
  return (
    <div className={styles.empty}>
      <EmptyEmojiIcon />
      <h1 className={styles.title}>Список для экспорта пуст</h1>
      <span className={styles.text}>
        Чтобы добавить компанию для экспорта воспользуйтесь <br /> функцией
        «Добавить к экспорту» после поиска компании.
      </span>
      <Link href="/about" className={styles.link}>
        Узнать как работает Veebio
      </Link>
    </div>
  );
};

export default Empty;
