interface CellProps {
  type: string;
  value: string;
}

const Cell = ({ type, value }: CellProps) => {
  switch (type) {
    case "text":
      return <span>{value}</span>;
    case "url":
      return (
        <a href={value} target="_blank" rel="noreferrer">
          {value}
        </a>
      );
    case "img":
      return <img src={value} alt="image" />;
    default:
      return <span>{value}</span>;
  }
};

export default Cell;
