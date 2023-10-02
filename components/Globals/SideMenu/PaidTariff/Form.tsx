import { useReducer } from "react";
// styles
import styles from "./PaidTariff.module.scss";
// components
import InputField from "../../InputField";
import Button from "../../Button";
// db
import {
  paidTariffData,
  initialState,
  selections,
} from "@/utils/data/SideMenu/paidTariff";
// helper functions
import { formReducer } from "@/services/Beta/reducer";

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (name: string, value: string) => {
    dispatch({ type: "UPDATE_INPUT", name, value });
  };

  return (
    <form className={styles.form}>
      {paidTariffData.map((field) => (
        <InputField
          {...field}
          value={state[field.name].value}
          onChange={handleInputChange}
          dispatch={dispatch}
          errorLabelIsActive={state[field.name].errorLabelIsActive}
          key={field.id}
        />
      ))}
      <div className={styles.selectionBlock}>
        <label className={styles.label}>Как вам может помочь veebio? </label>
        <div className={styles.items}>
          {selections.map((item) => (
            <div className={styles.item} key={item.id}>
              <input
                type="checkbox"
                id={item.value}
                defaultChecked={item.checked}
              />
              <label htmlFor={item.value}>{item.value}</label>
            </div>
          ))}
        </div>
      </div>
      <Button
        type="submit"
        customStyles={styles.submitBtn}
        borderType="default"
        backgroundType="fill"
        colorType="secondary"
        disabled={!Object.values(state).every((field: any) => field.isValid)}
      >
        Отправить
      </Button>
    </form>
  );
};

export default Form;
