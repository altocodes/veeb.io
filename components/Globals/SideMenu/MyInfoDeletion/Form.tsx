"use client";
import { FormEvent, useEffect, useReducer, useState } from "react";
// styles
import styles from "./MyInfoDeletion.module.scss";
// components
import InputField from "../../InputField";
import TextareaField from "../../TextareaField";
import Button from "../../Button";
// db
import {
  initialState,
  myInfoDeletionData,
} from "@/utils/data/SideMenu/myInfoDeletion";
// helper functions
import { formReducer } from "@/services/SideMenu/MyInfoDeletion/reducer";

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (name: string, value: string) => {
    dispatch({ type: "UPDATE_INPUT", name, value });
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmitForm} className={styles.form}>
      {myInfoDeletionData.map((field) =>
        field.name !== "source" ? (
          <TextareaField
            {...field}
            name={field.name}
            value={state[field.name].value}
            onChange={handleInputChange}
            dispatch={dispatch}
            rows={5}
            errorLabelIsActive={state[field.name].errorLabelIsActive}
            placeholder="Каждый с новой строки"
            label="Контакты, которые вы хотите убрать"
            borderType="default"
            key={field.id}
          />
        ) : (
          <InputField
            {...field}
            onChange={handleInputChange}
            dispatch={dispatch}
            value={state[field.name].value}
            label="Источник"
            placeholder="Укажите конкретную страницу"
            errorLabelIsActive={state[field.name].errorLabelIsActive}
            key={field.id}
          />
        )
      )}
      <Button
        children="Отправить"
        borderType="default"
        backgroundType="fill"
        colorType="secondary"
        type="submit"
        disabled={!Object.values(state).every((field: any) => field.isValid)}
      />
    </form>
  );
};

export default Form;
