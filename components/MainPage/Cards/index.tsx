import Link from "next/link";
// styles
import styles from "./Cards.module.scss";
// components
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Cards = () => {
  return (
    <>
      <div className={styles.cardContainer}>
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
      <div className={styles.moreLink}>
        <Link href="/about">Узнать больше о Veebio</Link>
      </div>
    </>
  );
};

export default Cards;
