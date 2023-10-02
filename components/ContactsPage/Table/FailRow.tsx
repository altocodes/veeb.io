// styles
import styles from "./Table.module.scss";
// components
import Button from "@/components/Globals/Button";
// icons
import { CloseIcon } from "@/assets/icons/close";
import { TrashIcon } from "@/assets/icons/trash";

interface FailRowProps {
  address: string;
  error: string;
  removeCompany: (arg: string) => void;
}

const FailRow = ({ address, error, removeCompany }: FailRowProps) => {
  return (
    <>
      <td>{address}</td>
      <td>
        <span>
          <CloseIcon />
        </span>
      </td>
      <td>{error}</td>
      <td>
        <Button
          customStyles={styles.removeBtn}
          borderType="default"
          backgroundType="outline"
          colorType="danger"
          onClick={() => removeCompany(address)}
        >
          Удалить <TrashIcon />
        </Button>
      </td>
    </>
  );
};

export default FailRow;
