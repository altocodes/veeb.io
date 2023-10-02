// styles
import styles from "./TemplateForm.module.scss";
// components
import Button from "@/components/Globals/Button";
// icons
import { CopyIcon } from "@/assets/icons/copy";

const TemplateForm = () => {
  return (
    <aside className={styles.sideForm}>
      <div className={styles.container}>
        <h3 className={styles.title}>Сообщение для отправки</h3>
        <div className={styles.inputGroup}>
          <label htmlFor="">Шаблон сообщения</label>
          <select className={styles.selectField}>
            <option value="Стандартный шаблон">Стандартный шаблон</option>
            <option value="Стандартный шаблон 2">Стандартный шаблон 2</option>
            <option value="Стандартный шаблон 3">Стандартный шаблон 3</option>
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="">Шаблон сообщения</label>
          <div className={styles.sampleField}>
            Здравствуйте, увидел, что вы работаете в ООО Рога и Копыта, обратил
            внимание, что у вас давно не обновлялся интернет-магазин. А мы как
            раз занимаемся разработкой на 1С-Битрикс, с кем можно обсудить
            данный вопрос?
          </div>
        </div>
        <div className={styles.btnGroup}>
          <Button
            customStyles={styles.copyBtn}
            borderType="round"
            backgroundType="fill"
            colorType="success"
          >
            <CopyIcon /> Копировать
          </Button>
          <Button
            customStyles={styles.createBtn}
            borderType="round"
            backgroundType="outline"
            colorType="primary"
          >
            Создать шаблон
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default TemplateForm;
