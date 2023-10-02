// next
import Image from "next/image";
// styles
import styles from "./Companies.module.scss";
// icons
import { AddIcon } from "@/assets/icons/add";
// components
import Button from "@/components/Globals/Button";

interface LogoProps {
  src: string;
  source: string;
}

interface MainProps {
  name: string;
  inn: string;
  orgn: string;
  source: string;
}

interface LegalEntityProps {
  main: MainProps;
  others: [];
}

interface CompaniesProps {
  url: string;
  logo: LogoProps;
  companyName: string;
  legalEntity: LegalEntityProps;
}

const Companies = ({ logo, companyName, legalEntity, url }: CompaniesProps) => {
  const logoSrc = logo?.src;
  companyName = companyName || "Название не указано";
  const inn = legalEntity?.main?.inn || "Инн не указан";
  const legalName = legalEntity?.main?.name || "Юр. название не указано";

  // TODO: refactor block and make input own components
  return (
    <div className={styles.companies}>
      <h1 className={styles.title}>Компания</h1>
      <div className={styles.companyData}>
        <div className={styles.logo}>
          {logoSrc && (
            <Image
              src={logoSrc}
              alt="logo"
              width={220}
              height={200}
              priority={true}
            />
          )}
        </div>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <div className={styles.inputField}>
              <a href="#" className={styles.value}>
                {companyName}
              </a>
            </div>
            <label className={styles.subTitle}>Основное название</label>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.inputField}>
              <a href="#" className={styles.value}>
                {url}
              </a>
            </div>
            <label className={styles.subTitle}>Основной сайт</label>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.inputField}>
              <a href="#" className={styles.value}>
                {inn}
              </a>
            </div>
            <label className={styles.subTitle}>Основной ИНН</label>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.inputField}>
              <a href="#" className={styles.value}>
                {legalName}
              </a>
            </div>
            <label className={styles.subTitle}>Юридическое название</label>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        К эспорту добавляются основные данные по компании и отмеченные данные в
        таблицах ниже. Вы можете отредактировать основные данные по компании
        перед экспортом.
      </div>
      <div className={styles.btnGroup}>
        <Button
          customStyles={styles.downloadBtn}
          borderType="round"
          backgroundType="fill"
          colorType="success"
        >
          <AddIcon /> Скачать в XLS
        </Button>
        <Button
          customStyles={styles.submitBtn}
          borderType="round"
          backgroundType="outline"
          colorType="secondary"
        >
          <AddIcon /> Отправить в CRM
        </Button>
      </div>
    </div>
  );
};

export default Companies;
