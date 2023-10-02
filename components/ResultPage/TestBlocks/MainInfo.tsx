// styles
import styles from "./TestBlocks.module.scss";

interface MainInfoprops {
  data: any;
}

interface RenderObjectProps {
  obj: any;
}

function renderObject(obj: RenderObjectProps) {
  if (typeof obj === "object" && obj !== null) {
    return Object.entries(obj).map(([key, value]) => (
      <div key={key} style={{
        lineBreak: "anywhere",
      }}>
        <em className={styles.titleOutput}>{key}: </em>
        {renderObject(value)}
      </div>
    ));
  }

  return (
    <>
      {String(obj).startsWith("http") ? (
        <a href={obj} target="_blank" rel="noreferrer">
          {obj}
        </a>
      ) : (
        <span style={{ color: "#0078D2" }}>{obj}</span>
      )}
    </>
  );
}

const MainInfo = ({ data }: MainInfoprops) => {
  return (
    <div className={styles.mainInfo}>
      <h1 className={styles.title}>{data.companyName}</h1>
      <div className={styles.output}>
        <div className={styles.outputTest}>{renderObject(data)}</div>
      </div>
    </div>
  );
};

export default MainInfo;
