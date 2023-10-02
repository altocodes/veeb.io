// next
import { useRouter } from "next/navigation";
// styles
import styles from "./Output.module.scss";
// components
import Button from "@/components/Globals/Button";
// icons
import { ExportIcon } from "@/assets/icons/export";
import { ArrowRightIcon } from "@/assets/icons/arrowRight";
import { TrashIcon } from "@/assets/icons/trash";

interface ListProps {
  data: any;
  setData: (arg: []) => void;
}

const List = ({ data, setData }: ListProps) => {
  const router = useRouter();

  const removeCompany = (address: string) => {
    const websites: any = localStorage.getItem("websites");
    const filteredWesites = JSON.parse(websites).filter(
      (item: any) => item.address !== address
    );
    setData(filteredWesites);
    localStorage.setItem("websites", JSON.stringify(filteredWesites));
  };

  return (
    <div className={styles.list}>
      <div className={styles.heading}>
        <h1 className={styles.title}>Список компаний</h1>
        <span className={styles.subtitle}>Компаний в списке: 3</span>
      </div>
      <div className={styles.container}>
        <div className={styles.btnGroup}>
          <Button
            customStyles={styles.exportBtn}
            borderType="round"
            backgroundType="fill"
            colorType="success"
          >
            <ExportIcon /> Экспортировать все в Excel
          </Button>
          <Button
            customStyles={styles.searchBtn}
            borderType="round"
            backgroundType="outline"
            colorType="primary"
            onClick={() => router.push("/")}
          >
            К поиску <ArrowRightIcon />
          </Button>
        </div>
        <div className={styles.items}>
          {data?.map(
            (website: any, key: number) =>
              !website.error && (
                <div className={styles.item} key={key}>
                  <div className={styles.info}>
                    <span
                      className={styles.name}
                      onClick={() => router.push(`/result/${website.address}`)}
                    >
                      {website.name}
                    </span>
                    <span className={styles.count}>
                      {website.contactsCount} контактов
                    </span>
                  </div>
                  <span onClick={() => removeCompany(website.address)}>
                    <TrashIcon />
                  </span>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
