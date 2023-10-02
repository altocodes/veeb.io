import { useState } from "react";
// next
import { useRouter } from "next/navigation";
// styles
import styles from "./MultipleSearch.module.scss";
// components
import TextareaField from "@/components/Globals/TextareaField";
import Button from "@/components/Globals/Button";
import SideMenu from "@/components/Globals/SideMenu";
import PaidTariff from "@/components/Globals/SideMenu/PaidTariff";
// helper functions
import { validateWebsiteURL } from "@/services/validateWebsiteURL";

const MultipleSearch = () => {
  const [value, setValue] = useState<string>("");
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState<boolean>(false);
  const [isSearchDisabled, setSearchDisabled] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async () => {
    if (value.trim().length) {
      setSearchDisabled(true);
      const addresses = value.split("\n").filter((item) => item.length);
      const fetchAddresses = addresses.map(async (address) => {
        return await validateWebsiteURL(address, false);
      });

      await Promise.all(fetchAddresses).finally(() => {
        router.push("/contacts");
      });
    }
  };

  return (
    <>
      <TextareaField
        value={value}
        setValue={setValue}
        isSearchDisabled={isSearchDisabled}
        placeholder="Введите каждый сайт с новой строки"
        rows={10}
        borderType="round"
      />
      <div className={styles.submitGroup}>
        <span className={styles.description}>
          На бесплатном тарифе можно ввести до 10 сайтов. {" "}
          <em
            className={styles.payText}
            onClick={() => setSideMenuIsOpen(true)}
          >
            Оплатите сервис
          </em>
          , чтобы загружать без ограничений.
        </span>
        <Button
          customStyles={styles.submitBtn}
          borderType="round"
          colorType={
            !value.trim().length || isSearchDisabled ? "disable" : "secondary"
          }
          backgroundType="fill"
          onClick={handleSubmit}
          disabled={isSearchDisabled}
        >
          Отправить
        </Button>
      </div>
      <SideMenu
        children={<PaidTariff />}
        isOpen={sideMenuIsOpen}
        onClose={setSideMenuIsOpen}
      />
    </>
  );
};

export default MultipleSearch;
