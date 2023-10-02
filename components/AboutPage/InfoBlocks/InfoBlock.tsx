import { ReactNode } from "react";
// next
import Link from "next/link";
// styles
import styles from "./InfoBlocks.module.scss";

interface InfoBlockProps {
  title: string;
  text: string;
  link?: string;
  url?: string;
  picture: () => ReactNode;
}

const InfoBlock = ({ title, text, link, url, picture }: InfoBlockProps) => {
  return (
    <div className={styles.block}>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.text}>{text}</span>
        {!!link && (
          <Link className={styles.link} href={url ? url : ""}>
            {link}
          </Link>
        )}
      </div>
      {picture()}
    </div>
  );
};

export default InfoBlock;
