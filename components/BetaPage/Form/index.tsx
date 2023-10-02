"use client";
import { FormEvent, useReducer, useState } from "react";
// styles
import styles from "./Form.module.scss";
// components
import InputField from "@/components/Globals/InputField";
import Button from "@/components/Globals/Button";
// db
import { inputFields, initialState } from "@/utils/data/BetaPage/inputFields";
// icons
import { SuccessIcon } from "@/assets/icons/success";
// helper functions
import { formReducer } from "@/services/Beta/reducer";

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = Object.values(state).every(
      (field: any) => field.isValid
    );
    if (isFormValid) setSubmitSuccess(true);
  };

  const handleInputChange = (name: string, value: string) => {
    dispatch({ type: "UPDATE_INPUT", name, value });
  };

  const handleBackBtn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setSubmitSuccess(false);
    dispatch({ type: "RESET_STATE" });
  };

  return (
    <>
      {!submitSuccess ? (
        <div className={styles.form}>
          <span className={styles.title}>
            Запись на бета-тестирование сервиса
          </span>
          <form onSubmit={handleSubmitForm} className={styles.form}>
            {inputFields.map((field) => (
              <InputField
                {...field}
                value={state[field.name].value}
                onChange={handleInputChange}
                dispatch={dispatch}
                errorLabelIsActive={state[field.name].errorLabelIsActive}
                key={field.id}
              />
            ))}
            <div className={styles.agreementField}>
              <input type="checkbox" id="checkbox" required />
              <label htmlFor="checkbox" className={styles.text}>
                Я согласен на передачу персональный данных
              </label>
            </div>
            <Button
              type="submit"
              customStyles={styles.submitBtn}
              borderType="round"
              backgroundType="fill"
              colorType="success"
              disabled={
                !Object.values(state).every((field: any) => field.isValid)
              }
            >
              Отправить заявку
            </Button>
          </form>
        </div>
      ) : (
        <div className={styles.successBlock}>
          <SuccessIcon />
          <span className={styles.text}>Ваша заявка отправлена. Спасибо!</span>
          <a href="" onClick={handleBackBtn}>
            Назад
          </a>
        </div>
      )}
    </>
  );
};

export default Form;
