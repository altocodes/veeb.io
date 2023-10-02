//next
import { useRouter } from "next/navigation";
// styles
import styles from "./Table.module.scss";
// components
import Button from "@/components/Globals/Button";
// icons
import { ArrowRightIcon } from "@/assets/icons/arrowRight";
import { CheckIcon } from "@/assets/icons/check";

interface SuccessRowProps {
  address: string;
  contactsCount: string;
}

const SuccessRow = ({address, contactsCount} : SuccessRowProps) => {
  const router = useRouter();

  return (
    <>
      <td>{address}</td>
      <td>
        <span>
          <CheckIcon />
        </span>
      </td>
      <td>
        Общих: <strong>{contactsCount}</strong> <br />
        {/* Людей: <strong>10</strong> */}
      </td>
      <td>
        <Button
          customStyles={styles.checkBtn}
          borderType="default"
          backgroundType="outline"
          colorType="primary"
          onClick={() => router.push(`/result/${address}`)}
        >
          Посмотреть <ArrowRightIcon />
        </Button>
      </td>
    </>
  );
};

export default SuccessRow;
