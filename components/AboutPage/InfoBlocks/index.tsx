// styles
import styles from "./InfoBlocks.module.scss";
// components
import InfoBlock from "./InfoBlock";
// db
import { blocksData } from "@/utils/data/AboutPage/blocksData";

const InfoBlocks = () => {
  return (
    <div className={styles.infoBlocks}>
      {blocksData.map((block) => (
        <InfoBlock key={block.id} {...block} />
      ))}
    </div>
  );
};

export default InfoBlocks;
